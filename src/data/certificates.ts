export interface Certificate {
  [x: string]: string
  organization: string
  issued: string
  title: string
  link: string
}

export const CertificateData: Certificate[] = [
  {
    organization: 'Musixmatch',
    issued: '2023-07-15',
    title: 'Musixmatch Graduate',
    link: 'https://reizy.eu/musixmatch-certificate.png',
  },
  {
    organization: 'Codecademy',
    issued: '2024-03-24',
    title: 'Learn HTML',
    link: 'https://www.codecademy.com/profiles/reizy.was.taken/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7',
  }
]
