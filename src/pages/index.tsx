import { MainLayout } from 'layouts/MainLayout'
import { GenericMeta } from 'components/DefaultMeta'
import Hero from 'components/Hero'

const Home = () => {
  return (
    <>
      <GenericMeta
        title="Reizy"
        description="Owner of Malfunzionato Records Independent and Reizy Services Italy."
      />
      <MainLayout margin={false}>
        <Hero />
      </MainLayout>
    </>
  )
}

export default Home
