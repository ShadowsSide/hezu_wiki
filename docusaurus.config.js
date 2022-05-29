// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
module.exports = ({
    title: "Hezu Wiki",
    tagline: "欢迎加入电报第一合租群",
    url: "https://hezu.wiki",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/Doraemon.png",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "ShadowsSide ", // Usually your GitHub org/user name.
    projectName: "hezu-wiki", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".



    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                // 接入Google Analytics
                gtag: {
                    trackingID: 'G-0SPH7SYXJJ',
                    anonymizeIP: true,
                },

                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/ShadowsSide/hezu_wiki/tree/master/"
                },
                /**
                 blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },*/
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en", "zh"],
            },
        ],
    ],
    i18n: {
        defaultLocale: 'zh-cn',
        locales: ['zh-cn', 'zh-hk'],
    },
    themeConfig:
        ({
            navbar: {
                title: "电报第一合租群@hezu1",
                // 当用户开始向下滚动页面时自动隐藏导航条，当用户向上滚动页面时则显示导航条。
                hideOnScroll: true,

                logo: {
                    alt: "My Site Logo",
                    src: "img/Doraemon.png"


                },

                items: [

                    {
                        type: "doc",
                        docId: "About_Us",
                        position: "left",
                        label: "群组介绍及群规"
                    },
                    // 搜索栏位置
                    {
                        type: 'search',
                        position: 'right',
                    },


                    /**隐藏blog */
                    /**{ to: "/blog", label: "Blog", position: "left" },*/

                    {
                        href: "https://t.me/hezu1",
                        label: "加入我们",
                        position: "right"
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "群组介绍",
                        items: [
                            {
                                label: "关于我们",
                                to: "/docs/About_Us"
                            }
                        ]
                    },
                    {
                        title: "加入我们",
                        items: [
                            {
                                label: "Telegram群组",
                                href: "https://t.me/hezu1"
                            },
                            {
                                label: "Telegram频道",
                                href: "https://t.me/hezu2"
                            },
                            {
                                label: "教程频道",
                                href: "https://t.me/godlynews1"
                            }
                        ]
                    },
                    {
                        title: "帮助我们美化页面",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/ShadowsSide/hezu_wiki"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} 电报第一合租群, @hezu1. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
});
