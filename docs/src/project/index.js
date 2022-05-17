module.exports = () => {
  return [
    '',
    {
      title: '编译原理',
      path: '/project/compile/',
      collapsable: false,
      children: [
        'compile/01.lexical-analysis.md',
        'compile/02.syntactic-analysis.md',
        'compile/03.semantic-analysis.md',
        'compile/04.runtime.md',
        'compile/05.intermediate-representation.md',
        'compile/06.optimization.md',
        'compile/07.generation.md',
        'compile/08.java-compiler-1.md'
      ]
    },
    {
      title: '深入拆解 Java 虚拟机',
      path: '/project/jvm',
      collapsable: false,
      children: [
        'jvm/01.basic-type.md',
        'jvm/02.class-load.md',
        'jvm/03.method-call-1.md'
      ]
    }
  ]
}