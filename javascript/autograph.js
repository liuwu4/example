let main = {
  parent: "",
  ele: "autograph",
  isDown: false,
  canvas: null,
  width: 600,
  height: 300,
  scale: window.devicePixelRatio,
  content: false,
  save: function () {
    const canvas = document.getElementById(this.ele);
    this.content = false;
    const base64 = canvas.toDataURL({
      format: "image/png",
      quality: 1,
      width: this.width,
      height: this.height,
    });
    // 这里是获取到的图片base64编码,这里只是个例子哈，要自行编码图片替换这里才能测试看到效果
    const imgUrl = base64;
    // 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
    if (window.navigator.msSaveOrOpenBlob) {
      var bstr = atob(imgUrl.split(",")[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      var blob = new Blob([u8arr]);
      window.navigator.msSaveOrOpenBlob(blob, "签名快照" + "." + "png");
    } else {
      // 这里就按照chrome等新版浏览器来处理
      const a = document.createElement("a");
      a.href = imgUrl;
      a.setAttribute("download", "签名快照");
      a.click();
    }
  },
  reset: function () {
    if (!this.canvas) {
      throw new Error("canva 不存在");
    }
    this.content = false;
    this.canvas.fillStyle = "white";
    this.canvas.fillRect(0, 0, this.width, this.height);
  },
  createBtn: function () {
    const div = document.createElement("div");
    div.setAttribute("id", "btns");
    const self = this;
    ["save", "reset"].forEach((item) => {
      const btn = document.createElement("div");
      btn.setAttribute("id", `btns-${item}`);
      btn.onclick = this[item].bind(self);
      btn.innerHTML = item;
      div.appendChild(btn);
    });
    return div;
  },
  createCanvas: function () {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", this.ele);
    canvas.setAttribute("width", this.width);
    canvas.setAttribute("height", this.height);
    canvas.style.border = "1px solid #9e9e9e";
    canvas.innerHTML = "<p>你的浏览器不支持此属性canvas</p>";
    const parent = document.getElementById(this.parent);
    parent.appendChild(canvas);
    parent.appendChild(this.createBtn());
    this.listenerEvent(canvas);
  },
  listenerEvent: function (canvas) {
    const ele = canvas;
    const context = ele.getContext("2d");
    this.canvas = context;
    ele.onmousedown = function (event) {
      this.isDown = true;
      context.beginPath();
      context.moveTo(event.offsetX, event.offsetY);
    };
    ele.onmousemove = function (event) {
      if (!this.isDown) {
        return;
      }
      this.content = true;
      context.lineTo(event.offsetX, event.offsetY);
      context.moveTo(event.offsetX, event.offsetY);
      context.closePath();
      context.fill();
      context.stroke();
    };
    ele.onmouseup = function () {
      this.isDown = false;
      context.closePath();
    };
    ele.onmouseout = function () {
      this.isDown = false;
      context.closePath();
    };
  },
  run: function (parentName, ele) {
    this.parent = parentName || "root";
    this.ele = ele || "autograph";
    this.createCanvas();
  },
};
main.run("app");
