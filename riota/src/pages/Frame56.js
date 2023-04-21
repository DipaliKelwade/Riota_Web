import React from "react";
import Image from "next/image";
import bg from '../../public/svg/Frame43.png';
import Whitebg from "./components/Whitebg";
import Footer from "./components/footer1";
import Navbar from "./components/navbar";

function Frame56() {
  return (
    <div className="m-0 w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
      <Navbar/>
      <div>
        <section className="text-white">
          <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
              <h3 className="text-[#FFEE40] text-3xl mb-5">IT SERVICES</h3>
              <h1 className="text-[#FFFFFF] text-6xl">
                <b>EMBEDDED SERVICES & FIRMWARE</b>
              </h1>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                Embedded product design is one of the specialized areas that
                involves highly trained experts, working with advanced tools and
                equipment for transforming ideas into products. Embedded
                designing includes system architecture as well as hardware,
                software, and mechanical design. The process of product design
                involves activities such as deciding on the mechanical
                architecture, selecting materials and processes that meet the
                environmental requirements, engineering the various components
                that are necessary to make the product work, and finalizing the
                look and feel of the product.{" "}
              </p>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5 ">
                Development, on the other hand, involves identifying new
                opportunities in the market and building products that appeal to
                the needs of the selected market. The focus in the development
                process lies on refining or modifying the products to a final
                prototype and testing.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
              <img
                className="object-cover object-center rounded z-10"
                alt="hero"
                src="/icons/earth.png"
              />
            </div>
          </div>
          <div className="container ml-11 lg:mr-24 md:mr-16 mr-0 md:px-5 px-1">
            <h5 className=" text-center text-6xl  ">
              <b> Product Design and Development Services provided by RIOTA </b>
            </h5>
          </div>
        </section>

        <section class="text-white">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center text-18xl">
              <p class="  lg:w-1/2 w-full leading-relaxed text-white ">
                RIOTA’s embedded services cover the entire spectrum of product
                design and development.The product design services offered by
                RIOTA includes,
              </p>
            </div>
            <div className="flex flex-wrap gap-4 -m-4 justify-center align-middle items-center text-center">
              <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-2xl w-[295px] h-[181px] p-7 ">
                <div className="p-5">
                  <Image
                    src="/icons/board.png"
                    width={100}
                    height={100}
                    className="w-10 h10"
                  />
                </div>
                <div className="pb-5">
                  <span className="text-white text-2xl">
                    <b>Board Design</b>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-2xl w-[295px] h-[181px] p-7  ">
                <div className="p-5">
                  <Image
                    src="/icons/pcb.png"
                    width={100}
                    height={100}
                    className="w-10 h10"
                  />
                </div>
                <div className="pb-5">
                  <span className="text-white text-2xl">
                    <b>
                      PCB layout and design <br /> services
                    </b>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-2xl w-[295px] h-[181px] p-7  ">
                <div className="p-5">
                  <Image
                    src="/icons/product.png"
                    width={100}
                    height={100}
                    className="w-10 h10"
                  />
                </div>
                <div className="pb-5">
                  <span className="text-white text-2xl">
                    <b>Product re-engineering</b>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-2xl w-[295px] h-[181px] p-7 ">
                <div className="p-5">
                  <Image
                    src="/icons/verification.png"
                    width={100}
                    height={100}
                    className="w-10 h10"
                  />
                </div>
                <div className="pb-5">
                  <span className="text-white text-2xl">
                    <b>
                      Independent verification <br /> and validation
                    </b>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-2xl w-[295px] h-[181px] p-7 ">
                <div className="p-5">
                  <Image
                    src="/icons/compliance.png"
                    width={100}
                    height={100}
                    className="w-10 h10"
                  />
                </div>
                <div className="pb-5">
                  <span className="text-white text-2xl">
                    <b>Compliance engineering</b>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-2xl w-[295px] h-[181px] p-7 ">
                <div className="p-5">
                  <Image
                    src="/icons/embedded.png"
                    width={100}
                    height={100}
                    className="w-10 h10"
                  />
                </div>
                <div className="pb-5">
                  <span className="text-white text-2xl">
                    <b>Embedded Hardware</b>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-2xl w-[295px] h-[181px] p-7 ">
                <div className="p-5">
                  <Image
                    src="/icons/wireless.png"
                    width={100}
                    height={100}
                    className="w-10 h10"
                  />
                </div>
                <div className="pb-5">
                  <span className="text-white text-2xl">
                    <b>Wireless connectivity</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white">
          <div className="container mx-auto flex  px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
              <div className="container ">
                <h5 className="text-6xl ml-0 mb-7">
                  <b> Our Primary services include </b>
                </h5>
              </div>
              <h3 className="text-[#FFFFFF] text-3xl mb-7">
                01 - NEW PRODUCT DEVELOPMENT SUPPORT
              </h3>
              <ul className="mb-7">
                <li className="mb-5">
                  ● Mechanical: Industrial design/styling
                </li>
                <li>● Hardware: System architecture/hardware design</li>
              </ul>
              <h3 className="text-[#FFFFFF] text-3xl mb-5">
                02 - VALUE ENGINEERING
              </h3>
              <ul className="mb-7">
                <li className="mb-5">
                  ● Software: Board bring up, Board support package (BSP),
                  application development
                </li>
                <li className="mb-5">
                  ● OS Development: C/C++, Linux, Windows, RTOS
                </li>
                <li>● Middleware.</li>
              </ul>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10"></div>
          </div>
        </section>

        <section className="text-white">
          <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10"></div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
              <h3 className="text-[#FFFFFF] text-3xl mb-7">
                03 - PRODUCT SUSTENANCE{" "}
              </h3>
              <ul className="mb-7">
                <li className="mb-5">● Testing & Certification</li>
                <li>● Integration.</li>
              </ul>

              <h3 className="text-[#FFFFFF] text-3xl mb-7">04 - ADVANTAGES</h3>
              <ul className="mb-7">
                <li className="mb-5">
                  ● Embedded domain expertise with cumulative experience and
                  knowledge to develop <br /> embedded systems and software
                  across industry verticals
                </li>
                <li className="mb-5">
                  ● Flexible, reliable and customized product development
                </li>
                <li className="mb-5">
                  ● Cost optimization through R&D and reduced product
                  development cost
                </li>
                <li className="mb-5">● Bring products faster to market</li>
                <li>
                  ● Customer data protection through well-defined security
                  policies and mechanisms
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-white">
          <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
              <h3 className="text-[#FFEE40] text-3xl mb-5">IT SERVICES</h3>
              <h1 className="text-[#FFFFFF] text-6xl mb-5">
                <b>FIRMWARE DESIGNING</b>
              </h1>
              <p>
                Firmware development provides the control and monitoring
                software needed <br />
                for hardware products and systems. In today’s environment,
                firmware <br /> exists in each device; be it a smartphone, an
                edge device or a defense <br /> and aerospace sub-system.It is
                extremely important for firmware <br /> developers to have good
                knowledge about hardware design and development <br /> along
                with good understanding of the internal workings of an embedded{" "}
                <br /> processor or SoC.
              </p>
            </div>
          </div>
        </section>

        <section class="text-white">
          <div class="container px-5 py-20 mx-auto">
            <div className="container md:px-5 px-1">
              <h5 className="text-6xl text-center mb-5 ">
                <b> FIRMWARE DEVELOPMENT SERVICES </b>
              </h5>
            </div>
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <p class="lg:w-1/2 w-full leading-relaxed text-white text-18xl">
                Our varied range of embedded firmware development services
                includes.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2  border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Hardware Abstraction Layer.
                  </p>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Device/protocol simulation.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Embedded application development.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Bespoke firmware development and deployment
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Communication protocol stack development/ integration
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Optimizations (performance power utilization etc.)
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Boot loader porting and hardening, Minimum Kernel/OAL
                    Support.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Tracking and monitoring solutions for the industries.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    FPGA/CPLD based digital logic designs and IP cores.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    File System Integration, Memory optimization and Power
                    Management.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Remote access and monitoring solutions for discrete and
                    process industries.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-white p-6 rounded-3xl">
                  <p class="text-2xl text-center leading-relaxed ">
                    Board Bring up & verification, Diagnostics & Interrupt
                    routines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Whitebg/>
      <Footer/>
    </div>
  );
}

export default Frame56;
