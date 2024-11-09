import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaPenNib, FaCloud, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={30} />,
    title: "Web Development",
    description: "Crafting responsive websites optimized for performance and engagement.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Frontend Development",
    description: "Developing user-friendly interfaces that adapt to any device.",
  },
  {
    icon: <FaServer size={30} />,
    title: "Backend Development",
    description: "Building reliable server-side solutions to support your applications.",
  },
  {
    icon: <FaShoppingCart size={30} />,
    title: "E-commerce Development",
    description: "Creating scalable solutions tailored for online shopping platforms.",
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud Solutions",
    description: "Deploying and managing apps with cloud computing expertise.",
  },
  {
    icon: <FaPenNib size={30} />,
    title: "UI/UX Design",
    description: "Designing visually appealing and intuitive user interfaces.",
  },
];

const Services = () => {
  return (
    <div className="bg-blue-950 pt-24 sm:pt-20 pb-12 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 mt-8 sm:mb-12 animate-slideFromTop ">
        My <span className="text-[#0bc1e3]">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-slideInFromBottom">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white p-6 sm:p-8 rounded-xl lg:rounded-xl shadow-lg flex flex-col items-start transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-[#0bc1e3] mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

