/**
 * 获取css设置的属性值
 * @param {*} ele 元素节点
 * @param {*} pseudo 选择伪类(默认不需要null)
 * @param {*} attr css 属性名称
 */
function styles(ele, attr, pseudo) {
  return getComputedStyle(ele, pseudo || null)[attr];
}
