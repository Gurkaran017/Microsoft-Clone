import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";

const Footer = () => {
  
  const footerData = [
    {
      title: "What's new",
      links: [
        "Surface Pro",
        "Surface Laptop",
        "Microsoft Copilot",
        "Microsoft 365",
        "Explore Microsoft products",
        "Windows 11 apps",
      ],
    },
    {
      title: "Microsoft Store",
      links: [
        "Account profile",
        "Download Center",
        "Microsoft Store Support",
        "Returns",
        "Order tracking",
      ],
    },
    {
      title: "Education",
      links: [
        "Microsoft in education",
        "Devices for education",
        "Microsoft Teams for Education",
        "Microsoft 365 Education",
        "Office Education",
        "Educator training and development",
        "Deals for students and parents",
        "Azure for students",
      ],
    },
    {
      title: "Business",
      links: [
        "Microsoft Cloud",
        "Microsoft Security",
        "Azure",
        "Dynamics 365",
        "Microsoft 365",
        "Microsoft Advertising",
        "Microsoft 365 Copilot",
        "Microsoft Teams",
      ],
    },
    {
      title: "Developer & IT",
      links: [
        "Microsoft Developer",
        "Documentation",
        "Microsoft Learn",
        "Microsoft Tech Community",
        "Azure Marketplace",
        "AppSource",
        "Microsoft Power Platform",
        "Visual Studio",
      ],
    },
    {
      title: "Company",
      links: [
        "Careers",
        "About Microsoft",
        "Company news",
        "Privacy at Microsoft",
        "Investors",
        "Security",
        "Sustainability",
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-base font-semibold text-gray-600 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-500 text-xs hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:flex justify-between list-none text-gray-500 text-[11px] lg:mx-16 space-y-4 lg:space-y-0 ml-9 mt-12 items-center">
        <div className="lg:flex lg:space-x-5 space-y-2 lg:space-y-0 items-center">
          <li className="hover:underline cursor-pointer flex items-center"><BsGlobeAmericas className="mr-2 text-lg" />English (India)</li>
          <li className="hover:underline cursor-pointer">Your Privacy Choices</li>
          <li className="hover:underline cursor-pointer">Consumer Health Privacy</li>
        </div>
        <div className="lg:flex lg:space-x-5 space-y-2 lg:space-y-0 items-start">
          <div className="flex space-x-5 items-center">
          <li className="hover:underline cursor-pointer">Contact Microsoft</li>
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms of use</li>
          <li className="hover:underline cursor-pointer">Trademarks</li>
          </div>
          <div className="flex space-x-5 ">
          <li className="hover:underline cursor-pointer">About our ads</li>
          <li className="hover:underline cursor-pointer">© Microsoft 2025</li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
