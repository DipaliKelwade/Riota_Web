import bg from '../../../public/svg/Frame43.png'
import Image from "next/image";
import Navbar from "./navbar";
import Footer from './footer1';

function Service(){
    return(
        <div className="text-white font-abc m-0 w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
            <Navbar/>
            <div className='firstSec my-8 flex flex-row mx-16' >
                <div className='leftside w-[65%] flex flex-row '>
                    <div className='leftText font-abc w-[800px] flex flex-col justify-center mx-20  '>
                        <div className='font-bold font text-3xl text-yellow-300'>RIOTA SERVICES</div>
                        <div className='font-bold text-white text-[60px]  py-7'>Digital Transformation</div>
                        <div className='text-white text-lg font-medium'>
                        <p>Digital technologies — including social media, the cloud, data analytics, and mobile — are rapidly emerging as disruptive forces for businesses across all industries, from Healthcare and Logistics to Manufacturing and Transport. These technologies are fundamentally changing how consumers interact with businesses, while opening new business models. These technologies are releasing a wave of IT-led innovation and creating new revenue and cost-saving opportunities.</p>                           
                         <p className='mt-8'>RIOTA collaborates in developing a digital business strategy that is aligned to your key business objectives and leverages digital technologies to produce a significant competitive advantage.</p>
                        </div>
                    </div>
                </div>
                <div className='rightside mt-8'> 
                    <Image
                        src="/svg/fullglob.svg"
                        alt="earth"
                        width={428}
                        height={426}
                    />
                </div>
            </div>

            <div className='mt-36'>
                <div className='  flex flex-col justify-center items-center text-center'>
                    <div className='font-bold font text-3xl text-yellow-300'>ABOUT RIOTA</div>
                    <div className='font-bold text-[60px] '>Company Overview</div>
                </div>

                <div className=' mt-20'>
                    <div className='flex flex-row justify-evenly items-center mt-20'>
                        <div className='one w-[715px] h-[125px]'>
                            <div className='text-3xl font-semibold '>01 - Discovery and Design Phase</div>
                            <p className='text-lg font-medium'>Our experts engage with you in a discovery mode to assist in your digital transformation strategy. Such a discovery process starts by 
                            identifying your strategic business goals, business use-cases, and constraints like cost and time-to-market, to create your cohesive Digital Transformation Strategy.</p>
                        </div>
                        <div className='two '>
                            <Image src="/svg/Round Cube.svg" width={263} height={240} alt='cube'/>
                        </div>
                    </div>

                    <div className='flex flex-row justify-evenly items-center mt-20'>
                        <div className='two'>
                            <Image src="/svg/Pie Chart Round.svg" width={231} height={250} alt='disc'/>
                        </div>
                        <div className='one w-[715px] h-[125px]'>
                            <div className='text-3xl font-semibold '>02 - Migration and Modernization Phase</div>
                            <p className='text-lg font-medium'>Our transformation led cloud migration approach focuses primarily on rearchitecting and refactoring the apps/software that are fast-paced, evolving, and would benefit most from the cloud-native and cloud capabilities</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-evenly items-center mt-20'>
                        <div className='one w-[715px] h-[125px]'>
                            <div className='text-3xl font-semibold '>02 - Prioritization and Planning Phase</div>
                            <p className='text-lg font-medium'>Our experts engage with you in a discovery mode to assist in your digital transformation strategy. Such a discovery process starts by 
                            identifying your strategic business goals, business use-cases, and constraints like cost and time-to-market, to create your cohesive Digital Transformation Strategy.</p>
                        </div>
                        <div className='two'>
                            <Image src="/svg/Cone.svg" width={247} height={296} alt='cone'/>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='ninesec my-24 w-[100vh} h-[450px] bg-white'>
                <div className='left'> </div>
                <div className='right float-right font-abc mx-40 my-16'>
                    <div className='text-[50px] font-bold text-[#12172D]'>Subscribe to Our Newsletter</div>
                    <div className='text-lg font-medium text-slate-500 w-[650px] my-3'>Lorem ipsum dolor sit amet consectetur. Arcu tristique quis gravida 
                    habitant suspendisse sodales.</div>
                    <div className='flex flex-row'>
                        <input className='w-[766px] h-[73px] border-2  border-solid border-black rounded-r-full flex flex-row px-2' placeholder='Enter Your Email '/>
                        <div className='h-[73px] w-[186px] rounded-full bg-[#12172D]  text-white font-bold text-xl text-center p-5 -ml-44'>Subscribe</div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>

    )
}
export default Service;