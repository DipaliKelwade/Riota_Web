import Link from "next/link";
import Image from "next/image";

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
             <ul className="flex flex-row space-x-10 text-base font-semibold font-abc ">
                 <li>
                     <Link href={"/Home"}>
                         Home
                     </Link>
                 </li>
                 <li>
                     <Link href={"/Home"}>
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
                     <Link href={"/Home"}>
                         <button className="rounded-full w-28 h-12 -mt-5 bg-white text-black">Contact Us </button>
                     </Link>
                 </li>
             </ul>
        </div>
     </div>
    )
}
export default Navbar;