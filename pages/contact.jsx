import Bars from "../components/Bars"
import { FAQ } from '../info'

const Contact = () => {
  return (
    <>
      <div className="text-center mt-60">
        <h2 className="font-poppins text-3xl px-4 md:text-4xl">Frequently Asked Questions</h2>
      </div>
      <div className="mx-auto container mt-24 space-y-10 md:w-1/2">
        {FAQ.map((faq=>(
          <Bars  heading={faq.question} desc={faq.answer}/>
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
