console.log(undefined);

const a = [1];
const b = { a };
const c = { a };

c.a.push(2);
b.a = [3];
// a: [1, 2]
// b: [3]
// c [1, 2]
const result = ("b" + "a" + +"a" + "a").toLowerCase(); // banana
// 新年倒计时
function run() {
  var d = new Date();
  //2016-2-8 是春节
  var d2 = new Date(2022, 1, 8);
  var c = 60 * 60 * 24 * 1000;
  var days = parseInt((d2.getTime() - d.getTime()) / c);
  alert(days);
}

console.log(typeof undefined == undefined, typeof null == null);
