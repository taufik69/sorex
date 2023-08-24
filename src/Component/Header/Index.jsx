import React, { useEffect } from "react";
import imageURl from "../../assets/Images/bannerImages/logo.png";
import Shape2 from "../../assets/Images/bannerImages/shape2.png";
import Shape_overlay from "../../assets/Images/bannerImages/sketch-overlay.png";
import sAlphabet from "../../assets/Images/bannerImages/s_alphabet.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className={`mt-5 relative`}>
      <motion.div
        initial={{ opacity: 1, x: -150, y: -12 }}
        animate={{ opacity: 1, x: 0, y: -20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0,
          duration: 4,
          ease: "easeInOut",
        }}
        className="absolute  mr-9 -z-10"
      >
        <img src={Shape2} alt={Shape2} />
        <img
          className="absolute top-0 left-0"
          src={Shape_overlay}
          alt={Shape_overlay}
        />
      </motion.div>
      <div className="flex items-center justify-between container font-sans-serif">
        <div>
          <img src={imageURl} alt={imageURl} />
        </div>
        <div className="pl-52">
          <ul className="flex items-center justify-center gap-10 ">
            <li className="flex  items-center justify-center gap-1 group  relative  group/anchor ">
              <a href="#" className="group/anchor ">
                Home{" "}
              </a>

              <span className="absolute contents-['*'] scale-0 -bottom-1 left-0 w-[66%] h-[2px] bg-red-600 ease-in-out delay-100 group-hover/anchor:scale-100"></span>

              <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-spin animate-bounce mt-2" />
              <div className="w-[300%] absolute -bottom-64 -left-34  text-center invisible group-hover/anchor:visible ease-in-out delay-100">
                <ul className="bg-black text-white font-sans-serif ">
                  <li className="py-3 hover:text-primary_color">
                    Creative Agency
                  </li>
                  <li className="py-3 hover:text-primary_color">
                    Digital marketing
                  </li>
                  <li className="py-3 hover:text-primary_color">
                    Startup Business
                  </li>
                  <li className="py-3 hover:text-primary_color">
                    {" "}
                    Digital service
                  </li>
                  <li className="py-3 hover:text-primary_color">It serverce</li>
                </ul>
              </div>
            </li>

            <li className="flex  items-center justify-center gap-1 group  relative  group/anchor ">
              <a href="#" className="group/anchor ">
                About{" "}
              </a>

              <span className="absolute contents-['*'] scale-0 -bottom-1 left-0 w-[66%] h-[2px] bg-red-600 ease-in-out delay-100 group-hover/anchor:scale-100"></span>

              <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-spin animate-bounce mt-2" />
              <div className="w-[250%] absolute -bottom-28 -left-34  text-center invisible group-hover/anchor:visible ease-in-out delay-100">
                <ul className="bg-black text-white font-sans-serif ">
                  <li className="py-3 hover:text-primary_color">About Me</li>
                  <li className="py-3 hover:text-primary_color">About Us</li>
                </ul>
              </div>
            </li>

            <li className="flex  items-center justify-center gap-1 group  relative  group/anchor ">
              <a href="#" className="group/anchor ">
                Service{" "}
              </a>

              <span className="absolute contents-['*'] scale-0 -bottom-1 left-0 w-[66%] h-[2px] bg-red-600 ease-in-out delay-100 group-hover/anchor:scale-100"></span>

              <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-spin animate-bounce mt-2" />
              <div className="w-[300%] absolute -bottom-52 -left-34  text-center invisible group-hover/anchor:visible ease-in-out delay-100">
                <ul className="bg-black text-white font-sans-serif ">
                  <li className="py-3 hover:text-primary_color">service 01</li>
                  <li className="py-3 hover:text-primary_color">service 03</li>
                  <li className="py-3 hover:text-primary_color">service 04</li>
                  <li className="py-3 hover:text-primary_color"> service 05</li>
                </ul>
              </div>
            </li>

            <li className="flex  items-center justify-center gap-1 group  relative  group/anchor ">
              <a href="#" className="group/anchor ">
                Page{" "}
              </a>

              <span className="absolute contents-['*'] scale-0 -bottom-1 left-0 w-[66%] h-[2px] bg-red-600 ease-in-out delay-100 group-hover/anchor:scale-100"></span>

              <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-spin animate-bounce mt-2" />
              <div className="w-[1000%] bg-black absolute -bottom-80 -left-34  text-center invisible group-hover/anchor:visible ease-in-out delay-100">
                <div className="flex justify-between items-center p-5">
                  <div>
                    <ul className=" text-white font-sans-serif ">
                      <li className="py-3 hover:text-primary_color">
                        Creative Agency
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        Digital marketing
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        Startup Business
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        {" "}
                        Digital service
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        It serverce
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className=" text-white font-sans-serif ">
                      <li className="py-3 hover:text-primary_color">
                        Creative Agency
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        Digital marketing
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        Startup Business
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        {" "}
                        Digital service
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        It serverce
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className=" text-white font-sans-serif ">
                      <li className="py-3 hover:text-primary_color">
                        Creative Agency
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        Digital marketing
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        Startup Business
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        {" "}
                        Digital service
                      </li>
                      <li className="py-3 hover:text-primary_color">
                        It serverce
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex  items-center justify-center gap-1 group  relative  group/anchor ">
              <a href="#" className="group/anchor ">
                Blog{" "}
              </a>

              <span className="absolute contents-['*'] scale-0 -bottom-1 left-0 w-[66%] h-[2px] bg-red-600 ease-in-out delay-100 group-hover/anchor:scale-100"></span>

              <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-spin animate-bounce mt-2" />
              <div className="w-[300%] absolute -bottom-32 -left-34  text-center invisible group-hover/anchor:visible ease-in-out delay-100">
                <ul className="bg-black text-white font-sans-serif ">
                  <li className="py-3 hover:text-primary_color">Blog 1</li>
                  <li className="py-3 hover:text-primary_color">Blog 2</li>
                </ul>
              </div>
            </li>

            <li className="flex  items-center justify-center gap-1 group  relative  group/anchor ">
              <a href="#" className="group/anchor ">
                Contact{" "}
              </a>

              <span className="absolute contents-['*'] scale-0 -bottom-1 left-0 w-[66%] h-[2px] bg-red-600 ease-in-out delay-100 group-hover/anchor:scale-100"></span>

              <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-spin animate-bounce mt-2" />
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 1, backgroundColor: `#fddc60`, color: `#232323` }}
          animate={{ backgroundColor: ["#fddc60", "#FA0"] }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="px-10 py-4 font-semibold font-sans-serif  rounded-full ml-7 cursor-pointer"
        >
          <a href="#">Get a quote</a>
        </motion.div>
        <div className="rounded-xl ml-5 bg-black text-primary_color px-5 py-4 ">
          <FaBars className="text-lg" />
        </div>
        <motion.div
          className="ml-6"
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={sAlphabet} alt={sAlphabet} />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
