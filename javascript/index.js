/*
 * @Author: yj
 * @Date: 2021-04-26 11:45:53
 * @LastEditTime: 2021-04-26 17:04:46
 * @Description: js 测试
 */

function add(a, b) {
  return a + b;
}

function curry(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  if (args.length === fn.length) {
    args = [fn.apply(null, args)];
  }
  function wrapperCurry() {
    const currentArgs = Array.prototype.slice.call(arguments);
    const mergeArgs = args.concat(currentArgs);
    let result = fn.apply(null, mergeArgs);
    if (currentArgs.length === fn.length) {
      const tmp = fn.apply(null, currentArgs);
      result = fn.apply(null, args.concat(tmp));
    }
    return curry.apply(this, [fn].concat(result));
  }
  wrapperCurry.toString = function () {
    return args.toString();
  };
  return wrapperCurry;
}
const execute = curry(add, 1, 1);
const result = execute(3)(4, 5)(2);
console.log('----:', result);
console.log(execute(0)(2)(3));
