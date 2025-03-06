// input: str: "1234567,123456,1234567,1234567890,123456789,1,2,3,4,5,6"
// 	   length: 14
// output: [
// 	"1234567,123456",
// 	"1234567",
// 	"1234567890",
// 	"123456789,1,2",
// 	"3,4,5,6",
// ]

// 大致意思，将str分割，每个片段不能超过length, 连成片的数字不能分开，逗号也算长度
let str = "1234567,123456,1234567,1234567890,123456789,1,2,3,4,5,6",
  length = 14;

const spliceStr = (str, length) => {
  const res = [];
  const arr = str.split(","),
    l = arr.length;
  let currSegment = "";
  for (let i = 0; i < l; i++) {
    const segment = arr[i];
    if (currSegment.length + segment.length < length) {
      if (currSegment !== "") {
        currSegment += ",";
      }
      currSegment += segment;
    } else {
      res.push(currSegment);
      currSegment = segment;
    }
  }
  if (currSegment !== "") {
    res.push(currSegment);
  }

  return res;
};

console.log(spliceStr(str, length));
