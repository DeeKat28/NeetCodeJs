var encode = function (strs) {
  let str = "";
  for (let i = 0; i < strs.length; i++) {
    str += strs[i].length + "#" + strs[i];
  }
  return str;
};

var decode = function (str) {
  let strs = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] != "#") {
      j++;
    }
    let len = parseInt(str.substring(i, j));
    strs.push(str.substring(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  return strs;
};

let s = encode(["lint", "code", "love", "you"]);
console.log(s);
console.log(decode(s));

s = encode(["we", "say", ":", "yes"]);
console.log(s);
console.log(decode(s));
