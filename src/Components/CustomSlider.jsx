import { useState, useEffect } from "react";
import FrontImage from "../assets/Images/FrontImage.avif"; // This 1st photo in slide appears in big screens like laptop
import copilotPC from "../assets/Images/copilotPC.avif"; // This 2nd photo in slide appears in big screens like laptop
import phone1st from "../assets/Images/phone1st.jpg"; // This 1st photo appears in slide in small screens like phone
import phone2nd from "../assets/Images/phone2nd.jpg"; // This 2nd photo appears in slide in small screens like phone
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";

const desktopSlides = [
  {
    image: FrontImage,
    title: "Achieve the extraordinary",
    description:
      "Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.",
    buttonText: "Shop Microsoft 365",
    buttonLink: "#",
  },
  {
    image: copilotPC,
    title: "Meet Surface Pro",
    description:
      "This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator enable you to do more than you ever imagined.",
    buttonText: "Learn More",
    buttonLink: "#",
  },
];

const mobileSlides = [
  {
    image: phone1st,
    title: "Achieve the extraordinary",
    description:
      "Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.",
    buttonText: "Shop Microsoft 365",
    buttonLink: "#",
  },
  {
    image: phone2nd,
    title: "Meet Surface Pro",
    description:
      "This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator enable you to do more than you ever imagined.",
    buttonText: "Learn More",
    buttonLink: "#",
  },
];

const CustomSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transition, setTransition] = useState("");
  const [slides, setSlides] = useState(desktopSlides);
  const [hei, setHei] = useState(
    window.innerWidth >= 1024 ? 90 : window.innerHeight <= 830 ? 66 : 55
  );
  console.log(hei);

  useEffect(() => {
    const updateSlides = () => {
      setSlides(window.innerWidth <= 768 ? mobileSlides : desktopSlides);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        setHei(90);
      } else if (window.innerHeight <= 830) {
        setHei(66);
      } else {
        setHei(55);
      }
    };
  
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  

  const prevSlide = () => {
    setTransition("-translate-x-full opacity-0");
    
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTransition("translate-x-0 opacity-100");
    }, 300);
  };

  const nextSlide = () => {
    setTransition("translate-x-full opacity-0");
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTransition("translate-x-0 opacity-100");
    }, 300);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [current, isPaused]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image Slider */}
      <div
        className="relative overflow-hidden lg:h-[90vh] w-full cursor-pointer"
        style={{ height: `${hei}vh` }}
      >
        <img
          src={slides[current].image}
          alt="Slide"
          className={`absolute w-full h-[29vh] lg:h-full object-cover transition-transform duration-700 ease-in-out ${transition}`}
        />

        {/* Text Overlay Inside Image (No Blur) */}
        <div
          className={`absolute  lg:top-1/3 top-[32vh] left-6 lg:left-24 text-white lg:p-6 md:border-none border-b border-gray-300 pb-3 md:pb-0 ${
            slides[current].image === copilotPC ||
            slides[current].image === phone2nd
              ? "lg:px-14 lg:py-10 lg:left-14"
              : "lg:p-6"
          } ${
            slides[current].image === copilotPC ||
            slides[current].image === phone2nd
              ? "lg:mt-[-150px]"
              : "lg:top-1/3"
          } ${
            slides[current].image === copilotPC ||
            slides[current].image === phone2nd
              ? "lg:bg-white bg-transparent"
              : "bg-transparent"
          } `}
        >
          <h1 className="text-2xl lg:text-3xl  font-semibold text-black">
            {slides[current].title}
          </h1>
          <p
            className={`mt-2 text-base w-80 lg:w-96 text-black my-3 ${
              slides[current].image === copilotPC ||
              slides[current].image === phone2nd
                ? "w-[350px]"
                : "w-80"
            }`}
          >
            {slides[current].description}
          </p>
          <a
            href={slides[current].buttonLink}
            className="mt-4 inline-block px-4 py-2 bg-[#0067b8] hover:bg-[#186199] text-white font-semibold rounded-sm text-base"
          >
            {slides[current].buttonText}
          </a>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center space-x-6 bg-white px-6 py-3 mt-3 rounded-lg">
        <button
          className="lg:text-2xl text-xl transition-all rounded-full duration-300 hover:bg-black hover:text-white"
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? <IoPlayCircleOutline /> : <IoPauseCircleOutline />}
        </button>

        <button
          className="lg:text-2xl text-lg transition-all duration-300 hover:-translate-x-2"
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </button>

        <div className="flex space-x-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`lg:w-3 lg:h-3 w-2 h-2 rounded-full border-2 border-black transition-all duration-300 ${
                current === index ? "bg-black" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>

        <button
          className="lg:text-2xl text-lg transition-all duration-300 hover:translate-x-2"
          onClick={nextSlide}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;

