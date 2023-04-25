import Image from "next/image";
import bg from "../../public/svg/Frame43.png";
import Navbar from "./navbar";
import Whitebg from "./Whitebg";
import Footer from "./footer1";
import SubtoNew from "./SubtoNew";
import "../../public/svg/g12.svg";
import "../../public/svg/img1.svg";
import "../../public/svg/img2.svg";
import "../../public/svg/img3.svg";
import "../../public/svg/img4.svg";
import "../../public/svg/img5.svg";

export default function frame57() {
  return (
    <div
      className="m-0 w-full overflow-x-hidden box-border"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Navbar />
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-20 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFEE40] text-3xl mb-5">
              DIGITAL TRANSFORMATION
            </h3>
            <h1 className="text-[#FFFFFF] text-6xl mb-5 font-bold">
              PRODUCT DEVELOPMENT
            </h1>

            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              We design, deploy, and maintain cross-functional processes and
              systems for product lifecycle management, telecom network
              operations, and manufacturing automation using best-of-breed
              approaches, mixing commercial software with custom
              integration.RIOTA helps its customers with Simulated Prototypes
              and plan their mass production. We also provide specialized
              engineering capabilities as shared services cutting across
              industries.End-to-end product development services to help you
              stay competitive in the market.
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

      <section className="text-white ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-3xl sm:text-6xl font-extrabold title-font mb-2 text-white">
              <b> Why RIOTA Software Solutions?</b>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-6">
                  <Image
                    src="/svg/img79.svg"
                    alt="logistics"
                    width={150}
                    height={150}
                    className="w-20 h-20 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4 font-semibold text-2xl">
                    Web Development
                  </span>
                  <p>
                    Whether your company needs a new website to engage with
                    customers, an enterprise-class web app...
                  </p>
                  <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-6">
                  <Image
                    src="/svg/img78.svg"
                    alt="logistics"
                    width={150}
                    height={150}
                    className="w-20 h-20 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4 font-semibold text-2xl">
                    Mobile App Development
                  </span>
                  <p>
                    We build mobile applications on different platforms using
                    top-notch technologies and proven...
                  </p>
                  <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-6">
                  <Image
                    src="/svg/img77.svg"
                    alt="logistics"
                    width={150}
                    height={150}
                    className="w-20 h-20 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4 font-semibold text-2xl">
                    Cloud App Development
                  </span>
                  <p>
                    {"RIOTA’s"} cloud application development services provide
                    clients access to powerful cloud...
                  </p>
                  <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-5 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-24 md:ml-16 ml-0 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left ">
            <div className="container ">
              <h5 className="text-6xl mb-7 items-center text-center flex">
                <b>Our Primary services include</b>
              </h5>
            </div>
            <div className="p-10 w-1/2">
              <h3 className="text-[#FFFFFF] text-3xl mb-7">
                01 - PRODUCT CONCEPTUALIZATION
              </h3>
              <ul className="text-white text-2xl mt-12">
                <li className="mt-6">
                  ● Detailing of the concept in more technical form through
                  collaborative engagement with the customer, understanding
                  customers requirements, business process and creating
                  necessary specs for the product.
                </li>
                <li className="mt-6">
                  ● Exploring existing products and models in market for
                  comparative study
                </li>
                <li className="mt-6">
                  ● Prototype the product {"–"} High Level to get necessary
                  business buy-in.
                </li>
                <li className="mt-6">● Price the product.</li>
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
              <div className="text-white text-4xl w-3/6 float-right mr-32">
                <h3>02 - PRODUCT DESIGN AND ENGINEERING</h3>
                <ul className="text-white text-2xl mt-12">
                  <li className="mt-6">
                    ● Development of Functional and Nonfunctional Requirements
                    that describes set of inputs and outputs
                  </li>
                  <li className="mt-6">
                    ● Architect, Design and modeling key parts of the product.
                  </li>
                  <li className="mt-6">
                    ● Prototype, test and detect likely failures which includes
                    required hardware and software configuration.
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-10 mx-auto flex  md:flex-row flex-col-reverse items-center pl-32">
              <div className="text-white text-4xl float-right ">
                <h3>03 - IMPLEMENTATION</h3>
                <ul className="text-white text-2xl mt-12">
                  <li className="mt-6">● Build the software product</li>
                  <li className="mt-6">● Test and Certify the product. </li>
                  <li className="mt-6">● Test and Certify the product.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-3xl sm:text-6xl font-extrabold title-font mb-2 mt-12 text-white">
              <b> JOIN THE ROBOLUTION</b>
            </h1>
          </div>
          <div className="font-semibold text-2xl mt-2 ml-28 flex justify-center ">
            <Image
              src="/svg/robolution.svg"
              alt="G12"
              className="float-right mr-28 "
              width={800}
              height={800}
              priority
              style={{ marginTop: "4px" }}
            />
          </div>
          <div className="w-full mt-0 justify-center flex mb-10">
            <div className="text-white text-3xl  mt-20 w-3/4 justify-center flex">
              <h3 className="font-bold">Robolution</h3>
            </div>
          </div>
          <div className="w-full mt-0 justify-center flex mb-10">
            <div className="text-white text-3xl  w-3/4 justify-center flex">
              <p>
                The process of automating business operations with the help of
                robotics to reduce human intervention defines Robotic Process
                Automation (RPA).
              </p>
              <br />
            </div>
          </div>

          <div className="w-full mt-0 justify-center flex mb-10">
            <div className="text-white text-3xl  w-3/4 justify-center flex">
              <p>
                Robotic Process Automation (RPA) software can help when a
                company has teams of people working on repetitive processes that
                require jumping from one application to another and completing
                tasks that are not intellectually intense. RPA is a powerful,
                quick to implement, and effective solution.
              </p>
            </div>
          </div>

          <div className="mt-20 -ml-72">
            <div className="w-full mt-0 justify-center flex m-12 ml-40">
              <div className="text-white text-3xl w-2/5 justify-center flex">
                <div className="text-3xl mr-12 -ml-10">
                  <h1 className="font-bold">
                    What processes are relevant for Robotic Process Automation
                  </h1>
                  <br />
                  <p>
                    Banks, insurers, pension funds and other financial services
                    institutions operate in a highly regulated industry and are
                    faced with high demands for auditability, security, data
                    quality and operational resilience. Robotic process
                    automation allows modern banks to meet these demands and
                    achieve significant operational efficiency.
                  </p>
                </div>
                <br />
              </div>
              <div>
                <div className="w-full justify-center flex m-2 mt-0 ">
                  <div className="text-white text-3xl justify-center flex">
                    <ul className="text-2xl text-white">
                      <li>● Cost saver</li>
                      <li className="mt-6">● Time saver</li>
                      <li className="mt-6">● Integrations</li>
                    </ul>
                    <br />
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full justify-center flex m-2 mt-0">
                  <div className="text-white text-3xl justify-center flex">
                    <ul className="text-2xl">
                      <li>● Cost saver</li>
                      <li className="mt-6">● Time saver</li>
                      <li className="mt-6">● Integrations</li>
                    </ul>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full mt-0 justify-center flex mb-10">
          <div className="text-white text-6xl  mt-20 w-3/4 justify-center flex">
            <h3 className="font-bold">Our RPA Development Services</h3>
          </div>
        </div>
        <div className="font-semibold text-2xl mt-2 ml-28 flex justify-center ">
          <Image
            src="/svg/RPA.svg"
            alt="G12"
            className="float-right mr-28 "
            width={800}
            height={800}
            priority
            style={{ marginTop: "4px" }}
          />
        </div>

        <div className="flex justify-center text-white mt-2 w-full ml-12 mr-2">
          <div
            className="mt-10 mr-0 m-5 float-left"
            style={{ width: "1000px" }}
          >
            <div className="justify-center m-8">
              <h1 className="font-semibold text-4xl mt-5 flex ml-12">
                01 - RPA Consulting Services
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                We identify processes that need to be automated. and after that
                we strategize a roadmap for automation rollout along with
                consulting, implementation, deployment, and training.
              </div>
            </div>
            <div className="justify-center m-8">
              <h1 className="font-semibold text-4xl mt-20 flex ml-12">
                02 - Automation Design
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10 mt-10">
                Our RPA developers will help you in mapping manual processes. We
                identify methodologies to deploy in your business model.
              </div>
            </div>
            <div className="justify-center m-8 mt-20">
              <h1 className="font-semibold text-4xl mt-10 flex ml-12">
                03 - RPA Implementation
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10 mt-10">
                We are a RPA development company that designs and develops
                robots using automation tools, AI and ML for process automation.
                Our experts additionally also organizes workflow and rollout
                validation.
              </div>
            </div>
          </div>
          <div
            className="mt-10 mr-28 m-5 float-left"
            style={{ width: "1000px" }}
          >
            <div className="justify-center m-8">
              <h1 className="font-semibold text-4xl mt-5 flex ml-5">
                04 - Automation Support
              </h1>
              <br />
              <div className="text-xl ml-5 mr-10">
                Our RPA support team will help you with bot management, failure
                and disaster recovery, risk management, and opportunity
                discovery.
              </div>
            </div>
            <div className="justify-center m-8">
              <h1 className="font-semibold text-4xl mt-20 flex ml-5">
                05 - Robotic Desktop Automation
              </h1>
              <br />
              <div className="text-xl ml-5 mr-10 mt-10">
                Desktop automation tools have bots that interact with websites,
                log into applications, pull data from Excel files, transfer
                files, generate reports, and much more.
              </div>
            </div>
            <div className="justify-center m-8 mt-20">
              <h1 className="font-semibold text-4xl mt-10 flex ml-5">
                06 - RPA Support & Maintenance
              </h1>
              <br />
              <div className="text-xl ml-5 mr-10 mt-10">
                RPA support and maintenance help minimize downtime to offer
                constant support and contractual maintenance for RPA activities
                and associated infrastructure.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 mb-20">
        <div className="h-1/4 w-3/4 bg-pink-500 container mx-auto flex md:px-2 px-1 md:py-12 py-5 md:flex-row flex-col-reverse items-center rounded-3xl">
          <div className="p-5 mx-auto">
            <h1 className="text-6xl font-bold md:flex-row flex-col-reverse items-center flex text-white">
              Get the best Robotics Software Consulting Solutions to automate
              and bring your projects to life.
            </h1>
            <div className="flex">
              <button
                type="submit"
                value="Subscribe"
                className="h-20 text-2xl font-bold mx-auto flex md:px-4 mt-8  px-1 md:py-2 py-2 justify-center md:flex-row  items-center border-2 bg-white text-black"
              >
                Contact us Today
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
