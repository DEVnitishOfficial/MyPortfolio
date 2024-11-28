import { Toaster } from 'react-hot-toast'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Tech from './components/Tech'

function App () {
  return (
    <>
      <div className='fixed -z-10 min-h-screen w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
        <Toaster position='top-right' />
        <Navbar />
        <Hero />
        <Tech />
        <Project />
        <Contact />
      </main>
    </>
  )
}

export default App