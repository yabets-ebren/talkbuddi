import Image from "next/image";
import Link from "next/link";
import Board from "../components/Board";
import Card from "../components/Card";
import { info, feature } from '../info'


const Index = ({data}) => {
    return(
        <>
        <div className="container space-y-12 flex flex-col mx-auto mt-16 mb-2 items-center w-90 md:pl-12 md:space-y-0 md:flex-row">
            
            {/* HERO TEXT  */}
            
            <div className="flex flex-col space-y-8  md:w-1/2 ">
                <h1 className=" text-purple leading-10	 text-center text-4xl font-poppins  md:text-5xl md:text-left">
                    The ultimate college student app.
                </h1>
                <p className="font-montserat max-w-lg font-xl text-center md:text-left">Buddi is a college student exclusive app to connect with your campus and students everywhere.</p>
                <div className="flex space-x-5 items-center justify-center md:justify-start">
                    <button className="px-3 py-2 rounded-md shadow-md">Coming Soon!</button>
                    {/* FIXME: Add transition to hover */}
                    <Link href="/contact">
                        <button className="bg-yellow text-white px-3 py-2 rounded-md shadow-md  md:hover:-mt-2 md:hover:shadow-lg">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>

            {/* HERO IMAGES */}

            {/* FIXME: MOBILE HEIGHT NEEDS A FIX */}
            <div className="relative w-full  flex items-center justify-center max-h-max-hero-height  overflow-hidden md:w-1/2">
                {/* <Floatblur className="bottom-0 left-0 absolute"/> */}
                <div className="overflow-hidden relative w-44 h-96" >
                    <Image className="z-10" src="/assets/newiphone.png" alt="image of an iphone" layout="fill" objectFit='fill'/>
                    <div className=" bg-yellow z-1 m-2 flex items-center justify-center rounded-2xl w-40 h-hiphone">
                        <div className="bg-purple w-14 h-14 flex items-center justify-center">
                            <h1 className="text-white">LOGO</h1>
                        </div>
                    </div>
                </div>

                {/* FIXME: */}
                {/* <div className="hidden border-8 border-yellow overflow-hidden rounded-full right-16 top-0 absolute w-28 h-28 lg:block">
                    <Image className="z-10" src="/assets/faces/1.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div>
                <div className="border-4 w-12 h-12 right-0 top-1/2 border-water overflow-hidden  rounded-full absolute lg:bottom-0 lg:right-4 lg:w-28 lg:h-28 lg:border-8">
                    <Image className="z-10" src="/assets/faces/2.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div>
                <div className="border-4 w-16 h-16 left-0 top-0 border-orange overflow-hidden rounded-full lg:w-16 lg:h-16 lg:border-8 absolute lg:top-0 lg:left-16">
                    <Image className="z-10" src="/assets/faces/6.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div>
                <div className="border-8 w-24 h-24 top-1/3 right-0 border-light-orange overflow-hidden rounded-full absolute">
                    <Image className="z-10" src="/assets/faces/3.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div>
                <div className="border-8 w-16 h-16 top-1/2 right-28 border-skyblue overflow-hidden rounded-full absolute">
                    <Image className="z-10" src="/assets/faces/3.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div>
                <div className="border-4 border-purple w-20 h-20 overflow-hidden rounded-full lg:w-28 lg:h-28 lg:border-8 bottom-1/4 left-5 absolute">
                    <Image className="z-10" src="/assets/faces/4.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div>
                <div className="hidden border-8 border-red overflow-hidden w-20 h-20 bg-red-600 rounded-full bottom-2 left-8 absolute lg:block">
                    <Image className="z-10" src="/assets/faces/5.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div>
                <div className="hidden border-8 border-bold-green overflow-hidden rounded-full w-28 h-28 absolute top-1/2 left-0 lg:block">
                    <Image className="z-10" src="/assets/faces/3.jpg" alt="image of an iphone" layout="fill" objectFit='cover'/>
                </div> */}
            </div>

        </div>
        {/* <div className="h-10 w-full border-t-4 border-purple  bg-light-gray"></div> */}


        {/* ABOUT US SECTION */}

        <div>
            <h2 className="font-poppins font-medium text-3xl text-black text-center tracking-wide mt-24 md:text-4xl md:mt-32">Why join Buddi?</h2>
            <p className=" font-montserat w-90 mx-auto font-xl text-black text-center px-4 pt-4">Here are a few reasons why we're awesome</p>
        </div>
        <div className="mt-12 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:w-90 md:mt-16 ">
            {info.map(inf=>(
                <Card head={inf.heading} desc={inf.desc} image={<Image src={`/assets/${inf.image}`} alt={inf.alt} layout="fill"/>} />
            ))}
        </div>

        {/* FEATURE SECTION */}

        <div id="features" >
            <h2 className="font-poppins font-medium text-3xl text-black text-center tracking-wide mt-24 md:text-4xl md:mt-32">Our Features</h2>
            <p className=" font-montserat font-xl text-black text-center px-4  pt-2">Click on each feature to learn more</p>
        </div>
        <div className="mt-16 grid grid-cols-1 container mx-auto first:hidden gap-y-12 prespective-100 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:w-90 md:mt-16">
            {feature.map(feat =>(
                <Board image={<Image src={`/assets/features/${feat.image}`} alt={feat.alt} layout="fill"/>} title={feat.title} bgColor={feat.bgColor} backTitle={feat.backTitle} backdesc={feat.backDesc} fontColor={feat.fontColor} borderColor={feat.borderColor}/>
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
            <p className="hidden bg-pink bg-skyblue bg-green text-green text-pink text-skyblue border-green border-skyblue border-pink">none:test</p>
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
