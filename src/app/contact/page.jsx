"use client"
import { useRef, useState } from 'react'
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser';


const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello"

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true)
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true)
        },
      );
  };
  return (
    <motion.div className="h-full p-2 bg-white text-black" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
    <div className="h-full flex flex-col justify-start lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* TEXT CONTAINER */}
      <div className="h-1/4 lg:h-full lg:w-1/2 flex items-start md:items-center lg:items-center justify-center text-6xl mt-8 md:mt-0 lg:mt-0">
        <div>
          {text.split("").map((letter,index)=>(
            <motion.span className='text-5xl md:text-6xl lg:text-7xl' key={index} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 3, repeat: Infinity, delay: index * 0.1}}>{letter}</motion.span>
          ))}
        </div>
        😊
      </div>
      {/* FORM CONTAINER */}
      <form onSubmit={sendEmail} ref={form} className="h-3/4 lg:h-full lg:w-1/2 bg-gradient-to-t from-red-200 to-slate-300 rounded-md flex flex-col gap-8 justify-center p-12 md:p-24 lg:p-24">
        <span>Dear Aamir Khan,</span>
        <textarea rows={6} name='user_message' className='bg-transparent border-b-2 border-b-black outline-none resize-none '/>
        <span>My mail address:</span>
       <input type="text" name='user_email' className='bg-transparent border-b-2 border-b-black outline-none'/>
        <span>Regards</span>
        <button className='bg-purple-300 rounded font-semibold text-gray-600 p-4'>Send</button>
        {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
        {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
      </form>
    </div>
  </motion.div>
  )
}

export default ContactPage