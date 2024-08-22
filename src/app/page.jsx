"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";

const Homepage = () => {
  
  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1.2}}>
    <div className="h-full overflow-y-scroll flex justify-around items-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-[180px] w-[180px] mt-12 md:mt-0 lg:mt-0 lg:h-3/4 lg:w-1/3 rounded-full ring-8 ring-blue-400 shadow-lg shadow-slate-300 relative">
      <Image src="/hero1.jpg" alt="user image" fill className="rounded-full"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className=" h-2/3 lg:h-full lg:w-1/2 flex flex-col gap-5 item-center justify-center">
    {/* TITLE CONTAINER */}
    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-sky-200 to-indigo-300 inline-block text-transparent bg-clip-text">Crafting Digital Experiences, Designing Tomorrow.</h1>
    {/* DESC */}
    <p className="text-base md:text-lg text-slate-100">Welcome to my web and mobile design portfolio, where innovation meets functionality, and pixels come to life. where design knows no bounds and innovation knows no limits.</p>
    {/* BUTTONS   */}
    <div className="w-full flex gap-4 md:mt-3 ">
     <Link href={"/portfolio"}><button className="p-3 md:p-4 lg:p-4 font-bold rounded-lg  bg-gradient-to-r from-blue-400 via sky-200 to-indigo-300 text-white">View My Work</button></Link>
     <a href={"/cv.pdf"} download={"cv"} ><button className="p-3 md:p-4 lg:p-4 rounded-lg ring-1 ring-slate-100 font-bold bg-gradient-to-r from-blue-400 via-sky-200 to-indigo-300 inline-block text-transparent bg-clip-text">Download Cv</button></a>
    </div>
    </div>
  </div>
  </motion.div>
)};

export default Homepage;
