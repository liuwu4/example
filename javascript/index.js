/*
 * @Author: yj
 * @Date: 2021-04-26 11:45:53
 * @LastEditTime: 2021-06-22 13:56:21
 * @Description: js 测试
 */

const shape = {
  radius: 10,
  fn: (function () {
    return () => {
      console.log(this.radius);
    };
  })(),
  path: () => {
    console.log(Math.PI, this);
  },
};

// const a = {};
// const b = { key: "123" };
// const c = { key: "mm" };
// a[b] = "132";
// console.log(a[b], {} + "b");
function run() {}
const Run = new run();

console.log("----", Run, Run.__proto__ == run.prototype);
console.log("function:", run.prototype);
