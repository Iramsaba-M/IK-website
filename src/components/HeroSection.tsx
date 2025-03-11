"use client";
import React, { useRef } from "react";
import { ChevronDown } from "lucide-react";
import Recordering from "@/components/ui/Reordering";


const HeroSection: React.FC = () => {
  const heroSectionRef = useRef(null);
 

  return (
    <section
      id="hero"
      className={` flex h-screen items-center justify-center px-4 md:px-20 py-28 bg-gradient-to-br  from-[#2E3192] to-[#1BFFFF] text-white text-center `}
    >
      <div className="md:flex">
        <div className="max-w-4xl mt-4 md:h-80 gap-5 md:gap-0 flex flex-col justify-between ">
          <h1 className=" text-2xl  lg:text-7xl font mb-4 font-bold md:leading-normal text-center md:text-left">
            Design. Engineer.{" "}
            <span className="text-white leading-normal">
              Deliver as a Product.
            </span>
          </h1>
          <p className="text-lg lg:text-xl md:leading-relaxed mb-8 max-w-2xl md:text-left">
          Revolutionizing Enterprise Data Management with Scalable Architectures, Intelligent Automation, and No-Code Innovation for Unparalleled Efficiency and Growth.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 ">
            <a
              href="#features"
              className=" inline-block px-6 py-3 border-none cursor-pointer text-center font-semibold transition-colors duration-300 rounded bg-[#084faa] text-white hover:bg-[#3e92d6]"
            >
              Explore Features
            </a>
            
          </div>
        </div>

        <div className="hidden md:block md:px-20">
          <Recordering />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8  transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
