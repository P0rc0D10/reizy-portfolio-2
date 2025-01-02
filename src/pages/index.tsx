import { MainLayout } from 'layouts/MainLayout'
import { GenericMeta } from 'components/DefaultMeta'
import Hero from 'components/Hero'

const Home = () => {
  return (
    <>
      <GenericMeta
        title="DisPaisy"
        description="Founder of lyable distribution & Cat lover 🐈"
      />
      <MainLayout margin={false}>
        <Hero />
      </MainLayout>
    </>
  )
}

export default Home
