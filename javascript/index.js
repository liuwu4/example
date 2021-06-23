/*
 * @Author: yj
 * @Date: 2021-04-26 11:45:53
 * @LastEditTime: 2021-06-23 21:01:21
 * @Description: js 测试
 */

function* run() {
  yield 1;
  yield 2;
}

async function testAsync() {
  await 1;
}

const test = run();

console.log(test.next(), test.next());

console.log(testAsync());
