# 每周总结可以写在这里
# CSS
@keyframe定义

```css
@keyframes mykf{
    from {background: red;}
    to {background: yellow;}
}

div {
    animation: mykf 5s infinite;
}
```



animation 使用



Animation

- animation-name	时间曲线
- animation-duration    动画时长
- animation-timing-function    动画时间曲线
- animation-delay   动画开始前的延迟
- animation-iteration-count   动画的播放次数
- animation-direction  动画的方向





Transition

- transition-property  要变化的属性
- transition-duration    变换的时长
- transition-timing-function   时间曲线
- transition-delay   延迟



Timing-function

- cubic-bezier

## 形状

- border

- box-shadow

- border-radius

- data uri + svg

  > data:imges/svg+xml,<svg ....> </svg>

# HTML
## 需要记忆

| quot “\&#34;” | amp "\&#38;" | lt "\&#60;" | gt "\&#62;" |
| ------------- | ------------ | ----------- | ----------- |
| \u0022        | \u0026       | \u003c      | \u003e      |

### 合法元素

- Element：<tagname>...</tagname>
- Text: text
- Comment: <!-- comments -->
- DocumentType: <!Doctype html>
- ProcessingInstruction: <?a1?>
- CDATA: <![CDATA[]]>

## DOM

- DOM Tree
- Events
- Range



## DOM Tree

### 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling



### 修改操作

- appendChild
- insertBefore
- removeChild
- replaceChild

 

> 1.当把一个元素进行二次插入时，第一次的插入会自动的被拆除
>
> 2.childNodes是一个实时变换的 liveingConnection，即使赋值给一个变量，它也不是js中的数组，会进行实时变换 



### 高级操作

- compareDocumentPosition 是一个用于比较两个节点中关系的函数
- contains 检查一个节点是否包含另一个节点的函数
- isEqualNode 检查两个节点是否完全相同
- isSameNode 检查两个节点是否时同一个节点，实际上在 JavaScript中可以用 “===”
- cloneNode 复制一个节点，如果传入参数为 true，则会连同子元素做深拷贝