import Image from "next/image";
import Navbar from "./navbar";
import SubtoNew from "./SubtoNew";
import bg from "../../public/svg/F27bg.svg";
import "../../public/svg/g12.svg";
import "../../public/svg/RPA.svg";
import "../../public/svg/robolution.svg";
import Footer from "./footer1";

export default function Frame57() {
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
        style={{ backgroundImage: `url(${bg.src})`, height: "6800px" }}
      >
        <div className="ml-28 mt-24">
          <h2 className="text-yellow-300 text-3xl font-semibold">
            IT SERVICES
          </h2>
          <div className="w-3/5">
            <h1 className="text-white text-6xl font-semibold mt-4 ">
              PRODUCT DEVELOPMENT
            </h1>
            <p className="text-white mt-8 text-xl">
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

        <div className="w-full mt-0 justify-center flex mb-20">
          <div className="text-white text-6xl mt-44 w-3/6 justify-center flex">
            <h3 className="font-semibold">Why RIOTA Software Solutions?</h3>
          </div>
        </div>
        <div className="float-left text-white mt-20 ml-32 w-full">
          <div
            className="m-5 border-solid  border-2 rounded-3xl float-left"
            style={{ backgroundColor: "`url(${bg.src})`", width: "500px" }}
          >
            <div className="justify-center m-8">
              <div className="font-semibold text-2xl mt-2 ml-28 flex justify-center ">
                <Image
                  src="/svg/img79.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={80}
                  height={80}
                  priority
                  style={{ marginTop: "4px" }}
                />
              </div>

              <h1 className="font-semibold text-2xl mt-5 flex justify-center ">
                Web Development
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                Whether your company needs a new website to engage with
                customers, an enterprise-class web app...
              </div>
              <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                Know More
              </button>
            </div>
          </div>
          <div
            className="m-5 border-solid  border-2 rounded-3xl float-left"
            style={{ width: "500px" }}
          >
            <div className="justify-center m-8">
              <div className="font-semibold text-2xl mt-2 ml-28 flex justify-center ">
                <Image
                  src="/svg/img78.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={80}
                  height={80}
                  priority
                  style={{ marginTop: "4px" }}
                />
              </div>

              <h1 className="font-semibold text-2xl mt-5 flex justify-center ">
                Mobile App Development
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                We build mobile applications on different platforms using
                top-notch technologies and proven...
              </div>
              <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                Know More
              </button>
            </div>
          </div>
          <div
            className=" m-5 border-solid  border-2 rounded-3xl float-left"
            style={{ width: "500px" }}
          >
            <div className="justify-center m-8">
              <div className="font-semibold text-2xl mt-2 ml-28 flex justify-center ">
                <Image
                  src="/svg/img77.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={80}
                  height={80}
                  priority
                  style={{ marginTop: "4px" }}
                />
              </div>

              <h1 className="font-semibold text-2xl mt-5 flex justify-center ">
                Cloud App Development
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                RIOTA’s cloud application development services provide clients
                access to powerful cloud...
              </div>
              <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-0 justify-center flex mb-20">
          <div className="text-white text-6xl  mt-44 w-3/6 justify-center flex">
            <h3 className="font-bold">Our Primary services include</h3>
          </div>
        </div>
        <div className="ml-28 mt-20">
          <div className="w-1/2">
            <div className="text-white text-4xl mt-20">
              <h3>01 - PRODUCT CONCEPTUALIZATION</h3>
            </div>
            <ul className="text-white text-2xl mt-12">
              <li className="mt-6">
                ● Detailing of the concept in more technical form through
                collaborative engagement with the customer, understanding
                customers' requirements, business process and creating necessary
                specs for the product.
              </li>
              <li className="mt-6">
                ● Exploring existing products and models in market for
                comparative study
              </li>
              <li className="mt-6">
                ● Prototype the product – High Level to get necessary business
                buy-in.
              </li>
              <li className="mt-6">● Price the product.</li>
            </ul>
          </div>

          <div className="text-white text-4xl mt-44 w-3/6 float-right mr-32">
            <h3>02 - PRODUCT DESIGN AND ENGINEERING</h3>
            <ul className="text-white text-2xl mt-12">
              <li className="mt-6">
                ● Development of Functional and Nonfunctional Requirements that
                describes set of inputs and outputs
              </li>
              <li className="mt-6">
                ● Architect, Design and modeling key parts of the product.
              </li>
              <li className="mt-6">
                ● Prototype, test and detect likely failures which includes
                required hardware and software configuration
              </li>
            </ul>
          </div>

          <div className="text-white text-4xl mt-28 w-3/6 float-right mr-32">
            <h3>03 - IMPLEMENTATION</h3>
            <ul className="text-white text-2xl mt-12">
              <li className="mt-6">● Build the software product</li>
              <li className="mt-6">● Test and Certify the product.</li>
              <li className="mt-6">● Make the product ready for market.</li>
            </ul>
          </div>
        </div>
        <div className="robolution">
          <div className="w-full mt-0 justify-center flex mb-20">
            <div className="text-white text-6xl  mt-44 w-3/6 justify-center flex">
              <h3 className="font-bold">JOIN THE ROBOLUTION</h3>
            </div>
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
                <div className="w-full justify-center flex m-12 mt-0 ">
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
                <div className="w-full justify-center flex m-12 mt-0">
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

          <section>
            <div className="w-full mt-0 justify-center flex mb-10">
              <div className="text-white text-6xl  mt-20 w-3/4 justify-center flex">
                <h3 className="font-bold">Our RPA Development Services</h3>
              </div>
            </div>
            <Image
              src="/svg/RPA.svg"
              alt="G12"
              className="justify-center "
              width={1000}
              height={1000}
              priority
              style={{ marginTop: "4px", marginLeft:"400px" }}
            />

            <div className="flex justify-center text-white mt-2 w-full ml-12 mr-12">
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
                    We identify processes that need to be automated. and after
                    that we strategize a roadmap for automation rollout along
                    with consulting, implementation, deployment, and training.
                  </div>
                </div>
                <div className="justify-center m-8">
                  <h1 className="font-semibold text-4xl mt-20 flex ml-12">
                    02 - Automation Design
                  </h1>
                  <br />
                  <div className="text-xl ml-10 mr-10 mt-10">
                    Our RPA developers will help you in mapping manual
                    processes. We identify methodologies to deploy in your
                    business model.
                  </div>
                </div>
                <div className="justify-center m-8 mt-20">
                  <h1 className="font-semibold text-4xl mt-10 flex ml-12">
                    03 - RPA Implementation
                  </h1>
                  <br />
                  <div className="text-xl ml-10 mr-10 mt-10">
                    We are a RPA development company that designs and develops
                    robots using automation tools, AI and ML for process
                    automation. Our experts additionally also organizes workflow
                    and rollout validation.
                  </div>
                </div>
              </div>
              <div
                className="mt-10 mr-28 m-5 float-left"
                style={{ width: "1000px" }}
              >
                <div className="justify-center m-8">
                  <h1 className="font-semibold text-4xl mt-5 flex ml-12">
                    04 - Automation Support
                  </h1>
                  <br />
                  <div className="text-xl ml-10 mr-10">
                    Our RPA support team will help you with bot management,
                    failure and disaster recovery, risk management, and
                    opportunity discovery.
                  </div>
                </div>
                <div className="justify-center m-8">
                  <h1 className="font-semibold text-4xl mt-20 flex ml-12">
                    05 - Robotic Desktop Automation
                  </h1>
                  <br />
                  <div className="text-xl ml-10 mr-10 mt-10">
                    Desktop automation tools have bots that interact with
                    websites, log into applications, pull data from Excel files,
                    transfer files, generate reports, and much more.
                  </div>
                </div>
                <div className="justify-center m-8 mt-20">
                  <h1 className="font-semibold text-4xl mt-10 flex ml-12">
                    06 - RPA Support & Maintenance
                  </h1>
                  <br />
                  <div className="text-xl ml-10 mr-10 mt-10">
                    RPA support and maintenance help minimize downtime to offer
                    constant support and contractual maintenance for RPA
                    activities and associated infrastructure.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

       <div
        className="bg-pink-400 bg-no-repeat ml-44 mr-44 mt-20 rounded-3xl text-white mb-20"
        style={{ height: "350px", width: "1400px", marginTop: "-500px" }}>
        <div>
          <div className="mr-12 ml-12 pt-16 justify-center">
            <h1 className="text-6xl font-bold ml-12">
              Get the best Robotics Software Consulting Solutions to automate
              and bring your projects to life.
            </h1>
            <button type="submit" value="Subscribe" className=" mt-12 w-36 h-12 font-bold bg-black text-white rounded-3xl " style={{marginLeft:"550px"}}>Subscribe</button>

          </div>
          
        </div>
      </div> 
    <Footer/>
    </>
  );
}
