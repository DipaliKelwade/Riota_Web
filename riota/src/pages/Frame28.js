import Image from "next/image";
import Navbar from "./navbar";
import SubtoNew from "./SubtoNew";
import bg from "../../public/svg/F27bg.svg";
import "../../public/svg/g12.svg";


export default function Frame28() {
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
        style={{ backgroundImage: `url(${bg.src})`, height: "4500px" }}
      >
        <div className="ml-28 mt-24">
          <h2 className="text-yellow-300 text-3xl font-semibold">
            DIGITAL TRANSFORMATION
          </h2>
          <div className="w-3/5">
            <h1 className="text-white text-6xl font-semibold mt-4 ">
              IT CONSULTING
            </h1>
            <p className="text-white mt-8 text-xl">
              We offer IT consulting services that will help you improve your
              software architecture, create a tech-driven digital strategy, and
              improve operations by optimising your software portfolio. Our
              software engineers will finish your digital transformation journey
              through careful planning and effective execution of the outlined
              IT strategy
            </p>
            <p className="text-white mt-8 text-xl">
              If you want to deliver products and content on a global scale, you
              need an integrated approach to globalization—one that drives
              business outcomes and seamlessly complements the capabilities you
              already have in place. We can bring our experience and expertise
              to the entire journey, helping lay the groundwork for your success
              in current and new markets.
            </p>
            <p className="text-white mt-8 text-xl">
              Our consulting team will guide you throughout the journey, from
              Formulating , Evaluating, Implementing and Executing of IT
              strategy
            </p>
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
          <div className="w-1/2">
            <h1 className="text-white text-6xl font-semibold ">
              Our Global Consulting Services
            </h1>
            <div className="text-white text-4xl mt-20">
              <h3>01 - DIGITAL STATEGY CONSULTING</h3>
              <p className="mt-8 text-2xl">
                We consult on turning IT into a major contributor to a business
                performance increase with
              </p>
              <ul className="mt-12 text-xl">
                <li>● A value-driving business-IT strategy.</li>
                <li className="mt-2">
                  ● A plan on IT service delivery optimization.
                </li>
              </ul>
            </div>
            <div className="text-white text-4xl mt-28">
              <h3>02 - IT STRATEGY CONSULTING</h3>
              <p className="mt-8 text-2xl">
                We create a strategy that would bring together a diversified IT
                landscape and make it work towards supporting existing business
                processes and driving new business initiatives. It Includes
              </p>
              <ul className="mt-12 text-xl">
                <li>
                  ● A business-IT alignment plan to reinforce business processes
                  with IT and introduce new digital business models, if needed.
                </li>
                <li className="mt-2">
                  ● A more mature IT operating model to improve operational
                  efficiency.
                </li>
                <li className="mt-2">
                  ● An application integration plan to expand end-to-end
                  automation, avoid functionality duplication and introduce
                  changes at speed required by the business needs.
                </li>
                <li className="mt-2">
                  ● A plan on improving IT service reliability and appln.
                  performance management.
                </li>
                <li className="mt-2">
                  ● A plan on ensuring IT security and compliance
                </li>
              </ul>
            </div>
          </div>

          <div className="text-white text-4xl mt-44 w-3/6 float-right mr-32">
            <h3>03 - SOLUTION CONSULTING</h3>
            <p className="mt-8 text-2xl">
              We analyze your business needs and help you make strategic
              decisions on the fast and successful implementation of
              business-critical solutions.
            </p>
            <ul className="mt-12 text-xl">
              <p className="mt-20">Solution concept:</p>
              <li>● Feature management and prioritization.</li>
              <li className="mt-2">
                ● How to integrate a solution into the existing IT landscape to
                avoid functionality duplication, optimize implementation and
                operational costs.
              </li>
              <li className="mt-2">● How to maximize ROI</li>
              <li className="mt-2">
                ● How to ensure outstanding UX and user adoption.
              </li>
              <li className="mt-2">
                ● How to organize solution support and evolutionRelated
                Services:
              </li>
              <li className="mt-2">
                ● Business analysis and requirement specification.
              </li>
              <li className="mt-2">
                ● UX services.● Outsourced project management.
              </li>
              <li className="mt-2">● Training and knowledge transfer.</li>
              <li className="mt-2">
                ● Continuous consulting support in the course of the solution’s
                evolution.
              </li>
            </ul>
          </div>

          <div className="text-white text-4xl mt-44 w-3/6 float-left mr-32">
            <h3>04 - CONSULTING ON A DIGITAL TRANSFORMATION INITIATIVE</h3>
            <p className="mt-8 text-2xl">
              We help verify and plan digital transformation(DT) initiatives
              that will add the competitive edge to your business.
            </p>
            <ul className="mt-12 text-xl">
              <p className="mt-20">DT areas we consult on</p>
              <li className="mt-2">● Digital customer experience</li>
              <li className="mt-2">● Connected products.● Digital HR.</li>
            </ul>
          </div>

          <div className="text-white text-4xl mt-40 w-3/6 float-left mr-32">
            <h3>05 - TECHNOLOGY CONSULTING</h3>
            <p className="mt-8 text-2xl">
              We analyze the existing state of the technology area of your
              interest and assist in its steady evolution to make it play a more
              prominent role in your business growth
            </p>
          </div>
        </div>

        <div
          className="w-full mt-0 justify-center flex"
          style={{ backgroundColor: "`url(${bg.src})`" }}
        >
          <div className="text-white text-6xl mt-44 w-3/6 justify-center flex">
            <h3 className="font-semibold">Technology Areas We Consult</h3>
          </div>
        </div>
        <div className="float-left text-white mt-20 ml-32 w-full">
          <div
            className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left"
            style={{ backgroundColor: "`url(${bg.src})`" }}
          >
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                Cloud Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Implementing cloud technologies to achieve a higher speed of IT
                evolution and reduce costs and migrating to the cloud.
              </div>
            </div>
          </div>
          <div className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                Digital Workplace Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Planning organization of digital workplaces for better employee
                productivity.
              </div>
            </div>
          </div>
          <div className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                Data Quality Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Ensuring a high quality of data from ERP, CRM, SMC, and other
                business-critical systems
              </div>
            </div>
          </div>
        </div>
        <div className="float-left text-white mt-2 ml-32 w-full">
          <div className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                Computer Vision Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Helping build image analysis solutions for object detection,
                recognition, and identification.
              </div>
            </div>
          </div>
          <div className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                Application Reliability Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Combining fast application evolution with high reliability.
              </div>
            </div>
          </div>
          <div className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                AI Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Using AI to upgrade operational processes and solve AI-tied
                tasks.
              </div>
            </div>
          </div>
        </div>
        <div className="float-left text-white mt-2 ml-32 w-full">
          <div className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                IOT Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Optimizing business management with IoT.
              </div>
            </div>
          </div>
          <div className="w-1/4 h-60 m-5 border-solid border-2 rounded-3xl float-left -mb-40">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                Data Quality Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Ensuring a high quality of data from ERP, CRM, SMC, and other
                business-critical systems.
              </div>
            </div>
          </div>
          <div className="w-1/4 h-60 m-5 border-solid  border-2 rounded-3xl float-left">
            <div className="justify-center m-8">
              <h1 className="font-semibold text-2xl flex justify-center">
                Computer Vision Consulting
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Helping build image analysis solutions for object detection,
                recognition, and identification.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bg.src})`, height: "500px" }}>
        <div style={{ marginTop: "-100px" }}>
          <SubtoNew />
        </div>
        <Navbar/>
      </div>
    </>
  );
}
