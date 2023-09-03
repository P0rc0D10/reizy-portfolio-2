import { ReactNode } from 'react'
import { GenericMeta } from '../components/DefaultMeta'
import FadeIn from 'react-fade-in'
import Footer from 'components/Footer'

interface Props {
  children: ReactNode
  title?: string
  description?: string
  margin?: boolean
}

export const MainLayout = ({
  children,
  title,
  description,
  margin = true,
}: Props) => {
  return (
    <>
      {title && description && (
        <GenericMeta title="Reizy" description="Owner of Malfunzionato Records Independent. Admin on Torta Factory Discord Server and Owner on the Minecraft server." />
      )}

      <FadeIn>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">"Owner of Malfunzionato Records Independent. Admin on Torta Factory Discord Server and Owner on the Minecraft server."</p>
        )}
        <div className={margin ? 'mt-8' : undefined}>{children}</div>
        <Footer />
      </FadeIn>
    </>
  )
}
