import image from '/image.jpg'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
        <div className=" flex flex-col items-center justify-center gap-10 text-white">
            <motion.div
            initial={{y:-50, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.8, delay:0.2}}
            >
                <img src={image} className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-950  transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500 md:w-[350px]
                'alt="my-image"/>
            </motion.div>

            <motion.div
            initial={{y:50, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.8, delay:0.2}}
            className='flex  max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
                <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl'>
                    Nitish Kumar
                </h1>
                <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl'>
                    FullStack Developer
                </h3>
                    <p className='md:text-base text-pretty text-sm text-gray-400'>I am a passionate full-stack developer with expertise in the MERN stack, including Git, GitHub, DigitalOcean, Typescipt and Tailwind CSS etc, I successfully completed a full-stack web development internship at Appwars Pvt Ltd under the guidance of Shahnawaz Sir, creating several projects showcased on GitHub, with deployments on Netlify and DigitalOcean. I am currently seeking full-stack development opportunities to contribute my skills and grow professionally.</p>
            </motion.div>

        </div>
        
    </div>
  )
}

export default Hero