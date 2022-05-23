const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "Hezu Wiki",
  tagline: "欢迎加入电报第一合租群",
  url: "https://hezu.wiki",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Doraemon.svg",

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "电报第一合租群@hezu1",
        logo: {
          alt: "My Site Logo",
          src: "img/Doraemon.svg"
        },
        items: [
          {
            type: "doc",
            docId: "About_Us",
            position: "left",
            label: "群组介绍及群规"
          },

          /**隐藏blog */
          /**{ to: "/blog", label: "Blog", position: "left" },*/

          {
            href: "https://t.me/hezu1",
            label: "加入我们",
            position: "right"
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
                href: "https://github.com/shadowsside/hezu-wiki"
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