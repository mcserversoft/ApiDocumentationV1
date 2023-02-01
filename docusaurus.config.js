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
  favicon: '/favicon.ico',
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
            spec: 'static/openapi.yml',
            route: '/',
          },
        ],
        theme: {
          primaryColor: '#abd037',
          options: {
            //if algolia works then we can disable the default search
            //disableSearch: true,
            hideDownloadButton: true,
            scrollYOffset: 60,
            hideLoading: true,
          },
          theme: {
            rightPanel: {
              backgroundColor: '#121212',
            },
            fab: {
              backgroundColor: '#abd037',
              color: '#ffffff'
            }
          },
        }
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
      image: '/logo.svg',
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
          src: 'logo.svg',
        },
        items: [
          {
            label: 'v1',
            position: 'right',
            items: [
              {
                label: 'v2',
                href: 'https://apidocs.mcserversoft.com',
              },
              {
                label: 'v1',
                href: 'https://apidocs-v1.mcserversoft.com',
              }
            ],
          },
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
