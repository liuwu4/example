var startLeft = 0;
var startTop = 0;
function main() {
  var drag = document.getElementById("drag");
  var list = document.createElement("div");
  list.setAttribute("class", "list");
  list.onmousedown = function () {
    var position = list.getBoundingClientRect();
    startLeft = position.left;
    startTop = position.top;
  };

  drag.onmousemove = function (event) {
    const { x, y, offsetX, offsetY, pageX, pageY, clientX, clientY } = event;

    if (startLeft && startTop) {
      list.style.position = "absolute";
      console.log(startLeft, startTop, {
        x,
        y,
        offsetX,
        offsetY,
      });
      console.log("skjfsak");
    }
  };
  list.onmouseout = function () {
    startLeft = 0;
    startTop = 0;
  };
  list.onmouseup = function () {
    startLeft = 0;
    startTop = 0;
  };
  list.innerText = 1234;
  drag.appendChild(list);
}

main();
