
export default function JoinNews() {
  return (
    <div className="h-1/4 w-3/4 bg-pink-500 container mx-auto flex md:px-2 px-1 md:py-12 py-5 md:flex-row flex-col-reverse items-center rounded-3xl">
       <div className="p-5 mx-auto">
        <h1 className="text-6xl font-bold md:flex-row flex-col-reverse items-center">Join Our Newsletter</h1>
         <div className="flex">
         <input type="text" className="w-3/4 h-12 p-5 mt-8 ml-12 border-2 border-black" placeholder="Enter Your Email" />
          <button type="submit" value="Subscribe" className="w-36 h-12 mx-auto flex md:px-2 mt-8 -ml-2 px-1 md:py-2 py-2 justify-center md:flex-row flex-col-reverse items-center border-2 bg-black text-white">Subscribe</button>

         </div>
    </div>
    </div>
  );
}
