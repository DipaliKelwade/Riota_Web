const Footer = () => {
    return (
      <footer className="text-gray-600">
        <hr class="border-2 border-white my-1"></hr>
        <div className="container px-5 py-24 mx-auto flex md:items-center justify-between lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-[#FFFFFF]">
              <img
                className="object-cover object-center rounded z-10 mb-5"
                alt="hero"
                src="/icons/riota.png"
              />
            </a>
            <p className="mt-2 text-16xl text-[#FFFFFF] mb-5">
              RIOTA delivers innovative customer centric technology solutions and
              services that enable clients to meet-up their business and IT
              challenges.
            </p>
            <div class="mb-7 flex flex-wrap justify-between gap-1">
              <a href=""> <img
                className="object-cover object-center rounded z-10 mb-5"
                alt="hero"
                src="/icons/Facebook.png"
              /></a> 
              <a href=""> <img
                className="object-cover object-center rounded z-10 mb-5"
                alt="hero"
                src="/icons/Instagram.png"
              /></a>
              <a href=""> <img
                className="object-cover object-center rounded z-10 mb-5"
                alt="hero"
                src="/icons/Twitter.png"
              /></a>
              <a href=""> <img
                className="object-cover object-center rounded z-10 mb-5"
                alt="hero"
                src="/icons/Dribbble.png"
              /></a>
              <a href=""> <img
                className="object-cover object-center rounded z-10 mb-5"
                alt="hero"
                src="/icons/Behance.png"
              /></a>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FFFFFF] text-2xl tracking-widest  mb-4">
                <b> Services </b>
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800 ">
                    Digital Transformation
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800 ">
                    Application Services
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800 ">
                    Engineering Services
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800 ">
                    Internet Of things
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800 ">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800 ">
                    Artificial Intelligence
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FFFFFF] text-2xl tracking-widest  mb-4">
                <b> Quick Links</b>
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    Ideas & Sights
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    Tems & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    Site Map
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    Partners
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FFFFFF] text-2xl tracking-widest mb-4">
                <b> Contacts</b>
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3 flex flex-wrap gap-2">
                <img src="/icons/call.png" alt="" />
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    1800-257-9500
                  </a>
                  
                </li>
                <li className="mb-3 flex flex-wrap gap-2">
                <img src="/icons/message.png" alt="" />
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    info@riota.in
                  </a>
                  
                </li>
                <li className="flex flex-wrap gap-2">
                <img src="/icons/add.png" alt="" />
                  <a className="text-gray-600 font-bold text-16xl hover:text-gray-800">
                    The Hive - VR Mall,  JN Road, Chennai, TN,  India - 600 040
                  </a>
                  
                </li>
              </nav>
            </div>
          </div>
        </div>
        <hr class="border-t-4 border-white my-4"></hr>
  
        <div >
          <div className="container mx-auto py-4 px-5 ">
            <p className="text-white text-16xl text-center sm:text-center">
              2023 Copyright © All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;