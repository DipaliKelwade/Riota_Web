import Link from "next/link";
import Image from "next/image";



import { useState } from "react";

const Navbar=()=>{
    const [isOpen ,setIsOpen]=useState(false);
    const [isOpen1 ,setIsOpen1]=useState(false);
    return(
        <div className=' header text-white flex flex-row justify-between font-abc ' >
        <div className='top-0 left-0 pl-24 my-12'>
             <Image  src="/svg/image1.png"  
                     height="33"
                     width="103"   
                     alt=""
             />
        </div> 
        <div className="nav  my-14 pr-24 ">
             <ul className="flex flex-row space-x-10 text-base font-semibold font-abc cursor-pointer ">
                 <li>
                     <Link href="/home"  >
                         Home
                     </Link>
                 </li>

                 <li>
                     <Link href={""}>
                        <div onClick={()=> setIsOpen((prev)=>!prev)} className="flex flex-row ">Digital Transformation
                            <Image className="-mt-2" src="/svg/down-24.png" width={20} height={30}  alt=""/>
                        </div>
                        {isOpen &&<div  className="bg-gray-500  rounded-lg  mt-2 p-8 absolute ">
                                <ul className="flex flex-col gap-4 text-white ">
                                    <li>
                                        <Link href="/Frame23"  >
                                            Advanced analytics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Frame24"  >
                                            Internet Of Things
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/frame27"  >
                                           Artificial Intelligence
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Frame26"  >
                                            Cloud Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Frame28"  >
                                           IT Consulting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Frame25"  >
                                            Mobility Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Frame29"  >
                                            SAP Solutions
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>}
                         
                     </Link>
                 </li>

                 <li>
                     <Link href={''}>
                     <div onClick={()=> setIsOpen1((prev)=>!prev)}>IT Services</div>
                     {isOpen1 &&<div className="bg-gray-500  rounded-lg  mt-2 p-10 absolute">
                             <ul className="flex flex-col gap-3 text-white ">
                                 <li>
                                     <Link href="/Frame56"  >
                                         Embedded Services Firmware
                                     </Link>
                                 </li>
                                 <li>
                                     <Link href="/frame54"  >
                                         Application Development
                                     </Link>
                                 </li>
                                 <li>
                                     <Link href="/frame57"  >
                                        Product Development
                                     </Link>
                                 </li>
                             </ul>
                         </div>}
                     </Link>
                 </li>
                 <li>

                     <Link href="/products">
                         Product & Solutions
                     </Link>
                 </li>
                 <li>
                     <Link href="/aboutUs">
                         About Us
                     </Link>
                 </li>
                 <li >
                     <Link href="/contact">
                         <button className="rounded-full w-28 h-12 -mt-5 bg-white text-black cursor-pointer">Contact Us </button>
                     </Link>
                 </li>
             </ul>
        </div>
     </div>
    )
}
export default Navbar;