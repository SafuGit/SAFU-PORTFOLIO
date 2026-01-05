import { BiDownArrow } from 'react-icons/bi'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Hobbies from './components/Hobbies/Hobbies'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { Fade } from 'react-awesome-reveal'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

function App() {

  return (
    <div className='App font-poppins overflow-x-hidden'>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Side Navbar */}
      <Navbar />
      
      {/* Main Content with left padding for navbar */}
      <div className='lg:pl-20'>
        <Fade duration={2000} triggerOnce>
          <Home></Home>
        </Fade>
        <Fade duration={2000} triggerOnce>
          <div className='mt-15 flex justify-center items-center'>
            <a href='#aboutMe' className='w-12 h-12 flex items-center justify-center bg-yellow-400/20 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black animate-bounce transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)]'>
              <BiDownArrow />
            </a>
          </div>
        </Fade>
        <Fade duration={2000} triggerOnce>
          <AboutMe></AboutMe>
        </Fade>
        <Fade duration={2000} triggerOnce>
          <Skills></Skills>
        </Fade>
        <Fade duration={2000} triggerOnce>
          <Hobbies></Hobbies>
        </Fade>
        <Fade duration={2000} triggerOnce>
          <Projects></Projects>
        </Fade>
        <Fade duration={2000} triggerOnce>
          <div className='pb-10'>
            <Contact></Contact>
          </div>
        </Fade>
        <div className='pb-10'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
