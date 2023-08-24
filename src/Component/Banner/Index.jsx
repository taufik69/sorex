import React from "react";
import bannerImage from "../../assets/Images/bannerImages/banner_image.png";
import merondot from "../../assets/Images/bannerImages/merondot.png";
import bluedot from "../../assets/Images/bannerImages/bluedot.png";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <>
      <div className="container mt-24">
        <div className="flex justify-between">
          <div className="font-sans-serif">
            <p className="text-sm font-semibold bg-yellow-100 inline-block px-10 rounded-full py-1">
              We Are Best Agency!
            </p>
            <h1 className="text-black font-bold  text-[54px] leading-tight mt-3">
              Agency Simple Best <br /> Smart That Will Help <br /> Grow to Are
              Your <br /> Busines
            </h1>
            <p className="font-semibold text-gray-900 mt-5">
              Business tailored it design, management & support services
              business <br />
              agency elit, sed do eiusmod tempor
            </p>
            <motion.div
              className="py-4 font-semibold  rounded-full cursor-pointer text-center w-[40%] mt-10"
              initial={{
                opacity: 1,
                backgroundColor: `#fddc60`,
                color: `#232323`,
              }}
              animate={{ backgroundColor: ["#fddc60", "#FA0"] }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <a href="#">Get a quote</a>
            </motion.div>
          </div>

          <div>
            <motion.div
              className=""
              initial={{ x: -200, y: -80 }}
              animate={{ x: -100, y: -40 }}
              transition={{
                delay: 0.7,
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img src={merondot} alt={merondot} />
            </motion.div>
            <div className="relative">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 2,
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img src={bannerImage} alt={bannerImage} />
              </motion.div>

              <motion.div
                className="absolute  top-[30%] right-[5%] "
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  delay: 0.7,
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img src={bluedot} alt={bluedot} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
