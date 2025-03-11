"use client";
import { ArrowRightIcon } from "lucide-react";
import { useState, useRef } from "react"
import { ArrowRight } from "lucide-react";
import mdmImage from "../../../assets/mdm.webp";
import mdmdashboard from "../../../assets/mdmdashboard.webp"
import Image from "next/image";
import { MdManageHistory } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { IoRocket } from "react-icons/io5";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion"
import Header from "@/components/Header";

export default function MDMSolutionsPage() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const heroSectionRef = useRef(null)
  const overviewRef = useRef(null)
  const benefitsRef = useRef(null)
  const featuresRef = useRef(null)
  const technologyRef = useRef(null)
  const approachRef = useRef(null)

  const isHeroSectionVisible = useIntersectionObserver(heroSectionRef)
  const isOverviewVisible = useIntersectionObserver(overviewRef)
  const isBenefitsVisible = useIntersectionObserver(benefitsRef)
  const isFeaturesVisible = useIntersectionObserver(featuresRef)
  const isTechnologyVisible = useIntersectionObserver(technologyRef)
  const isApproachVisible = useIntersectionObserver(approachRef)

  const mdmChallenges = [
    {
      // title: "Complex Infrastructure",
      description:
        "Eliminate data silos and enable cross-functional collaboration.",
      icon: <MdManageHistory className="text-external" />,
    },
    {
      // title: "Data Complexity",
      description:
        "Reduce operational costs by automating data quality checks and deduplication processes.",
      icon: <FaArrowsRotate className="text-external" />,
    },
    {
      // title: "Security & Compliance",
      description: "Improve customer experience with consistent and accurate master data.",
      icon: <FaUnlockAlt className="text-external" />,
    },
    {
      // title: "Stakeholder Alignment",
      description:
        "Enable scalable data stewardship frameworks for future growth and data expansion.",
      icon: <LuHandshake className="text-external" />,
    },
    
  ];

  const backgroundPatterns = [
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E",
  ];

  interface Solution {
    title: string
    description: string
    icon: React.ReactNode
  }

  const solutions: Solution[] = [
    {
      title: "Golden Record Creation",
      description: "Achieve a single source of truth through advanced match-merge algorithms and AI-driven survivorship rules, ensuring high-quality, trusted data.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ),
    },
    {
      title: "Multi-Domain Support",
      description: "Manage customer, product, supplier, and other domain-specific data in a unified platform with customizable workflows.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Synchronization",
      description: "Enable consistent data updates across all systems and applications with event-driven architecture and streaming APIs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
    {
      title: "Data Governance & Lineage",
      description: "Track data from creation to consumption with context-aware lineage tracking, ensuring transparency and compliance with regulations like GDPR, CCPA, and HIPAA.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
    {
      title: "Hierarchy Management",
      description: "Define and manage complex relationships and hierarchies within datasets to gain actionable insights for decision-making.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      ),
    },
    
  ]

  return (
    <>
    
    <div className="min-h-screen bg-white   font-sans">
      {/* Redesigned Hero Section with Gradient */}
      <section ref={heroSectionRef} className={`bg-gradient-to-br px-2 from-primary to-secondary transition-all duration-1000 ${isHeroSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl  md:flex mx-auto   py-20 md:py-32 ">
          <div className="  flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl text-center md:text-left lg:text-5xl font-bold text-white leading-tight mb-6">
              Master Data Management Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8">
            Empowering enterprises with consistent, accurate, and accessible data across all systems.
            </p>
          </div>
          <div className="   h-[22rem]">
            <Image
              src={mdmdashboard}
              alt="MDM Solutions Illustration"
              className="rounded-lg shadow-2xl w-full h-96"
              width={1080}
              height={1080}
              
            />
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section   ref={overviewRef}  className={`py-16 bg-gray-50 transition-all duration-1000 ${isOverviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-gray-800">Overview</h2>
          <p className="text-md md:text-lg mb-6 text-gray-600">
            Master Data Management (MDM) is the backbone of enterprise data strategy, designed to ensure that critical
            data assets such as customers, products, suppliers, and locations remain consistent, accurate, and
            accessible across all systems.
          </p>
          <p className="text-md md:text-lg text-gray-600">
            In today's dynamic and interconnected world, organizations need an MDM solution that provides more than just
            basic data governance—it must drive data stewardship, operational efficiency, and regulatory compliance
            while enabling seamless collaboration across departments.
          </p>
        </div>
      </section>

      {/* MDM Business Benefits Section */}
      <section   ref={benefitsRef}
        id="challenges"
        className={`py-24 bg-white transition-all duration-1000 ${isBenefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-external">
          Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mdmChallenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border-t-4 border-external"
              >
                <div className="text-4xl mb-4">{challenge.icon}</div>
             
                <p className="text-gray-600 mb-4">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       
     {/* Master Data Management Systems Features Section */}
     <section className="py-20 bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Master Data Management Systems Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
            >
              <div className="h-1 bg-external" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <motion.div
                    className="rounded-full p-2 mr-4 bg-gray-100"
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <div className="text-external">{solution.icon}</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">{solution.title}</h3>
                </div>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology Highlights */}
    <section  ref={technologyRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${isTechnologyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl  font-bold mb-8 text-center text-gray-800">Technology Highlights</h2>
          <p className="text-lg text-center text-gray-600">
            Our MDM solution is built on a cloud-native, API-first architecture for seamless integration with enterprise
            systems, offering Kubernetes-based containerization, microservices scalability, and real-time data
            orchestration.
          </p>
        </div>
      </section>

      {/* Visual Representation */}
      <section  ref={approachRef}
        className={`py-24 bg-white transition-all duration-1000 ${isApproachVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl  font-bold text-center mb-16 text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-external">
            Our MDM Solution Approach
          </h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <Image
              src={mdmImage}
              alt="MDM Solution Approach Diagram"
              width={1200}
              height={400}
              className="mx-auto rounded-lg"
            />
            <p className="mt-6 text-gray-600">
              A visual representation of our comprehensive MDM solution
              approach, showcasing the integration of various components and
              methodologies.
            </p>
          </div>
        </div>
      </section>

     
    </div>
    </>
  );
}
