const { description } = require('../../package')
const project  = require('../project')
const science  = require('../science')
const practice = require('../practice')
const material = require('../material')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '浅梦辄止，书墨未浓',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/life/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '工程',
        link: '/project/',
      },
      {
        text: '科学',
        link: '/science/'
      },
      {
        text: '修行',
        link: '/practice/'
      },
      {
        text: '文化',
        link: '/material/'
      },
      {
        text: 'Github',
        link: 'https://github.com/zhangxishuo'
      }
    ],
    sidebar: {
      '/project/': project(),
      '/science/': science(),
      '/practice/': practice(),
      '/material/': material()
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
