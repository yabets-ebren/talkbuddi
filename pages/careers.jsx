import Image from "next/image"
import { team, volunteer } from "../info"
import dynamic from 'next/dynamic'
import Bars from "../components/Bars";
import { motion } from "framer-motion";

const CircleImages = dynamic(() => import("../components/CircleImages"), {
  ssr: false,
  });

const Careers = () => {
  return (

    <>
      <div className="bg-yellow mt-24 mb-40 shadow-big">
        <div className="container mx-auto flex flex-col-reverse md:flex-row">
            {/* HERO TEXT  */}
            <div className="flex flex-col justify-center  items-center text-center  md:w-1/2 ">
              <h1 className="text-white text-4xl font-poppins pt-10 pb-6 md:text-4xl lg:text-5xl md:pt-0">Our Mission</h1>
              <p className="text-2xl max-w-md font-montserat pb-10 px-2 mx-auto md:text-3xl lg:text-4xl md:pb-0">Buddi seeks to create connections, encourage transparency and faciliate comfort within the college student community</p>
            </div>
            {/* HERO IMAGE */}
            <div className="w-full h-96 md:w-1/2 md:h-hero">
                  <div className="relative w-full h-full" >
                      <Image src="/assets/college_students.png" alt="college students" layout="fill" objectFit='cover' priority/>
                  </div>
            </div>
        </div>
      </div>
      <div className="text-center mb-20 flex flex-col items-center justify-center">
        <h2 className="font-poppins text-3xl  md:text-4xl">Team Leaders</h2>
        <motion.div 
            initial={{width:'0px'}}
            whileInView={{width:"112px"}}
            viewport={{ once: true }}
            transition={{duration:1}}
            className="mt-3 h-2 bg-purple w-52 self-center"></motion.div>
      </div>
      <motion.div
        initial={{opacity:'0%'}}
        whileInView={{opacity:'100%'}} 
        viewport={{ once: true }}
        transition={{duration:2}}
        className="container mb-40  grid grid-cols-1 w-90 gap-y-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {team.map(t=>(
          <CircleImages key={t.id} width="w-52" height="h-52" name={t.name} title={t.title}/>))
        }
      </motion.div>
      <div className="text-center mt-60 flex flex-col items-center justify-center">
        <h2 className="font-poppins text-3xl px-4 md:text-4xl">Volunteer and Internship Programs</h2>
        <motion.div 
            initial={{width:'0px'}}
            whileInView={{width:"112px"}}
            viewport={{ once: true }}
            transition={{duration:1}}
            className="mt-3 h-2 bg-purple w-52 self-center"></motion.div>
      </div>
      <div className="container w-90 mx-auto grid grid-cols-1 mt-20 mb-60 gap-y-16 md:gap-x-20 lg:gap-y-0 lg:grid-cols-2">
        {volunteer.map((v)=>(
          <Bars key={v.id} heading={v.head} desc={v.desc}/>
        ))
        }
      </div>

      </>

  )
}

export default Careers

export const getStaticProps =  () => {
  const data = team;

  return {
      props: {data}
  }
}
