import { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { SiNetlify } from 'react-icons/si'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log('object', isOpen)

  const controlMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
      <a
        href='#home'
        className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-800 hover:opacity-100'
      >
        Nitish kumar
      </a>

      <ul className='hidden md:flex gap-10'>
        <a
          href='#home'
          className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
        >
          <li>Home</li>
        </a>
        <a
          href='#tech'
          className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
        >
          <li>Tech</li>
        </a>
        <a
          href='#project'
          className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
        >
          <li>Project</li>
        </a>
        <a
          href='#contact'
          className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className='hidden md:flex gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 '>
          <BsYoutube />
        </li>
        <a href='https://www.linkedin.com/feed/'>
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
            <BsLinkedin />
          </li>
        </a>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
          <BsTwitter />
        </li>
        <a href='https://github.com/DEVnitishOfficial'>
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white-500 hover:opacity-100 '>
            <BsGithub />
          </li>
        </a>
        <a href='https://app.netlify.com/teams/dnkn123nitish/sites'>
          <li className='cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
            <SiNetlify />
          </li>
        </a>
      </ul>

      {isOpen ? (
        <BiX className='block md:hidden text-4xl' onClick={controlMenu} />
      ) : (
        <BiMenu className='block md:hidden text-4xl' onClick={controlMenu} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start  justify-start gap-10 border-red-1 border-gray-800 bg-black/90  p-12 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className='flex flex-col gap-8'>
            <a
              href='#home'
              className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
            >
              <li>Home</li>
            </a>
            <a
              href='#tech'
              className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
            >
              <li>Tech</li>
            </a>
            <a
              href='#project'
              className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
            >
              <li>Project</li>
            </a>
            <a
              href='#contact'
              className='cursor-pointer opacity-70 transition-all  duration-300 hover:opacity-100'
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className='flex flex-wrap gap-8'>
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 '>
          <BsYoutube />
        </li>
        <a href='https://www.linkedin.com/feed/'>
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
            <BsLinkedin />
          </li>
        </a>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
          <BsTwitter />
        </li>
        <a href='https://github.com/DEVnitishOfficial'>
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white-500 hover:opacity-100 '>
            <BsGithub />
          </li>
        </a>
        <a href='https://app.netlify.com/teams/dnkn123nitish/sites'>
          <li className='cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
            <SiNetlify />
          </li>
        </a>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
