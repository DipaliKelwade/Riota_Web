import '../../styles/styles.module.css'
import bg from '../../../public/svg/Frame43.png'
import Image from 'next/image';
import Navbar from "./navbar";
import Link from 'next/link'

function svm(){
    return(
        <div className=" w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
            <Navbar/>
            <div>
                <h3 className='font-extrabold relative text-[30px] font-abc text-yellow-400 mt-[3%] text-center'>RIOTA Products & Solutions</h3>
                <h2 className='font-extrabold relative text-[60px] font-abc text-white mt-[3%] text-center ml-[6.5%] mr-[6.5%]'>SMART VENDING MACHINE WITH ADVANCED TECHNOLOGIES</h2>
            </div>
            <div className='ml-[9%] mr-[9%]'>
                <Image
                src="/images/Svm/svm.png"
                width={1240}
                height={600}/>
            </div>
            <div>
                <h2 className='font-extrabold relative text-[60px] font-abc text-white mt-[3%]  ml-[9%] '>Smart Vending Machine</h2>
                <p className='font-medium font-abc text-white text-[18px] ml-[9%] mr-[9%]'>We have a range of non-proprietary free-standing smart vending machines which include features like product elevators, no-touch automatic delivery door, conveyor belt delivery system with optional touch-free purchasing via cell phone.</p>
                <p className='font-medium font-abc text-white text-[18px] ml-[9%] mr-[9%]'>These machines are connected to our vending machine management cloud, so you can see real-time sales data and instantly remotely control your product information, images, prices, and video content on the touchscreens. Our smart vending machines are suited to non-traditional products like cupcakes, PPE, electronics, phones and accessories, hemp-related products, OTC and health products, and apparel.</p>
                <p className='font-medium font-abc text-white text-[18px] ml-[9%] mr-[9%]'>We work with you to customize the aesthetics and UX to match your brand or business model. Whatever you have in mind, talk to us, let’s create something amazing!</p>
                
            </div>

        </div>

    )
}
export default svm;