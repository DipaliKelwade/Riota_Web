import Image from "next/image";
import Navbar from "./navbar";
import JoinNews from "./JoinNews"
import bg from "../../public/svg/F27bg.svg";
import Footer from "./footer1";

export default function Frame27() {
  return (
    <>
      <div
        className="w-full box-border"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Navbar />
      </div>

      <div className="" style={{ backgroundImage: `url(${bg.src})`}}>
        <div
          className="w-full -mt-24"
          style={{ backgroundImage: `url(${bg.src})`, height: "2700px" }}
        >
          <div className="ml-28 mt-24">
            <h2 className="text-yellow-300 text-3xl font-semibold">
              DIGITAL TRANSFORMATION
            </h2>
            <div className="w-3/5">
              <h1 className="text-white text-6xl font-semibold mt-4 ">
                ARTIFICIAL INTELLIGENCE
              </h1>
              <p className="text-white mt-8 text-xl">
                RIOTA brings you the opportunity to reinvent your business
                strategies by integrating AI services, a library of modules to
                enable accelerated AI features development for your business.
                Spanning across both the web and mobile applications, Artificial
                Intelligence will make your business smarter on every corner.
                Offering value for money through our high-octane AI development
                services, {"it’s"} time to step into the world of AI. Hire our AI
                consulting, development, and integration services to improve
                your interaction with end users thereby improving the business
                performance..
              </p>
            </div>
            <Image
              src="/svg/g12.svg"
              alt="G12"
              className="float-right mr-28 "
              width={500}
              height={500}
              priority
              style={{ marginTop: "-300px" }}
            />
          </div>

          <div className="ml-28 mt-52 mr-28">
            <div className="w-1/2">
              <h1 className="text-white text-6xl font-semibold ">
                Our Application Development Strategy involves
              </h1>
              <div className="text-white text-4xl mt-20">
                <h3>01 RECOMMENDATION SYSTEM DEVELOPMENT SERVICES</h3>
                <ul className="mt-12 text-xl">
                  <li>● Improve customer experience.</li>
                  <li className="mt-2">
                  ● Increase sales
                  </li>
                  <li className="mt-2">
                  ● Enhance recommendation accuracy
                  </li>
                </ul>
              </div>
              <div className="text-white text-4xl mt-12">
                <h3>02 - CHATBOT & CONVERSATIONAL AI</h3>
                <ul className="mt-12 text-xl">
                  <li>
                   ● Improve experience with Conversational AI
                  </li>
                  <li className="mt-2">
                  ● Reduce operational costs
                  </li>
                  <li className="mt-2">
                  ● Make your business functions smarter.
                  </li>
                </ul>
              </div>

              <div className="text-white text-4xl mt-12">
                <h3>03 - COMPUTER VISION</h3>
                <ul className="mt-12 text-xl">
                  <li>
                  ● Advanced AI components for diverse use-cases
                  </li>
                  <li className="mt-2">
                  ● Improving efficiency with real time data from images and videos
                  </li>
                  <li className="mt-2">
                  ● Making processes automated and flawless at reduced costs
                  </li>
                </ul>
              </div>
              
            </div>
            <Image
            src="/svg/robo.svg"
            alt="G12"
            className="float-right"
            style={{marginTop:"-800px"}}
            width={550}
            height={600}
            priority
          />

            <div className="text-white text-4xl mt-44 w-3/6 float-right">
              <h3>04 - NATURAL LANGUAGE PROCESSION (NLP)</h3>

              <ul className="mt-12 text-xl">
                <li>● Understand {"customers’"} sentiments</li>
                <li className="mt-2">
                ● Make data-backed decisions
                </li>
                <li className="mt-2">● How to maximize ROI</li>
                <li className="mt-2">
                ● Make your chatbots smarter.
                </li>
                
              </ul>
            </div>
            <div className="text-white text-4xl mt-12 w-3/6 float-right mr-2">
              <h3>05 - PREDICTIVE ANALYSIS</h3>

              <ul className="mt-12 text-xl">
                <li>● Smart forecasting</li>
                <li className="mt-2">● Fraud Detection</li>
                <li className="mt-2">● Empower your business</li>
                
              </ul>
            </div>
            <Image
            src="/svg/robo.svg"
            alt="G12"
            className="float-left"
            style={{marginTop:"-300px"}}
            width={550}
            height={600}
            priority
          />
          
          </div>
        </div>


        <div style={{backgroundImage:`url(${bg.src})`,height:"500px"}}>
        <div style={{marginTop:"-500px"}}>
            <JoinNews/>
            
        </div>
        </div>
        <Footer/>
      </div>

    </>
  );
}
