const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Boilerplate',
    description:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Boilerplate',
        description:
          'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\ahorn\\code\\react-boilerplate',
          templates:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz',
          cache: 'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz\\.cache',
          app: 'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz\\app',
          appPackageJson:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\package.json',
          appTsConfig:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\ahorn\\code\\react-boilerplate\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz\\app\\index.html',
          db: 'C:\\Users\\ahorn\\code\\react-boilerplate\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
