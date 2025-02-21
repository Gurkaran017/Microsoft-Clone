import React, { useEffect, useState } from "react";
import microsoft from "../assets/Images/microsoft (2).png";
import xbox from "../assets/Images/xbox-logo.png";
import tablet from "../assets/Images/tablet.png";
import surface from "../assets/Images/SurfaceLAPTOP.avif";
import XboxS from "../assets/Images/XboxSeriesS.webp";
import XboxX from "../assets/Images/XboxSeriesX.avif";
import Gamepass from "../assets/Images/GamePass.avif";
import PinkImage from "../assets/Images/PinkImage.avif";
import Cards from "./Cards";
import SurfacePRO from "../assets/Images/Surfacepro2nd.avif";
import microsoft365 from "../assets/Images/microsoft3652nd.png";
import JoinEra from "../assets/Images/JoinERA2nd.avif";
import VisualStudio from "../assets/Images/Visual2nd.webp";
import facebook from "../assets/Images/facebook-app-symbol.png";
import twitter from "../assets/Images/twitter.png";
import youtube from "../assets/Images/youtube.png";
import pink2 from "../assets/Images/pink2.jpg";

import Footer from "./Footer";

const Bottom = () => {
  const [img , setImg] = useState(PinkImage)
  const [wid, setwid] = useState(window.innerHeight <= 830 ? 53 : 43);
  const [mar, setmar] = useState(window.innerHeight <= 830 ? 60 : 50);

  useEffect(() => {
      const updateSlides = () => {
        setImg(window.innerWidth <= 768 ? pink2 : PinkImage);
      };
  
      updateSlides();
      window.addEventListener("resize", updateSlides);
      return () => window.removeEventListener("resize", updateSlides);
    }, []);

    useEffect(() => {
      const updatewidght = () => {
        setwid(window.innerHeight <= 830 ? 53 : 43);
      };
  
      window.addEventListener("resize", updatewidght);
      return () => window.removeEventListener("resize", updatewidght);
    }, []);

    useEffect(() => {
      const updatewidght = () => {
        setmar(window.innerHeight <= 830 ? 60 : 50);
      };
  
      window.addEventListener("resize", updatewidght);
      return () => window.removeEventListener("resize", updatewidght);
    }, []);

  const item1 = [
    {
      image: surface,
      title: "Surface Laptop, Copilot+ PC",
      desc: "Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop.",
      button: "Learn more",
    },
    {
      image: XboxS,
      title: "Xbox Series S",
      desc: "Next-gen performance in the smallest Xbox ever.",
      button: "Shop Xbox Series S",
    },
    {
      image: XboxX,
      title: "Xbox Series X",
      desc: "The fastest, most powerful Xbox ever.",
      button: "Shop Xbox Series X",
    },
    {
      image: Gamepass,
      title: "Game Pass",
      desc: "Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.",
      button: "Join now",
    },
  ];
  const item2 = [
    {
      image: SurfacePRO,
      title: "Surface Pro for Business, Copilot+ PC (Intel)",
      desc: "Ultra-versatile and built with Intel® Core™ Ultra processors (Series 2) that power AI experiences to amplify your team’s productivity.",
      button: "Learn more",
    },
    {
      image: microsoft365,
      b: "n",
      title: "Microsoft 365 Copilot",
      desc: "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
      button: "Learn more",
    },
    {
      image: JoinEra,
      b: "n",
      title: "Join the era of AI",
      desc: "Create, communicate, and code with the latest Microsoft AI solutions.",
      button: "Explore AI solutions",
    },
    {
      image: VisualStudio,
      b: "n",
      title: "Visual Studio 2022",
      desc: "Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.",
      button: "Download Visual Studio 2022",
    },
  ];
  return (
    <>
      <div>
        <div className="lg:flex justify-center lg:space-x-10 lg:my-14 my-7 space-y-9 lg:space-y-0">
          <div className="flex flex-col items-center cursor-pointer">
            <img className="h-7 mb-3" src={microsoft} />
            <a className="underline text-[#0067bf] font-semibold">
              Choose your Microsoft 365
            </a>
          </div>

          <div className="flex  justify-center space-x-16 ">
            <div className="flex flex-col items-center cursor-pointer">
              <img className="h-7 mb-3" src={xbox} />
              <a className="underline text-[#0067bf] font-semibold">
                Shop Xbox
              </a>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img className="h-7 mb-3" src={microsoft} />
              <a className="underline text-[#0067bf] font-semibold">
                Get Windows 11
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <img className="h-7 mb-3" src={tablet} />
            <a className="underline text-[#0067bf] font-semibold">
              Explore Surface devices
            </a>
          </div>
        </div>
        <Cards items={item1} wid={wid} />
        <div className="relative flex lg:m-16 lg:mt-24 mt-12 mb-[25vh] items-center justify-center lg:justify-normal cursor-pointer">
          <img className={`w-[${wid}vh] lg:w-full`} src={img} />
          <div className={`absolute lg:w-80 w-[${wid}vh] space-y-4 lg:m-32 mt-[${mar}vh]`}>
            <h1 className="lg:text-3xl text-2xl font-semibold">
              Copilot is your AI companion
            </h1>
            <p>
              Always by your side, ready to support you whenever and wherever
              you need it.
            </p>
            <button className="bg-[#0067b8] hover:bg-[#186199] text-white px-3 py-2  font-semibold">
              Download the Copilot app
            </button>
          </div>
        </div>
        <div>
          <h1 className="lg:text-3xl text-2xl font-semibold lg:ml-16 ml-3 mt-52 lg:mb-0" >For business</h1>
          <Cards items={item2}  wid={wid} />
        </div>
        <div className="lg:m-20 my-20 ml-7 flex space-x-6 items-center">
          <h1 className="text-base">Follow Microsoft</h1>
          <img className="h-5 cursor-pointer" src={facebook} />
          <img className="h-4 cursor-pointer" src={twitter} />
          <img className="h-7 cursor-pointer" src={youtube} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Bottom;
