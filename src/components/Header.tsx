"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import logoimage from "../../public/logoicon1.png";


const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeMobileSubmenu) {
      setActiveMobileSubmenu(null);
    }
  };

  const handleToggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down and beyond 50px: Hide header
      setIsHeaderVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: Show header
      setIsHeaderVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Your existing mouse event handlers remain the same
  const handleMouseEnterMenu = (menu: string) => {
    setActiveMenu(menu);
    setIsHeaderHovered(true);
  };

  const handleMouseLeaveHeader = () => {
    setIsHeaderHovered(false);
    setActiveMenu(null);
  };

  const handleSubMenuMouseEnter = () => {
    setIsHeaderHovered(true);
  };

  type SubmenuItem = {
    heading: string;
    items: {
      name: string;
      link: string;
      image?: string;
      showLearnMore?: boolean;
    }[];
    borderLeft?: boolean; // Optional property for vertical line
  };

  type Submenus = {
    [key: string]: SubmenuItem[];
  };

  const submenus: Submenus = {
    Products: [
      {
        heading: "SOLUTIONS",
        items: [
          {
            name: "Data Governance and Orchestration",
            link: "/products/data-governance",
          },
          {
            name: "Modern Master Data Management",
            link: "/products/mdm",
          },
          {
            name: "Learning Management System",
            link: "/products/lms",
          },
        ],
        // Show vertical line
      },
      {
        heading: "OUR PLATFORM",
        items: [
          { name: "Low code AutoML", link: "#" },
          { name: "Low code EDA", link: "#" },
          { name: "Data Matching", link: "#" },
        ],
        borderLeft: true,
      },
      {
        heading: "WHAT'S NEW",
        items: [
          {
            name: "5 Key Challenges in Modern Data Management",
            link: "#",
            image: "/Apache.png",
            showLearnMore: true,
          },
          {
            name: "Trends Shaping Data Analytics in 2025",
            link: "#",
            image: "/Jamstack.png",
            showLearnMore: true,
          },
        ],
        borderLeft: true,
      },
    ],
    Solutions: [
      {
          heading: 'INDUSTRIES',
          items: [
              { name: 'Finanace', link: '#' },
              { name: 'Telecome', link: '#' },
              { name: 'Health', link: '#' },
              { name: 'E-commerce', link: '#' },
          ],

      },
      {
          heading: 'FEATURE CASE STUDIES',
          items: [
              {
                  name: 'Data lake architecture for stream analysis',
                  link: '#',
                  image: '/Apache.png',
                  showLearnMore: true,

              },

              {
                  name: 'Integrated learning platform driven GenAI',
                  link: '#',
                  image: '/Windows.png',
                  showLearnMore: true,
              }

          ],
          borderLeft: true,

      },
      {
          heading: "WHAT'S NEW",
          items: [
              {
                  name: 'Harnessing Knowledge Graphs for Enterprise Data',
                  link: '#',
                  image: '/GraphQL.png',
                  showLearnMore: true,
              },
              {
                  name: 'Revolutionizing Data-Driven Marketing Strategies',
                  link: '#',
                  image: '/CentOS.png',
                  showLearnMore: true,
              },
          ],
          borderLeft: true,
      },
  ],
    Insights: [
      {
        heading: "",
        items: [],
      },

      {
        heading: "INSIGHTS",
        items: [
          { name: "Leadership Perspectives", link: "#" },
          { name: "Latest Blogs & Updates", link: "/blogpage" },
          { name: "Success Stories", link: "#" },
          { name: "Tech Podcasts", link: "#" },
        ],
        borderLeft: false,
      },
      {
        heading: "WHAT'S NEW",
        items: [
          {
            name: "Procurement of the Future: Challenges and Innovations",
            link: "#",
            image: "/Google Cloud.png",
            showLearnMore: true,
          },
          {
            name: "Achieving Scalability in Data Operations",
            link: "#",
            image: "/Grafana.png",
            showLearnMore: true,
          },
        ],
        borderLeft: true,
      },
    ],

    Careers: [
      {
        heading: "",
        items: [],
      },

      {
        heading: "QUICK LINKS",
        items: [
          { name: "Life at InfoKalash", link: "#" },
          { name: "Open Positions", link: "#" },
        ],
        borderLeft: false,
      },

      {
        heading: "FUTURE-FORWARD",
        items: [
          {
            name: "Transforming Careers in Data Engineering",
            link: "#",
            image: "/Python Poetry.png",
            showLearnMore: true,
          },
          {
            name: "Innovating with AI and Data",
            link: "#",
            image: "/Jamstack.png",
            showLearnMore: true,
          },
        ],
        borderLeft: true,
      },
    ],

    About: [
      {
        heading: "",
        items: [],
      },

      {
        heading: "QUICK LINKS",
        items: [
          { name: "Our Company", link: "/about" },
          { name: "Enterprise Certifications", link: "#" },
        ],
        borderLeft: false,
      },

      {
        heading: "FUTURE-FORWARD",
        items: [
          {
            name: "Innovations in AI and Data Engineering",
            link: "#",
            image: "/Apache.png",
            showLearnMore: true,
          },
          {
            name: "Driving Sustainable Tech Solutions",
            link: "#",
            image: "/CentOS.png",
            showLearnMore: true,
          },
        ],
        borderLeft: true,
      },
    ],
  };
  const MobileMenuItem = ({ menu }: { menu: string }) => {
    const menuItems = submenus[menu];

    return (
      <div className="border-b border-gray-700">
        <button
          onClick={() => handleToggleMobileSubmenu(menu)}
          className="flex items-center justify-between w-full py-4 px-6 text-white"
        >
          <span className="text-lg">{menu}</span>
          <IoIosArrowDown
            className={`h-5 w-5 transition-transform duration-300 ${
              activeMobileSubmenu === menu ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeMobileSubmenu === menu && (
          <div className="bg-external py-2">
            {menuItems.map((column, idx) => (
              <div key={idx} className="px-8 py-2">
                {column.heading && (
                  <h3 className="text-sm font-medium text-gray-300 mb-2">
                    {column.heading}
                  </h3>
                )}
                <ul className="space-y-2">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.link}
                        className="block py-2 text-white hover:text-gray-300 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
    {/* Separate Logo Container */}
    <div className="fixed top-0 left-0 px-2 lg:px-10 h-20 z-50 flex items-center">
      {/* Text Logo */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          isHeaderVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <Link href="/" className=" ">
        <span  className="text-xl md:text-3xl font-sans font-semibold text-white">InfoKalash</span>
        </Link>
      </div>

      {/* Image Logo */}
      <div
        className={`hidden md:block absolute transition-all duration-1000 ease-in-out ${
          isHeaderVisible ? "opacity-0 scale-75" : "opacity-100 scale-100 "
        }`}
      >
      <Link href="/">  <Image
          src={logoimage}
          alt="Company Logo"
          width={220}
          height={140}
          priority
          className="h-10 w-auto object-contain"
        /></Link>
      </div>
    </div>

    {/* Main Header */}
    <header
      className={`fixed top-0 transition-all px-2 lg:px-10 duration-700 ease-in-out w-full hover:shadow-md z-40 ${
        lastScrollY
          ? "bg-external text-white shadow-md"
          : "bg-transparent text-white"
      } ${!isMobileMenuOpen && (activeMenu ? "h-[60%]" : "h-20")} ${
        isHeaderVisible
          ? "translate-y-0 opacity-100 backdrop-blur"
          : "-translate-y-full opacity-0"
      } ${isMobileMenuOpen ? "h-screen bg-[#0c28a5]" : ""}`}
      onMouseLeave={handleMouseLeaveHeader}
    >
      <div className="flex h-20 justify-between z-40">
        {/* Empty div to maintain spacing where logo was */}
        <div className="w-[120px]"></div>

        {/* Hamburger Button */}
        <button
          className="block lg:hidden text-3xl relative z-50"
          onClick={handleToggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow items-center justify-center space-x-[2vh] gap-1.5 font-medium transition-opacity duration-500 ease-in-out pl-14">
          {["Products", "Solutions", "Insights", "Careers", "About"].map(
            (menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => handleMouseEnterMenu(menu)}
              >
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-md font-sans"
                >
                  <span>{menu}</span>
                  <IoIosArrowDown
                    className={`h-4 w-4 mt-1 transition-transform duration-500 ease-in-out ${
                      activeMenu === menu ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Link>
              </div>
            )
          )}
        </nav>

        {/* Desktop Contact Us Button */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact">
            <button className="text-white inline-block text-sm px-4 py-3 rounded-lg tracking-widest font-sans font-bold border-2 hover:bg-[#2672d4] dark:text-neutral-200 transition duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-transparent transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto pb-20">
          {Object.keys(submenus).map((menu) => (
            <MobileMenuItem key={menu} menu={menu} />
          ))}

          {/* Mobile Contact Us Button */}
          <div className="px-6 py-4">
            <Link href="/contact">
              <button className="w-full text-white text-sm px-4 py-3 rounded-lg tracking-widest font-sans font-bold border-2 hover:bg-[#2672d4] transition duration-200">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Submenu */}
      {!isMobileMenuOpen && (
        <div
          className={`hidden lg:block transition-all duration-1000 z-30 ease-in-out transform ${
            activeMenu
              ? "translate-y-0 opacity-100 h-auto"
              : "-translate-y-5 opacity-0 h-0"
          }`}
          onMouseEnter={handleSubMenuMouseEnter}
        >
          {activeMenu && (
          <div className="grid grid-cols-[0.8fr_1.3fr_2fr] z-30 gap-5 px-8 p-8 bg-transparent text-white font-sans mb-10">
            {submenus[activeMenu]?.map((column, index) => (
              <div
                key={index}
                className={`space-y-2 ${
                  column.borderLeft ? "border-l border-gray-200 pl-6" : ""
                }`}
              >
                {(column.heading || column.items.length > 0) && (
                  <>
                    {column.heading && (
                      <h3 className="text-lg p-2 font-medium tracking-wide">
                        {column.heading}
                      </h3>
                    )}
                    {column.items.length > 0 && (
                      <ul className="space-y-2">
                        {column.items.map((item, idx) => (
                          <li key={idx} className="flex flex-col space-y-1">
                            <div className="flex items-start space-x-3">
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-26 h-16 rounded-lg object-cover mt-4"
                                />
                              )}
                              <div className="flex flex-col space-y-2">
                                <Link
                                  href={item.link}
                                  className="text-white text-sm font-normal hover:text-white transition-colors p-2 mt-2"
                                >
                                  {item.name}
                                </Link>
                                {item.showLearnMore && (
                                  <div className="mt-2">
                                    <Link
                                      href={item.link}
                                      className="inline-flex items-center text-[gray-300] text-[12px] text-md hover:text-gray-900 pl-2"
                                    >
                                      Learn more{" "}
                                      <IoIosArrowRoundForward className="ml-1 flex justify-center items-center text-[18px]" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        </div>
      )}
    </header>
    </>
  );
};

export default Header;