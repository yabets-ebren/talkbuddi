
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaTiktok, FaLinkedin  } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
        <div className="h-2 w-full bg-purple"></div>
        <motion.div 
          initial={{opacity:'0%'}}
          animate={{opacity:'100%'}}
          transition={{duration:2, type:'tween'}}
          className=" flex-column container w-90 mx-auto pb-4  py-1 space-y-1 md:pt-16 md:px-6 ">
          <div className="flex flex-col w-full gap-y-3 justify-between items-center py-5 md:flex md:flex-row md:gap-y-0">
            <div className="flex flex-col space-y-1 md:pl-4 ">
                <button className=" scale-75 md:scale-100">
                  <Link href="/">
                    <Image className="cursor-pointer" src="/assets/buddi_logo.png" width={188} height={66} objectFit="fill"  alt="logo"/>
                  </Link>
                </button>
              <ul className="flex flex-col gap-y-2 pb-4 font-nunito justify-center items-center capitalize text-sm md:flex md:flex-row md:space-x-3 md:gap-y-0 md:pb-0">
                <li  className=" text-gray transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                  <Link href="/">home</Link>
                </li>
                <li className=" text-gray transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                  <Link href="#features">features</Link>
                </li>
                <li className=" text-gray transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                  <Link href="/careers">careers</Link>
                </li>
                <li className=" text-gray transition ease-in-out delay-1500 hover:text-purple cursor-pointer">
                  <Link href="/contact">contact</Link>
                </li>
                </ul>
            </div>
            <div className="flex space-x-4">
              <button className="text-purple text-2xl transition ease-in-out delay-100 hover:scale-110 md:text-3xl">
                <Link href="https://www.instagram.com/buddi.us/?hl=en">
                  <FaInstagram />
                </Link>
              </button>
              <button className="text-purple text-2xl transition ease-in-out delay-100 hover:scale-110 md:text-3xl">
                <Link href="https://www.tiktok.com/@buddiapp">
                  <FaTiktok />
                </Link>
              </button>
              <button className="text-purple text-2xl transition ease-in-out delay-100 hover:scale-110 md:text-3xl">
                <Link href="https://www.linkedin.com/company/talkbuddi">
                  <FaLinkedin />
                </Link>
              </button>
            </div>
          </div>
          <div className="h-px w-full bg-gray"></div>
          <div className="flex flex-col-reverse gap-y-3  pt-4 lg:pl-4 md:space-x-20 lg:flex lg:flex-row md:gap-y-2">
            <p className="text-gray font-nunito text-center text-sm md:text-base">© 2022 Buddi LLC, All Rights Reserved. </p>
            <div className="flex flex-row items-center text-center justify-center text-xs gap-y-1 space-x-2 md:text-base md:space-x-1 md:gap-y-0 md:flex-row">
                <div className="text-gray font-nunito">
                  <Link href="#">
                    Terms of Use |
                  </Link>
                </div>
                <div className="text-gray font-nunito">
                  <Link href="#">
                    Privacy Policy |  
                  </Link>
                </div>
                <div className="text-gray font-nunito">
                  <Link href="#">
                    Community Guidelines
                  </Link>
                </div>
            </div>

          </div>
        </motion.div>

    </>
      
  )
}

export default Footer