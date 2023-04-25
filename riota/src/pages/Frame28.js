import Image from "next/image";
import bg from "../../public/svg/Frame43.png";
import Navbar from "./navbar";
import Whitebg from "./Whitebg";
import Footer from "./footer1";
import SubtoNew from "./SubtoNew";

export default function Frame28() {
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
              IT CONSULTING
            </h1>

            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              We offer IT consulting services that will help you improve your
              software architecture, create a tech-driven digital strategy, and
              improve operations by optimising your software portfolio. Our
              software engineers will finish your digital transformation journey
              through careful planning and effective execution of the outlined
              IT strategy
            </p>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              If you want to deliver products and content on a global scale, you
              need an integrated approach to globalization—one that drives
              business outcomes and seamlessly complements the capabilities you
              already have in place. We can bring our experience and expertise
              to the entire journey, helping lay the groundwork for your success
              in current and new markets.
            </p>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              Our consulting team will guide you throughout the journey, from
              Formulating , Evaluating, Implementing and Executing of IT
              strategy
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
                <b>Our Global Consulting Services</b>
              </h5>
            </div>
            <div className="p-10">
              <h3 className="text-[#FFFFFF] text-3xl mb-7">
                01 - RECOMMENDATION SYSTEM DEVELOPMENT SERVICES
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                We consult on turning IT into a major contributor to a business
                performance increase with
              </p>
              <ul className="mt-12 text-xl">
                <li>● A value-driving business-IT strategy.</li>
                <li className="mt-2">
                  ● A plan on IT service delivery optimization.
                </li>
              </ul>

              <h3 className="text-3xl text-semibold mt-12">
                02 - IT STRATEGY CONSULTING
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                We create a strategy that would bring together a diversified IT
                landscape and make it work towards supporting existing business
                processes and driving new business initiatives. It Includes
              </p>
              <ul className="mt-12 text-xl w-1/2">
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
        </div>
      </section>

      <section className="text-white float-right">
        <div className="container mx-auto flex  md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left ">
            <div className="container w-1/2"></div>
            <div className="p-10 ">
              <h3 className="text-3xl text-semibold mt-12">
                03 - SOLUTION CONSULTING
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                We analyze your business needs and help you make strategic
                decisions on the fast and successful implementation of
                business-critical solutions.
              </p>
              <ul className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                <p className="mt-20">Solution concept:</p>
                <li>● Feature management and prioritization.</li>
                <li className="mt-2">
                  ● How to integrate a solution into the existing IT landscape
                  to avoid functionality duplication, optimize implementation
                  and operational costs.
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
                  ● Continuous consulting support in the course of the
                  solution’s evolution.
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
                04 - CONSULTING ON A DIGITAL TRANSFORMATION INITIATIVE
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                We help verify and plan digital transformation(DT) initiatives
                that will add the competitive edge to your business.
              </p>
              <ul className="mt-12 text-xl">
                <p className="mt-20">DT areas we consult on</p>
                <li className="mt-2">● Digital customer experience</li>
                <li className="mt-2">● Connected products.● Digital HR.</li>
              </ul>

              <h3 className="text-3xl text-semibold mt-12">
                05 - TECHNOLOGY CONSULTING
              </h3>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                We analyze the existing state of the technology area of your
                interest and assist in its steady evolution to make it play a
                more prominent role in your business growth
              </p>
              <ul className="mt-12 text-xl w-1/2">
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
        </div>
      </section>

      <section className="text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-3xl sm:text-6xl font-extrabold title-font mb-2 text-white">
              <b> Technology Areas We Consult</b>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">Cloud Consulting</span>
                  <p>
                    Implementing cloud technologies to achieve a higher speed of
                    IT evolution and reduce costs and migrating to the cloud.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">
                    Digital Workplace Consulting
                  </span>
                  <p>
                    Planning organization of digital workplaces for better
                    employee productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">
                    Data Quality Consulting
                  </span>
                  <p>
                    Ensuring a high quality of data from ERP, CRM, SMC, and
                    other business-critical systems
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">
                    Computer Vision Consulting
                  </span>
                  <p>
                    Helping build image analysis solutions for object detection,
                    recognition, and identification.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">
                    Application Reliability Consulting
                  </span>
                  <p>
                    Combining fast application evolution with high reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">AI Consulting</span>
                  <p>
                    Using AI to upgrade operational processes and solve AI-tied
                    tasks.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">IOT Consulting</span>
                  <p>Optimizing business management with IoT.</p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">
                    Data Quality Consulting
                  </span>
                  <p>
                    Ensuring a high quality of data from ERP, CRM, SMC, and
                    other business-critical systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">
                    Computer Vision Consulting
                  </span>
                  <p>
                    Helping build image analysis solutions for object detection,
                    recognition, and identification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubtoNew/>

      <div className="m-24">
      <Footer/>
      </div>
    </div>
  );
}
