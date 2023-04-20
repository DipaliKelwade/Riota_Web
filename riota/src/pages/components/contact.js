import bg from '../../../public/svg/Frame43.png'
import Image from "next/image";
import Navbar from "./navbar";

function Contact(){
    return(
        <div className=" w-full box-border" style={{backgroundImage:`url(${bg.src})`}}>
            <Navbar/>
            <div className='main'>
                <div className='leftsec'>
                    <div className='image'>
                        <Image
                            src="/svg/mancontact.svg"
                            width={466}
                            height={402}
                        />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Image
                                    src="/svg/phone.svg"
                                    width={50}
                                    height={50}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='rightsec'></div>
            </div>
        </div>

    )
}
export default Contact;