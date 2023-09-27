import React, { useEffect, useState } from "react";
import imageURl from "../../assets/Images/bannerImages/logo.png";
import Shape2 from "../../assets/Images/bannerImages/shape2.png";
import Shape_overlay from "../../assets/Images/bannerImages/sketch-overlay.png";
import sAlphabet from "../../assets/Images/bannerImages/s_alphabet.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
const Header = () => {
  let [navbar, setnavbar] = useState(false);
  useEffect(() => {
    function resizeBody() {
      if (window.innerWidth >= 900) {
        setnavbar(true);
      } else {
        setnavbar(false);
      }
    }

    window.addEventListener("resize", resizeBody);
    resizeBody();
  }, []);

  return (
    <div className={`mt-5 relative`}>
      <motion.div
        initial={{ opacity: 1, x: -150, y: -14 }}
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
        {navbar && (
          <div className="pl-0 lg:pl-52 z-10">
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
                    <li className="py-3 hover:text-primary_color">
                      It serverce
                    </li>
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
                    <li className="py-3 hover:text-primary_color">
                      service 01
                    </li>
                    <li className="py-3 hover:text-primary_color">
                      service 03
                    </li>
                    <li className="py-3 hover:text-primary_color">
                      service 04
                    </li>
                    <li className="py-3 hover:text-primary_color">
                      {" "}
                      service 05
                    </li>
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
        )}

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
          <div class="text-center">
            <button
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
            >
              <FaBars className="text-lg" />
            </button>
          </div>

          <div
            id="drawer-example"
            class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-black w-80 "
            tabindex="-1"
            aria-labelledby="drawer-label"
          >
            <div className="flex items-center justify-around">
              <div className="">
                <img src={imageURl} alt={imageURl} />
              </div>

              <button
                type="button"
                data-drawer-hide="drawer-example"
                aria-controls="drawer-example"
                class="text-gray-400  bg-primary_color  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 "
              >
                X
              </button>
            </div>

            <div className="text-white font-sans-serif p-5 text-justify">
              <p>
                Suspendisse interdum consectetur libero id. Fermentum leo vel
                orci porta non. Euismod viverra nibh cras pulvinar suspen.
              </p>
            </div>

            {/* acordian down */}

            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What is Flowbite?</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a
                      href="/docs/getting-started/introduction/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a
                      href="https://flowbite.com/figma/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Figma design system
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* acordian down */}
          </div>
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
