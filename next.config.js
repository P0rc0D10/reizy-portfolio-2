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
        destination: '/contactme',
        permanent: true,
      },
      {
        source: '/secret',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
      {
        source: '/creator',
        destination: 'https://github.com/vaishnav-mk/portfolio',
        permanent: false,
      },
      {
        source: '/old',
        destination: 'https://old.reizy.eu',
        permanent: false,
      },
      {
        source: '/3am',
        destination: 'https://open.spotify.com/playlist/4bfwHTDgOOHdClUcD6KZ84?si=86ca3df3bd0c4484',
        permanent: false,
      },
      {
        source: '/contact',
        destination: 'https://t.me/mxlfunzionato',
        permanent: false,
      },
      {
        source: '/contactme',
        destination: 'https://t.me/mxlfunzionato',
        permanent: false,
      },
    ]
  },
}
