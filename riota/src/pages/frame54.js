import Image from "next/image";
import Navbar from "./navbar";
import SubtoNew from "./SubtoNew";
import bg from "../../public/svg/F27bg.svg";
import "../../public/svg/g12.svg";
import "../../public/svg/img1.svg";
import "../../public/svg/img2.svg";
import "../../public/svg/img3.svg";
import "../../public/svg/img4.svg";
import "../../public/svg/img5.svg";
import Footer from "./footer1";

export default function Frame54() {
  return (
    <>
     

      <div
        className="w-full  overflow-hidden"
        style={{ backgroundImage: `url(${bg.src})`, height: "4700px" }}
      >
      <Navbar />
        <div className="ml-28 mt-24">
          <h2 className="text-yellow-300 text-3xl font-semibold">
            IT SERVICES
          </h2>
          <div className="w-3/5">
            <h1 className="text-white text-6xl font-semibold mt-4 ">
              Application Development
            </h1>
            <p className="text-white mt-8 text-xl">
              The all-new breed of web and mobile apps are becoming an integral
              part of businesses across various industries. The dramatic changes
              it brings in the business has led to an increase in its adoption
              worldwide.
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
              We offer custom application development that is accessible over
              smartphones or Web, for a specific business purpose, sufficing all
              requirements of a business, and even being responsive as well.
              Additionally, we also provide consulting help, even if you have
              everything already in place, our consulting services will help to
              increase the effectiveness of your existing systems and processes.
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
              Our Application Development Strategy involves
            </h1>
            <div className="text-white text-4xl mt-20">
              <h3>01 - NO COOKIE-CUTTER SOLUTIONS</h3>
              <p className="mt-8 text-2xl">
                We take custom software development projects very seriously.
                They are our specialty for a reason. We take the time to get to
                know not only your project, but also your company and your
                industry. This allows us to be able to use the right tools,
                technologies, and frameworks to accomplish your goals.
              </p>
            </div>
            <div className="text-white text-4xl mt-28">
              <h3>02 - ANY PLATFORM, ANY CODE</h3>
              <p className="mt-8 text-2xl">
                One of our core competencies is versatility. Whatever your needs
                may be, our diverse team of full stack developers, designers,
                and testers will make your software dreams a reality. From
                database design to web application development, systems
                integration to cloud consulting, mobile app development to
                software product development, we have the experience and
                expertise to build your next software application.
              </p>
            </div>
          </div>

          <div className="text-white text-4xl mt-44 w-3/6 float-right mr-32">
            <h3>03 - QUALITY CODE MATTERS</h3>
            <p className="mt-8 text-2xl">
              Quality code matters to us and it should matter to you. Not only
              will your code be built to meet your current needs, it will be
              built to facilitate future needs. This is significant when you
              want to add new features, cross platforms, or make updates down
              the road. This is also one of the major differences between good
              code and bad code. All of our software engineering solutions
              deliver functions and features that are built on-spec, as well as
              scalable, reliable, and robust.
            </p>
          </div>

          <div className="text-white text-4xl mt-28 w-3/6 float-right mr-32">
            <h3>04 - TRANSPARENT AND HONEST</h3>
            <p className="mt-8 text-2xl">
              We believe in providing a high level of transparency to our
              clients, abiding by our core principles, and always communicating
              honestly and frequently. From small businesses to Large companies,
              {"we've"} worked with them all and we anxiously welcome a new project
              and challenge from you. Our goal is to provide high-end custom
              software development services to our clients that are unrivaled in
              the industry. Our expert team will build your custom software
              solution to exceed your expectations.
            </p>
          </div>
        </div>
        <div
          className="w-full mt-0 justify-center flex"
          style={{ backgroundColor: "`url(${bg.src})`" }}
        >
          <div className="text-white text-6xl mt-44 w-3/6 justify-center flex">
            <h3>Technology Areas We Consult</h3>
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
                  src="/svg/img4.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={70}
                  height={70}
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
                  src="/svg/img5.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={70}
                  height={70}
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
                  src="/svg/img1.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={70}
                  height={70}
                  priority
                  style={{ marginTop: "4px" }}
                />
              </div>

              <h1 className="font-semibold text-2xl mt-5 flex justify-center ">
                Cloud App Development
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                {"RIOTA’s"} cloud application development services provide clients
                access to powerful cloud...
              </div>
              <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white mt-2 w-full">
          <div
            className=" m-5 border-solid  border-2 rounded-3xl float-left"
            style={{ width: "500px" }}
          >
            <div className="justify-center m-8">
              <div className="font-semibold text-2xl mt-2 ml-28 flex justify-center ">
                <Image
                  src="/svg/img3.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={70}
                  height={70}
                  priority
                  style={{ marginTop: "4px" }}
                />
              </div>

              <h1 className="font-semibold text-2xl mt-5 flex justify-center ">
                SaaS Development
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                We have experts who are proficient in the technologies needed to
                build a SaaS solution for...
              </div>
              <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                Know More
              </button>
            </div>
          </div>
          <div
            className=" m-5 border-solid  border-2 rounded-3xl flex justify-center"
            style={{ width: "500px" }}
          >
            <div className="justify-center m-8">
              <div className="font-semibold text-2xl mt-2 ml-28 flex justify-center ">
                <Image
                  src="/svg/img2.svg"
                  alt="G12"
                  className="float-right mr-28 "
                  width={70}
                  height={70}
                  priority
                  style={{ marginTop: "4px" }}
                />
              </div>

              <h1 className="font-semibold text-2xl mt-5 flex justify-center ">
                Cross-Platform Hybrid Apps
              </h1>
              <br />
              <div className="text-xl ml-10 mr-10">
                As a custom mobile app development company, we offer the best
                app development solutions for...
              </div>
              <button className="w-80 h-12 border-2 mt-12 rounded-3xl border-white ml-12">
                Know More
              </button>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div >
        <SubtoNew />
      </div>
     <div className="mt-12">
     <Footer/>
     </div>
      </div>

      
      

    </>
  );
}
