import Image from "next/image";
import Navbar from "./navbar"
import bg from '../../../public/svg/F27bg.svg'
import SubtoNew from "./SubtoNew";

export default function Frame29() {
  return (
    <>
<div
        className=" w-full box-border"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Navbar />
      </div>

      <div
        className="w-full -mt-24"
        style={{ backgroundImage: `url(${bg.src})`, height: "4000px" }}
      >        <div className="ml-28 mt-24">
          <h2 className="text-yellow-300 text-3xl font-semibold">
            DIGITAL TRANSFORMATION
          </h2>
          <div className="w-3/5">
            <h1 className="text-white text-6xl font-semibold mt-4 ">
              SAP Solutions
            </h1>
            <p className="text-white mt-8 text-xl">
              SAP stands for Systems Applications and Products in Data
              Processing. SAP, by definition, is also the name of the ERP
              (Enterprise Resource Planning) software. It is developed to assess
              software solutions for managing business operations and customer
              relationships. SAP system consists of a number of fully integrated
              modules, which covers virtually every aspect of business
              management.
            </p>
            <p className="text-white mt-8 text-xl">
              Our Advanced SAP Solutions Includes:
            </p>
            <ul className="mt-8 text-white text-xl">
              <li>● Digital business ideation and modelling service</li>
              <li>● Digital architecture and road map design</li>
              <li>● Landscape strategy and architecture</li>
              <li>● Organizational change management</li>
              <li>● Value design and assessment</li>
            </ul>
          </div>
          <Image
            src="/svg/g12.svg"
            alt="G12"
            className="float-right mr-28 "
            width={500}
            height={500}
            priority
            style={{ marginTop: "-450px" }}
          />
        </div>

        <div className="ml-28 mt-40">
          <div className="">
            <h1 className="text-white text-7xl font-semibold font-spa">
              Our Best Business SAP Solutions
            </h1>
            <div className="text-white text-4xl mt-20">
              <h3>01 - DIGITAL STATEGY CONSULTING</h3>
              <p className="mt-8 text-2xl">
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
            </div>
            <div className="text-white text-4xl mt-28">
              <h3>02 - DIGITAL ARCHITECTURE AND ROAD MAP DESIGN</h3>
              <p className="mt-8 text-2xl">
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

          <div className="text-white text-4xl mt-44 w-3/6 float-right mr-32">
            <h3>03 - LANDSCAPE STRATEGY AND ARCHITECTURE</h3>
            <p className="mt-8 text-2xl">
              Define a comprehensive IT strategy and enterprise architecture to
              support best in class business processes.
            </p>
            <ul className="mt-12 text-xl">
              <p classNmae="mt-20">Solution concept:</p>
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

          <div className="text-white text-4xl mt-44 w-3/6 float-right mr-32">
            <h3>04 - ORGANISATIONAL CHANGE MANAGEMENT</h3>
            <p className="mt-8 text-2xl">
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

          <div className="text-white text-4xl mt-40 w-3/6 float-left mr-32 mb-12">
            <h3>05 - VALUE DESIGN AND ASSESSMENT</h3>
            <p className="mt-8 text-2xl">
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

      <div style={{backgroundImage:`url(${bg.src})`,height:"500px"}}>
        <div style={{marginTop:"-700px"}}>
            <SubtoNew/>
        </div>
        </div>

    </>
  );
}

// inconsolat
