import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
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

          <button className="md:hidden p-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          </button>
          <ul className="hidden font-poppins md:flex space-x-6 capitalize">
              <li  className=" text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                <Link href="/">home</Link>
              </li>
              <li className=" text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                <Link href="/#features">features</Link>
              </li>
              <li className=" text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                <Link href="/careers">careers</Link>
              </li>
              <li className=" text-gray leading-7 transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                <Link href="/contact">contact</Link>
              </li>
          </ul>
        </div>

    </nav>
  )
}

export default Navbar