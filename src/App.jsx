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

function App() {

  return (
    <div className='App font-poppins'>
      <Fade duration={2000} triggerOnce className='pt-3! mb-10! sticky z-50 top-0'>
        <div>
          <Navbar></Navbar>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce>
        <Home></Home>
      </Fade>
      <Fade duration={2000} triggerOnce>
        <div className='mt-15 flex justify-center items-center'>
          <a href='#aboutMe' className='btn bg-green-950 animate-bounce btn-circle'><BiDownArrow></BiDownArrow></a>
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
        <div className='pb-20'>
          <Contact></Contact>
        </div>
      </Fade>
    </div>
  )
}

export default App
