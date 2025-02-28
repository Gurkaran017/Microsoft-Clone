import React, { useState, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import Navbar from "./Navbar";
import CustomSlider from "./CustomSlider";
import Bottom from "./Bottom";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
        <div className=" ">
        {/* <div className="overflow-x-hidden "> */}
          <div>
            {isVisible && (
              <button
                onClick={scrollToTop}
                className=" flex z-10 fixed bottom-6 right-6 bg-[#d6d6d6] px-3 py-2 shadow-lg hover:bg-slate-50 transition-all duration-300"
              >
                <IoIosArrowRoundUp className="mr-2 text-2xl" />
                <h1 className="font-semibold">Back to top</h1>
              </button>
            )}
          </div>
          <Navbar />
          <CustomSlider />
          <Bottom />
        </div>
    </>
  );
}

export default Home;
