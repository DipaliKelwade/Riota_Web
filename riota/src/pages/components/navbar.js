import Link from "next/link";
import Image from "next/image";
import Contact from "./contact";
import Home from "./home";

const Navbar=()=>{
    return(
        <div className=' header text-white flex flex-row justify-between ' >
        <div className='top-0 left-0 pl-24 my-12'>
             <Image  src="/svg/image1.png"  
                     height="33"
                     width="103"   
             />
        </div> 
        <div className="nav  my-14 pr-24 ">
             <ul className="flex flex-row space-x-10 text-base font-semibold font-abc cursor-pointer ">
                 <li>
                     <Link href="/home"  legacyBehavior>
                         <a>Home</a>
                     </Link>
                 </li>
                 <li>
                     <Link href={"/"}>
                         Digital Transformation
                     </Link>
                 </li>
                 <li>
                     <Link href={"/Home"}>
                         Product & Solutions
                     </Link>
                 </li>
                 <li>
                     <Link href={"/Home"}>
                         About Us
                     </Link>
                 </li>
                 <li >
                     <Link href='pages/contact'>
                         <button className="rounded-full w-28 h-12 -mt-5 bg-white text-black cursor-pointer">Contact Us </button>
                     </Link>
                 </li>
             </ul>
        </div>
     </div>
    )
}
export default Navbar;