import bg from '../../public/svg/Frame43.png'
import Image from "next/image";
import Navbar from "./navbar";
import Footer from './footer1';

function Contact(){
    return(
        <div className=" w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
            <Navbar/>
            <div className='main font-abc text-white flex justify-evenly mt-16 mb-44'>
                <div className='leftsec '>
                    <div className='image'>
                        <Image
                            src="/svg/mancontact.svg"
                            width={466}
                            height={402}
                            alt='contact'
                            
                        />
                    </div>
                    <div className='w-[650px]  lg:w-[400px] '>
                        <ul className='mt-24 flex flex-col gap-8'>
                            <li className='flex flex-row gap-3 items-center text-2xl font-bold'>
                                <Image
                                    src="/svg/phone.svg"
                                    width={50}
                                    height={50}
                                    alt='phone'
                                    
                                />
                                <div className='number'>1800-257-9500</div>
                            </li>
                            <li  className='flex flex-row gap-3 items-center text-2xl font-bold'>
                                <Image
                                    src="/svg/mail.svg"
                                    width={50}
                                    height={50}
                                    alt='mail'
                                    
                                />
                                <div className='number'>info@riota.in</div>
                            </li>
                            <li  className='flex flex-row gap-3 items-center text-2xl font-bold'>
                                <Image
                                    src="/svg/location.svg"
                                    width={50}
                                    height={50}
                                    alt='location'
                                    
                                />
                                <div className='number'>The Hive - VR Mall, JN Road, Chennai, TN, 
                                India - 600 040</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='rightsec w-[624px]'>
                <div className='font-bold font text-3xl text-yellow-300'>Contact Me</div>
                <div className='font-bold text-white text-[60px] '>{"Let's build something together..."}</div>
                <div className='my-10 w-[500px] lg:w-[300px]'>
                    <ul className= ' flex flex-col gap-6 text-xl font-normal opacity-[0.90] '>
                        <li>
                            <h5>Name</h5>
                            <input className=' mt-2 border-none bg-transparent focus:outline-0 '/>
                            <div className='mt-4 w-[610px] h-[0.5px] bg-white'></div>
                        </li>
                        
                        <li>
                            <h6>Email</h6>
                            <input className=' mt-2 border-none bg-transparent focus:outline-0 '/>
                            <div className='mt-4 w-[610px] h-[0.5px] bg-white'></div>

                        </li>
                        
                        <li>
                            <h6>Subject</h6>
                            <input className=' mt-2 border-none bg-transparent focus:outline-0 '/>
                            <div className=' mt-4 w-[610px] h-[0.5px] bg-white'></div>
                        </li>
                        
                        <li>
                            <h6>Message</h6>
                            <input className=' mt-2 border-none bg-transparent focus:outline-0 w-[400px] h-[100px] 'placeholder='Type your Message'/>
                            <div className='mt-4 w-[610px] h-[0.5px] bg-white'></div>
                        </li>

                        <li>
                            <div className='border-2  rounded-full border-solid border-white  font-bold text-base text-white h-12 w-32 text-center p-2 mt-36'>Contact Uss</div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
export default Contact;