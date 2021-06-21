function editorFocus(event) {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  console.log("fds", event.target);
  selection.extend(event.target, 2);
}

/**
 * 创建富文本点击器节点
 * @param {*} name 富文本便捷器id
 * @param {*} styles
 * @returns
 */
function createNode(name, styles) {
  const div = document.createElement("div");
  div.setAttribute("id", name);
  div.onclick = editorFocus;
  div.innerHTML = "<div>12345678</div>";
  div.setAttribute("contenteditable", true);
  Object.keys(styles).forEach((item) => {
    div.style[item] = styles[item];
  });
  return div;
}
/**
 * 富文本编辑器标题类容
 * @param {*} item
 * @returns  HTMLElement
 */
function titles(item) {
  const div = document.createElement("div");
  div.setAttribute("class", `title_item title_${item.type}`);
  div.onclick = function () {
    console.log(item.type);
  };
  const i = document.createElement("i");
  i.setAttribute("class", `iconfont ${item.icon}`);
  div.appendChild(i);
  return div;
}
/**
 * 富文本编辑器标题选项
 * @param {*} config 标题类容
 * @returns HTMlElement
 */
function createTitle(config) {
  const div = document.createElement("div");
  const attr = {
    id: "editor_title",
  };
  Object.keys(attr).forEach((item) => {
    div.setAttribute(item, attr[item]);
  });
  config.forEach((item) => {
    div.appendChild(titles(item));
  });
  return div;
}

/**
 * 构造函数构获取用
 * 户传递参数
 * @param {*} nodeName 插入父节点名称id
 */
function Editor(nodeName) {
  if (!nodeName) {
    throw new Error("构造函数需要传递父节点名称");
  }

  this.parentName = nodeName;
  this.name = "h_editor";
  this.config = [
    {
      type: "ul",
      icon: "editor-outdent",
      tips: "列表",
    },
    {
      type: "img",
      icon: "editor-image",
      tips: "插入图片",
    },
    {
      type: "colors",
      icon: "editor-font-color",
      tips: "字体颜色",
    },
  ].map((item) => ({ ...item, icon: `icon-${item.icon}` }));
  this.styles = {
    height: "200px",
    width: "300px",
    outline: "none",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "5px",
    overflowY: "auto",
  };
}

Editor.prototype.run = function () {
  const parent = document.getElementById(`${this.parentName}`);
  if (!parent) {
    throw new Error(`${parent}节点不存在`);
  }
  parent.appendChild(createTitle(this.config));
  parent.appendChild(createNode(this.name, this.styles));
};
const editor = new Editor("editor");
// editor.run();
