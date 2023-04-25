import Image from "next/image";
import bg from "../../public/svg/Frame43.png";
import Navbar from "./navbar";
import Whitebg from "./Whitebg";
import Footer from "./footer1";

function Frame23() {
  return (
    <div
      className="m-0 w-full overflow-x-hidden box-border"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Navbar />
      {/* section1 */}
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFEE40] text-3xl mb-5">
              DIGITAL TRANSFORMATION
            </h3>
            <h1 className="text-[#FFFFFF] text-6xl mb-5 font-bold">
              Advanced analytics
            </h1>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px]">
              Advanced analytics is the foundation for cognitive computing,
              machine learning, AI and bots. it brings static data to life and
              unlocks the insight you've been searching for.We offer
              comprehensive solutions across industries in information
              management, data governance and advanced analytics that unlock
              organisational potential, enabling informed decision making,
              leveraging your {"company’s"} most valuable data assets to
              increase shareholder value.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10 "
              alt="earth"
              src="/icons/earth.png"
              width={428}
              height={427}
            />
          </div>
        </div>
        <div className="container mx-auto px-1 py-4">
          <div className="mx-auto">
            <h5 className="text-6xl font-bold">
              
                {" "}
                Our Analytics Platform Takes <br />
                Away The Hard Process Of Data Processing{" "}
              
            </h5>
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFFFFF] text-3xl mb-7">
              01 - ENTERPRISE DATA
            </h3>
            <p className="mb-7">
              Implement transactional ERP data, CRM systems and a wide variety
              of semistructured and unstructured data sets present in content
              repositories.
            </p>
            <ul className="mb-7">
              <li>● Data-Governance</li>
              <li>● Master Data-Management</li>
              <li>● Data Quality Management</li>
              <li>● Data-Integration ● Data-Security</li>
            </ul>
            <h3 className="text-[#FFFFFF] text-3xl">02 - MACHINE DATA</h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-7">
              Improve end-to-end transactional visibility to log files and other
              machinegenerated data for gaining complete insights into an IT
              infrastructure.
            </p>

            <h3 className="text-[#FFFFFF] text-3xl">
              03 - SENSOR-GENERATED DATA
            </h3>
            <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px]">
              Improve end-to-end transactional visibility to log files and other
              machinegenerated data for gaining complete insights into an IT
              infrastructure.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="data"
              src="/icons/data.png"
              width={300}
              height={277}
            />
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
            <Image
              className="object-cover object-center rounded z-10"
              alt="database"
              src="/icons/database.png"
              width={373}
              height={373}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFFFFF] text-3xl mb-7">
              04 - BI CONSULTING - Need right partner for{" "}
              <br className="mb-5" />
              right start
            </h3>
            <ul className="mb-7">
              <li>● Readiness assessment and defining strategic roadmap</li>
              <li>● Architecture Design and Case Implementation</li>
              <li>● Migration Strategy & Planning</li>
              <li>● BI tool evaluation and standardization</li>
              <li>● Reports and Dashboard assessment and design</li>
            </ul>

            <h3 className="text-[#FFFFFF] text-3xl mb-7">
              05 - DATA-WAREHOUSING & INTEGRATION - Heart of Business
              Intelligence system
            </h3>
            <ul className="mb-7">
              <li>● DW Architecture Design and Modeling</li>
              <li>● Data-acquisition Migration, and Integration</li>
              <li>● Maintenance and Support.</li>
            </ul>

            <h3 className="text-[#FFFFFF] text-3xl mb-7">
              06 - DATA-VISUALIZATION - Simple yet actionable data
              representation
            </h3>
            <ul>
              <li>● Customized dashboard creation</li>
              <li>● Customized reports design● Mobile Responsive BI</li>
              <li>● 2Dand 3D Map/Geo visualization.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* section4 */}
      <section className="text-white">
        <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-[#FFFFFF] text-3xl mb-7">07 - BIG DATA</h3>
            <p className="mb-7">
              Discover and drive business value by providing innovative big data
              solutions <br /> for various industries. Implement big data
              technology to deliver and resolve <br /> complex data-centric
              challenges while getting the best outcomes.
            </p>
            <div className="mb-7 flex flex-wrap justify-between gap-4">
              <button className="inline-flex items-center bg-[#12172D] border-2 border-[#FFFFFF] py-1 px-3 focus:outline-none hover:bg-[#FFFFFF] hover:text-[#12172D] rounded-full text-base mt-4 md:mt-0 text-[#FFFFFF]">
                Big Data Consulting
              </button>
              <button className="inline-flex items-center bg-[#12172D] border-2 border-[#FFFFFF] py-1 px-3 focus:outline-none hover:bg-[#FFFFFF] hover:text-[#12172D] rounded-full text-base mt-4 md:mt-0 text-[#FFFFFF]">
                Data Science
              </button>
              <button className="inline-flex items-center bg-[#12172D] border-2 border-[#FFFFFF] py-1 px-3 focus:outline-none hover:bg-[#FFFFFF] hover:text-[#12172D] rounded-full text-base mt-4 md:mt-0 text-[#FFFFFF]">
                Data Quality Management
              </button>
              <button className="inline-flex items-center bg-[#12172D] border-2 border-[#FFFFFF] py-1 px-3 focus:outline-none hover:bg-[#FFFFFF] hover:text-[#12172D] rounded-full text-base mt-4 md:mt-0 text-[#FFFFFF]">
                Big Data Implementation
              </button>
            </div>
            <p>
              Harness big data consulting to become relevant and competitive all
              the while <br /> delivering mission-critical results.
            </p>
          </div>
        </div>
      </section>

      <Whitebg />
      <Footer />
    </div>
  );
}

export default Frame23;
