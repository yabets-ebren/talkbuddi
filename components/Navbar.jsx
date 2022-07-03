import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react"

const Navbar = () => {

  const[open, setOpen] = useState(false);


  const router = useRouter()
  return (

    <nav className="container  relative mx-auto py-2 shadow-big" >
        <div className="flex mx-auto w-90 justify-between items-center">
          <div className=" scale-75 -ml-4 md:scale-100 md:ml-0">
            <button>
              <Link href="/">
                <Image className="cursor-pointer" src="/assets/buddi_logo.png" width={188} height={66} objectFit="fill"  alt="logo"/>
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
              <li className={`${router.pathname == '/careers' ? 'active' : ""}text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer`}>
                <Link href="/careers">careers</Link>
              </li>
              <li className={`${router.pathname == '/contact' ? 'active' : ""}text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer`}>
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
          <div onClick={() => (setOpen(false))} className={`absolute ${open ? "" : "hidden"} transition-all flex flex-col items-center self-end py-8 pt-10 space-y-6 z-10 capitalize font-nunito font-semibold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
              <Link href="/">home</Link>
              <Link href="/#features">features</Link>
              <Link href="/careers">careers</Link>
              <Link href="/contact">contact</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar