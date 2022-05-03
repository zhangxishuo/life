(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{432:function(s,a,e){s.exports=e.p+"assets/img/00.d9ebaec4.jpg"},433:function(s,a,e){s.exports=e.p+"assets/img/01.74e6c6d6.jpg"},434:function(s,a,e){s.exports=e.p+"assets/img/02.168f1617.jpg"},466:function(s,a,e){"use strict";e.r(a);var t=e(62),v=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"中间代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间代码"}},[s._v("#")]),s._v(" 中间代码")]),s._v(" "),t("p",[t("code",[s._v("IR")]),s._v("，也就是中间代码"),t("code",[s._v("Intermediate Representation")]),s._v("，有时也称"),t("code",[s._v("Intermediate Code")]),s._v("，它是编译器中很重要的一种数据结构。编译器在做完前端工作以后，首先就是生成"),t("code",[s._v("IR")]),s._v("，并在此基础上执行各种优化算法，最后再生成目标代码。")]),s._v(" "),t("h2",{attrs:{id:"ir-的用途和层次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ir-的用途和层次"}},[s._v("#")]),s._v(" IR 的用途和层次")]),s._v(" "),t("p",[s._v("设计"),t("code",[s._v("IR")]),s._v("的用途：")]),s._v(" "),t("ul",[t("li",[s._v("分析和变换")]),s._v(" "),t("li",[s._v("直接解释执行")])]),s._v(" "),t("p",[s._v("编译器中，基于"),t("code",[s._v("IR")]),s._v("的分析和处理工作，一开始可以基于一些抽象层次比较高的语义，这时所需要的"),t("code",[s._v("IR")]),s._v("更接近源代码。而在后面，则会使用低层次的、更加接近目标代码的语义。")]),s._v(" "),t("p",[s._v("基于这种从高到低的抽象层次，"),t("code",[s._v("IR")]),s._v("可以归结为"),t("code",[s._v("HIR")]),s._v("、"),t("code",[s._v("MIR")]),s._v("和"),t("code",[s._v("LIR")]),s._v("三类。")]),s._v(" "),t("h3",{attrs:{id:"hir-基于源语言做一些分析和变换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hir-基于源语言做一些分析和变换"}},[s._v("#")]),s._v(" HIR：基于源语言做一些分析和变换")]),s._v(" "),t("p",[t("code",[s._v("High IR")]),s._v("，能够准确表达源语言的语义。")]),s._v(" "),t("p",[t("code",[s._v("AST")]),s._v("和符号表也可以准确表达源语言的语义，"),t("code",[s._v("AST")]),s._v("也可以算作一种"),t("code",[s._v("IR")]),s._v("。")]),s._v(" "),t("p",[s._v("基于"),t("code",[s._v("HIR")]),s._v("，可以做一些高层次的代码优化，比如常数折叠、内联等。在"),t("code",[s._v("Java")]),s._v("和"),t("code",[s._v("Go")]),s._v("的编译器中，你可以看到不少基于"),t("code",[s._v("AST")]),s._v("做的优化工作。")]),s._v(" "),t("h3",{attrs:{id:"mir-独立于源语言和-cpu-架构做分析和优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mir-独立于源语言和-cpu-架构做分析和优化"}},[s._v("#")]),s._v(" MIR：独立于源语言和 CPU 架构做分析和优化")]),s._v(" "),t("p",[s._v("大量的优化算法是可以通用的，没有必要依赖源语言的语法和语义，也没有必要依赖具体的"),t("code",[s._v("CPU")]),s._v("架构。")]),s._v(" "),t("p",[s._v("这些优化包括部分算术优化、常量和变量传播、死代码删除等。实现这类分析和优化功能的"),t("code",[s._v("IR")]),s._v("称为"),t("code",[s._v("Middle IR")]),s._v("。")]),s._v(" "),t("p",[s._v("因为"),t("code",[s._v("MIR")]),s._v("跟源代码和目标代码都无关，所以在讲解优化算法时，通常是基于"),t("code",[s._v("MIR")]),s._v("，如三地址代码"),t("code",[s._v("Three Address Code，TAC")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("以上代码对应的"),t("code",[s._v("TAC")]),s._v("是：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("BB1:\n    b := 0\n    if a > 10 goto BB3\nBB2:\n    b := 10\n    goto BB4\nBB3:\n    b := a\nBB4:\n    return b\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("code",[s._v("TAC")]),s._v("用"),t("code",[s._v("goto")]),s._v("语句取代了"),t("code",[s._v("if")]),s._v("语句、循环语句这种比较高级的语句，当然也不会有类、继承这些高层的语言结构。但是，它又没有涉及数据如何在内存读写等细节，书写格式也不像汇编代码，与具体的目标代码也是独立的。")]),s._v(" "),t("h3",{attrs:{id:"lir-依赖于-cpu-架构做优化和代码生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lir-依赖于-cpu-架构做优化和代码生成"}},[s._v("#")]),s._v(" LIR：依赖于 CPU 架构做优化和代码生成")]),s._v(" "),t("p",[t("code",[s._v("Low IR")]),s._v("，其指令通常可以与机器指令一一对应，比较容易翻译成机器指令或汇编代码。"),t("code",[s._v("LIR")]),s._v("体现了"),t("code",[s._v("CPU")]),s._v("架构的底层特征，因此可以做一些"),t("code",[s._v("CPU")]),s._v("架构相关的优化。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(432),alt:"LIR"}})]),s._v(" "),t("p",[s._v("这是"),t("code",[s._v("Java")]),s._v("的"),t("code",[s._v("JIT")]),s._v("编译器输出的"),t("code",[s._v("LIR")]),s._v("信息，里面的指令名称已经跟汇编代码很像了，并且会直接使用"),t("code",[s._v("AMD64")]),s._v("架构的寄存器名称。")]),s._v(" "),t("h3",{attrs:{id:"p-code-用于解释执行的-ir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p-code-用于解释执行的-ir"}},[s._v("#")]),s._v(" P-code：用于解释执行的 IR")]),s._v(" "),t("p",[t("code",[s._v("Portable Code")]),s._v("，与具体机器无关，因此可以很容易地运行在多种电脑上。这类"),t("code",[s._v("IR")]),s._v("对编译器来说，就是做编译的目标代码。"),t("code",[s._v("Java")]),s._v("的字节码就是"),t("code",[s._v("P-code")]),s._v("。除此之外，"),t("code",[s._v("Python")]),s._v("、"),t("code",[s._v("Erlang")]),s._v("也有自己的字节码，"),t("code",[s._v(".NET")]),s._v("平台、"),t("code",[s._v("Visual Basic")]),s._v("程序也不例外。")]),s._v(" "),t("p",[s._v("其实，完全可以基于"),t("code",[s._v("AST")]),s._v("实现一个全功能的解释器，只不过性能会差一些。对于专门用来解释执行的"),t("code",[s._v("IR")]),s._v("，通常会有一些特别的设计，跟虚拟机配合来尽量提升运行速度。")]),s._v(" "),t("p",[t("code",[s._v("P-code")]),s._v("也可能被进一步编译，形成可以直接执行的机器码。"),t("code",[s._v("Java")]),s._v("的字节码就是这样的例子。")]),s._v(" "),t("h2",{attrs:{id:"ir-的数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ir-的数据结构"}},[s._v("#")]),s._v(" IR 的数据结构")]),s._v(" "),t("p",[t("code",[s._v("IR")]),s._v("并不像源代码和汇编代码那样有特定的书写格式，只是编译过程中的一个数据结构而已。")]),s._v(" "),t("p",[s._v("在实际的实现中，有线性结构、树结构、有向无环图"),t("code",[s._v("DAG")]),s._v("、程序依赖图"),t("code",[s._v("PDG")]),s._v("等多种格式。要根据具体要处理的工作的特点，来选择合适的数据结构。")]),s._v(" "),t("h3",{attrs:{id:"第一种-类似-tac-的线性结构-linear-form"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种-类似-tac-的线性结构-linear-form"}},[s._v("#")]),s._v(" 第一种：类似 TAC 的线性结构（Linear Form）")]),s._v(" "),t("p",[s._v("你可以把代码表示成一行行的指令或语句，用数组或者列表保存就行了。其中的符号，需要引用符号表，来提供类型等信息。")]),s._v(" "),t("p",[s._v("这种线性结构有时候也被称作"),t("code",[s._v("goto")]),s._v("格式。因为高级语言里的条件语句、循环语句，要变成用"),t("code",[s._v("goto")]),s._v("语句跳转的方式。")]),s._v(" "),t("h3",{attrs:{id:"第二种-树结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种-树结构"}},[s._v("#")]),s._v(" 第二种：树结构")]),s._v(" "),t("p",[s._v("树结构可以用作"),t("code",[s._v("IR")]),s._v("，"),t("code",[s._v("AST")]),s._v("就是一种树结构。树结构的缺点是，可能有冗余的子树。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(433),alt:"树结构"}})]),s._v(" "),t("p",[s._v("语句"),t("code",[s._v("a = 5; b = (2 + a) + a * 3;")]),s._v("形成的"),t("code",[s._v("AST")]),s._v("，如果基于这个树结构生成代码，可能会做两次从内存中读取"),t("code",[s._v("a")]),s._v("的值的操作，并存到两个临时变量中。")]),s._v(" "),t("h3",{attrs:{id:"第三种-有向无环图-directed-acyclic-graph-dag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三种-有向无环图-directed-acyclic-graph-dag"}},[s._v("#")]),s._v(" 第三种：有向无环图（Directed Acyclic Graph，DAG）")]),s._v(" "),t("p",[t("code",[s._v("DAG")]),s._v("结构，是在树结构的基础上，消除了冗余的子树。转化成"),t("code",[s._v("DAG")]),s._v("以后，对"),t("code",[s._v("a")]),s._v("的内存访问只做一次就行了。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(434),alt:"DAG"}})]),s._v(" "),t("h3",{attrs:{id:"第四种-程序依赖图-program-dependence-graph-pdg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四种-程序依赖图-program-dependence-graph-pdg"}},[s._v("#")]),s._v(" 第四种：程序依赖图（Program Dependence Graph，PDG）")]),s._v(" "),t("p",[s._v("程序依赖图，是显式地把程序中的数据依赖和控制依赖表示出来，形成一个图状的数据结构。基于这个数据结构，我们再做一些优化算法的时候，会更容易实现。")]),s._v(" "),t("p",[s._v("所以现在，有很多编译器在运行优化算法的时候，都基于类似"),t("code",[s._v("PDG")]),s._v("的数据结构，比如我在课程后面会分析的"),t("code",[s._v("Java")]),s._v("的"),t("code",[s._v("JIT")]),s._v("编译器和"),t("code",[s._v("JavaScript")]),s._v("的编译器。")]),s._v(" "),t("h2",{attrs:{id:"ssa-格式的-ir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssa-格式的-ir"}},[s._v("#")]),s._v(" SSA 格式的 IR")]),s._v(" "),t("p",[t("code",[s._v("SSA")]),s._v("是"),t("code",[s._v("Static Single Assignment")]),s._v("的缩写，也就是静态单赋值。这是"),t("code",[s._v("IR")]),s._v("的一种设计范式，它要求一个变量只能被赋值一次。")]),s._v(" "),t("p",[t("code",[s._v("y = x1 + x2 + x3 + x4")]),s._v("的普通"),t("code",[s._v("TAC")]),s._v("如下：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("y := x1 + x2;\ny := y + x3;\ny := y + x4;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("其中，"),t("code",[s._v("y")]),s._v("被赋值了三次，改写成"),t("code",[s._v("SSA")]),s._v("的形式：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("t1 := x1 + x2;\nt2 := t1 + x3;\ny  := t2 + x4;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("为什么要费力写成这种形式呢，还要为此多添加"),t("code",[s._v("t1")]),s._v("和"),t("code",[s._v("t2")]),s._v("两个临时变量？")]),s._v(" "),t("p",[s._v("原因是，使用"),t("code",[s._v("SSA")]),s._v("的形式，体现了精确的"),t("strong",[s._v("使用 - 定义")]),t("code",[s._v("Use-def")]),s._v("关系。并且由于变量的值定义出来以后就不再变化，使得基于"),t("code",[s._v("SSA")]),s._v("更容易运行一些优化算法。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("对于同样的示例代码，对应的"),t("code",[s._v("SSA")]),s._v("格式如下：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("BB1:\n    b1 := 0\n    if a > 10 goto BB3\nBB2:\n    b2 := 10\n    goto BB4\nBB3:\n    b3 := a\nBB4:\n    b4 := phi(BB2, BB3, b2, b3)\n    return b4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("code",[s._v("phi")]),s._v("指令，会根据控制流的实际情况确定"),t("code",[s._v("b4")]),s._v("的值。如果"),t("code",[s._v("BB4")]),s._v("的前序节点是"),t("code",[s._v("BB2")]),s._v("，那么"),t("code",[s._v("b4")]),s._v("的取值是"),t("code",[s._v("b2")]),s._v("；而如果"),t("code",[s._v("BB4")]),s._v("的前序节点是"),t("code",[s._v("BB3")]),s._v("，那么"),t("code",[s._v("b4")]),s._v("的取值就是"),t("code",[s._v("b3")]),s._v("。")]),s._v(" "),t("p",[s._v("如果要满足"),t("code",[s._v("SSA")]),s._v("的要求，那么在遇到有程序分支的情况下，就必须引入"),t("code",[s._v("phi")]),s._v("指令。")]),s._v(" "),t("p",[t("strong",[s._v("由于 SSA 格式的优点，现代语言用于优化的 IR，很多都是基于 SSA 的了，包括我们本课程涉及的 Java 的 JIT 编译器、JavaScript 的 V8 编译器、Go 语言的 gc 编译器、Julia 编译器，以及 LLVM 工具等。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);