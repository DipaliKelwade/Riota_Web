import React from "react";
import Image from "next/image";
import bg from '../../public/svg/Frame43.png';
import Whitebg from "./components/Whitebg";
import Footer from "./components/footer1";
import Navbar from "./components/navbar";

function Frame25() {
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
              <h1 className="text-[#FFFFFF] text-6xl">
                <b>MOBILITY SOLUTIONS</b>
              </h1>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                Our mobile-first world gives rising importance to mobility
                considerations in digital solutions. Customers want anytime,
                anywhere access to technology and software applications.
                Considering the increase of mobility in enterprise digital
                transformation, companies are challenged to create new
                opportunities continually to keep customers engaged.
              </p>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                We provide an integrated suite of services to deploy
                high-quality and scalable mobile solutions across consumer
                applications, enterprise applications like ERP, SCM , Payment
                Solutions, CRM, HRM and Original Equipment Manufacturer (OEM)
                applications.
              </p>
              <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
                We develop customized, device-neutral, technology-independent
                and easy-to-use mobile solutions that drive higher customer
                engagement, increase retention, improve workplace productivity
                and elevate business growth.
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
            <div className="container  px-1">
              <h5 className="text-6xl mb-7"> <b> Our Mobility Services </b></h5>
            </div>
            <h3 className="text-[#FFFFFF] text-3xl mb-7">
              01 - CONSULTING AND STRATEGY
            </h3>
            <p className="mb-7">
              We assess your current situation, build your business roadmap and
              architecture, and advise on rapid prototyping.
            </p>

            <h3 className="text-[#FFFFFF] text-3xl">
              02 - APPLICATION AND SOFTWARE DEV KIT (SDK) CREATION
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-7">
              We use data and assets to develop a managed solution across your
              chosen platform that automates the processes and operations of the
              software development and deployment cycle, for your IoT solution.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="25_img"
              src="/icons/c2_25_img1.png"
            />
          </div>
        </div>
      </section>

      
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="25_img"
              src="/icons/c3_25_img1.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFFFFF] text-3xl mb-5">
            03 - QUALITY ASSURANCE AND SECURITTY
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-7">
              This requires a well-planned IoT testing strategy that is
              comprehensive and is constantly evolving with changes. Our testing
              strategy encompasses test management tools, test classes, test lab
              setup comprising simulators, ready-made tools, and extensible
              frameworks.
            </p>

            <h3 className="text-[#FFFFFF] text-3xl mb-5">
              04 - MOBILE APPLICATION ANALYTICS
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              This requires a well-planned IoT testing strategy that is
              comprehensive and is constantly evolving with changes. Our testing
              strategy encompasses test management tools, test classes, test lab
              setup comprising simulators, ready-made tools, and extensible
              frameworks.
            </p>
        </div>
        </div>
      </section>
      <Whitebg/>
      <Footer/>
    </div>
  );
}

export default Frame25;
