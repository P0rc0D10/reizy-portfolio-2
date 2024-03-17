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
    name: 'Old Portfolio',
    href: '/old',
    icon: ['fas', 'square-rss'],
    locked: false,
  },
  {
    name: 'Creator',
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
