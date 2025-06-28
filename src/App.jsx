import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='App font-poppins'>
      <div className='pt-3! mb-10!'>
        <Navbar></Navbar>
      </div>
      <Home></Home>
    </div>
  )
}

export default App
