import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Route {
  name: string
  href: string
  type?: string
  icon?: IconProp
  locked?: boolean
  hex?: string
}

export const RouteData: Route[] = [
  {
    name: 'Contact Me!',
    href: '/mail',
    icon: ['fas', 'file'],
    locked: false,
  },
  {
    name: 'Spotify',
    href: '/spotify',
    icon: ['fas', 'spotify'],
    locked: false,
  },
  {
    name: 'Credits to',
    href: '/creator',
    icon: ['fas', 'heart'],
    type: 'dropdown',
    hex: '#d6336c',
  },
  {
    name: 'projects',
    href: '/projects',
    icon: ['fas', 'list-check'],
    type: 'dropdown',
    locked: true,
  },
  {
    name: 'stack',
    href: '/skills',
    type: 'dropdown',
    icon: ['fas', 'square-check'],
    locked: true,
  },
  {
    name: 'certificates',
    href: '/certificates',
    type: 'dropdown',
    icon: ['fas', 'ranking-star'],
    locked: true,
  },
  {
    name: 'involvement',
    href: '/involvement',
    type: 'dropdown',
    icon: ['fas', 'id-badge'],
    locked: true,
  },
]
