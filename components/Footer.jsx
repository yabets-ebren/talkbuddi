
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaTiktok, FaLinkedin  } from 'react-icons/fa';


const Footer = () => {
  return (
      <div className="hidden md:block flex-column container w-90 mx-auto  py-1 md:py-16 md:px-6 space-y-1">
        <div className="flex w-full justify-between items-center py-5">
          <div className="flex-column space-y-1 pl-4">
            <div>
              <Link href="/">
                <Image className="cursor-pointer" src="/assets/buddi_logo.png" width={188} height={66} objectFit="fill"  alt="logo"/>
              </Link>
            </div>
            <ul className="flex-column font-nunito text-sm md:flex space-x-3 capitalize">
              <li  className=" text-gray transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                <Link href="#">home</Link>
              </li>
              <li className=" text-gray transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                <Link href="#">features</Link>
              </li>
              <li className=" text-gray transition ease-in-out delay-150 hover:text-purple cursor-pointer">
                <Link href="#">careers</Link>
              </li>
              <li className=" text-gray transition ease-in-out delay-1500 hover:text-purple cursor-pointer">
                <Link href="#">contact</Link>
              </li>
              </ul>
          </div>
          <div className="flex space-x-4">
            <button className="text-purple text-3xl transition ease-in-out delay-100 hover:scale-110">
              <Link href="https://www.instagram.com/buddi.us/?hl=en">
                <FaInstagram />
              </Link>
            </button>
            <button className="text-purple text-3xl transition ease-in-out delay-100 hover:scale-110">
              <Link href="https://www.tiktok.com/@buddiapp">
                <FaTiktok />
              </Link>
            </button>
            <button className="text-purple text-3xl transition ease-in-out delay-100 hover:scale-110">
              <Link href="https://www.linkedin.com/company/talkbuddi">
                <FaLinkedin />
              </Link>
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-gray"></div>
        <div className="flex space-x-20 pt-4 pl-4">
          <p className="text-gray font-nunito">© 2022 Buddi LLC, All Rights Reserved. </p>
          <ul className="flex space-x-2">
              <li className="text-gray font-nunito">
                <Link href="#">
                  Terms of Use |
                </Link>
              </li>
              <li className="text-gray font-nunito">
                <Link href="#">
                  Privacy Policy |
                </Link>
              </li>
              <li className="text-gray font-nunito text-base">
                <Link href="#">
                  Community Guidelines
                </Link>
              </li>
          </ul>

        </div>
      </div>
  )
}

export default Footer