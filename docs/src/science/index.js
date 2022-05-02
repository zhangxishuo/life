module.exports = () => {
  return [
    '',
    {
      title: '编译原理',
      path: '/science/compile/',
      collapsable: false,
      children: [
        'compile/01.lexical-analysis.md',
        'compile/02.syntactic-analysis.md',
        'compile/03.semantic-analysis.md'
      ]
    }
  ]
}