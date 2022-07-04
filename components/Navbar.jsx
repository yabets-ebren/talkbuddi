import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react"
import { motion } from "framer-motion";
const Navbar = () => {

  const[open, setOpen] = useState(false);
  const transition = {duration:2, type:'tween'};


  const router = useRouter()
  return (
  
    <div className="shadow-big">
    <motion.nav
     initial={{opacity:'0%'}}
     animate={{opacity:'100%'}}
     transition={transition}  
     className="container  relative mx-auto py-2" >
        <div className="flex mx-auto w-90 justify-between items-center">
          <div className="scale-75 -ml-4 md:scale-100 md:ml-0">
            <button>
              <Link href="/">
                <Image className="cursor-pointer" src="/assets/buddi_logo.png" width={188} height={66} objectFit="fill" priority alt="logo"/>
              </Link>
            </button>
          </div>
          <ul className="hidden font-poppins md:flex space-x-6 capitalize">
              <li  className={`${router.pathname == '/' ? 'active' : ""} text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer`}>
                <Link href="/"> home</Link>
              </li>
              <li className={`text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer`}>
                <Link href="/#features">features</Link>
              </li>
              <li className={`${router.pathname == '/careers' ? 'active' : ""} text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer`}>
                <Link href="/careers">careers</Link>
              </li>
              <li className={`${router.pathname == '/contact' ? 'active' : ""} text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer`}>
                <Link href="/contact">contact</Link>
              </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <button onClick={() => (setOpen(!open))} id="menu-button" className={`hamburger ${open ? "open" : ""} md:hidden focus:outline-none`}>
            <span className="hamTop"></span>
            <span className="hamMid"></span>
            <span className="hamBot"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <ul onClick={() => (setOpen(false))} className={`absolute ${open ? "opacity-100" : "opacity-0"} t transition-all duration-500 text-gray flex flex-col items-center self-end py-8 pt-10 space-y-8 z-10 capitalize font-poppins font-normal bg-white sm:self-center w-full drop-shadow-xl`}>
              <li className={`${router.pathname == '/' ? 'active' : ""}`}><Link href="/">home</Link></li>
              <li><Link href="/#features">features</Link></li>
              <li className={`${router.pathname == '/careers' ? 'active' : ""}`}><Link href="/careers">careers</Link></li>
              <li className={`${router.pathname == '/contact' ? 'active' : ""}`}><Link href="/contact">contact</Link></li>
          </ul>
        </div>
    </motion.nav>

    </div>
  )
}

export default Navbar