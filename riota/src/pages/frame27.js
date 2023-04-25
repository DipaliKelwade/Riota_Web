import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer1";
import JoinNews from "./JoinNews";
import bg from "../../public/svg/Frame43.png";

export default function Frame27() {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg.src})`, height: "3300px" }}>
        <header>
          <Navbar />
        </header>

        <div className="w-full">
          <section className="ml-28 mr-24">
            <div>
              <h1 className="text-bold text-yellow-400 text-2xl font-bold">
                DIGITAL TRANSFORMATION
              </h1>
              <div className="text-white">
                <section>
                  <h1 className="text-6xl font-bold mt-8">
                    ARTIFICIAL INTELLIGENCE
                  </h1>
                  <div className="w-1/2 mt-8 text-xl">
                    <p>
                      RIOTA brings you the opportunity to reinvent your business
                      strategies by integrating AI services, a library of
                      modules to enable accelerated AI features development for
                      your business. Spanning across both the web and mobile
                      applications, Artificial Intelligence will make your
                      business smarter on every corner. Offering value for money
                      through our high-octane AI development services, it’s time
                      to step into the world of AI. Hire our AI consulting,
                      development, and integration services to improve your
                      interaction with end users thereby improving the business
                      performance.
                    </p>
                  </div>
                  <Image
                    src="/svg/g12.svg"
                    alt="G12"
                    className="float-right"
                    style={{ marginTop: "-400px" }}
                    width={550}
                    height={600}
                    priority
                  />
                </section>

                <section className="mt-44">
                  <div className="w-3/5">
                    <h1 className="text-6xl font-bold mt-8">
                      Our Application Development Strategy involves
                    </h1>
                    <div className="mt-12">
                      <h3 className="text-3xl text-semibold mt-12">
                        01 - RECOMMENDATION SYSTEM DEVELOPMENT SERVICES
                      </h3>
                      <ul className="text-2xl mt-8">
                        <li className="mt-1">● Improve customer experience</li>
                        <li className="mt-1">● Increase sales</li>
                        <li className="mt-1">
                          ● Enhance recommendation accuracy
                        </li>
                      </ul>
                      <h3 className="text-3xl text-semibold mt-12">
                        02 - CHATBOT & CONVERSATIONAL AI
                      </h3>
                      <ul className="text-2xl mt-8">
                        <li className="mt-1">
                          ● Improve experience with Conversational AI
                        </li>
                        <li className="mt-1">● Reduce operational costs</li>
                        <li className="mt-1">
                          ● Make your business functions smarter.
                        </li>
                      </ul>
                      <h3 className="text-3xl text-semibold mt-12">
                        03 - COMPUTER VISION
                      </h3>
                      <ul className="text-2xl mt-8">
                        <li className="mt-1">
                          ● Advanced AI components for diverse use-casese
                        </li>
                        <li className="mt-1">
                          ● Improving efficiency with real time data from images
                          and videos
                        </li>
                        <li className="mt-1">
                          ● Making processes automated and flawless at reduced
                          costs
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/svg/robo.svg"
                    alt="G12"
                    className="float-right"
                    style={{ marginTop: "-700px" }}
                    width={550}
                    height={600}
                    priority
                  />
                </section>
                <section className="mt-44 mb-44">
                  <div className="w-3/6 float-right">
                    <h1 className="text-6xl font-bold mt-8">
                      Our Application Development Strategy involves
                    </h1>
                    <div className="mt-12">
                      <h3 className="text-3xl text-semibold mt-12">
                      04 NATURAL LANGUAGE PROCESSION (NLP)
                      </h3>
                      <ul className="text-2xl mt-8">
                        <li className="mt-1">● Understand customers’ sentiments</li>
                        <li className="mt-1">● Make data-backed decision</li>
                        <li className="mt-1">
                        ● Make your chatbots smarter.
                        </li>
                      </ul>
                      <h3 className="text-3xl text-semibold mt-12">
                      05 PREDICTIVE ANALYSI
                      </h3>
                      <ul className="text-2xl mt-8">
                        <li className="mt-1">
                        ● Smart forecasting
                        </li>
                        <li className="mt-1">● Fraud Detection</li>
                        <li className="mt-1">
                        ● Empower your business.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/svg/robo.svg"
                    alt="G12"
                    className="float-left"
                    width={550}
                    height={600}
                    priority
                  />
                </section>
                <section>
                  <div style={{marginTop:"1000px"}}>
                  <JoinNews/>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>

         <footer className="mt-20">
        <Footer />
      </footer> 

      </div>
      {/*  */}
    </>
  );
}

{
  /* <div className="text-white text-4xl mt-44 w-3/6 float-right">
              <h3>04 - NATURAL LANGUAGE PROCESSION (NLP)</h3>

              <ul className="mt-12 text-xl">
                <li>● Understand customers’ sentiments</li>
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
              
            </div>
            <Image
            src="/svg/robo.svg"
            alt="G12"
            className="float-right"
            style={{marginTop:"-800px"}}
            width={550}
            height={600}
            priority
          /> */
}

{
  /* <div className="text-white text-4xl mt-44 w-3/6 float-right">
              <h3>04 - NATURAL LANGUAGE PROCESSION (NLP)</h3>

              <ul className="mt-12 text-xl">
                <li>● Understand customers’ sentiments</li>
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
          /> */
}

{
  /* <div className="w-3/5">
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
                services, it’s time to step into the world of AI. Hire our AI
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
          </div> */
}
