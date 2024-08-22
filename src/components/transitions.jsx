"use client"
import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar"
import {motion} from "framer-motion"
import { usePathname } from "next/navigation"

const Transitions = ({children}) => {
    const pathName = usePathname();
    console.log(pathName)
  return (
    <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen h-screen bg-black">
           
            <motion.div className="h-screen w-screen fixed bg-gradient-to-r from-stone-700 to-stone-800 rounded-b-[100px] z-40" 
            animate={{height: "0vh"}}
            exit={{height:"140vh"}}
            transition={{duration: 0.9, ease: "easeIn" }}
            />

            <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-7xl cursor-default w-fit h-fit z-50" 
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.6, ease: "easeIn" }}
            >
                {pathName.substring(1)}
            </motion.div>

            <motion.div className="h-screen w-screen fixed bg-gradient-to-r from-stone-700 to-stone-800 rounded-t-[100px] bottom-0 z-30 " 
            initial={{height: "140vh"}}
            animate={{height:"0vh", transition: { delay: 0.9 } }}
            />

          <div className="h-20">
          <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
        {children}
          </div>
        </div>
    </AnimatePresence>
  )
}

export default Transitions