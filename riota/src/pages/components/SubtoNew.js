import subbg from '../../../public/svg/subbg.svg';
import Image from "next/image";

export default function SubtoNew() {
  return (
    <div style={{backgroundImage:`url(${subbg.src})`, backgroundRepeat: "no-repeat", 
    backgroundSize: "cover",width: "100%", height: "420px", backgroundSize: "cover", 
    backgroundPosition: "center", backgroundClip: "border-box"}}>
      <div>
      <div className="pt-10 pr-52 pl-0 float-right w-3/6 mr-72 ml-24">
       <h1 className="text-4xl font-bold ml-12 mt-12">Subscribe to Our Newsletter</h1>
       <p className="text-xl ml-12 mt-2">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Eaque fugit accusamus, animi architecto nihil perspiciatis dolorem deserunt consectetur 
       vitae veniam ullam sit, quaerat reiciendis temporibus eligendi doloremque aliquid, placeat quisquam!
       </p>
         <input type="text" className="w-96 h-12 p-5 mt-8 ml-12 border-2 border-black" placeholder="Enter Your Email" />
         <button type="submit" value="Subscribe" className="w-36 h-12 -ml-6 border-2 bg-black text-white rounded-3xl">Subscribe</button>

       </div>
      
       <Image
         src="/svg/sg_mail.svg"
         alt="G12"
         className="-mt-72 ml-24 float-left"
         width={500}
         height={500}
         priority
       />

      </div>
    </div>
  )
}

// export default function SubtoNew() {
//   return (
//     <div className="Subscription_to_newslater bg-pink-500">
//      <div className=" w-full box-border" style={{backgroundColor:"`url(${subbg.src})`"}}>
//         </div>
//         <div className="w-full" style={{backgroundImage:`url(${subbg.src})`, marginTop:"0px"}}>
      
//       <div className="pt-10 pr-52 pl-40 float-right w-3/4 ">
//       <h1 className="text-4xl font-bold mt-28 ml-12">Subscribe to Our Newsletter</h1>
//       <p className="text-xl ml-12">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//       Eaque fugit accusamus, animi architecto nihil perspiciatis dolorem deserunt consectetur 
//       vitae veniam ullam sit, quaerat reiciendis temporibus eligendi doloremque aliquid, placeat quisquam!
//       </p>
//         <input type="text" className="w-96 h-12 p-5 mt-8 ml-12 border-2 border-black" placeholder="Enter Your Email" />
//         <button type="submit" value="Subscribe" className="w-36 h-12 -ml-6 border-2 bg-black text-white rounded-3xl">Subscribe</button>

//       </div>
      
//       <Image
//         src="/svg/sg_mail.svg"
//         alt="G12"
//         className="-mt-56 ml-24 float-left"
//         width={500}
//         height={500}
//         priority
//       />

//     </div>
//     </div>
//   )
// }

