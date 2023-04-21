import Image from "next/image";

function Whitebg() {
  return (
    <div>
      {/* section5 */}
      <section
        style={{
          backgroundImage: "url(/icons/whitebg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ninesec flex md:flex-row flex-col my-24 w-[100vh} h-[450px]">
          <div className="left flex justify-center align-middle items-center relative flex-1">
            <Image
              src="/icons/whitebg_forward.png"
              width={500}
              height={400}
              className="w-[407px] h-[303px]"
            />
          </div>
          <div className="right flex-1 float-right font-abc mx-40 my-16">
            <div className="text-[50px] font-bold text-[#12172D]">
              Subscribe to Our Newsletter
            </div>
            <div className="text-lg font-medium text-slate-500 w-[650px] my-3">
              Lorem ipsum dolor sit amet consectetur. Arcu tristique quis
              gravida habitant suspendisse sodales.
            </div>
            <div className="flex flex-row">
              <input
                className="w-[766px] h-[73px] border-2  border-solid border-black rounded-r-full flex flex-row px-2"
                placeholder="Enter Your Email "
              />

              <div className="h-[73px] w-[186px] rounded-full bg-[#12172D]  text-white font-bold text-xl text-center p-5 -ml-44">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whitebg;
