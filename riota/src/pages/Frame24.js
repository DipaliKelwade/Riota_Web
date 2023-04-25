import Image from "next/image";
import bg from "../../public/svg/Frame43.png";
import Navbar from "./navbar";
import Whitebg from "./Whitebg";
import Footer from "./footer1";

const Frame24 = () => {
  return (
    <div
      className="m-0 w-full overflow-x-hidden box-border"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Navbar />
      <section className="text-white">
        <div className="container mx-auto flex md:px-20 px-2 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFEE40] text-3xl mb-5">
              DIGITAL TRANSFORMATION
            </h3>
            <h1 className="text-[#FFFFFF] text-6xl mb-5 font-bold">
              INTERNET OF THINGS
            </h1>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              In our modern society, everything is connected, from computers to
              cars, phones to houses and almost every electronic device you
              encounter. These separate objects are all bound together via the
              Internet of Things (IoT): smarter technology makes lives smoother.
            </p>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5 ">
              Our IoT services take digital transformation to the next level by
              delivering new experiences by creating actionable
              intelligence—giving them increased efficiency, improved
              productivity in a cost-effective way and achieving tangible
              benefits with smart products.
            </p>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-5">
              These products analyze usage patterns, provide in-depth, real-time
              insights and integrate efficient IoT processes into your existing
              business infrastructure. Our extensive IoT services harness a
              blend of machine learning and advanced analytics to deliver
              connected solutions for your business.
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
        <div className="container mx-auto flex md:px-20 px-2 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <div className="container ">
              <h5 className="text-6xl mb-7">
                {" "}
                <b>Our IoT services </b>
              </h5>
            </div>
            <h3 className="text-[#FFFFFF] text-3xl mb-7">
              01 - TECHNOLOGY & BUSINESS CONSULTING
            </h3>
            <p className="mb-7">
              We assess your current situation, build your business roadmap and
              architecture, and advise on rapid prototyping.
            </p>

            <h3 className="text-[#FFFFFF] text-3xl">
              02 - DEVELOPMENT & OPERATIONS
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-7">
              We use data and assets to develop a managed solution across your
              chosen platform that automates the processes and operations of the
              software development and deployment cycle, for your IoT solution.
            </p>

            <h3 className="text-[#FFFFFF] text-3xl">03 - QA & TESTING</h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px]">
              This requires a well-planned IoT testing strategy that is
              comprehensive and is constantly evolving with changes. Our testing
              strategy encompasses test management tools, test classes, test lab
              setup comprising simulators, ready-made tools, and extensible
              frameworks.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="24_img"
              src="/icons/c2_24_img1.png"
              width={373}
              height={373}
            />
          </div>
        </div>
      </section>

      <section className="text-white">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-3xl sm:text-6xl font-extrabold title-font mb-2 text-white">
              <b> Our Business Usecases</b>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-3">
                  <Image
                    src="/icons/healthcare.png"
                    alt="healthcare"
                    width={100}
                    height={100}
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">HEALTHCARE</span>
                  <p>
                    Connected wearable technology helps patients keep track of
                    their vital statistics such as blood pressure, calorie count
                    and pulse rate.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-3">
                  <Image
                    src="/icons/logistics.png"
                    alt="logistics"
                    width={100}
                    height={100}
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">LOGISTICS</span>
                  <p>
                    Our Indoor Positioning System employs wireless tracking
                    technology to locate assets and personnel on location using
                    real-time tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-3">
                  <Image
                    src="/icons/transport.png"
                    alt="transport"
                    width={100}
                    height={100}
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">TRANSPORT</span>
                  <p>
                    Efficient way to travel, saving energy and time by accessing
                    information on bad weather, traffic congestion and much more
                    through mobile apps.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-3">
                  <Image
                    src="/icons/retail.png"
                    alt="retail"
                    width={100}
                    height={100}
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">RETAIL</span>
                  <p>
                    Connected wearable technology helps patients keep track of
                    their vital statistics such as blood pressure, calorie count
                    and pulse rate.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-3">
                  <Image
                    src="/icons/manufacturing.png"
                    alt="manufacturing"
                    width={100}
                    height={100}
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">MANUFACTURING</span>
                  <p>
                    Our Indoor Positioning System employs wireless tracking
                    technology to locate assets and personnel on location using
                    real-time tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl">
                <div className="p-3">
                  <Image
                    src="/icons/smart_home.png"
                    alt="smart_home"
                    width={100}
                    height={100}
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <div className="flex justify-center p-3 flex-col text-center">
                  <span className="uppercase py-4">SMART HOMES</span>
                  <p>
                    Efficient way to travel, saving energy and time by accessing
                    information on bad weather, traffic congestion and much more
                    through mobile apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Whitebg />
      <Footer />
    </div>
  );
};

export default Frame24;
