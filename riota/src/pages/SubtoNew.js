import subbg from "../../public/svg/subbg.svg";
import Image from "next/image";
import Footer from "./footer1";

export default function SubtoNew() {
  return (
    <div
    className="object-cover object-center rounded z-5 bg-cover w-full h-full"
      style={{
        backgroundImage: `url(${subbg.src})`
      }}
    >
      <section>
        <div className="container mx-auto flex md:px-5 px-1 py-10 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <Image
              className="object-cover object-center rounded z-5"
              alt="robo"
              src="/svg/sg_mail.svg"
              width={420}
              height={420}
            />
          </div>
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left ">
            <div className="container ">
              <div className="p-5 mx-auto">
                <h1 className="text-6xl font-bold md:flex-row items-center text-black">
                  Subscribe to Our Newsletter
                </h1>
                <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, itaque. Ullam tenetur, amet at in cumque ea dolores consequuntur ad corrupti inventore labore officia aliquid! Temporibus at necessitatibus nihil libero?</p>
                <div className="flex">
                  <input
                    type="text"
                    className="w-3/4 h-12 p-5 mt-8 border-2 border-black"
                    placeholder="Enter Your Email"
                  />
                  <button
                    type="submit"
                    value="Subscribe"
                    className="w-36 h-12 mx-auto flex  mt-8 -ml-12 px-1 md:py-2 py-2 justify-center md:flex-row items-center border-2 rounded-3xl bg-black text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="p-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
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
