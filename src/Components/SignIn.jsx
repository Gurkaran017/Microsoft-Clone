import React from "react";
import microsoft from "../assets/Images/microsoft(1).png";
import { GoKey } from "react-icons/go";

const SignIn = () => {
  return (
    <div className="flex lg:items-center justify-center h-screen lg:bg-gradient-to-br lg:from-pink-100 lg:via-slate-200 lg:to-pink-100">
      <div className="lg:w-4/12 w-full">
        <div className="bg-white lg:pt-7 lg:px-7  lg:shadow-lg w-full h-[350px]">
          <div className="pt-3 px-3 ">
            <img
              src={microsoft}
              alt="Microsoft"
              className="h-[42px] w-[120px] object-cover"
            />
            <div className="m-2">
              <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
              <input
                type="text"
                placeholder="Email, phone, or Skype"
                className="w-full lg:p-2 py-2 border-b border-black rounded mt-2 focus:outline-none lg:placeholder:text-gray-700 placeholder:text-gray-500"
              />
              <p className="text-sm mt-3">
                No account?{" "}
                <a href="#" className="text-blue-600">
                  Create one!
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end mt-10 mr-5">
            <button className=" bg-blue-600 text-white py-1 px-10 mt-4 hover:bg-blue-700 ">
              Next
            </button>
          </div>
        </div>
        <div className="flex justify-center">
        <button className="lg:w-full w-11/12 px-12 flex items-center bg-white  border lg:border-gray-300 border-gray-600 py-3 rounded lg:mt-4 hover:bg-gray-100">
          <span className="mr-3 ">
            <GoKey className="text-xl scale-x-[-1]" />
          </span>{" "}
          Sign-in options
        </button>
        </div>
      </div>
      <div className="absolute w-full bottom-2 text-xs lg:text-black text-gray-500 flex lg:justify-end justify-start ml-4 lg:ml-0 px-3  space-x-4">
        <div>
          <div className="flex lg:justify-end space-x-2">
          <a href="#" className="hover:underline">
            Terms of use
          </a>
          <a href="#" className="hover:underline">
            Privacy & cookies
          </a>
          <span>. . .</span>
          </div>
          <p className=" mt-3">
          Use private browsing if this is not your device.{" "}
            <a href="#" className="text-blue-600">
            Learn more

            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
