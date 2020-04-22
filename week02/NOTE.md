# 语言
人类语言为非形式语言

计算机语言需要严谨性，故按（乔姆斯基谱系）分为三个类型的三层次形式语言
    第一层级 
        0型 无限制文法
    第二层级
        1型 上下文相关文法 （词在不同的位置，含义不同）
        2型 上下文无关文法  （词放在不同的位置，含义相同）大部分计算机语言在主体上属于上下文无关文法。javascript在某些小点上违反上下文无关文法，进入上下文相关。
    第三层
        3型 正则文法 能用正则表达式解析的文法，对表达能力的限制最强

    现代计算机语言，编译器，先用正则文法将文本变为单个的词，再将词作为输入流，再做语法分析

# 产生式（BNF）<巴克斯诺尔范式>通过范式来定义计算机语言，计算机语言的定义。计算机语言的目的是用于与机器沟通

    学习DNF的目的是用以能够看得懂且能够理解 定义编程语言的文档。

# 定义简单语言

    “a”

    "b"

    <!-- 此语言定义 若干个a或若干个b -->
    <Program>:= ("a"+ | "b"+)+    
    ababbbbbaaa


    <!-- 一位整数定义 -->
    <Number>
    <Number>:= “0” | “1” | “2” | “3” | “4” | “5” | “6” | “7” | “8” | “9”
    <!-- 十位整数定义 -->
    <DecimalNumber> = “0” | ((“1” | “2” | “3” | “4” | “5” | “6” | “7” | “8” | “9" <Number*>)


    <!-- 定义四则运算 -->
    <Number> = "0" | "1" | "2" | ..... | "9"

    <DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )

    <PrimaryExpression> = <DecimalNumber> | "("<LogicalExpression>")"

    <MultiplicativeExpression> = <PrimaryExpression> | <MultiplicativeExpression> "*" <PrimaryExpression> | <MultiplicativeExpression> "/" <PrimaryExpression>

    <AdditiveExpression> = <MultiplicativeExpression> | <AdditiveExpression> "+" <MultiplicativeExpression> | <AdditiveExpression> "-" <MultiplicativeExpression>

    <LogicalExpression> = <AdditiveExpression> | <LogicalExpression> "||" <AdditiveExpression> | <LogicalExpression> "&&" <AdditiveExpression>

# Type
        Number
            浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
        String
                支持码点: U+0000 ~ U+10FFFF， 但推荐只使用 U+0000 ~ U+FFFF （BMP）
                UCS-2 用 2 个字节表示 BMP 的码点
                UCS-4 用 4 个字节表示码点'\u{10000}'.length // 2
            存储方式: UTF8/UTF16
        Boolean
        Null
        Undifined
        Symbol




