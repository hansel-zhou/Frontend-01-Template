# 解析DOM
- 拆分文件
- 使用 FSM 解析 HTML
- 解析标签：开始标签，结束标签，自封闭
- 创建元素：在标签结束状态，提交标签 token
- 处理属性
- 构建 DOM 树 使用栈构建 DOM 树，遇到开始标签时创建元素并入栈，遇到结束标签时出栈，自封闭节点入栈后立即出栈，任何元素的父元素是它入栈前的栈顶
- 文本节点
# 解析 CSS
- 收集CSS规则
- 添加调用
- 获取父元素序列
- 拆分选择器
- 计算选择器与元素匹配
- 生成 computed属性
- 确定规则覆盖关系
参考链接:
- https://html.spec.whatwg.org/multipage/parsing.html#data-state
- https://html.spec.whatwg.org/multipage/parsing.html#tagopen-state
- https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inselect