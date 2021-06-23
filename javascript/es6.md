### html 中 ie 支持 es6 语法

```html
<div></div>
<!-- 导入es6语法浏览器支持文件 -->
<script type="text/javascript" src="es6-support.js"></script>
<!-- type: 类型必须为text/babel才能解析 -->
<script type="text/babel" src="filename.js"></script>
```

```js
// filename.js
const say = () => {
  console.log('123');
};
say();
```
