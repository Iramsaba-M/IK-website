"use client";
import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
 

  return (
    <footer
    
      className="bg-external mt-4 md:mt-0 text-white"
    >
      <div className="container mx-auto px-4 md:px-20 py-8">
        {/* Top Section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Brand and Address */}
          <div>
            <h2 className="text-md md:text-xl font-semibold">InfoKalash</h2>
            <p className="mt-2 text-sm space-y-3">
              Deshpande Startups, Gokul Rd
              <br />
              Hubballi-580030, Karnataka
            </p>
            <div className="flex space-x-2 mt-4 ">
              {/* Social Icons */}
              <a href="https://www.linkedin.com/company/infokalash-it/" target="_" className=" text-white text-xs p-1.5 rounded-full ">
                <FaLinkedin className="text-[24px]" />
              </a>

              <a href="https://www.instagram.com/infokalash?igsh=dDdoMmtwNWRzcTA0" target="_" className=" text-white text-xs p-1.5 rounded-full ">
                <FaInstagram className="text-[24px]" />
              </a>
            </div>
          </div>
          <div className="flex justify-between ">
          {/* Products */}
          <div className="px-4 md:px-0">
            <h3 className="text-md md:text-lg font-semibold ">Products</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/products/etl" className="hover:underline">
                  Extract, Transform, Load (ETL)
                </a>
              </li>
              <li>
                <a href="/products/mdm" className="hover:underline">
                  Master Data Management
                </a>
              </li>
              <li>
                <a href="/products/data-governance" className="hover:underline">
                  Data Governance
                </a>
              </li>
              <li>
                <a href="/products/apibuilder" className="hover:underline">
                  API Builder
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="px-4 md:px-0">
            <h3 className="text-md md:text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-[12px]  md:text-sm">
          <p>© 2025 InfoKalash. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
