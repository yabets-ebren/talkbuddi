import Image from "next/image";
import Link from "next/link";
import Board from "../components/Board";
import Card from "../components/Card";
import CircleImages from '../components/CircleImages'
import { info, feature, faces } from '../info'


const Index = () => {
    return(
        <>
        <div className="container  space-y-12 flex flex-col mx-auto mt-32 mb-2 items-center w-90 md:pl-12 md:space-y-0 md:flex-row">
            
            {/* HERO TEXT  */}
            
            <div className="flex flex-col space-y-8  md:w-1/2 ">
                <h1 className=" text-purple leading-10	 text-center text-4xl font-poppins  md:text-5xl md:text-left">
                    The ultimate college student app.
                </h1>
                <p className="font-montserat max-w-lg font-xl text-center md:text-left">Buddi is a college student exclusive app to connect with your campus and students everywhere.</p>
                <div className="flex space-x-5 items-center justify-center md:justify-start">
                    <button className="px-3 py-2 rounded-md shadow-md">Coming Soon!</button>
                    <Link href="/contact">
                        <button className="bg-yellow border-purple  text-white px-3 py-2 rounded-md shadow-md transition-all duration-1000 lg:hover:scale-110 lg:hover:-mt-2 lg:hover:shadow-lg">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* HERO IMAGES */}
            <div className="relative w-full md:w-1/2">
                <div className="w-full flex-shrink-0 flex items-center justify-center max-h-max-hero-height">
                    <div className="overflow-hidden relative  w-44 h-96" >
                        <Image className="z-10" src="/assets/newiphone.png" alt="image of an iphone" layout="fill" objectFit='fill'/>
                        <div className=" bg-yellow z-1 m-2 flex items-center justify-center rounded-2xl w-40 h-hiphone">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <Image src="/assets/vertLogo.png" alt="buddi logo"  layout="fill"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden w-full  top-0 left-0 absolute h-full opacity-100 md:block">
                    <div className="">
                        {faces.map(face=>(
                            <CircleImages key={face.id} size={face.size} position={face.position}  border={face.border} image={<Image src={`/assets/faces/${face.image}`} alt={face.alt} layout="fill" objectFit="cover"  />} />
                        ))}
                    </div>
                </div>

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
                <Card key={inf.id} head={inf.heading} desc={inf.desc} image={<Image src={`/assets/about/${inf.image}`} alt={inf.alt} layout="fill"/>} />
            ))}
        </div>

        {/* FEATURE SECTION */}

        <div id="features" >
            <h2 className="font-poppins font-medium text-3xl text-black text-center tracking-wide mt-24 md:text-4xl md:mt-32">Our Features</h2>
            <p className=" font-montserat font-xl text-black text-center px-4  pt-2">Click on each feature to learn more</p>
        </div>
        <div className="mt-16 grid grid-cols-1 container mx-auto first:hidden gap-y-12 prespective-100 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:w-90 md:mt-16">
            {feature.map(feat =>(
                <Board key={feat.id} image={<Image src={`/assets/features/${feat.image}`} alt={feat.alt} layout="fill"/>} title={feat.title} bgColor={feat.bgColor} backTitle={feat.backTitle} backdesc={feat.backDesc} fontColor={feat.fontColor} borderColor={feat.borderColor}/>
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
