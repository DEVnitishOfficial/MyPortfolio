/* eslint-disable react/prop-types */
import image1 from '/1.png'
import image2 from '/2.png'
import image3 from '/3.png'
import image4 from '/4.png'
import image5 from '/5.png'
import { motion } from 'framer-motion'

const projectData = [
  {
    image:image1,
    title:"LMS",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptates eligendi dolorum odit dolorem incidunt neque voluptate asperiores dolor repellendus, rerum culpa laboriosam soluta a saepe in magnam enim consequatur!m",
    technologies:["HTML","CSS","JS","MONGO_DB","TAILWIND","DAISY_UI"]
  },
  {
    image:image2,
    title:"CHAT_APP",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptates eligendi dolorum odit dolorem incidunt neque voluptate asperiores dolor repellendus, rerum culpa laboriosam soluta a saepe in magnam enim consequatur!m",
    technologies:["HTML","CSS","JS","MONGO_DB","TAILWIND","DAISY_UI"]
  },
  {
    image:image3,
    title:"WEATHER_APP",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptates eligendi dolorum odit dolorem incidunt neque voluptate asperiores dolor repellendus, rerum culpa laboriosam soluta a saepe in magnam enim consequatur!m",
    technologies:["HTML","CSS","JS","MONGO_DB","TAILWIND","API"]
  },
  {
    image:image4,
    title:"WEATHER_APP",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptates eligendi dolorum odit dolorem incidunt neque voluptate asperiores dolor repellendus, rerum culpa laboriosam soluta a saepe in magnam enim consequatur!m",
    technologies:["HTML","CSS","JS","MONGO_DB","TAILWIND","API"]
  },
  {
    image:image5,
    title:"WEATHER_APP",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptates eligendi dolorum odit dolorem incidunt neque voluptate asperiores dolor repellendus, rerum culpa laboriosam soluta a saepe in magnam enim consequatur!m",
    technologies:["HTML","CSS","JS","MONGO_DB","TAILWIND","API"]
  },
]

const ScrollReveal = ({children}) => {
  return(
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return(
    <ScrollReveal>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' alt="course_image" />
      <div className='flex flex-col gap-5'>
       
        <h3 className='text-xl font-semibold'>{project.title}</h3>
        <p className='text-gray-400'>{project.description}</p>
      

      <div className='flex  flex-wrap gap-5'>
      {
        project.technologies.map((tech,index) => (
          <span className='rounded-lg bg-black p-3' key={index}>{tech}</span>
        ))
      }
      </div>
      </div>
    </div>
    </ScrollReveal>
  )
}

const Project = () => {
  return (
    <div id='project' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 mid:px-14 md:py-24'>
      <a href="#project"></a>
      <ScrollReveal>
     <h1 className='text-4xl font-light text-white md:text-6xl animate-glow'>
      My Project
     </h1>
      </ScrollReveal>
     <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
      {
        projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      }
     </div>
    </div>
  )
}

export default Project