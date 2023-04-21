import Image from "next/image";


function Footer(){
    return(
        <div className=" font-abc text-white  " >
            <div className="flex  justify-center"><div className="w-[1640px] h-[1px] bg-white"></div></div>
            <div className="content flex justify-evenly p-7">
                <div className="right">
                    <Image src="/svg/image 2.svg" width={175} height={56}/>
                    <p className="font-medium text-base w-[280px] h-[58px] mt-10 ">RIOTA delivers innovative customer 
                    centric technology solutions and 
                    services that enable clients to 
                    meet-up their business and IT 
                    challenges.</p>
                    <div className="icon ">
                        <ul className="flex flex-row gap-3 mt-20">
                            <li>
                                <Image src="/svg/FacebookBW.svg" width={42} height={42} alt=""/>
                            </li>
                            <li>
                                <Image src="/svg/instaBW.svg" width={42} height={42} alt=""/>
                            </li>
                            <li>
                                <Image src="/svg/Dribbble.svg" width={42} height={42} alt=""/>
                            </li>
                            <li>
                                <Image src="/svg/Behance.svg" width={42} height={42} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className=" flex flex-col gap-5">
                        <div className="font-extrabold text-xl">Services</div>
                        <ul className="font-medium text-base  flex flex-col gap-2">
                            <li className="">
                                <a className=" ">
                                Digital Transformation
                                </a>
                            </li>
                            <li className="">
                                <a className="">
                                Application Services
                                </a>
                            </li>
                            <li className="">
                                <a className="">
                                Engineering Services
                                </a>
                            </li>
                            <li className="">
                                <a className="">
                                Internet Of things
                                </a>
                            </li>
                            <li className="">
                                <a className="">
                                Cloud Solutions
                                </a>
                            </li>
                            <li>
                                <a className=" ">
                                Artificial Intelligence
                                </a>
                            </li>
        
                        </ul>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <div className="font-extrabold text-xl">Quick Links</div>
                        <ul className="font-medium text-base flex flex-col gap-2">
                            <li className="">
                                <a className="">
                                Ideas & Sights
                                </a>
                            </li>
                            <li className="">
                                <a className="">
                                Careers
                                </a>
                            </li>
                            <li className="">
                                <a className="">
                                Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="">
                                Tems & Conditions
                                </a>
                            </li>
                            <li className="">
                                <a className="">
                                Site Map
                                </a>
                            </li>
                            <li>
                                <a className="">
                                Partners
                                </a>
                            </li>
        
                        </ul>

                    </div>

                    <div className=" flex flex-col gap-5">
                        <div className="font-extrabold text-xl">Quick Links</div>
                        <ul className=' flex flex-col gap-2 font-medium text-base w-80'>
                            <li className=' flex flex-row gap-3 items-center '>
                                <Image
                                    src="/svg/phone.svg"
                                    width={40}
                                    height={40}
                                />
                                <div className='number'>1800-257-9500</div>
                            </li>
                            <li  className='flex flex-row gap-3 items-center '>
                                <Image
                                    src="/svg/mail.svg"
                                    width={40}
                                    height={40}
                                />
                                <div className='number'>info@riota.in</div>
                            </li>
                            <li  className='flex flex-row gap-3 items-center'>
                                <Image
                                    src="/svg/location.svg"
                                    width={40}
                                    height={40}
                                />
                                <div className='number'>The Hive - VR Mall, JN Road, Chennai, TN, 
                                India - 600 040</div>
                            </li>
                        </ul>

                    </div>



                </div>
            </div>
            <div className="flex  justify-center"><div className="w-[1640px] h-[1px] bg-white"></div></div>
            <div className="last flex justify-center text-center p-4">
                <div className="font-normal text-base">2023 Copyright ©  All rights reserved.</div>
            </div>


        </div>

    )
} 
export default Footer;