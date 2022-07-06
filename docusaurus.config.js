// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MC Server Soft API Documentation',
  tagline: 'Official API Docs for MC Server Soft',
  url: 'https://mcserversoft.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mcserversoft',
  projectName: 'ApiDocumentation',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    // .. Your other presets' config 
    '@docusaurus/preset-classic',
    // Redocusaurus config
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'static/openapi.json',
            route: '/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'mcserversoft, documentation, mcss, docs, api, software, developer, remote access, bot' }],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/logo.svg',
      // algolia: {
      //   appId: '',
      //   // Public API key: it is safe to commit it
      //   apiKey: '',
      //   indexName: '',
      // },
      navbar: {
        title: 'MC Server Soft API Documentation',
        logo: {
          alt: 'Logo of MC Server Soft',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/mcserversoft/ApiDocumentation',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} MC Server Soft and contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
