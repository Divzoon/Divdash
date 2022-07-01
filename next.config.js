const nextConfig = {
    // other stuff
        reactStrictMode: true,
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ar'],
      localeDetection: false,
    },
    trailingSlash: true,
    domains: [
      {
        domain: 'divzoon.com',
        defaultLocale: 'en',
      },
      {
        domain: 'ar.divzoon.com',
        defaultLocale: 'ar',
      },
    ],
  };
