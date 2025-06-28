import { BiDownArrow } from 'react-icons/bi'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Hobbies from './components/Hobbies/Hobbies'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className='App font-poppins'>
      <div className='pt-3! mb-10! sticky z-50 top-0'>
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <div className='mt-15 flex justify-center items-center'>
        <a href='#aboutMe' className='btn bg-green-950 animate-bounce btn-circle'><BiDownArrow></BiDownArrow></a>
      </div>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
