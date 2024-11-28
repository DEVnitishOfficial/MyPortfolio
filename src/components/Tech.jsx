import {
  BiLogoDigitalocean,
  BiLogoDocker,
  BiLogoGit,
  BiLogoGithub,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript
} from 'react-icons/bi'
import { motion } from 'framer-motion'

const Tech = () => {
  const varient = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <div
      id='tech'
      className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 '
    >
      <motion.h1
        variants={varient}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        className='text-4xl font-light text-white md:text-6xl animate-glow '
      >
        Technologies
      </motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          {/* Icon */}
          <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />

          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-sky-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            Typescript
          </div>
          <div className="w-4 h-4 bg-sky-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>

        </motion.div>

        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-yellow-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            Javascript
          </div>
          <div className="w-4 h-4 bg-yellow-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoDocker className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            Docker
          </div>
          <div className="w-4 h-4 bg-blue-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-sky-400 rounded-lg px-3 py-2 text-sm font-semibold '>
            Tailwind
          </div>
          <div className="w-4 h-4 bg-sky-400 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoNodejs className='cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-green-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            NodeJs
          </div>
          <div className="w-4 h-4 bg-green-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoMongodb className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-green-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            MongoDB
          </div>
          <div className="w-4 h-4 bg-green-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoPostgresql className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-sky-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            PostgreSQL
          </div>
          <div className="w-4 h-4 bg-sky-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoDigitalocean className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            DigitalOcean
          </div>
          <div className="w-4 h-4 bg-blue-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoGit className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-white bg-red-500 rounded-lg px-3 py-2 text-sm font-semibold '>
            Git
          </div>
          <div className="w-4 h-4 bg-red-500 absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
        <motion.div
          variants={varient}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          className='relative group w-fit mx-auto'
        >
          <BiLogoGithub className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          {/* Hover Text */}
          <div className='absolute top-0  left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 text-black bg-white rounded-lg px-3 py-2 text-sm font-semibold '>
            GitHub
          </div>
          <div className="w-4 h-4 bg-white absolute top-0  left-1/2 -translate-x-1/2 -translate-y-9 opacity-0 group-hover:opacity-100 rotate-45"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Tech
