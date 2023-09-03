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
        source: '/hackerrank',
        destination: 'https://hackerrank.com/vaishnavmanoj',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/vaishnav-mk/',
        permanent: true,
      },
      {
        source: '/leetcode',
        destination: 'https://leetcode.com/vaishnavmanoj/',
        permanent: true,
      },
      {
        source: '/view-resume',
        destination:
          'https://drive.google.com/file/d/1Y5u1DWuRoZt7wwI7udkbeEZX2MraQazY/view',
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
