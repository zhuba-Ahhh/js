function versionCompare(version1, version2) {
  let change = function (version) {
    let v = version.split(".");
    v[0] += '.';
    return parseFloat(v.join(""))
  }

  // let v1 = version1.split(".");
  // let v2 = version2.split(".");
  // v1[0] = v1[0] + '.'
  // v2[0] = v2[0] + '.'

  // v1 = parseFloat(v1.join(""))
  // v2 = parseFloat(v2.join(""))

  // console.log(v1, v2);
  let v1 = change(version1);
  let v2 = change(version2);
  if (v1 == v2) return 0;
  return v1 > v2 ? -1 : 1;
}

// console.log(versionCompare('1.0', '1.0.1'));
// console.log(versionCompare('1.0', '1.0.0.0'));
// console.log(versionCompare('2.0', '1.0.1'));

Function.prototype.a = () => alert(1);
Object.prototype.b = () => alert(2);

function A() {};
var a = new A();
a.a();
a.b();