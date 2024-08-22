"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks } from './navLinks'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAmilia, faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'


const links = [
  {url: "/", title: "Home", sNo: 1},
  {url: "/about", title: "About", sNo: 2},
  {url: "/portfolio", title: "Portfolio", sNo: 3},
  {url: "/contact", title: "Contact", sNo:4},
]
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants={
    closed:{
      rotate: 0,
    },
    opened:{
      rotate: 40,
      backgroundColor: "white"
    }
  }

  const centerVariants={
    closed:{
      opacity: 1,
    },
    opened:{
      opacity: 0,
    }
  };

  const bottomVariants={
    closed:{
      rotate: 0,
    },
    opened:{
      rotate: -40,
      backgroundColor: "white"
    }
  };

const listVariants = {
  closed : {
    x : "100vw"
  },
  opened : {
    x : 0,
    transition : {
      when : "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const listItemsVariants = {
  closed : {
    x : -10,
    opacity : 0,
  },
  opened : {
    x : 0,
    opacity : 1,
  }
};

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg bg-stone-800'>
      {/* LINKS */}
      <div className='hidden md:flex gap-4 w-1/3'>
      {
        links.map((link)=> (
         <NavLinks link={link} key={link.title} />
        ))
      }
      </div>
      {/* LOGO */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
      <Link href="/" className='text-sm flex items-center justify-center'>
        <span className='font-semibold mr-1 text-2xl md:text-3xl text-white'>AKMDev.</span>
      </Link>
      </div>
      {/* SOCIALS */} 
      <div className='hidden md:flex gap-6 w-1/3 pt-1'>
        <Link className='rounded-full flex items-center justify-center' href="https://github.com/Amrkhwazir" target='_blank'>
      <FontAwesomeIcon icon={faGithub} className='text-white text-2xl hover:text-blue-400'/>
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="https://www.facebook.com/profile.php?id=100010422636331" target='_blank'>
      <FontAwesomeIcon icon={faFacebook} className='text-white text-2xl hover:text-blue-400'/>
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="mailto:amrkh5678@gmail.com" target='_blank'>
      <FontAwesomeIcon icon={faEnvelope} className='text-white text-2xl hover:text-blue-400'/>
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="https://www.instagram.com/aamirkh53433/" target='_blank'>
      <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl hover:text-blue-400'/>
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="https://www.linkedin.com/in/aamir-khan-215836233/" target='_blank'>
      <FontAwesomeIcon icon={faLinkedin} className='text-white text-2xl hover:text-blue-400'/>
        </Link>
      </div>
      {/* MENU */}
      <div className='md:hidden'>
        
        <button  className='w-10 bg h-7 flex flex-col justify-between z-50 relative' onClick={() => setOpen((prev) => !prev)}>
          <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className=' w-10 h-1 bg-white rounded origin-left'></motion.div>
          <motion.div animate={open ? "opened" : "closed"} variants={centerVariants} className=' w-10 h-1 bg-white rounded'></motion.div>
          <motion.div animate={open ? "opened" : "closed"} variants={bottomVariants} className=' w-10 h-1 bg-white rounded origin-left'></motion.div>
        </button>
        {/* MENU LIST */}
        { open &&

          <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 right-0 w-screen h-screen bg-gradient-to-r from-blue-400 via sky-200 to-indigo-300 text-white flex flex-col items-center justify-start pt-32 gap-16 text-3xl z-40'>
              <span className='font-semibold absolute text-white top-6 left-4 text-2xl md:hidden'>AKMDev.</span>
      {links.map((link)=> (
        <motion.div  variants={listItemsVariants} key={link.title}>
        <Link href={link.url}>
          {/* <span className='bg-zinc-200 w-10 text-center text-black absolute -mt-5  left-20'>{link.sNo}</span> */}
          <span>{link.title}</span>
          </Link>
          </motion.div> 
      ))}
       <div className=' flex gap-8 w-screen justify-center h-20 absolute bottom-10'>
        <Link className='rounded-full flex items-center justify-center' href="https://github.com/Amrkhwazir" target='_blank'>
      <Image src="/githubsvg.png" alt=""  width={32} height={32} />
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="https://www.facebook.com/profile.php?id=100010422636331" target='_blank'>
      <Image src="/facebooksvg.png" alt="" width={32} height={32} />
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="mailto:amrkh5678@gmail.com" target='_blank'>
      <Image src="/Gmail.png" alt="" width={32} height={32} />
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="https://www.instagram.com/aamirkh53433/" target='_blank'>
      <Image src="/instagramsvg.png" alt="" width={32} height={32} />
        </Link>
        <Link className='rounded-full flex items-center justify-center' href="https://www.linkedin.com/in/aamir-khan-215836233/" target='_blank'>
      <Image src="/linkedinroundsvg.png" alt="" width={32} height={32} />
        </Link>
      </div>
        </motion.div>
    }
      </div>
    </div>
  )
}

export default Navbar