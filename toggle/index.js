var startLeft = 0;
var startTop = 0;
var cursorLeft = 0;
var cursorTop = 0;
function main() {
  var drag = document.getElementById("drag");
  var list = document.createElement("div");
  list.setAttribute("class", "list");
  list.setAttribute('onselectstart', "return false;");
  list.onmousedown = function (event) {
    var position = list.getBoundingClientRect();
    startLeft = position.left;
    startTop = position.top;
    cursorLeft = event.clientX;
    cursorTop = event.clientY;
  };
  list.onmousemove = function (event) {
    if (startLeft && startTop) {
      list.style.cursor = 'move';
      var positionLeft = startLeft + (event.clientX - cursorLeft);
      var positionTop = startTop + (event.clientY - cursorTop);
      if (drag.offsetLeft > positionLeft || !(positionLeft + list.getBoundingClientRect().width < drag.offsetLeft + drag.getBoundingClientRect().width)) {
        positionLeft = startLeft;
        positionTop = startTop;
        startLeft = 0;
        startTop = 0;
      }
      if (drag.offsetTop > positionTop || (list.getBoundingClientRect().height + positionTop > drag.getBoundingClientRect().height + drag.offsetTop)) {
        positionLeft = startLeft;
        positionTop = startTop;
        startLeft = 0;
        startTop = 0;
      }
      list.style.position = "absolute";
      list.style.left = positionLeft + "px";
      list.style.top = positionTop + "px";
    }
  };
  list.onmouseout = function () {
    list.style.cursor = 'default';
    startLeft = 0;
    startTop = 0;
  };
  list.onmouseup = function () {
    list.style.cursor = 'default';
    startLeft = 0;
    startTop = 0;
  };
  list.innerText = 1234;
  drag.appendChild(list);
}

main();
