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
        destination: 'https://twitter.com/dispaisy',
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
        destination: 'https://playlist.link/mri-3amvibes',
        permanent: false,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@DisPaisy',
        permanent: false,
      },
      {
        source: '/contactme',
        destination: '/contact',
        permanent: false,
      },
    ]
  },
}
