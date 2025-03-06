let fs = require('fs');

fs.readFile("./hello.txt", {
    flag: "r",
    encoding: "utf-8"
}, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        fsEvent.emit('fileSuccess', data);
    }
});

let fsEvent = {
    event: {
        // fileSuccess: [],
    },
    on: function (eventName, eventFn) {
        if (this.event[eventName]) {
            this.event[eventName].push(eventFn);
        } else {
            this.event[eventName] = [];
            this.event[eventName].push(eventFn);
        }
    },
    emit: function (eventName, eventMsg) {
        if (this.event[eventName]) {
            this.event[eventName].forEach(itemFn => {
                itemFn(eventMsg);
            });
        }
    }
}

fsEvent.on('fileSuccess', function () {
    console.log("1");
});
fsEvent.on('fileSuccess', function () {
    console.log("2");
});
fsEvent.on('fileSuccess', function () {
    console.log("3");
});

let url = require('url');
let test = 'https://haokan.baidu.com/v?pd=wisenatural&vid=7331244819429260573';
let test1 = './www.zhuba';

console.log(url.parse(test));
let t1 = url.resolve('https://haokan.baidu.com/v?pd=wisenatural', '&vid=7331244819429260573');
console.log();