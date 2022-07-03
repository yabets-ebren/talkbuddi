import Image from "next/image"
import Bars from "../components/Bars"
import { FAQ } from '../info'

const Contact = () => {
  return (
    <>
      <div className="mx-auto container w-90 flex flex-col mt-32 md:flex-row shdow-big">
        <div className="flex flex-col justify-center items-center px-4 space-y-10 text-center md:w-1/2 lg:px-20 md:items-start">
          <h1 className="text-4xl  font-medium font-poppins text-purple md:text-5xl md:text-start md:max-w-xl">We are here to answer your questions!</h1>
          <p className="max-w-sm text-gray md:text-start font-montserat">Please fill out the form to the right to reach our team! Please be as detailed as possible to receive the quickest response time possible.</p>
          <div className="relative w-full h-full" >
            <Image src="/assets/contact.svg" alt="contact us illustration" layout='fill'/>
          </div>
        </div>
        <div className="flex flex-col p-6 bg-yellow rounded-md md:w-1/2 md:px-8 lg:px-20 md:py-15">
          <form className="flex flex-col gap-y-6 lg:gap-y-12" action="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 md:gap-x-12 lg:gap-y-0">
              <div className="flex flex-col-reverse gap-y-2   font-montserat">
                <input className="p-2 rounded-md peer focus:outline-none border-transparent border-2 transition-all focus:border-purple focus:border-2 " type="text" id="fname"  required/>
                <label for='fname' className="font-semibold text-white peer-focus:text-purple" htmlFor="fname" aria-required >First Name:</label>
              </div>
              <div className="flex flex-col-reverse gap-y-2   font-montserat">
                <input className="p-2 rounded-md peer focus:outline-none border-transparent border-2 transition-all focus:border-purple focus:border-2 " type="text" id="lname"  required/>
                <label for='lname' className="font-semibold text-white peer-focus:text-purple" htmlFor="lname" aria-required >Last Name:</label>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-y-2   font-montserat">
                <input className="p-2 rounded-md peer focus:outline-none border-transparent border-2 transition-all focus:border-purple focus:border-2 " type="email" id="email"  required/>
                <label for='email' className="font-semibold text-white peer-focus:text-purple" htmlFor="email" aria-required >Best Email to Reach You At:</label>
              </div>
              <div className="flex flex-col-reverse gap-y-2   font-montserat">
                <input className="p-2 rounded-md peer focus:outline-none border-transparent border-2 transition-all focus:border-purple focus:border-2 " type="text" id="subject"  required/>
                <label for='subject' className="font-semibold text-white peer-focus:text-purple" htmlFor="subject" aria-required >Contact Reason:</label>
              </div>
            <div className="flex flex-col-reverse gap-y-2   font-montserat">
              <textarea type="text" className="rounded-md resize-none p-2 peer focus:outline-none border-transparent border-2 transition-all focus:border-purple focus:border-2" rows={6} required/>
              <label className="font-semibold text-white peer-focus:text-purple" htmlFor="desc">Description:</label>
            </div>
            <button type="submit" className="bg-purple px-4 py-2 font-montserat w-fit text-white rounded-md self-center">Submit</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-60">
        <h2 className="font-poppins text-3xl px-4 md:text-4xl">Frequently Asked Questions</h2>
      </div>
      <div className="mx-auto container grid grid-cols-1 mt-24 mb-32 w-90 space-y-10 md:w-2/3">
        {FAQ.map((faq=>(
          <Bars  heading={faq.question} desc={faq.answer} colored={faq.colored}/>
        )))
        }
      </div>
    
    </>
  )
}

export default Contact

export const getStaticProps =  () => {
  const data = FAQ;

  return {
      props: {data}
  }
}
