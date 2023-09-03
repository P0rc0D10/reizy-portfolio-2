import { MainLayout } from 'layouts/MainLayout'
import { GenericMeta } from 'components/DefaultMeta'
import Hero from 'components/Hero'

const Home = () => {
  return (
    <>
      <GenericMeta
        title="Reizy"
      />
      <MainLayout margin={false}>
        <Hero />
      </MainLayout>
    </>
  )
}

export default Home
