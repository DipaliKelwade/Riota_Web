import '../styles/styles.module.css'
import bg from '../../public/svg/Frame43.png'
import Image from 'next/image';
import Navbar from "./navbar";
import Link from 'next/link'
import Footer from './footer1';

function product (){
    return(

        <div className=" w-full overflow-x-hidden box-border" style={{backgroundImage:`url(${bg.src})`}}>
            <div>
            <Navbar/>
                <h2 className='font-extrabold relative text-[30px] font-abc text-yellow-400 mt-[8%] ml-[8%]'>RIOTA Products and Services</h2>
                <p className='font-extrabold relative text-[60px] font-abc text-white ml-[8%]'>BUILD YOUR IOT<br></br>SOLUTIONS WITH RIOTA</p>
                <p className='relative text-[18px] font-abc text-white ml-[8%]'>We offer a wide range of IoT hardware and software development<br></br>services to build sleek web and mobile IoT applications for the<br></br>users of edge intelligence.</p>
                <Image className='relative mt-[-27%] ml-[60%]'
                alt=''
                src="/images/Illustration.png"
                height={500}
                width={500}/>
               
            </div>
            <div>
            <h2 className='font-extrabold relative text-[60px] font-abc text-white text-center mt-[11%]'>Our IOT Products</h2>
            <div className='flex flex-row'>
            <div>
            <a href='#'>
            <Image className='ml-[32%] mt-[2%]'
            alt=''
            src="/images/smartvending.png"
            width={370}
            height={400}/>
            <p className='whitespace-nowrap relative text-[25px] font-abc text-white ml-[47%] mt-[1%]'>Smart Vending Machine</p>
            </a>
            </div>
            <div>
            <a href='#'>
            <Image className='ml-[55%] mt-[2%]'
            alt=''
            src="/images/vms.png"
            width={370}
            height={400}/>
            <p className='whitespace-nowrap relative  text-[25px] font-abc text-white ml-[57%] mt-[1%] align-middle'>VMS User & Admin Application <br></br>for Vending Machine</p>
            </a>
            </div>
            <div>
            <a href='#'>
            <Image className='ml-[75%] mt-[2%]'
            alt=''
            src="/images/webportal.png"
            width={370}
            height={400}/>
            <p className='whitespace-nowrap relative  text-[25px] font-abc text-white ml-[110%] mt-[1%]'>Web Portal</p>
            </a>
            </div>
           

            </div>
            <div className='flex flex-row'>
            <div>
            <a href='#'>
            <Image className='ml-[95%] mt-[2%]'
            alt=''
            src="/images/sowkea.png"
            width={370}
            height={400}/>
            <p className='whitespace-nowrap relative  text-[25px] font-abc text-white ml-[125%] mt-[1%]'>Sowkea App</p>
            </a>
            </div>
            <div>
            <a href='#'>
            <Image className='ml-[110%] mt-[2%]'
            alt=''
            src="/images/VAC.png"
            width={370}
            height={400}/>
            <p className='whitespace-nowrap relative  text-[25px] font-abc text-white ml-[125%] mt-[1%]'>V.A.C Therapy System</p>
            </a>
            </div>

            </div>
           

            </div>
            <div>
                <h2 className='font-extrabold relative text-[60px] font-abc text-white text-center mt-[11%]'>TECHNOLOGIES WE USE</h2>
                <p className='font-abc text-[18px] text-white ml-[8%] mr-[8%] text-center'>At RIOTA, we have profuse technical skills and experience in IoT hardware and software development. We are constantly on the edge of innovation and trends and are always able to deliver the most secure, reasonable and cost-effective solution to our clients.We help our clients pull out the best from the IOT platform’s capabilities and build smooth experiences for the users using our IOT hardware and software. Developing software for any IOT hardware with RIOTA, will be a product built in consideration with design trends and best practices with an exclusive blend of technologies for an elegant and functional system.</p>
            </div>
            <div>
                <div className='flex flex-row'>
                <div className='ml-[15%] mt-[5%] relative'>
                    <h3 className='text-white text-[30px] font-abc'>EMBEDDED TECHNOLOGIES</h3>
                    <div className='flex flex-row space-x-10 ml-[-22%] mt-[3%]'>
                        <Image
                        src="/images/technologies/icon1.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon2.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon3.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon4.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon5.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon6.png"
                        alt=''
                        width={90}
                        height={60}/>
                    </div>
                </div>

                <div className='ml-[20%] mt-[5%] relative'>
                    <h3 className='text-white text-[30px] font-abc'>MOBILE TECHNOLOGIES</h3>
                    <div className='flex flex-row space-x-10 ml-[-25%] mt-[3%]'>
                        <Image
                        src="/images/technologies/icon7.png"
                        alt=''
                        width={40}
                        height={40}/>
                         <Image
                        src="/images/technologies/icon8.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon9.png"
                        alt=''
                        width={40}
                        height={40}/>
                         <Image
                        src="/images/technologies/icon10.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon11.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon12.png"
                        alt=''
                        width={60}
                        height={60}/>
                    </div>
                </div>
                </div>
                <div className='ml-[41%] mt-[5%] relative'>
                    <h3 className='text-white text-[30px] font-abc'>MOBILE TECHNOLOGIES</h3>
                    <div className='flex flex-row space-x-10 ml-[-15%] mt-[3%]'>
                        <Image
                        src="/images/technologies/icon13.png"
                        alt=''
                        width={40}
                        height={10}/>
                         <Image
                        src="/images/technologies/icon14.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon15.png"
                        alt=''
                        width={40}
                        height={10}/>
                         <Image
                        src="/images/technologies/icon16.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon17.png"
                        alt=''
                        width={60}
                        height={60}/>
                         <Image
                        src="/images/technologies/icon12.png"
                        alt=''
                        width={60}
                        height={60}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default product;