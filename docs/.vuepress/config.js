module.exports = {
    base: '/guifan/',
    title: '前端规范',
    description: '数据科学事业部前端规范',
    port: 80,
    dest: 'dist',
    themeConfig: {
        repo: 'https://github.com/a1285771357/guifan',
        docsDir: 'docs/guide',
        docsBranch: 'master',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        smoothScroll: true,
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '指南',
                items: [
                    {
                        text: '概览',
                        link: '/guide/knowabout/'
                    },
                    {
                        text: '入职指南',
                        link: '/guide/onboarding/'
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/knowabout/': [
                ''
            ],
            '/guide/onboarding/': [
                {
                    title: '入职相关',
                    collapsable: false,
                    children: [
                        '',
                        '/guide/onboarding/env.md',
                        '/guide/onboarding/enjoy-project.md',
                        '/guide/onboarding/IDE.md',
                    ],
                }
            ],
        }
    },
    markdown: {
        plugins: [
            'deflist'
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@imgs': '/.vuepress/public/imgs'
            }
        }
    }
}