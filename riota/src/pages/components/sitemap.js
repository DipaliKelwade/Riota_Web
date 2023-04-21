import bg from '../../../public/svg/Frame43.png'
import Image from "next/image";
import Navbar from "./navbar";
import Footer from './footer1';

function SiteMap(){
    return(

        <div className="w-full overflow-x-hidden box-border text-white" style={{backgroundImage:`url(${bg.src})`}}>
            <Navbar/>
            <div className='text-6xl font-extrabold flex justify-center pb-32'>
                <div className=''>Sitemap</div>
            </div>
            <div className='flex flex-row justify-evenly pb-32  '>
            <div className='grid grid-cols-3 gap-80'>
            <div className=" flex flex-col gap-8">
                <div className="font-extrabold text-xl">Header Menus</div>
                <ul className="font-medium text-base flex flex-col gap-5">
                    <li className="">
                        <a className="">
                        Home Page
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Digital Transformation
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Product & Solutions
                        </a>
                    </li>
                    <li className="mb-2">
                        <a className="">
                        About Us
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            <div className=" flex flex-col gap-8">
                <div className="font-extrabold text-xl">Digital Trasnformation</div>
                <ul className="font-medium text-base flex flex-col gap-5">
                    <li className="">
                        <a className="">
                        Advanced Analytics
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Internet Of Things (IoT)
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Mobility Solutions
                        </a>
                    </li>
                    <li className="mb-2">
                        <a className="">
                        Cloud Solutions
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Artificial Intelligence
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        IT Consulting
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Professional Staffing
                        </a>
                </li>
                </ul>

            </div>

            <div className=" flex flex-col gap-8">
                <div className="font-extrabold text-xl">IT Services</div>
                <ul className="font-medium text-base flex flex-col gap-5">
                    <li className="">
                        <a className="">
                        Application Services
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        Product Development
                        </a>
                    </li>
                    <li className="">
                        <a className="">
                        EMBEDDED SERVICES AND FIRMWARE
                        </a>
                    </li>
                    
                </ul>
            </div>

            </div>
            </div>
            <Footer/>
            
            
            

        </div>
        

    )
}
export default SiteMap; 