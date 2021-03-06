# JavaScript中特殊的对象

+ Function Object
    - [[call]] 视为函数Function
    - [[Construct]] 可以被new 操作符调用，根据new的规则返回对象。

+ Array Object
    - [[DefineOwnProperty]]
        * Property == length
        设置对象的length属性，根据length的变化对对象进行操作
        newLength > length 用空扩充数组
        newLength < length 截取数组

+ String Object
    string的length是不可写不可配的。

+ Arguments Object
    [[callee]] 视为函数参数对对象，伪数组 caller

+ Object
    [[Get]] property被访问时调用 get
    [[Set]] property被赋值时调用 set
    [[GetPrototypeOf]] 对应getPrototypeOf方法 获取对象原型
    [[SetPrototypeOf]] 对应setPrototypeOf方法 设置对象原型
    [[GetOwnProperty]] getOwnPropertyDescriptor 获取对象私有属性的描述列表
    [[HasProperty]] hasOwnProperty 私有属性判断
    [[IsExtensible]] isExtensible对象是否可扩展
    [[PreventExtensions]] preventExtension控制对象是否可以添加属性
    [[DefineOwnProperty]] defineProperty 定义对象属性
    [[Delete]] delete 操作符
    [[OwnPropertyKeys]] Object.keys() Object.entries() Object.values()
    [[Call]] 能够调用call

+ Module Namespece
    [[Module]] 视为一个引入的模块
    [[Exports]] 视为一个导出的模块

# Left Handside & Right Handside
    Left Handside (赋值操作的目标) Reference 引用
    Right Handside (赋值操作的来源)

+ Left Handside
    运算符
    表达式树结构 => 表达式优先级
    - Member

```
    a.b
    a[b]
    foo`string` // styles-compontents
    super.b
    super[b]
    new.target // 判断函数是否是new调用
    new Foo()
```



+ New
    new Foo
+ Call
```
    foo()
    super()
    foo()[b]
    foo().b
    foo()`string`
```

+ Right Handside
    - Update
```
    a++
    a--
    --a
    ++a
```

+ Unary
```
    delete a.b
    void 0; // 生成undefined
    typeof a
    +a
    -a
    ~a
    !a // !!a 转换为boolean值
    await a
```

+ Exponental
    **

+ Multiplicative
    */ %

+ Additive

+ Shift
    << >> >>>

+ Relationship
    < > <= >= instanceof in

+ Equality
```
==
!=
===
!==
```

+ Bitwise 位运算
    & ^ |

+ Logical
    && ||
    短路逻辑
```
a && b  a为true时，b才会执行
a || b  a或b为true，a或b才会执行
```

+ Conditional
    ? :

# 类型转换

+ 基础类型
    - Undefined
    - Boolean
    - String
    -  Number
    - Null
    - Symbol
    - BigInt
    - Object

+ 装箱拆箱
    装箱：基础类型 => 包装类型 Boolean String Boolean ...
    拆箱：包装类型(Object) => 基础类型, 会优先调用valueOf toString toPrimitive进行转换

+ 类型的判断
    - typeof
    - Obejct.prototype.toString.call
    - instanceof

+ 隐式转换发生的场景
    - Left Handside Right Handside
        左右取值，转换为原始值，如果转换后的值存在string, 则进行toString后拼接。否则按toNumber处理
    - ==
        优先按照number处理
    - if
        优先按照boolean处理
    - 数学运算符
        优先转换非number为number

+ Statement

+ Grammar
    - 简单语句
        * ExpressionStatement
            计算相关
        * EmptyStatement
            ;
        * DebuggerStatement
            调试用
        * ThrowStatement
            throw 表达式
        * ContinueStatement
            continue label
        * BreakStatement
            break label
        * ReturnStatement
            return 表达式
    - 组合语句
        * BlockStatement
            多条语句合并成一条语句
            为const let 提供作用域
```
            {
            
            }
```
    [[type]]: normal
    [[value]]: --
    [[target]]: --
    
    block内产生了非normal的结果时，后面的语句将不再执行。

    IfStatement

    SwitchStatement

    LeabelledStatement

    IterationStatement

```
while()
do while()
for( ; ; )
for( in )
for( of )
for await(of)
```

for语句内部可以声明const let, 故for语句内部会产生一个外层的作用域(block之外).

    TryStatement
```
try {

} catch () {

} finally {

}
```

        [[type]]: return
        [[value]]: --
        [[target]]: label
    target=label类型的语句只在IterationStatement内有效果

+ 声明

    FunctionDeclaration

    GeneratorDeclaration

    AsyncFunctionDeclaration

    AsyncGeneratorDeclaration

    VariableStatement

    ClassDeclaration

    LexicalDeclaration

+ Runtime
    Completion Record
        [[type]]: mormal, break, continue, return, or throw
        [[value]]: Types
        [[target]]: label
    Lexical Enviorment

+ 预处理/变量提升
```
var a = 2;
void function() {
  a = 1;
  return;
  var a; // const a
}()
```
    var变量声明和函数声明会预处理。

    var值预处理声明部分

    函数预处理整体

+ 作用域
函数的执行上下文
在多层作用域中进行LHS和RHS操作，直到找到为止，形成作用域链
Object

+ 状态 行为 唯一性

    架构合理性： 封装(内聚) 复用 解耦

    面向对象子系统： 继承

    多态？

+ 基于类的面向对象 Object-Class
    基类
    interface
    mixin

+ Prototype
    抽象对象时，应该遵循‘行为改变状态’的原则，行为改变自身状态。不应该按照语言描述的行为进行设计





    封装 解耦 内聚 复用    描述架构

    继承： 面向对象的子系统

    多态：描述动态性的程度 

    基于类的面向对象 