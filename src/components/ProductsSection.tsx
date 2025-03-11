"use client";
import React, {useRef, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Layout,
  BookOpenText,
  HandCoins,
  LayoutDashboard,
  Users,
  BarChart2,
  ChevronRight,
  MenuSquare,
  DatabaseBackup,
} from "lucide-react";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import lmsdashboard from "@/assets/lmsdashboard.webp"
import mdmdashboard from "@/assets/mdmdashboard.webp"
import payrolldashboard from "@/assets/payroll.webp"
import apibuilderbashboard from "../assets/apibuilderdashboard.png"
import etldashboard from "../assets/etldashboard.png"
import edadashboard from "@/assets/edadashboard.webp"
import Image, { StaticImageData } from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Type definitions
interface Feature {
  id: number;
  title: string;
  expandedText: string;
  icon: JSX.Element;
  color: string;
  link:string;
  image: StaticImageData | string;
}

interface ChartDataPoint {
  name: string;
  value: number;
}

// Data constants
const lineData: ChartDataPoint[] = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

const barData: ChartDataPoint[] = [
  { name: "ETL", value: 400 },
  { name: "LMS", value: 300 },
  { name: "Payroll", value: 500 },
  { name: "MDM", value: 280 },
];

const pieData: ChartDataPoint[] = [
  { name: "ETL", value: 400 },
  { name: "LMS", value: 300 },
  { name: "Payroll", value: 300 },
  { name: "MDM", value: 200 },
];

const areaData: ChartDataPoint[] = [
  { name: "Q1", value: 400 },
  { name: "Q2", value: 600 },
  { name: "Q3", value: 800 },
  { name: "Q4", value: 1000 },
];

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Master Data Management",
    expandedText:
      "Oversee team performance, assign tasks, and facilitate communication.",
    icon: <Users size={20} />,
    color: "bg-[#0a33e2]",
    image: mdmdashboard,
    link:"/products/mdm"
    
  },
 
  {
    id: 2,
    title: "API Builder",
    expandedText:
      "Build, manage, and deploy APIs seamlessly without writing complex code.",
    icon: <BarChart2 size={20} />,
    color: "bg-[#0a45e2]",
    image: apibuilderbashboard,
    link:"/products/apibuilder"
  },

  {
    id: 3,
    title: "Extract, Transform, Load (ETL)",
  
    expandedText:
      "ETL platform is engineered to handle the most complex workflows with unparalleled speed, scalability, and reliability.",
    icon: <Layout size={20} />,
    color: "bg-[#0a57e2]",
    image: etldashboard,
    link:"/products/etl"
  },
  {
    id: 4,
    title: "Data Governance",
    
    expandedText:
      "Data Governance ensures organizations maintain control over their data assets while complying with stringent regulations and industry standards.",
    icon: <DatabaseBackup size={20} />,
    color: "bg-[#0a69e2]",
    image: edadashboard,
    link:"/products/data-governance"
  },



  {
    id: 5,
    title: "Learning Management System",
  
    expandedText:
      "platform for creating, managing, and delivering educational content and training programs.",
    icon: <BookOpenText size={20} />,
    color: "bg-[#0a7be2]",
    image: lmsdashboard,
    link:"/products/lms"
  },
  {
    id: 6,
    title: "Payroll Management system",
    
    expandedText:
      "A powerful system designed to handle employee payments, tax calculations, and benefits management with precision and efficiency.",
    icon: <HandCoins size={20} />,
    color: "bg-[#0a8de2]",
    image: payrolldashboard,
    link:"/products/payroll"
  },
];

const ProductsSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const productSectionRef = useRef(null)
  const isProductSectionVisible = useIntersectionObserver(productSectionRef)
  

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
      <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
          Revenue Growth
        </h3>
        <div className="h-[200px] md:h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2E3192" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
          Team Performance
        </h3>
        <div className="h-[200px] md:h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#b9d2fb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
          Product Distribution
        </h3>
        <div className="h-[200px] md:h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="60%"
                fill="#00796b"
              >
                <Cell fill="#2d75d1" />
                <Cell fill="#35a4ee" />
                <Cell fill="#0055de" />
                <Cell fill="#52cdff" />
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
          Quarterly Growth
        </h3>
        <div className="h-[200px] md:h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2E3192"
                fill="#b9d2fb"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderFeatureContent = () => {
    if (selectedFeature === 0) return renderDashboard();

    const feature = FEATURES.find((f) => f.id === selectedFeature);
    if (!feature) return null;

    return (
      <div className="p-3 md:p-2 text-center max-w-2xl bg-gray-50 mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          {feature.title}
        </h2>
        {feature.image && (
        <div className="w-2xl h-80">
          <Image 
        src={feature.image} 
        alt={feature.title} 
        width={1080}
        height={1080}
        
        className="w-full h-full rounded-lg mb-4"
      />
        </div>
      )}
       
       
      </div>
    );
  };

 
  return (
    <section id="features">
    <div  ref={productSectionRef} className={` min-h-screen bg-gray-100 py-4 px-2 md:py-6 md:px-12 box-border font-sans transition-all duration-1000 ${isProductSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h1 className="text-xl md:text-4xl font-semibold text-zinc-700 my-4 md:my-8 text-center">
        Agentic Low-Code Platform for Enterprise Excellence
      </h1>
      <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-3 md:leading-6 md:leading-8 mb-4 md:mb-8 text-center">
        Accelerate your digital transformation journey with our no-code platform
        that eliminates traditional development barriers.
        <br className="hidden md:block" />
        Seamlessly scale your enterprise operations through intelligent
        automation.
      </p>

      <div className="w-full md:w-10/12 mx-auto bg-gray-100">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 md:gap-6 p-2 md:p-4">
          {/* Main SaaS UI */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className=" bg-white text-[#074799] p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
                  className="lg:hidden"
                >
                  <MenuSquare className="h-6 w-6" />
                </button>
                <MenuSquare className="h-6 w-6 hidden lg:block" />
                <span className="font-semibold">SaaS Dashboard</span>
              </div>
            </div>

            <div className="flex flex-1 min-h-[400px] md:min-h-[600px] relative">
              {/* Sidebar - Mobile Overlay */}
              <div
                className={`
                lg:hidden fixed inset-0 bg-[#2E3192] bg-opacity-50 z-20
                ${isMobileSidebarOpen ? "block" : "hidden"}
              `}
                onClick={() => setMobileSidebarOpen(false)}
              />

              {/* Sidebar */}
              <div
                className={`
                fixed lg:relative left-0 top-30 bg-[#f1f1f1] border-r border-[#ddd]
                transition-all duration-300 ease-in-out z-30
                ${
                  isMobileSidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                }
                ${isSidebarCollapsed ? "w-[3.0rem]" : "w-[13rem]"}
              `}
              >
                <button
                  onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
                  className="hidden lg:block bg-none border-none p-2 m-2 cursor-pointer transition-colors duration-200"
                >
                  <ChevronRight
                    className={`w-5 h-5 ${
                      isSidebarCollapsed ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <nav className="flex flex-col mt-2">
                  <button
                    onClick={() => {
                      setSelectedFeature(0);
                      setMobileSidebarOpen(false);
                    }}
                    className={`flex items-center gap-2 bg-transparent p-2 px-4 text-left text-[0.8rem] text-[#555] cursor-pointer transition-colors duration-200 
                      ${
                        selectedFeature === 0
                          ? "bg-[#e0f2f1] text-[#2E3192] border-l-4 border-[#2E3192] pl-[calc(1rem-4px)]"
                          : ""
                      } hover:bg-gray-100`}
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    {!isSidebarCollapsed && <span className="text-[0.7rem]">Dashboard</span>}
                  </button>

                  {FEATURES.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => {
                        setSelectedFeature(feature.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`flex items-center gap-2 bg-transparent p-3 px-4 text-left text-[0.7rem] text-[#555] cursor-pointer transition-colors duration-200 
                        ${
                          selectedFeature === feature.id
                            ? "bg-[#e0f2f1] text-[#2E3192] border-l-4 border-[#074799] pl-[calc(1rem-4px)]"
                            : ""
                        } hover:bg-gray-100`}
                    >
                      {feature.icon}
                      {!isSidebarCollapsed && <span>{feature.title}</span>}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto p-2 md:p-2">
                {renderFeatureContent()}
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4 md:space-y-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`py-4 md:py-4 px-4 md:px-4 rounded-lg shadow-sm cursor-pointer transition-all
                  ${
                    selectedFeature === feature.id
                      ? "bg-indigo-50 border-2 border-indigo-200"
                      : "bg-white hover:bg-gray-50"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-700 ">
                    {feature.title}
                  </h3>
                </div>

                {selectedFeature === feature.id && (
                  <div>
                   
                    <p className="text-xs md:text-[13px] font-normal text-left pt-1  md:pl-12 text-gray-500">
                      {feature.expandedText}
                    </p>
                    <div className=" flex justify-start py-2  pl-10">
                      <Link
                        href={feature.link}
                        className="inline-flex items-center border-2 p-1 rounded-full hover:bg-gray-200 text-[gray-300] text-[12px] text-md hover:text-gray-900 pl-2"
                      >
                        Learn more{" "}
                        <IoIosArrowRoundForward className="ml-1 flex justify-center items-center text-[18px]" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProductsSection;
