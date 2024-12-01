/* eslint-disable react/prop-types */

import image2 from '/hero_game.png'
import bank from '/bank.png'
import cart from '/cart.png'
import lms from '/lms.png'
import { motion } from 'framer-motion'

const projectData = [
  {
    image: lms,
    title: 'LMS',
    url: 'https://learning-management-system-h32ei.ondigitalocean.app/',
    description:
      'Developed a Fullstack Learning Management System (LMS) using the MERN stack and tools like Razorpay and Cloudinary. Features include an admin dashboard for course management, user authentication with JWT, and seamless course purchase integration. Enhanced UI with DaisyUI and Tailwind CSS for an intuitive user experience.',
    technologies: ['HTML5','TAILWIND_CSS','DAISY_UI','REACT_JS','REACT-REDUX','RTK','REACT-HOT-TOAST','AXIOS','CHART_JS','NODE_JS','MONGOD_DB','EXPRESS','MONGOOSE','BCRYPT_JS','JWT','NODE_MAILER','RAZORPAY','MULTER','CLOUDINARY','MORGAN','NODEMON','CORS']
    // technologies: {
    //   frontend:['HTML5','TAILWIND_CSS','DAISY_UI','REACT_JS','REACT-REDUX','RTK','REACT-HOT-TOAST','AXIOS','CHART_JS'],
    //   backend:['NODE_JS','MONGOD_DB','EXPRESS','MONGOOSE','BCRYPT_JS','JWT','NODE_MAILER','RAZORPAY','MULTER','CLOUDINARY','MORGAN','NODEMON','CORS']
    // }

  },
  {
    image: image2,
    title: 'SUPERMEN_GAME',
    url: 'https://myfirstgameprojects.netlify.app/',
    description:
      'Developed a Superman game using html css and js, where our superman can jump using keyboard UP,DOWN,LEFT,RIGHT key and in every escape from demon you will get count 1 and gradually as score increase its speed will increase',
    technologies: ['HTML5', 'CSS3', 'JS', 'BOM','DOM']
  },
  {
    image: bank,
    title: 'BANKING_APPLICATION',
    url:'https://banking-application-demo.netlify.app/',
    description:
      'Developed a simple banking application where user can deposite, withdraw and check their current balance in their account, here we play with dynamic js and array where we create html element dynamically, and putting value dynamically as well',
    technologies: ['HTML', 'CSS', 'JS']
  },
  {
    image: cart,
    title: 'CART_COST_CALCULATION',
    url:'https://calculate-total-cart-cost.netlify.app/',
    description:
      'Developed a cart cost calculation using HTML, CSSS AND JS where user can add product in their cart according to their wish and on the basis of product quanity we calculate the total proce of the cart that you will choose',
    technologies: ['HTML', 'CSS', 'JS']
  },
]

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project, index }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img
          key={index}
          onClick={() => (window.location.href = `${project.url}`)}
          src={project.image}
          className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] '
          alt='course_image'
        />
        <div className='flex flex-col gap-5'>
          <h3 className='text-xl font-semibold'>{project.title}</h3>
          <p className='text-gray-400'>{project.description}</p>

          <div className='flex  flex-wrap gap-1'>
            {project.technologies.map((tech, index) => (
              <span className='rounded-lg bg-black p-3' key={index}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Project = () => {
  return (
    <div
      id='project'
      className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 mid:px-14 md:py-24'
    >
      <a href='#project'></a>
      <ScrollReveal>
        <h1 className='text-4xl glowing-text font-light text-white md:text-6xl '>
          My Project
        </h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Project
