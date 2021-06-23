### 原型(`prototype`)

> 只有函数对象具有`prototype`
>
> >

### 原型链(`__proto__`)

> 只有普通对象具有`__proto__`  
> 隐式原型`__proto__` 默认指向构造函数的显式原型 `prototype` 属性

### 作用域链(先局部查找，没查找到则向上查找最终找到`window`)

> 分析阶段
>
> > 分析函数参数  
> > 分析变量声明  
> > 分析函数声明  
> > 创建活动对象（`AO`）  
> > 找函数形参和函数内变量声明，将形参名和变量名作为 AO 对象的属性名，值为 undefined；  
> > 将实参值和形参统一，实参值赋给形参；  
> > 在函数体里面找函数声明，值赋予函数体。

> 执行阶段

### 构造函数

### 闭包

### 函数（表达式｜声明）

> 函数声明提前优先于变量声明提前

- 写法不同
- 函数表达式可以直接在后面加括号执行，而函数声明不可以。
- 函数表达式可以被提前解析出来

### 绑定事件的方式

- `HTML` 事件处理程序：直接在 `html` 的标签中添加事件属性。

  > `<div onClick = "fun()"></div>`

- `DOM1` 级事件处理程序

  > `var container = document.getElementById("container");`  
  > `container.onclick = function() {}`

- `DOM2` 级事件处理程序：`addEventListener()`添加事件
  > `var oBox = document.getElementById("container");`  
  > `oBox.addEventListener("click",fn(),false);`  
  > `oBox.removeEventListener("click",fn(),false);`  
  > `function fn(){`  
  > ` // ....`  
  > `}`

### `getXXXByXXX` | `querySelector` 区别

> `getElementsBy` 系列则属于 `W3C` 的 `DOM` 规范"。
>
> > 获取的是动态集合。(获取标签后动态添加节点，会造成死循环)

> `querySelector` 属于 `W3C` 中的 `Selectors API` 规范。
>
> > 获取的是静态集合。(获取节点后与 `html` 在无关系。不会造成死循环)  
> > 仅仅返回匹配指定选择器的第一个元素。

## `React`

### 什么是`React Hooks`

> 它们允许在不编写类的情况下使用 `state` 和其他 `React` 特性。`使用 Hooks，可以从组件中提取有状态逻辑，这样就可以独立地测试和重用它。` Hooks 允许咱们在不改变组件层次结构的情况下重用有状态逻辑，这样在许多组件之间或与社区共享 `Hooks` 变得很容易

### 受控组件 ｜ 非受控组件

- 受控组件:
  - 没有维持自己的状态
  - 数据由父组件控制
  - 通过 props 获取当前值，然后通过回调通知更改
- 非受控组件:
  - 保持着自己的状态
  - 数据由 DOM 控制
  - Refs 用于获取其当前值

### `setState`(同步｜异步)

> 当执行 `setState()`的时候，会将需要更新的 `state` 合并之后放入状态队列，而不会立即更新 `this.state`

```js
// 1 由 React 控制的事件处理过程 setState 不会同步更新 this.state！
function abd() {
  // data = 0;
  this.setState({
    data: data + 1,
  });
  this.setState({
    data: data + 1,
  });
  // 多次调用setState会进行合并
  // data 1
}
// 2 在 React 控制之外的情况， setState 会同步更新 this.state！
function abd() {
  // data = 0;
  this.setState({
    data: data + 1,
  });
  this.setState({
    data: data + 1,
  });
  // data 1
  setTimeout(()={
    this.setState({
      data: data + 1,
    });
    // data 2
    this.setState({
      data: data + 1,
    });
    // data 3
  },0);
}
```

### 更新 `setState` 的方式

> `callback` 是可选的回调函数，它在状态更新，界面更新后才被调用

> 对象(函数式简写)

```js
this.setState({}, [callback]);
```

> 函数式

```js
this.setState(() => {
  return {};
}, [callback]);
```

> 直接修改。其他不在对象上的 `state` 将不会被放入状态队列中，当下次调用 `setState()`并对状态队列进行合并时，直接造成了 `state` 丢失。

```js
this.state.key = this.state.key; // 不会直接render
```

## `typescript`

### `typeof` | `interface` 区别

1. 相同

   - 描述一个对象或者函数
   - 都允许拓展 语法不同
     - `typeof 使用 & `
     - `interface 使用 extends`

2. 不同

   - `type` 可以声明基本类型别名，联合类型，元组等类型
   - `type` 语句中还可以使用 `typeof` 获取实例的 类型进行赋值
   - `interface` 能够声明合并

   ```js
   interface user {
     name: string;
   }
   interface user {
   name: string;
   }
   //
   user{
     name: string;
     name: string;
   }
   ```

### 泛型

> 提高代码的复用性  
> 提升代码健壮性

### `css`

### `display` 值

> `block` | `inline` | `inline-block` | `list-item` | `table` | `inline-table`

## Redux

### 执行流程

- 视图(`view`)发送 `action`
- 容器(`store`)自动调用 `reducer` 传入当前 `state` 和新的 `action`, 并返回新`state`
- `state`变化调用监听函数。 通知视图(`view`)更新

### 类组件 ｜ 函数式组件

1. 函数组件只是一个普通的 JavaScript 函数，它可以返回 JSX。类组件是一个继承 React.Component 的 JavaScript 类
2. 组件传参

   - 函数组件， 组件参数作为函数的参数来传递的。
   - 类组件， 需要 this 来引用这个参数。

3. ## 生命周期
   - `useEffect` hook 来替代 `componentDidMount`
   - 类组件 `componentDidMount` 在第一次渲染完成后就会被调用
