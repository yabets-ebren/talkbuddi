import Image from "next/image"
import Bars from "../components/Bars"
import { FAQ } from '../info'

const Contact = () => {
  return (
    <>
      <div className="mx-auto container w-90 flex flex-col mt-32 md:flex-row">
        <div className="flex  flex-col justify-center items-center px-20 space-y-12 text-center md:w-1/2 md:items-start">
          <h1 className="text-3xl max-w-xl font-medium font-poppins text-purple md:text-5xl md:text-start">We are here to answer your questions!</h1>
          <p className="max-w-sm text-gray md:text-start font-montserat">Please fill out the form to the right to reach our team! Please be as detailed as possible to receive the quickest response time possible.</p>
          <div className="relative w-72 h-72" >
            <Image src="/assets/contact.svg" alt="contact us illustration" layout='fill'/>
          </div>
        </div>
        <div className="flex flex-col p-6 bg-yellow rounded-md md:w-1/2 md:px-20 md:py-15">
          <form className="flex flex-col gap-y-12" action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <div className="flex flex-col space-y-2   font-montserat">
                <label className="font-semibold text-white" htmlFor="fname" aria-required >First Name</label>
                <input className="p-2 rounded-md" type="text"  required/>
              </div>
              <div className="flex flex-col space-y-2   font-montserat">
                <label className="font-semibold text-white" htmlFor="lname">Last Name</label>
                <input className="p-2 rounded-md" type="text" required/>
              </div>

            </div>
            <div className="flex flex-col space-y-2   font-montserat">
              <label className="font-semibold text-white" htmlFor="email">Best Email to Reach You At:</label>
              <input className="p-2 rounded-md" type="email" required/>
            </div>
            <div className="flex flex-col space-y-2   font-montserat">
              <label className="font-semibold text-white" htmlFor="subject">Contact Reason:</label>
              <input className="p-2 rounded-md selection:border-red selection:border-8 " type="text" required/>
            </div>
            <div className="flex flex-col space-y-2   font-montserat">
              <label className="font-semibold text-white" htmlFor="desc">Description:</label>
              <textarea type="text" className="rounded-md resize-none p-2" rows={6} required/>
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
