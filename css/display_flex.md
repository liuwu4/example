## `flex` 布局（弹性布局）

- **作用在父级容器**

### flex-direction（主轴方向）

- `row` 水平（默认）
- `column` 垂直

### justify-content （控制主轴）

- `flex-start`:左对齐
- `center`: 居中
- `flex-end`: 右对齐
- `space-between`: 两端对齐，子元素之间间隙相等
- `space-around`: 子元素左右间隙相等，**但子元素之间的间隙比起始元素与边框的距离多一倍**
- `space-evenly`: 子元素平均分布，间隙相等

### flex-wrap （是否换行）

> 默认不换行`nowrap`

### `flex-flow`

- 语法:`flex-flow: <flex-direction> || <flex-wrap>` 可以单独设置任意一个，顺序任意

> `flex-direction`和`flex-wrap`的简写默认`row nowrap`

### `align-items` （控制次轴）

- `stretch`:（默认） 未设置高度的元素， 则占满父级高度
- `flex-start`: 起点对齐
- `flex-end`: 终点对齐
- `center`: 居中对齐
- `baseline`: 根据子容器第一行内容对齐

###

- **作用在子容器**

### `order`

> 排序: `order: number` 升序排列

### `flex-grow`

> 放大比例（默认： 0，不放大）自动填充父级剩余空间

### `flex-shrink`

> 缩小比例（默认： 0， 不缩小）父级容器空间不足子容器缩小

### `flex-basis`

> 分配多余空间时，占据固定大小不受`flex-grow`影响

### `flex`

- `flex: flex-grow flex-shink flex-basis`
- - 默认`0 0 auto`（快捷方式 `auto=(1 1 auot)` `none=(0 0 auto)`）
    > `flex-shink` `flex-basis`可以忽略

> flex 是`flex-grow` `flex-shrink` `felx-basis`的简写

### `align-self`

- `flex-start`: 起点
- `flex-end`: 终点
- `center`: 居中
- `baseline`: 根据子容器第一行内容对齐
- `stretch`: 填充父容器空间
