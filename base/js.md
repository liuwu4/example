### 监听事件(`addEventListener`)

- 事件执行顺序

> 捕获阶段-->目标阶段-->冒泡阶段

```js
// IE7、IE8 不支持 addEventListener 支持 attachEvent、detachEvent。
// firefox、chrome、IE>=9、safari、opera 支持addEventListener
element.addEventListener(eventType, callback, flag);
// eventType: 事件名称
// callback: 执行js函数
// flag: true: 捕获阶段执行, false: 冒泡阶段执行（默认）参数可选
```
