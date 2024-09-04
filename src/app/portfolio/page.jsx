"use client"
import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: "from-purple-300 to-blue-300",
    title: "React Hotel Reservation",
    desc: "This is Hotel Reservation web UI which is created using ReactJS and styled Components in which user can reserve their Rooms and Booking also find best places and Hotels.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://restaurant-reservation-app-ruby.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-indigo-300",
    title: "HealthCare Website",
    desc: "This website create using NextJS and TailwindCss in this project user can see their health data and also check their heart meter BPM meter and analysis their health scale find map section to find best hospitals in city.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://nextjs-ui-iota.vercel.app/",
  },
  {
    id: 3,
    color: "from-indigo-300 to-purple-300",
    title: "GPT3 Site",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/gpt3.png",
    link: "https://famous-pasca-52da3b.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-sky-300",
    title: "Anime Movie Vault",
    desc: "This is a Movies platform website which is created using NextJS Tailwind Css and Framer Motion  it's a very basic project of mine where use can see posts and active people.",
    img: "/AnimeVault.PNG",
    link: "https://animevault3342.netlify.app/",
  },
  {
    id: 4,
    color: "from-blue-300 to-purple-300",
    title: "Youtube Clone",
    desc: "This project is a Youtube Clone which is created using ReactJS and Styled Components and fully responsive in this project user can play any videos what they want and seach its favourites videos.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://v-tube-mu.vercel.app",
  },
];


const PortfoioPage = () => {

  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref});
  const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"])
  return (
    <motion.div className="h-full text-white" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
    <div className="h-[800vh] relative" ref={ref}>
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-7xl md:text-8xl lg:text-8xl text-center">
        My Works
        </div>
      <div className="sticky top-0 flex h-screen gap-6 items-center overflow-hidden">
        <motion.div style={{x}} className="flex ">
          <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-purple-300 to-red-300" />
          
        {items.map((item)=>(
          <div className={`h-screen w-screen flex justify-center items-center bg-gradient-to-r ${item.color}`} key={item.id}>
            <div className="flex flex-col gap-6 text-white">
              <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item.title}</h1>
              <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[400px]">
              <Image src={item.img} alt='projects image' fill />
              </div>
              <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
              <Link href={item.link} target='_blank' className='flex justify-end'>
                <button className="p-2 text-sm md:p-4 md:text-base lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold  rounded">See Demo</button>
                </Link>
            </div>
          </div>
        ))}
        </motion.div >
      </div>
    </div>
        <div className="w-screen h-screen  flex flex-col mt-2 md:mt-32 gap-16 items-center justify-center text-center text-black">
          <h1 className='text-4xl md:text-6xl lg:text-8xl'>Do you have a project</h1>
          <div className="relative">
            <motion.svg animate={{rotate: 360}} transition={{duration:8, ease: "linear", repeat: Infinity}}  viewBox='0 0 300 300' className='w-80 h-80 md:w-[500px] md:h-[500px]'>
              <defs>
                <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0'
                />
              </defs>
              <text fill='#000'>
                <textPath xlinkHref='#circlePath' className='text-xl'>Front-end and Back-end Developer</textPath>
              </text>
            </motion.svg>
            <Link href="/contact" className='w-20 h-20 md-w-28 md-h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center'>Hire Me</Link>
          </div>
        </div>
  </motion.div>
  )
}

export default PortfoioPage