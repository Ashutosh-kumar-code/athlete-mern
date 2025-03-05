import Aboutus from '../../components/Aboutus'
import AntidopingGuildline from '../../components/AntidopingGuildline'
import Banner from '../../components/Banner'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import LearnAboutDoping from '../../components/LearnAboutDoping'

const Home = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Banner/>
      <Aboutus/>
      <LearnAboutDoping/>
      <AntidopingGuildline/>
      <FAQ/>
      <Footer/>

    </div>
  )
}

export default Home
