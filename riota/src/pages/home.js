import bg from '../../public/svg/Frame43.png'
import Image from "next/image";
import Navbar from "./navbar";
import Footer from './footer1';
import Whitebg from './Whitebg';
function Home(){
    return(
        <div className=" w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
           <Navbar/>
           <div className='firstSec my-8 flex flex-row' >
                <div className='leftside w-[70%] flex flex-row mx-5'>
                    <div className='socialMediabar flex flex-col p-6 '>
                        <ul>
                            <li className='pb-2 ml-3 w-auto h-auto'>
                                <Image 
                                    src="/svg/verticalbar.svg"
                                    alt="vertical"
                                    width="5"
                                    height="1"
                                    
                                />
                            </li>
                            <li className='py-2'>
                                <Image 
                                    src="/svg/FaceBook.svg"
                                    alt="fb"
                                    height="30"
                                    width="30" 
                                />
                            </li>
                            <li className='py-2'>
                                <Image 
                                    src="/svg/twitter.svg"
                                    alt="twitter"
                                    height="30"
                                    width="30" 
                                />
                            </li>
                            <li className='py-2'>
                                <Image 
                                    src="/svg/in.svg"
                                    alt="in"
                                    height="30"
                                    width="30" 
                                />
                            </li>
                            <li className='py-2'>
                            <Image 
                                src="/svg/insta.svg"
                                alt="insta"
                                height="30"
                                width="30" 
                            />
                            </li>
                            <li className='pt-2 ml-3'>
                                <Image 
                                    src="/svg/verticalbar.svg"
                                    alt="vertica;"
                                    width="5"
                                    height="1"
                                    
                                />
                            </li>
                        </ul>
                    </div>
                    <div className='leftText font-abc w-[800px] flex flex-col justify-center mx-20  '>
                        <div className='font-bold font text-3xl text-yellow-300'>LOREM IMPSUM</div>
                        <div className='font-bold text-white text-[60px]  py-7'>World’s Leading <span className='text-yellow-300'>IOT</span> Products & Solution</div>
                        <div className='text-white text-lg font-medium'>We are leaders, thinkers and makers at your service. Dedicating our knowledge 
                        to create user-centric designs backed by our experience. Our team is our 
                        major strength in providing qualitative products.</div>
                        <div className="border-2  rounded-full border-solid border-white  font-bold text-base text-white h-12 w-32 text-center p-2 my-7">{"Let's Start"}</div>
                    </div>
                </div>
                <div className='rightside w-[30%] mt-8'> 
                    <Image
                        src="/svg/earth.svg"
                        alt="earth"
                        width={700}
                        height={500}
                       
                    />
                </div>
           </div>

           <div className='arrow flex items-center justify-center mb-[142px]'>
                <Image
                    src="/svg/arrow.svg"
                    alt="arrow"
                    width={15}
                    height={30}
                    
                />
           </div>

           <div className="secondsec  ml-36 flex flex-row">
                <div className='leftside w-[30%] flex flex-row ml-12'>
                    <Image 
                        src="/svg/man2.svg"
                        alt="man"
                        width={359}
                        height={445}
                    />
                </div>
                <div className='rightside w-[70%] mt-8 ml-[150px] '>
                    <div className='leftText font-abc w-[800px] flex flex-col justify-center mx-20  '>
                        <div className='font-bold font text-3xl text-yellow-300'>RIOTA INNOVATIVE SOLUTIONS</div>
                        <div className='font-bold text-white text-[60px]  py-7'>Leaders,Thinkers & Makers</div>
                        <div className='text-white text-lg font-medium'>At RIOTA, we strongly believe in delivering innovative customer centric t
                        echnology solutions and services that enable clients to meet-up their business 
                        and IT challenges.Our Digital Automation process such as Cloud Automaton Services, Robotic Process Automation Services, help you to expedite your revenue growth and redesign your business operations.Ever since our establishment, we are growing every day to meet the growing demands of our clients and surpass their expectations.</div>
                        <div className='border-2  rounded-full border-solid border-white  font-bold text-base text-white h-12 w-32 text-center p-2 my-7'>Read More</div>
                    </div>
                </div>
           </div>

           <div className='thirdsec flex flex-col justify-center items-center my-32'>
                <div className=' font-abc w-[800px] text-center '>
                    <div className='font-bold font text-3xl text-yellow-300'>Services</div>
                    <div className='font-bold text-white text-[60px]  '>Our Innovative Services</div>
                    <div className='text-white text-lg font-medium'>Our relentless efforts to stay on top of the latest technology trends and consistently 
                    think out of the box for each project we work on.</div>
                </div>
           </div>

           <div className='foursec  flex flex-row '>
                <div className='leftside w-[30%] flex flex-row ml-32'>
                    <div className='font-bold text-white text-[60px]  py-7'>Digital Transformation</div>
                </div>
                <div className='rightside  mt-8 ml-[150px] '>
                    <div className='leftText font-abc w-[700px] flex flex-col justify-center mx-24 '>
                        <div className='text-white text-lg font-normal'>Digital technologies — including social media, the cloud, data analytics, and mobile — are rapidly emerging as disruptive forces for businesses across all industries, from Healthcare and Logistics to Manufacturing and Transport.</div>
                        <div className='point text-yellow-300 font-abc text-lg flex flex-row justify-evenly items-center mt-7 leading-10'>
                            <ul className='list-disc'>
                                <li>Advanced Analytics</li>
                                <li>Mobility Solutions</li>
                                <li>Artificial Intelligence</li>
                                <li>Professional Staffing</li>
                            </ul>
                            <ul className='list-disc'>
                                <li>Internet Of Things (IoT)</li>
                                <li>Cloud Solutions</li>
                                <li>IT Consulting</li>
                                <li>SAP Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>

           <div className='fivesec my-24  flex flex-row'>
                <div className='leftside  mt-8 ml-[150px]'>
                    <div className='leftText font-abc w-[700px] flex flex-col justify-center  '>
                        <div className='text-white text-lg font-normal'>We use Agile methodology for faster development to accelerate the creation, modernization, delivery and maintenance of high-quality, secure applications allowing you to innovate faster while reducing risk, time to market, total cost of ownership and agility to enable you to meet business needs , now and in the future.</div>
                        <div className='point text-yellow-300 font-abc text-lg ml-3 mt-7 leading-10'>
                                <ul className='list-disc'>
                                    <li>Advanced Analytics</li>
                                    <li>Mobility Solutions</li>
                                    <li>Artificial Intelligence</li>
                                    <li>Professional Staffing</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className='rightside w-[30%]  '>
                <div className='font-bold text-white text-[60px] ml-[250px] py-7'>Application Services </div>
            </div>
           </div>

           <div className='sixsec  ml-36 flex flex-row '>
                <div className='leftside w-[30%] flex flex-row ml-20'>
                    <div className='font-bold text-white text-[60px]  py-7'>Engineering Services</div>
                </div>
                <div className='rightside  mt-8 ml-[150px] '>
                    <div className='leftText font-abc w-[700px] flex flex-col justify-center  '>
                        <div className='text-white text-lg font-normal'>With advanced tools and technologies and engineering expertise we build end-to-end software development services covering seamless and responsive interfaces and design experiences that will support round-the-clock to organizations across the globe. Our strong team of subject matter experts provides best-in-class solutions to established and emerging enterprises across different industry verticals.</div>
                        <div className='point text-yellow-300 font-abc text-lg ml-3 mt-7 leading-10'>
                            <ul className='list-disc'>
                                <li>Advanced Analytics</li>
                                <li>Mobility Solutions</li>
                                <li>Artificial Intelligence</li>
                                <li>Professional Staffing</li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>

           <div className='sevensec flex flex-col justify-center items-center my-32'>
                <div className=' font-abc w-[800px] text-center '>
                    <div className='font-bold font text-3xl text-yellow-300'>Why Choose Us</div>
                    <div className='font-bold text-white text-[60px]  '>Why RIOTA stands best</div>
                    <div className='text-white text-lg font-medium'>We have a small team & work exclusively with each client. 
                    Our approach is reliable & accurate</div>
                </div>
           </div>

           <div className='eightsec '>
                <div className='text-white '>
                    <ul className='font-abc flex flex-row justify-evenly text-center'>
                        <li>
                            <h2 className='font-bold text-white text-[60px] '>95%</h2>
                            <h5 className='font-semibold font text-3xl text-white my-8'>Project Completed</h5>
                        </li>
                        <li>
                            <h2 className='font-bold text-white text-[60px] '>90%</h2>
                            <h5 className='font-semibold font text-3xl text-whitem my-8'>Project Completed</h5>
                        </li>
                        <li>
                            <h2 className='font-bold text-white text-[60px] '>85%</h2>
                            <h5 className='font-semibold font text-3xl text-whitem my-8'>Project Completed</h5>
                        </li>
                        <li>
                            <h2 className='font-bold text-white text-[60px] '>100%</h2>
                            <h5 className='font-semibold font text-3xl text-whitem my-8'>Project Completed</h5>
                        </li>

                    </ul>
                </div>
           </div>

           <Whitebg/>

           <div className='10sec flex flex-col justify-center items-center my-32'>
                <div className=' font-abc w-[800px] text-center mb-20'>
                    <div className='font-bold font text-3xl text-yellow-300'>Why Choose Us</div>
                    <div className='font-bold text-white text-[60px]  '>Why RIOTA stands best</div>
                </div>
                
                <Image
                    src="/svg/gridimg.svg"
                    alt="grid img"
                    width={1240}
                    height={961}
                />
     
           </div>
           <div className='11sec  flex flex-row justify-evenly '>
                <div className='leftText font-abc w-[800px] flex flex-col justify-center   '>
                    <div className='font-bold font text-3xl text-[#FFEE40]'>TESTIMONIAL</div>
                    <div className='font-bold text-white text-[60px]  py-2'>What Client Say </div>
                    <div className='text-white text-lg font-medium'>We always Appreciate any feedback from our client. But what 
                    could be better than a positive review from a happy customer?</div>
                    <div className='flex flex-row my-12 gap-8'>
                        <Image 
                            src="/svg/leftArrow.svg"
                            alt='arrow'
                            width={33}
                            height={17}
                            
                        />
                        <Image 
                            src="/svg/rightArrow.svg"
                            alt='arrow'
                            width={33}
                            height={17}
                            
                        />
                     </div>
                </div>
                <div className='h-[381px] w-[610px] rounded-3xl bg-gradient-to-tr from-gray-300 to-gray-800 font-abc px-12'>
                    <p className='text-white font-bold text-lg  pt-10 text-justify '>I would like to thank the RIOTA team for their professional work and detail oriented. Initially our project with RIOTA was to develop an app for Vending machines , 
                    but We ended up doing many other creative projects like Touchless-mobile app , Web portal for real time data, related to IoT vending machines. You have shown 
                    to have very competent resources, and have delivered the quality that our team was expecting on time.</p>
                    <p className='text-white font-bold text-lg '>-Prakash, General Manager</p>
                    <div className='pt-4'>
                        <Image
                            src="/svg/stars.svg"
                            alt='stars'
                            width={145}
                            height={35}
                        />
                    </div>
                </div>
            </div>

            <div className='12sec flex flex-col justify-center items-center my-28 '>
                <div className='font-bold text-white text-[60px]  py-2  '>Our Certification </div>
            
                <div >
                    <ul className='font-abc flex flex-row gap-72 text-center my-16 text-white'>
                        <li className='flex  flex-col justify-center items-center '>
                            <Image
                                
                                src="/svg/quality.svg"
                                width={80}
                                height={80}
                                alt='quality'
                            />
                            <div className='text-[30px] font-bold mt-5'>ISO 9001:2015</div>
                            <div className='text-lg font-bold '>Quality Management System</div>
                        </li>
                        <li className='flex flex-col justify-center items-center'>
                            <Image
                                src="/svg/membership.svg"
                                width={45}
                                height={45}
                                alt='membership'
                            />
                            <div className='text-[30px] font-bold mt-5'>NASSCOM</div>
                            <div className='text-lg font-bold '>Certificate of Membership</div>
                        </li>
                        <li className='flex flex-col justify-center items-center'>
                            <Image
                                src="/svg/management.svg"
                                width={50}
                                height={60}
                                alt='membership'
                            />
                            <div className='text-[30px] font-bold mt-5 '>ISO/IEC 27001:2013</div>
                            <div className='text-lg font-bold '>Information Security Management</div>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='flex justify-evenly '>
                <div className=' font-abc w-[400px]  mb-36'>
                    <div className='font-bold font text-3xl text-[#FFEE40]'>CLIENTS</div>
                    <div className='font-bold text-white text-[60px]  '>Our Valuable Clients</div>
                    <div className='text-white text-lg font-medium'>We value our customers because valuable 
                    customers are the profitable assets for a company.</div>
                </div>
                <div>
                    <Image
                        src='/svg/client.svg'
                        alt='clients'
                        width={786}
                        height={275}
                    />
                </div>
            </div>
            <Footer/>
      
        </div>
    )
}
export default Home;