import Link from "next/link";
import Image from "next/image";
import Contact from "./contact";
import Home from "./home";
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
             />
        </div> 
        <div className="nav  my-14 pr-24 ">
             <ul className="flex flex-row space-x-10 text-base font-semibold font-abc cursor-pointer ">
                 <li>
                     <Link href="components/home"  >
                         Home
                     </Link>
                 </li>

                 <li>
                     <Link href={"/"}>
                        <div onClick={()=> setIsOpen((prev)=>!prev)} className="flex flex-row ">Digital Transformation
                            <Image className="-mt-2" src="/svg/.png" width={20} height={30}/>
                        </div>
                        {isOpen &&<div  className="bg-gray-500  rounded-lg  mt-2 p-8 absolute ">
                                <ul className="flex flex-col gap-4 text-white ">
                                    <li>
                                        <Link href="components/"  >
                                            Advanced analytics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/home"  >
                                            Internet analytics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/home"  >
                                           Artificial Intelligence
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/home"  >
                                            Cloud Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/home"  >
                                           IT Consulting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/home"  >
                                            Mobility Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/home"  >
                                            SAP Solutions
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>}
                         
                     </Link>
                 </li>

                 <li>
                     <Link href={'/'}>
                     <div onClick={()=> setIsOpen1((prev)=>!prev)}>IT Services</div>
                     {isOpen1 &&<div className="bg-gray-500  rounded-lg  mt-2 p-10 absolute">
                             <ul className="flex flex-col gap-3 text-white ">
                                 <li>
                                     <Link href="components/home"  >
                                         Embedded Services Firmware
                                     </Link>
                                 </li>
                                 <li>
                                     <Link href="components/home"  >
                                         Application Development
                                     </Link>
                                 </li>
                                 <li>
                                     <Link href="components/home"  >
                                        Product Development
                                     </Link>
                                 </li>
                             </ul>
                         </div>}
                     </Link>
                 </li>
                 <li>

                     <Link href={"/products.js"}>
                         Product & Solutions
                     </Link>
                 </li>
                 <li>
                     <Link href={"/Home"}>
                         About Us
                     </Link>
                 </li>
                 <li >
                     <Link href='components/contact'>
                         <button className="rounded-full w-28 h-12 -mt-5 bg-white text-black cursor-pointer">Contact Us </button>
                     </Link>
                 </li>
             </ul>
        </div>
     </div>
    )
}
export default Navbar;