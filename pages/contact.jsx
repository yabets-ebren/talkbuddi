import Bars from "../components/Bars"
import { FAQ } from '../info'

const Contact = () => {
  return (
    <>
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
