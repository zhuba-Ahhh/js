const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('*', function (req, res) {
  console.log(req);
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})