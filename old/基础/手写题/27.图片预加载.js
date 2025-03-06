let imageAsync = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.οnlοad = () => {
      console.log(`图片请求成功，此处进行通用操作`);
      resolve(image);
    };
    img.οnerrοr = (err) => {
      console.log(`失败，此处进行失败的通用操作`);
      reject(err);
    };
    img.src = url;
  });
};

imageAsync("url")
  .then(() => {
    console.log("加载成功");
  })
  .catch((error) => {
    console.log("加载失败");
  });
