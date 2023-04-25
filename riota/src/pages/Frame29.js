import Image from "next/image";
import bg from "../../public/svg/Frame43.png";
import Navbar from "./navbar";
import Whitebg from "./Whitebg";
import Footer from "./footer1";
import SubtoNew from "./SubtoNew";

export default function ArtificialIntelligence() {
  return (
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
            SAP Solutions
            </h1>

            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              SAP stands for Systems Applications and Products in Data
              Processing. SAP, by definition, is also the name of the ERP
              (Enterprise Resource Planning) software. It is developed to assess
              software solutions for managing business operations and customer
              relationships. SAP system consists of a number of fully integrated
              modules, which covers virtually every aspect of business
              management.
            </p>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              Our Advanced SAP Solutions Includes:
            </p>
            <ul className="mt-4 text-white text-xl">
              <li>● Digital business ideation and modelling service</li>
              <li>● Digital architecture and road map design</li>
              <li>● Landscape strategy and architecture</li>
              <li>● Organizational change management</li>
              <li>● Value design and assessment</li>
            </ul>
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
              <h5 className="text-6xl mb-7 items-center text-center flex">
                <b>Our Best Business SAP Solutions</b>
              </h5>
            </div>
           <div className="p-10">
           <h3 className="text-[#FFFFFF] text-3xl mb-7">
           01 - DIGITAL STATEGY CONSULTING
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
            Generate sustainable value by fostering new business ideas and
                supporting critical capabilities of business innovation
            </p>
            <ul className="mt-12 text-xl">
                <li>● Ideate and implement new business models.</li>
                <li className="mt-2">
                  ● Create new value propositions ● Design and prototype
                  business ideas
                </li>
                <li className="mt-2">● Design and prototype business ideas</li>
                <li className="mt-2">● Develop your innovation road map</li>
              </ul>

            <h3 className="text-3xl text-semibold mt-12">
            02 - DIGITAL ARCHITECTURE AND ROAD MAP DESIGN
            </h3>

            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
            Get the advice and guidance you need to plan the digital
                transformation of your business process architecture with
                intelligent tools and services.
            </p>
            <ul className="mt-12 text-xl">
                <li>● Check the readiness of processes and skills</li>
                <li className="mt-2">● Assess your solution architecture</li>
                <li className="mt-2">● Design your digital road map</li>
                <li className="mt-2">
                  ● Set up your centre of expertise and innovation
                </li>
              </ul>
           </div>
          </div>
        </div>
      </section>

      <section className="text-white float-right">
        <div className="container mx-auto flex  md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left ">
            <div className="container w-1/2"></div>
            <div className="p-10 ">
              <h3 className="text-3xl text-semibold mt-12">
                03 - LANDSCAPE STRATEGY AND ARCHITECTURE
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                Define a comprehensive IT strategy and enterprise architecture to
                support best in class business processes.
              </p>
              <ul className="mt-12 text-xl">
              <p className="mt-20">Solution concept:</p>
              <li>● Analyse your business strategy and requirements</li>
              <li className="mt-2">
                ● Assess business processes and the IT landscape
              </li>
              <li className="mt-2">● How to maximize ROI</li>
              <li className="mt-2">
                ● Create an IT strategy and landscape architecture
              </li>
              <li className="mt-2">
                ● Build a strategic road map● Set an organisational and
                governance framework
              </li>
              <li className="mt-2">● Optimise total cost of ownership</li>
            </ul>
            </div>
            <div className="p-10 ">
              <h3 className="text-3xl text-semibold mt-12">
              04 - ORGANISATIONAL CHANGE MANAGEMENT
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              Adapt your organisation to changes associated with digital
              innovation by leveraging tailored advisory services that match
              your needs.
              </p>
              <ul className="mt-12 text-xl">
              <li className="mt-2">● Prepare for the future of learning</li>
              <li className="mt-2">● Evolve your digital culture</li>
              <li className="mt-2">
                ● Transform your business with SAP S/4HANA Cloude
              </li>
              <li className="mt-2">
                ● Speed the adoption of SAP SuccessFactors solutions
              </li>
              <li className="mt-2">
                ● Innovate customer engagement and commerce.
              </li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-5 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left ">
            <div className="p-10">
              <h3 className="text-[#FFFFFF] text-3xl mb-7">
              05 - VALUE DESIGN AND ASSESSMENT
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              Develop ideal concepts to determine, benchmark, and improve the
              value for advanced business outcomes.
              </p>
              <ul className="mt-12 text-xl">
              <li className="mt-2">● Review benchmarks and value drivers</li>
              <li className="mt-2">
                ● Consider investment needs assess the business and optimize
                processes
              </li>
              <li className="mt-2">● Measure performance against indicators</li>
              <li className="mt-2">
                ● Create a business case and value realization plan
              </li>
              <li className="mt-2">
                ● Ensure governance with a value management office.
              </li>
            </ul>
            </div>
          </div>
        </div>
      </section>
      <SubtoNew/>
      <div className="mt-12">
      <Footer/>
      </div>
    </div>
  );
}
