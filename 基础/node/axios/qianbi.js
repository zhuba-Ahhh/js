const axios = require('axios');
const fs = require('fs');
// const path = require('path');
const URL = require('url');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

// 书籍目录
let url = 'https://www.23qb.com/book/220921/';

// Ajax请求
function getAjax(url) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            'responseType': "arraybuffer"
        }).then((response) => {
            // console.log(iconv.encodingExists("utf8"));
            str = iconv.decode(Buffer.from(response.data), 'gb2312');
            // html = iconv.encode(str, 'utf8').toString();
            // console.log(html)
            resolve(str); // 返回值为 response.data 就是网页数据
        }).catch((err) => {
            reject(err);
        })
    })
}

async function getUrl(url) {
    let response = await getAjax(url);
    return response;
}

async function getName(url) {
    let Body = await getUrl(url);
    let baseUrl = URL.parse(url).protocol + "//" + URL.parse(url).host + '/';
    const reg = /chapterList(.*?)lbxxyx_s/ismg,
        regName = /title" content="(.*?)"\/>/ismg,
        regAuthor = /authorarticle\.php\?author=(.*?)"/ismg;
    let name = regName.exec(Body)[1];
    let author = regAuthor.exec(Body)[1];
    full = name + '-' + author;
    fs.writeFile(__dirname + '/novles/' + full + '.txt', full + '\n', (error) => {
        if (error) {
            console.log(`创建失败：${error}`);
        }
        console.log(`${full}创建成功！`);
        console.log(name + "正在下载ing...");
    })
    let data = reg.exec(Body)[1];
    let $ = cheerio.load(data);
    let ans = [];
    $('a').each((index, element) => {
        let a = baseUrl + ($(element).attr('href'));
        let name = ($(element)).text().toString();
        ans.push({
            index,
            name,
            a
        });
    })
    return ans;
}


async function getText(url) {
    const Body = await getUrl(url); // 注意此处 获取的就是html，网页数据
    let reg = /<script>toolbarm\(\);<\/script><\/dt>(.*?)铅笔小说 23qb.com/ismg,
        regTitle = /<title>想要成为影之实力者-(.*?)_铅笔小说<\/title>/isg;
    let data = reg.exec(Body)[1],
        title = regTitle.exec(Body)[1];
    // console.log(title);
    return data;
}

async function getNum(url, result) {
    let ans = await getName(url);

    async function writeFile(url) {
        let result = [];
        await getNum(url, result);
        console.log(result);
    }
}
writeFile(url);