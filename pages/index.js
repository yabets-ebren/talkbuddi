import Image from "next/image";
import Link from "next/link";
import Board from "../components/Board";
import Card from "../components/Card";
import CircleImages from '../components/CircleImages'
import { info, feature, faces } from '../info'
import { motion } from "framer-motion";

const Index = () => {

    const transition = {duration:2, type:'spring'};

    return(
        <>
        <div className="container space-y-12 flex flex-col mx-auto mt-32 mb-2 items-center w-90 md:pl-12 md:space-y-0 md:flex-row md:pb-44 md:pt-8">
            
            {/* HERO TEXT  */}
            
            <motion.div
            animate={{y:'0%', opacity:"100%",  delay:1}}
            initial={{y: '200%', opacity:'0%' }}
            transition={ {duration:1, type:'spring', delay:1}}
            
            transition={transition}

            className="flex flex-col space-y-8  md:w-1/2 ">
                <h1 className=" text-purple leading-10	 text-center text-4xl font-medium font-poppins  md:text-5xl md:text-left md:max-w-xl">
                    The ultimate college student app.
                </h1>
                <p className="font-montserat max-w-lg font-xl text-center md:text-left">Buddi is a college student exclusive app to connect with your campus and students everywhere.</p>
                <motion.div 
                    initial={{opacity:'0%'}}
                    animate={{opacity:'100%'}}
                    transition={{duration:1}}
                    className="flex space-x-5 items-center justify-center md:justify-start">
                    <button className="px-3 py-2 rounded-md shadow-md">Coming Soon!</button>
                    <Link href="/contact">
                        <button className="bg-yellow border-purple  text-white px-3 py-2 rounded-md shadow-md transition-all duration-1000 lg:hover:scale-110 lg:hover:-mt-2 lg:hover:shadow-lg">
                            Contact
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
            
            {/* HERO IMAGES */}
            <div className="relative w-full md:w-1/2">
                <div className="w-full flex-shrink-0 flex items-center justify-center max-h-max-hero-height">
                    <motion.div
                     transition={{delay:1, duration:0.7, type:'spring'}}
                     initial={{ scale:'0%',}}
                     animate={{ scale:'100%'}}
                     className="overflow-hidden relative  w-44 h-96 z-10" >
                        <Image className="z-10" src="/assets/newiphone.png" alt="image of an iphone" layout="fill" objectFit='fill' priority/>
                        <div className=" bg-yellow z-1 m-2 flex items-center justify-center rounded-2xl w-40 h-hiphone">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <Image src="/assets/vertLogo.png" alt="buddi logo"  layout="fill" priority/>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="hidden w-full  top-0 left-0 absolute h-full opacity-100 lg:block ">
                    <motion.div
                        initial={{opacity:'0'}}
                        animate={{opacity:'100'}}
                        transition={{delay:1.15, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier1" size="w-24 h-24" border="border-six border-purple" image={<Image src={`/assets/faces/1.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                    <motion.div
                        initial={{opacity:'0'}}
                        animate={{opacity:'100'}}
                        transition={{delay:1.4, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier2" size="w-20 h-20" border="border-six border-orange" image={<Image src={`/assets/faces/2.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity:'0'}}
                        animate={{ opacity:'100'}}
                        transition={{delay:1.7, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier3" size="w-24 h-24" border="border-six border-green" image={<Image src={`/assets/faces/3.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity:'0'}}
                        animate={{ opacity:'100'}}
                        transition={{delay:1.3, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier4" size="w-20 h-20" border="border-six border-red" image={<Image src={`/assets/faces/4.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity:'0'}}
                        animate={{ opacity:'100'}}
                        transition={{delay:1.2, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier5" size="w-24 h-24" border="border-six border-yellow" image={<Image src={`/assets/faces/5.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity:'0'}}
                        animate={{ opacity:'100'}}
                        transition={{delay:1.6, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier6" size="w-20 h-20" border="border-six border-light-orange" image={<Image src={`/assets/faces/6.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity:'0'}}
                        animate={{ opacity:'100'}}
                        transition={{delay:1.5, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier7" size="w-16 h-16" border="border-six border-skyblue" image={<Image src={`/assets/faces/1.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity:'0'}}
                        animate={{ opacity:'100'}}
                        transition={{delay:1.1, duration:1.5, type:'spring'}}
                        >
                        <CircleImages position="tier8" size="w-24 h-24" border="border-six border-water" image={<Image src={`/assets/faces/2.jpg`} alt="picture of a person" layout="fill" objectFit="cover" priority />} />
                    </motion.div>
                </div>

            </div>

        </div>
        {/* <div className="h-10 w-full border-t-4 border-purple  bg-light-gray"></div> */}


        {/* ABOUT US SECTION */}

        <div className="flex flex-col items-center justify-center">
            <h2 className="font-poppins font-medium text-3xl text-black text-center tracking-wide mt-24 md:text-4xl md:mt-32">Why join Buddi?</h2>
            <motion.div 
            initial={{width:'0px'}}
            whileInView={{width:"112px"}}
            viewport={{ once: true }}
            transition={{duration:1}}
            className="mt-3 h-2 bg-purple w-52 self-center"></motion.div>
            <p className=" font-montserat w-90 mx-auto font-xl text-black text-center px-4 pt-4">Here are a few reasons why we're awesome</p>
        </div>
        <div className="mt-12 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:w-90 md:mt-16 md:pb-40">
            <motion.div
                initial={{y:'50%', opacity:'0%'}}
                whileInView={{y:'0%', opacity:'100%'}}
                viewport={{once:true}}
                transition={{duration:1, type:'tween'}}>

                <Card head="By Students, For Students" desc="Why we are better" image={<Image src={`/assets/about/graduate.svg`} alt="illustration of graduating student" layout="fill" priority/>} />
            </motion.div>
            <motion.div
                initial={{y:'50%', opacity:'0%'}}
                whileInView={{y:'0%', opacity:'100%'}}
                viewport={{once:true}}
                transition={{duration:1, type:'tween'}}>

                <Card head="Connecting Students Campus and Country Wide" desc="Why we are better" image={<Image src={`/assets/about/building.svg`} alt="illustration of a campus building" layout="fill" priority/>} />
            </motion.div>
            <motion.div
                initial={{y:'50%', opacity:'0%'}}
                whileInView={{y:'0%', opacity:'100%'}}
                viewport={{once:true}}
                transition={{duration:1, type:'tween'}}>

                <Card head="Beneficial Mental Health and Wellbeing Features" desc="Why we are better" image={<Image src={`/assets/about/brain.svg`} alt="illustration of a human brain" layout="fill" priority/>} />
            </motion.div>
            <motion.div
                initial={{y:'50%', opacity:'0%'}}
                whileInView={{y:'0%', opacity:'100%'}}
                viewport={{once:true}}
                transition={{duration:1, type:'tween'}}>

                <Card head="Exclusive to Undergraduates" desc="Why we are better" image={<Image src={`/assets/about/lock.svg`} alt="illustration of a lock" layout="fill" priority/>} />
            </motion.div>

        </div>

        {/* FEATURE SECTION */}

        <div id="features" className="flex flex-col items-center justify-center" >
            <h2 className="font-poppins font-medium text-3xl text-black text-center tracking-wide mt-24 md:text-4xl md:mt-32">Our Features</h2>
            <motion.div 
            initial={{width:'0px'}}
            whileInView={{width:"112px"}}
            viewport={{ once: true }}
            transition={{duration:1}}
            className="mt-2 h-2 bg-purple w-full self-center"></motion.div>
            <p className=" font-montserat font-xl text-black text-center px-4  pt-2">Click on each feature to learn more</p>
        </div>
        <div className="mt-16 grid grid-cols-1 container mx-auto first:hidden gap-y-12 prespective-100 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:w-90 md:mt-16 md:pb-40">
            {feature.map(feat =>(
                <Board key={feat.id} image={<Image src={`/assets/features/${feat.image}`} alt={feat.alt} layout="fill" priority/>} title={feat.title} bgColor={feat.bgColor} backTitle={feat.backTitle} backdesc={feat.backDesc} fontColor={feat.fontColor} borderColor={feat.borderColor}/>
            ))}
        </div>

        {/* Bottom Call To Action */}

        <div className="mt-16 h-60 bg-purple w-full flex flex-col items-center justify-center text-center md:mt-32">
            <h2 className="text-white text-2xl font-medium pb-2 md:text-3xl "> Ready to join the hype?</h2>
            <p className="text-yellow text-xl underline">
                <Link href="#">
                    Click here to download
                </Link>
            </p>
            {/* <p className="hidden border-six w-28 h-28 w-20 w-16 h-16 border-water h-20 border-light-orange bg-pink border-red border-orange bg-skyblue bg-green text-green text-pink text-skyblue border-green border-skyblue border-pink">none:test</p> */}
        </div>

        {/* ************** */}
        </>
    )
}

export default Index;

export const getStaticProps =  () => {
    const data = info;

    return {
        props: {data}
    }
}
