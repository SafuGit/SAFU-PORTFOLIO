import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='App font-poppins'>
      <div className='pt-3! mb-10! sticky z-50 top-0'>
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <AboutMe></AboutMe>
    </div>
  )
}

export default App
