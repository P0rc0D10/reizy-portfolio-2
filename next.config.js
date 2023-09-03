module.exports = {
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    domains: ['skillicons.dev', 'i.scdn.co', 'http.cat', 'www.udemy.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/P0rc0D10',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/reizyishere',
        permanent: true,
      },
      {
        source: '/mail',
        destination: 'mailto:hi@reizy.eu',
        permanent: true,
      },
      {
        source: '/secret',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
    ]
  },
}
