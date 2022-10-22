import { ReactNode } from 'react'
import { GenericMeta } from 'components/DefaultMeta'
import FadeIn from 'react-fade-in'
import Footer from 'components/Footer'

interface Props {
  children: ReactNode
  title: string
  description: string
}

export const BlogLayout = ({ children, title, description }: Props) => {
  return (
    <>
      <GenericMeta title={title} description={description} />

      <FadeIn className="flex flex-col justify-center mx-auto mb-16 sm:px-0">
        <h1 className="text-5xl font-bold mr-4">{title}</h1>
        <p className="text-lg text-gray-500">{description}</p>
        {children}
        <Footer />
      </FadeIn>
    </>
  )
}
