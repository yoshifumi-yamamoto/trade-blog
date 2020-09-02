"use strict";

module.exports = {
  siteMetadata: {
    title: '現役看護師トレーダー',
    description: '看護師から億プレーヤーを目指して奮闘する様をブログで紹介します。'
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass', {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/static/img"),
      name: 'uploads'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/src/pages"),
      name: 'pages'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/src/img"),
      name: 'images'
    }
  }, 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
        resolve: 'gatsby-remark-relative-images',
        options: {
          name: 'uploads'
        }
      }, {
        resolve: 'gatsby-remark-images',
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 2048
        }
      }, {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: 'static'
        }
      }]
    }
  }, {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: "".concat(__dirname, "/src/cms/cms.js")
    }
  }, {
    resolve: 'gatsby-plugin-purgecss',
    // purges all unused/unreferenced css rules
    options: {
      develop: true,
      // Activates purging in npm run develop
      purgeOnly: ['/all.sass'] // applies purging only on the bulma css file

    }
  }, // must be after other CSS plugins
  'gatsby-plugin-netlify', // make sure to keep it last in the array
  {
    resolve: "gatsby-plugin-google-adsense",
    options: {
      publisherId: "ca-pub-7745429707764414"
    }
  }]
};