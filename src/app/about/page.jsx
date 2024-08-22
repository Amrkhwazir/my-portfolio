"use client"
import React, { useRef } from 'react'
import {motion, useInView, useScroll} from "framer-motion"
import Image from 'next/image'
import Brain from '@/components/brain'



const AboutPage = () => {

  const contanerRef = useRef();
  const {scrollYProgress} = useScroll({container: contanerRef})

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef)

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef)

  return (
    <motion.div className="h-full text-stone-500" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1.2}}>
      {/* CONTAINER */}
      <div className='h-full overflow-y-scroll lg:flex' ref={contanerRef}>
        {/* TEXT CONTAINER */}
      <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-28 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2 text-white'>
        {/* BIOGRAPHY CONTAINER */}
        <div className='flex flex-col gap-12 justify-center'>
        {/* BIOGRAPHY TITLE  */}

        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
        {/* BIOGRAPHY DESCRIPTION */}
        <p className='text-base lg:text-lg'>
        Explore my portfolio to witness the synergy of form and function, where every pixel is purposeful and every interaction meaningful. Whether you are seeking to elevate your online presence, streamline your mobile strategy, or redefine the digital landscape, lets collaborate to turn your vision into reality. <br/><br/> Emphasize your expertise in each component of the MERN stack - MongoDB for database management, Express.js for server-side development, React.js for front-end development, and Node.js for back-end development.</p>
        {/* BIOGRAPHY QUOTE  */}

        <span className='italic'>Lets craft experiences that inspire, captivate, and endure in the ever-evolving digital landscape.
        </span>
        {/* BIOGRAPHY SIGN */}

        <div className='w-fit self-end'>
        <Image src="/signature.png" alt="my signature" width={300} height={10} />
        </div>
         {/* BIOGRAPHY SVG  */}
         <motion.svg initial={{opacity: 0.2, y:0}} animate={{opacity: 1, y: "10px"}} transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e2e8f0" width={50} height={50}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V14" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></motion.svg >
        </div>

        {/* SKILLS CONTAINER */}
        <div className='flex flex-col gap-12 justify-center ' ref={skillRef}>
            {/* SKILLS TITLE  */}
        <motion.h1
        initial={{x: "-300px"}}
        animate={isSkillRefInView ? {x: 0} : {}}
        transition={{delay: 0.4}}
        className='font-bold text-2xl text-white'>SKILLS</motion.h1>
        {/* SKILLS LIST  */}
        <motion.div 
         initial={{x: "-800px"}}
         animate={isSkillRefInView ? {x: 0} : {}}
        className='flex gap-4 flex-wrap'>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">JavaScript</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">TypeScript</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">React.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Next.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Framer Motion</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Redux</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Node.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Express.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">MongoDB</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Firebase</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Github</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Bootstrap</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">Tailwind CSS</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-100 text-stone-700 hover:bg-gradient-to-r from-blue-300 to-indigo-400 hover:text-white">React Native</div>
        </motion.div>
        {/* SKILLS SVG  */}
        <motion.svg initial={{opacity: 0.2, y:0}} animate={{opacity: 1, y: "10px"}} transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f1f5f9" width={50} height={50}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V14" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></motion.svg>
        </div>
        {/* EXPERIENCE CONTAINER */}
         <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
        {/* EXPERIENCE TITLE  */}
        <motion.h1  
        initial={{x: "-350px"}}
        animate={isExperienceRefInView ? {x: 0} : {}}
        transition={{delay: 0.4}} 
        className='font-bold text-2xl text-white'>EXPERIENCE</motion.h1>
        {/* EXPERIENCE LIST  */}
        <motion.div 
         initial={{x: "-700px"}}
         animate={isExperienceRefInView ? {x: 0} : {}}
        className="">
        {/* EXPERIENCE LIST ITEM  */}
        <div className="flex justify-between h-48">
        {/* LEFT  */}
        <div className="w-1/3">
        {/* JOB TITLE  */}
        <div className="w-fit bg-white text-black p-2 font-semibold rounded-b-lg rounded-s-lg">Frontend React.js Developer</div>
        {/* JOB DESC  */}
        <div className="p-2 text-sm italic">Working as a frontend developer. working tools like reactJS, TailwindCSS and material UI and react Query to build attractive and smooth dynamic websites.</div>
        {/* JOB DATE  */}
        <div className="p-2 text-sm font-semibold bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-400 inline-block text-transparent bg-clip-text">Dec-2023 - March-2024</div>
        {/* JOB COMPANY  */}
        <div className="p-2 rounded bg-white text-stone-500 text-sm font-semibold w-fit">Hiring Mine Pvt Ltd.</div>
        </div>
        {/* CENTER  */}
        <div className="w-1/6 flex  justify-center">
        {/* LINE  */}
        <div className="w-1 h-full bg-gray-300 relative">
        {/* LINE CIRCLE  */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-400 -left-2 bg-white"></div>
        </div>
        </div>
        {/* RIGHT  */}
        <div className="w-1/3"></div>
        </div>
        {/* EXPERIENCE LIST ITEM  */}
        <div className="flex justify-between h-48">
        {/* LEFT  */}
        <div className="w-1/3"></div>
        {/* CENTER  */}
        <div className="w-1/6 flex  justify-center">
        {/* LINE  */}
        <div className="w-1 h-full bg-gray-300 relative">
        {/* LINE CIRCLE  */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-500 -left-2 bg-white"></div>
        </div>
        </div>
        {/* RIGHT  */}
        <div className="w-1/3">
           {/* JOB TITLE  */}
        <div className="w-fit bg-white text-black p-2 font-semibold rounded-e-lg rounded-b-lg">ReactJS Developer Intern</div>
        {/* JOB DESC  */}
        <div className="p-2 text-sm italic">Working as a ReactJS Intern and work on multiple project like AI website UI and Laundry website and Resume generator website and learn more about frontend development</div>
        {/* JOB DATE  */}
        <div className="p-2 text-sm font-semibold bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-400 inline-block text-transparent bg-clip-text">May-2024 - Aug-2024</div>
        {/* JOB COMPANY  */}
        <div className="p-2 mx-1 rounded bg-white text-black text-sm font-semibold w-fit">Espark Group of Consultancy Pvt Ltd.</div>
        </div>
        </div>
        {/* EXPERIENCE LIST ITEM  */}
      
         
        </motion.div>
        </div>
      </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/2 sticky top-0 z-30 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage