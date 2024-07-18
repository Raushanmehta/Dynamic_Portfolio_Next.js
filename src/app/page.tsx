"use client";
import Hero from './components/hero/page';
import About from './about/page';
import Project from './project/page';
import Blog from './blog/page';
import Achivement from './achivement/page';
import { LogoTicker } from './components/LogoTicker';



const Home = () => {

  return (
    <div className='bg-black'>
      <Hero/>
      <LogoTicker/>
      <About/>
      <Project/>
      <Achivement/>
      <Blog/>
    </div>
    

  )
}
export default Home;

