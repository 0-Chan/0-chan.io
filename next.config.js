const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  redirects: () => {
    return [
      {
        source: "/knowldege",
        destination: "/knowldege/layout",
        statusCode: 301,
      },
      {
        source: "/advanced/performance",
        destination: "/knowldege/advanced/performance",
        statusCode: 301,
      },
      {
        source: "/advanced/cache",
        destination: "/knowldege/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/knowldege/cache",
        destination: "/knowldege/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/knowldege/options",
        destination: "/knowldege/api",
        statusCode: 301
      },
      {
        source: "/change-log",
        destination: "/knowldege/change-log",
        statusCode: 301,
      },
      {
        source: "/blog/swr-1",
        destination: "/blog/swr-v1",
        statusCode: 301,
      },
      {
        source: "/knowldege",
        destination: "/knowldege/layout",
        statusCode: 302,
      },
      {
        source: "/retrospective",
        destination: "/retrospective/rule",
        statusCode: 302,
      },
    ];
  },
});
