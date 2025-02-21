import React from "react";
import SurfacePRO from "../assets/Images/Surfacepro2nd.avif";

const Cards = ({ items, wid }) => {
  return (
    <div className="flex flex-wrap justify-center lg:gap-6 gap-9 mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="lg:w-72 bg-white shadow-lg overflow-hidden flex flex-col relative cursor-pointer"
          style={{ width: window.innerWidth >= 1024 ? "18rem" : `${wid}vh` }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full lg:h-40 h-48 object-cover"
          />

          {/* "New" Button Only for SurfacePRO */}
          <div>
            {item.image?.toString() === SurfacePRO.toString() && (
              <button className=" ml-5 mt-3 mb-[-80vh] top-2 left-2 bg-[#ffb900] px-3 py-1 text-base font-semibold">
                New
              </button>
            )}
          </div>
          {/* Text Content */}
          <div className="lg:p-4 p-6 flex flex-col flex-grow">
            <h2
              className={`${
                item.b == "n" ? "mt-10" : ""
              } lg:text-2xl text-xl font-semibold`}
            >
              {item.title}
            </h2>
            <p className="mt-2 flex-grow">{item.desc}</p>
          </div>

          {/* Button at Bottom */}
          <div className="lg:p-3 ml-5 mb-4 lg:ml-0 lg:mb-0">
            <button className="px-4 py-2 bg-[#0067bf] hover:bg-[#186199] text-white font-semibold rounded">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
