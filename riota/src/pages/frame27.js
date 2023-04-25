import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer1";
import JoinNews from "./JoinNews";
import bg from "../../public/svg/Frame43.png";

export default function Frame27() {
  return (
    <>
      <div
      className="m-0 w-full overflow-x-hidden box-border"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
    <Navbar/>
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-20 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFEE40] text-3xl mb-5">
              DIGITAL TRANSFORMATION
            </h3>
            <h1 className="text-[#FFFFFF] text-6xl mb-5 font-bold">
              ARTIFICIAL INTELLIGENCE
            </h1>

            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              IOTA brings you the opportunity to reinvent your business
              strategies by integrating AI services, a library of modules to
              enable accelerated AI features development for your business.
              Spanning across both the web and mobile applications, Artificial
              Intelligence will make your business smarter on every corner.
              Offering value for money through our high-octane AI development
              services, it’s time to step into the world of AI. Hire our AI
              consulting, development, and integration services to improve your
              interaction with end users thereby improving the business
              performance.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="earth"
              src="/icons/earth.png"
              width={428}
              height={427}
            />
          </div>
        </div>
      </section>

      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-5 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left ">
            <div className="container ">
              <h5 className="text-6xl mb-7 items-center text-center">
                {" "}
                <b>Our Application Development Strategy involves</b>
              </h5>
            </div>
           <div className="p-10">
           <h3 className="text-[#FFFFFF] text-3xl mb-7">
              01 - RECOMMENDATION SYSTEM DEVELOPMENT SERVICES
            </h3>
            <ul className="text-2xl mt-8">
              <li className="mt-1">● Improve customer experience</li>
              <li className="mt-1">● Increase sales</li>
              <li className="mt-1">● Enhance recommendation accuracy</li>
            </ul>

            <h3 className="text-3xl text-semibold mt-12">
              02 - CHATBOT & CONVERSATIONAL AI
            </h3>

            <ul className="text-2xl mt-8">
              <li className="mt-1">
                ● Improve experience with Conversational AI
              </li>
              <li className="mt-1">● Reduce operational costs</li>
              <li className="mt-1">● Make your business functions smarter.</li>
            </ul>

            <h3 className="text-3xl text-semibold mt-12">
              03 - COMPUTER VISION
            </h3>
            <ul className="text-2xl mt-8">
              <li className="mt-1">
                ● Advanced AI components for diverse use-casese
              </li>
              <li className="mt-1">
                ● Improving efficiency with real time data from images and
                videos
              </li>
              <li className="mt-1">
                ● Making processes automated and flawless at reduced costs
              </li>
            </ul>
           </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10 flex flex-col md:items-start md:text-left items-center text-center">
            <Image
              className="object-cover object-center rounded z-10"
              alt="robo"
              src="/svg/robo.svg"
              width={420}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-20 md:ml-16 ml-0 lg:mr-20 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
          <Image
              className="object-cover object-center rounded z-5"
              alt="robo"
              src="/svg/robo.svg"
              width={420}
              height={420}
            /> 
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left ">
            <div className="container ">
              
            </div>
           <div className="p-10">
           <h3 className="text-3xl text-semibold mt-12">
              04 NATURAL LANGUAGE PROCESSION (NLP)
            </h3>
            <ul className="text-2xl mt-8">
              <li className="mt-1">● Understand customers’ sentiments</li>
              <li className="mt-1">● Make data-backed decision</li>
              <li className="mt-1">● Make your chatbots smarter.</li>
            </ul>
            <h3 className="text-3xl text-semibold mt-12">
              05 PREDICTIVE ANALYSI
            </h3>
            <ul className="text-2xl mt-8">
              <li className="mt-1">● Smart forecasting</li>
              <li className="mt-1">● Fraud Detection</li>
              <li className="mt-1">● Empower your business.</li>
            </ul>
           </div>
          </div>
        </div>
      </section>

      <JoinNews/>
      <div className="m-20">
      <Footer/>
      </div>
    </div>
    </>
  );
}

