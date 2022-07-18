import { motion } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import Bars from "../components/Bars"
import { FAQ } from '../info'
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  // EMAIL SERVICE WITH EMAIL JS
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setSent(true)
      }, (error) => {
      });
      e.target.reset()

  };

  // NOTIFY USERS
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <Head>
            <title>Talkbuddi - Contact</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Talkbuddi..." />
            <meta name="keywords" content="college mental-health baz" />
            <meta property="og:title" content="Talkbuddi - Contact" />
            <meta property="og:description" content="Description goes here" />
      </Head>
      <div className="mx-auto container w-90 flex flex-col mt-32 md:flex-row shdow-big">
        <motion.div
        initial={{x:'-50%', opacity:'0%'}} 
        animate={{x:'0%', opacity:'100%'}}
        transition={{ duration:1, type:'tween'}}
        className="flex flex-col justify-center items-center px-4 space-y-10 text-center md:w-1/2 lg:px-20 md:items-start">
          <h1 className="text-4xl  font-medium font-poppins text-purple md:text-5xl md:text-start md:max-w-xl">We are here to answer your questions!</h1>
          <p className="max-w-sm text-gray md:text-start font-montserat">Please fill out the form to the right to reach our team! Please be as detailed as possible to receive the quickest response time possible.</p>
          <div className="relative w-full h-full" >
            <Image src="/assets/contact.svg" alt="contact us illustration" layout='fill'/>
          </div>
        </motion.div>
        <motion.div 
          initial={{opacity:'0%'}}
          animate={{opacity:'100%'}}
          transition={{delay:1, duration:1, type:'tween'}}
          className="flex flex-col p-6 bg-yellow rounded-md md:w-1/2 md:px-8 lg:px-16 md:py-15">
          <form className="flex flex-col gap-y-6 lg:gap-y-12" ref={form} onSubmit={sendEmail}>
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
              <textarea type="text" className="rounded-md resize-none p-2 peer focus:outline-none border-transparent border-2 transition-all focus:border-purple focus:border-2" name="message" rows={6} required/>
              <label className="font-semibold text-white peer-focus:text-purple" htmlFor="desc">Description:</label>
            </div>
            <button type="submit" className="bg-purple px-4 py-2 font-montserat w-fit text-white rounded-md self-center">Submit</button>
          </form>

        </motion.div>
      </div>
      <div className="text-center mt-60 flex flex-col items-center justify-center">
        <h2 className="font-poppins text-3xl px-4 md:text-4xl">Frequently Asked Questions</h2>
        <motion.div 
            initial={{width:'0px'}}
            whileInView={{width:"112px"}}
            viewport={{ once: true }}
            transition={{duration:1}}
            className="mt-3 h-2 bg-purple w-52 self-center"></motion.div>
      </div>
      <motion.div 
        initial={{scale:'70%'}}
        whileInView={{scale:'100%'}}
        viewport={{ once: true }}
        transition={{duration:1}}
        className="mx-auto container grid grid-cols-1 mt-24 mb-32 w-90 space-y-10 md:w-2/3">
        {FAQ.map((faq=>(
          <Bars key={faq.id}  heading={faq.question} desc={faq.answer} colored={faq.colored}/>
        )))
        }
      </motion.div>
    
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
