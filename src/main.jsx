import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router';
import SkillDetails from './pages/SkillDetails/SkillDetails.jsx';
import { Fade } from 'react-awesome-reveal';

const routes = createBrowserRouter([
  {path: '/', Component: App},
  {
    path: '/skillDetails',
    element: <Fade> <SkillDetails duration={2000}></SkillDetails> </Fade>, 
  },
  {path: '*', Component: () => <div className='text-3xl text-center mt-20'>
      <h1 className='mb-4'>404 Not Found</h1>
      <Link to='/' className='text-blue-500 underline'>Go to Home</Link>
    </div>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
