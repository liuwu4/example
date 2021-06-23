var startLeft = 0;
var startTop = 0;
var cursorLeft = 0;
var cursorTop = 0;
function main() {
  var drag = document.getElementById("drag");
  generateNode(drag);
}

/**
 * 生成多个不同位置的节点
 * @param {*} parentNode 父节点
 */
function generateNode(parentNode) {
  for (var i = 0; i < 3; i++) {
    var div = document.createElement("div");
    div.innerText = i;
    div.setAttribute("class", "list list" + i);
    div.setAttribute("onselectstart", "return false;");
    div.onmousedown = (function (div) {
      return function (event) {
        var position = div.getBoundingClientRect();
        startLeft = position.left;
        startTop = position.top;
        cursorLeft = event.clientX;
        cursorTop = event.clientY;
        var clone = div.cloneNode(true);
        clone.innerText = div.innerText;
        clone.style.position = "absolute";
        clone.style.left = startLeft + "px";
        clone.style.top = startTop + "px";
        drag.appendChild(clone);
        moveDOM(clone, div);
      };
    })(div);
    parentNode.appendChild(div);
  }
}

/**
 * copy可移动节点
 * @param {htmlDom} clone
 */
function moveDOM(clone, soruceNode) {
  clone.onmousemove = function (event) {
    soruceNode.setAttribute("class", "source");
    if (startLeft && startTop) {
      clone.style.cursor = "move";
      var positionLeft = startLeft + (event.clientX - cursorLeft);
      var positionTop = startTop + (event.clientY - cursorTop);
      if (
        drag.offsetLeft > positionLeft ||
        !(
          positionLeft + clone.getBoundingClientRect().width <
          drag.offsetLeft + drag.getBoundingClientRect().width
        ) ||
        drag.offsetTop > positionTop ||
        clone.getBoundingClientRect().height + positionTop >
          drag.getBoundingClientRect().height + drag.offsetTop
      ) {
        positionLeft = startLeft;
        positionTop = startTop;
        startLeft = 0;
        startTop = 0;
        soruceNode.setAttribute("class", clone.getAttribute("class"));
        clone.remove();
      }
      clone.style.left = positionLeft + "px";
      clone.style.top = positionTop + "px";
      exchangeStyle(clone);
    }
  };
  clone.onmouseout = function (event) {
    clean(event.target, event);
  };
  clone.onmouseup = function (event) {
    clean(event.target, event);
  };
}
/**
 * 还原初始值
 * @param {*} target
 * @param {*} event
 */
function clean(target, event) {
  target.style.cursor = "default";
  startLeft = 0;
  startTop = 0;
  cursorLeft = 0;
  cursorTop = 0;
  exchange(target, event);
}
/**
 * 移动到可交换对象上是改变样式
 * @param {*} moveTarget 移动对象
 */
function exchangeStyle(moveTarget) {
  var startPosition = moveTarget.getBoundingClientRect();
  var all = document.querySelectorAll(".list");
  moveTarget.style.backgroundColor = "#b23";
  for (var i = 0; i < all.length; i++) {
    var position = all[i].getBoundingClientRect();
    if (moveTarget !== all[i]) {
      all[i].style.backgroundColor = "";
      /**
       * 移动的元素必须宽高都必须大于一半在目标元素中才能交换
       * |----------80----------|
       * |**********************|___
       * |**                  **| |
       * |**                  **| 20
       * |**********************|_|_
       * |----------------------|
       */
      if (
        all[i].offsetLeft + startPosition.width / 2 <
          moveTarget.offsetLeft + startPosition.width &&
        all[i].offsetLeft + position.width + startPosition.width / 2 >
          moveTarget.offsetLeft + startPosition.width &&
        all[i].offsetTop + startPosition.height / 2 <
          moveTarget.offsetTop + startPosition.height &&
        all[i].offsetTop + position.height + startPosition.height / 2 >
          moveTarget.offsetTop + startPosition.height
      ) {
        all[i].style.backgroundColor = "#ffa39e";
      }
    }
  }
}

/**
 * 交换
 * @param {*} start 开始时的target
 * @param {*} event 结束时事件的event
 */
function exchange(start) {
  var startPosition = start.getBoundingClientRect();
  var all = document.querySelectorAll(".list");
  for (var i = 0; i < all.length; i++) {
    var position = all[i].getBoundingClientRect();
    if (
      all[i].offsetLeft + startPosition.width / 2 <
        start.offsetLeft + startPosition.width &&
      all[i].offsetLeft + position.width + startPosition.width / 2 >
        start.offsetLeft + startPosition.width &&
      all[i].offsetTop + startPosition.height / 2 <
        start.offsetTop + startPosition.height &&
      all[i].offsetTop + position.height + startPosition.height / 2 >
        start.offsetTop + startPosition.height
    ) {
      resetText(all[i], start);
    }
  }
}

/**
 * 对换目标值
 * @param {*} currentTarget 对换目标
 * @param {*} moveTarget 被对换目标
 */
function resetText(currentTarget, moveTarget) {
  var tmp = moveTarget.innerText;
  moveTarget.innerText = currentTarget.innerText;
  currentTarget.innerText = tmp;
  var source = document.querySelector(".source");
  source.innerText = moveTarget.innerText;
  source.setAttribute("class", moveTarget.getAttribute("class"));
  currentTarget.removeAttribute("style");
  moveTarget.remove();
}

main();
