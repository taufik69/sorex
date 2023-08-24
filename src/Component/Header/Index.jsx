import React, { useEffect } from "react";
import imageURl from "../../assets/Images/bannerImages/logo.png";
import Shape2 from "../../assets/Images/bannerImages/shape2.png";
import Shape_overlay from "../../assets/Images/bannerImages/sketch-overlay.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className={`mt-3 relative`}>
      <motion.div
        initial={{ opacity: 0, x: -150, y: -12 }}
        animate={{ opacity: 1, x: 0, y: -20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0,
          duration: 4,
          ease: "easeInOut",
        }}
        className="absolute  mr-9"
      >
        <img src={Shape2} alt={Shape2} />
        <img
          className="absolute top-0 left-0"
          src={Shape_overlay}
          alt={Shape_overlay}
        />
      </motion.div>
      <div className="flex items-center justify-end container ">
        <div>
          <img src={imageURl} alt={imageURl} />
        </div>
        <div className="pl-60">
          <ul className="flex items-center justify-center gap-10">
            <li className="flex  items-center justify-center gap-1">
              <a href="#">Home </a>
              <MdOutlineKeyboardDoubleArrowDown />
            </li>

            <li className="flex items-center justify-center gap-1">
              <a href="#">About</a>
              <MdOutlineKeyboardDoubleArrowDown />
            </li>

            <li className="flex items-center justify-center gap-1">
              <a href="#">Service</a>
              <MdOutlineKeyboardDoubleArrowDown />
            </li>

            <li className="flex items-center justify-center gap-1">
              <a href="#">Page</a>
              <MdOutlineKeyboardDoubleArrowDown />
            </li>

            <li className="flex items-center justify-center gap-1">
              <a href="#">Blog</a>
              <MdOutlineKeyboardDoubleArrowDown />
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="px-10 py-4 bg-black text-white rounded-full ml-20">
          <a href="#">Get a quote</a>
        </div>
        <div className="ml-10">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Header;
