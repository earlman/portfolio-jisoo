// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/index.sass'),
                // or if you use scss
                // path.resolve(__dirname, './src/assets/sass/_globals.scss'),
                // you can also use a glob if you'd prefer
                // path.resolve(__dirname, './src/assets/sass/*.sass'),
                // or scss
                // path.resolve(__dirname, './src/assets/sass/*.scss'),
            ],
        })
}

module.exports = {
    siteName: 'Jisoo Portfolio',
    //   siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',

    plugins: [
        {
            // Create posts from markdown files
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Post',
                path: 'content/posts/*.md',
                route: '/:slug',
                refs: {
                    // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
                    tags: {
                        typeName: 'Tag',
                        route: '/tag/:id',
                        create: true
                    }
                }
            }
        }
    ],

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    },
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach(type => {
            addStyleResource(config.module.rule('sass').oneOf(type))
        })


        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    }
}