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
  for (var i = 0; i < 2; i++) {
    var div = document.createElement('div');
    div.innerText = i;
    div.setAttribute('class', 'list list' + i);
    div.setAttribute('onselectstart', "return false;");
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
      }
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
    soruceNode.setAttribute('class', 'source');
    if (startLeft && startTop) {
      clone.style.cursor = 'move';
      var positionLeft = startLeft + (event.clientX - cursorLeft);
      var positionTop = startTop + (event.clientY - cursorTop);
      if (drag.offsetLeft > positionLeft
        || !(positionLeft + clone.getBoundingClientRect().width < drag.offsetLeft + drag.getBoundingClientRect().width)
        || drag.offsetTop > positionTop
        || (clone.getBoundingClientRect().height + positionTop > drag.getBoundingClientRect().height + drag.offsetTop)
      ) {
        positionLeft = startLeft;
        positionTop = startTop;
        startLeft = 0;
        startTop = 0;
        soruceNode.setAttribute('class', clone.getAttribute('class'));
        clone.remove();
      }
      clone.style.left = positionLeft + "px";
      clone.style.top = positionTop + "px";
    }
  };
  clone.onmouseout = function (event) {
    clone.style.cursor = 'default';
    startLeft = 0;
    startTop = 0;
    soruceNode.setAttribute('class', clone.getAttribute('class'));
    clone.remove();
  };
  clone.onmouseup = function (event) {
    exchange(clone, event);
    clone.style.cursor = 'default';
    startLeft = 0;
    startTop = 0;
    soruceNode.setAttribute('class', clone.getAttribute('class'));
    clone.remove();
  };
}

/**
 * 交换
 * @param {*} start 开始时的target
 * @param {*} event 结束时事件的event
 */
function exchange(start, event) {
  var postion = start.getBoundingClientRect();
  // console.log(start.offsetLeft, event.clientX);
}

main();
