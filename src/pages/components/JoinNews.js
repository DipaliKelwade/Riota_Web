import Image from "next/image";

export default function JoinNews() {
  return (
    <div className="bg-pink-400 bg-no-repeat ml-44 mr-44 mt-20 rounded-3xl" style={{ height:"350px", width:"1400px"}}>
      <div>
      <div className="float-right w-3/6 mr-72 ml-24 pt-16">
       <h1 className="text-6xl font-bold ml-12">Join Our Newsletter</h1>
         <input type="text" className="w-96 h-12 p-5 mt-8 ml-12 border-2 border-black" placeholder="Enter Your Email" />
         <button type="submit" value="Subscribe" className="w-36 h-12 -ml-6 border-2 bg-black text-white rounded-3xl">Subscribe</button>

       </div>

      </div>
    </div>
  )
}


