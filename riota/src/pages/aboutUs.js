import bg from '../../public/svg/Frame43.png'
import Image from "next/image";
import Navbar from "./navbar";
import Footer from './footer1';


function About(){
    return(
        <div className="text-white font-abc m-0 w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
            <Navbar/>
            <div className='firstSec my-8 flex flex-row mx-16' >
                <div className='leftside w-[65%] flex flex-row '>
                    <div className='leftText font-abc w-[800px] flex flex-col justify-center mx-20  '>
                        <div className='font-bold font text-3xl text-yellow-300'>ABOUT RIOTA</div>
                        <div className='font-bold text-white text-[60px]  py-7'>Company Overview</div>
                        <div className='text-white text-lg font-medium'>
                            <p>We are a leading IT consulting and Software services company, delivering complex world class custom software solutions on a variety of technology platforms to organizations across industry verticals.As a Software and Product development company, we offer a full range of custom software development services, mobile application development and SaaS solutions for a wide variety of verticals and business domains with our vast experience, team of skilled professionals, key business insights and a dedicated working process.</p>
                            <p className='mt-8'>At RIOTA, we strongly believe in delivering innovative customer centric technology solutions and services that enable clients to meet-up their business and IT challenges. Our Digital Automation process such as Cloud Automation Services, Robotic Process Automation Services, helps you to expedite your revenue growth and redesign your business operations.</p>
                        </div>
                    </div>
                </div>
                <div className='rightside mt-8'> 
                    <Image
                        src="/svg/manAbout.svg"
                        alt="earth"
                        width={282}
                        height={532}
                    />
                </div>
            </div>

            <div className='2ndSec '>
                <div className='  flex flex-col justify-center items-center text-center'>
                    <div className='font-bold font text-3xl text-yellow-300'>ABOUT RIOTA</div>
                    <div className='font-bold text-[60px] '>Company Overview</div>
                </div>

                <div className=' mt-20'>
                    <div className='flex flex-row justify-evenly mt-20'>
                        <div className='one w-[730px] h-[44px]'>
                            <div className='text-4xl font-bold '>Driven by Excellence</div>
                            <p className='text-xl font-medium'>Our commitment to delivering only the best at every stage of the product 
                            development process, from planning to delivery to unlock maximum value.</p>
                        </div>
                        <div className='two'>
                            <div className='font-[Poppins] text-gray-500 text-8xl mr-56'>01</div>
                        </div>
                    </div>

                    <div className='flex flex-row justify-evenly mt-20'>
                        <div className='two '>
                            <div className='font-[Poppins] text-gray-500 text-8xl ml-56'>02</div>
                        </div>
                        <div className='one w-[730px] h-[44px]'>
                            <div className='text-4xl font-bold '>Focused and Passionate Team</div>
                            <p className='text-xl font-medium'>A skilled and experienced team of engineers, designers and product 
                            managers that are driven by the company’s mission to spread digital happiness.</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-evenly mt-20'>
                        <div className='one w-[730px] h-[44px]'>
                            <div className='text-4xl font-bold '>Strong Relationships and Culture</div>
                            <p className='text-xl font-medium'>Honesty, transparency and consistency are the underlying values in our 
                            relationship with the clients to instill trust and be trusted.</p>
                        </div>
                        <div className='two'>
                            <div className='font-[Poppins] text-gray-500 text-8xl mr-56'>03</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-evenly mt-20 '>
                        <div className='two '>
                            <div className='font-[Poppins] text-gray-500 text-8xl ml-56'>04</div>
                        </div>
                        <div className='one w-[730px] h-[44px]'>
                            <div className='text-4xl font-bold '>Innovation and Creativity</div>
                            <p className='text-xl font-medium'>Our relentless efforts to stay on top of the latest technology trends 
                            and consistently think out of the box for each project we work on.</p>
                        </div>  
                    </div>

                </div>
                
            </div>

            <div className='sevensec flex flex-col justify-center items-center my-28'>
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
           

           <div className='sevensec flex flex-col justify-center items-center my-28'>
                <div className=' font-abc w-[800px] text-center '>
                    <div className='font-bold font text-3xl text-yellow-300'>RIOTA SOFTWARE SOLUTIONS</div>
                    <div className='font-bold text-white text-[60px]  '>Software Solutions?</div>
                    
                </div>
            </div>

           <div className='container m-auto grid grid-cols-4 gap-11'>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                    <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                        <Image src="/svg/glob.svg" width={55} height={53} alt='glob'/>
                        <div className='font-bold text-xl'>BUSINESS VISION</div>
                    </div>
                </div>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                    <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                        <Image src="/svg/growth.svg" width={55} height={53} alt='glob'/>
                        <div className='font-bold text-xl'>BUSINESS GROWTH</div>
                    </div>
                </div>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                    <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                        <Image src="/svg/integration.svg" width={55} height={53} alt='glob'/>
                        <div className='font-bold text-xl'>INTEGRATION</div>
                    </div>
                </div>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                    <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                        <Image src="/svg/cost.svg" width={55} height={53} alt='glob'/>
                        <div className='font-bold text-xl'>COST EFFECTIVE</div>
                    </div>
                </div>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                    <Image src="/svg/strategy.svg" width={55} height={53} alt='glob'/>
                    <div className='font-bold text-xl'>STRATEGY</div>
                </div>
                </div>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                    <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                        <Image src="/svg/alarm.svg" width={55} height={53} alt='glob'/>
                        <div className='font-bold text-xl'>EFFICIENCY</div>
                    </div>
                </div>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                    <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                        <Image src="/svg/spport.svg" width={55} height={53} alt='glob'/>
                        <div className='font-bold text-xl'>SUPPORT</div>
                    </div>
                </div>
                <div className="rounded-xl w-[295px] h-[181px] mx-auto bg-gradient-to-br p-[3px] from-[#ffffff] via-[#8a8a8a] to-[#000000]">
                    <div className="flex flex-col justify-center items-center gap-7 h-full bg-[#12172D] text-white rounded-lg">
                        <Image src="/svg/team.svg" width={55} height={53} alt='glob'/>
                        <div className='font-bold text-xl'>EXPERT TEAM</div>
                    </div>
                </div>
            </div>

            <div className='11sec  mt-32 mx-40 flex flex-row '>
                <div className='leftText font-abc w-[800px] flex flex-col  '>
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
                            />
                            <div className='text-[30px] font-bold mt-5'>ISO 9001:2015</div>
                            <div className='text-lg font-bold '>Quality Management System</div>
                        </li>
                        <li className='flex flex-col justify-center items-center'>
                            <Image
                                src="/svg/membership.svg"
                                width={45}
                                height={45}
                            />
                            <div className='text-[30px] font-bold mt-5'>NASSCOM</div>
                            <div className='text-lg font-bold '>Certificate of Membership</div>
                        </li>
                        <li className='flex flex-col justify-center items-center'>
                            <Image
                                src="/svg/management.svg"
                                width={50}
                                height={60}
                            />
                            <div className='text-[30px] font-bold mt-5 '>ISO/IEC 27001:2013</div>
                            <div className='text-lg font-bold '>Information Security Management</div>
                        </li>
                    </ul>
                </div>
                </div>

                <div className='flex justify-evenly '>
                    <div className=' font-abc w-[400px]  mb-20'>
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

                <div className='flex justify-evenly  mt-24'>
                    <div>
                        <Image
                            src='/svg/partner.svg'
                            alt='clients'
                            width={786}
                            height={275}
                        />
                    </div>
                    <div className=' font-abc w-[400px]  mb-20'>
                        <div className='font-bold font text-3xl text-[#FFEE40]'>PARTNERS</div>
                        <div className='font-bold text-white text-[60px]  '>Strategic Partners of RIOTA</div>
                        <div className='text-white text-lg font-medium'>The Technology partnership with Ezetap, HDFC Bank, PAX 
                        India, and Razorpay, has enabled RIOTA to develop and support cutting edge products and solutions on IOT.</div>
                    </div>
                    
                </div>
                <Footer/>
        </div>
    )
}
export default About;