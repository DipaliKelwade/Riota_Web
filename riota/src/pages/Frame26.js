import React from "react";
import Image from "next/image";
import bg from '../../public/svg/Frame43.png';
import Whitebg from "./components/Whitebg";
import Footer from "./components/footer1";
import Navbar from "./components/navbar";

function Frame26() {
  return (
    <div className="m-0 w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
      <Navbar/>
      <div>
        <section className="text-white">
          <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
              <h3 className="text-[#FFEE40] text-3xl mb-5">
                DIGITAL TRANSFORMATION
              </h3>
              <h1 className="text-[#FFFFFF] text-6xl mb-5">
                <b>CLOUD SOLUTIONS</b>
              </h1>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                Cloud enables new and flexible operating models, as well as the
                agility to compete in a dynamic and changing world. IoT cloud
                applications play a significant role in collecting data from
                your IoT devices in a secure manner using various protocols, and
                storing the huge volumes of data in robust databases on the
                cloud. IoT cloud solutions also help in analyzing and acting on
                the data, and issuing commands to your IoT devices. They enable
                integration with your other business applications to realize all
                the benefits of digital transformation.
              </p>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                Our experts employ a tailored, risk-mitigated cloud strategy
                that considers all possible deployment models, with minimal
                downtime. We provide a seamless, modern, secure and agile
                journey from in-house IT to a cloud infrastructure.
              </p>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                With our promise of digital transformation at speed and scale,
                we bring together applications, infrastructure and security to
                leverage the full potential of cloud. No matter where you are in
                your digital journey, we can help you extract maximum value
                across the complete lifecycle—and distance yourself from the
                competition.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="/icons/earth.png"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <div className="container px-1">
              <h5 className="text-6xl mb-7"> <b> Our Cloud Services </b></h5>
            </div>
            <h3 className="text-[#FFFFFF] text-3xl mb-7">
              01 - CLOUD STRATEGY AND SERVICES
            </h3>
            <p className="mb-7">
              We work with you to develop a cloud roadmap for total integration
              that is in line with your business objectives. The cloud roadmap
              outlines your complete lifecycle from strategy to deployment.
            </p>

            <h3 className="text-[#FFFFFF] text-3xl">
              02 - CLOUD COST OPTIMIZATION
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-7">
              Making the move to a partial or full cloud-based business has a
              number of economic variables. We will find the best fit for your
              budget and ongoing operations.{" "}
            </p>

            <h3 className="text-[#FFFFFF] text-3xl">03 - DIGITAL TRANSITION</h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px]">
              From traditional desktop environments to user-centric digital and
              mobile solutions, we help you build a scalable digital workplace.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="26_img"
              src="/icons/c2_26_img1.png"
            />
          </div>
        </div>
      </section>

      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="26_img"
              src="/icons/c3_26_img1.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFFFFF] text-3xl mb-5">
            04 - CLOUD MIGRATION
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-7">
            We have experience with all major cloud providers including Azure,
              AWS and Google Cloud. We will choose the right provider for you
              and lead your integration process.{" "}
            </p>

            <h3 className="text-[#FFFFFF] text-3xl mb-5">
            05 - CLOUD MANAGEMENT
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
            Our end-to-end cloud management services will help you with cloud
              migration and post-migration operations.
            </p>
        </div>
        </div>
      </section>
      <Whitebg/>
      <Footer/>
    </div>
  );
}

export default Frame26
