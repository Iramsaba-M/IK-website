"use client"

import { useState, useRef } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image"
import {
  MdDataExploration,
  MdTransform,
  MdStorage,
  MdChangeCircle,
  MdCloud,
  MdSpeed,
  MdAutorenew,
  MdReduceCapacity,
} from "react-icons/md"

import etldashboard from "../../../assets/etldashboard.png"

export default function ETLSolutionsPage() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

    const heroSectionRef = useRef(null)
    const overviewRef = useRef(null)
    const featuresRef = useRef(null)
    const benefitsRef = useRef(null)
    const technologyRef = useRef(null)
    
  
    const isHeroSectionVisible = useIntersectionObserver(heroSectionRef)
    const isOverviewVisible = useIntersectionObserver(overviewRef)
    const isFeaturesVisible = useIntersectionObserver(featuresRef)
    const isBenefitsVisible = useIntersectionObserver(benefitsRef)
    const isTechnologyVisible = useIntersectionObserver(technologyRef)




  const keyFeatures = [
    {
      title: "High-Performance Data Ingestion",
      description:
        "Supports batch and real-time streaming from multiple data sources, including relational databases, APIs, cloud storage, and IoT devices.",
      icon: <MdDataExploration className="text-external" />,
    },
    {
      title: "Advanced Transformation Capabilities",
      description:
        "Enable data wrangling, cleansing, and enrichment with AI-powered rules, custom transformation logic, and metadata-driven pipelines.",
      icon: <MdTransform className="text-external" />,
    },
    {
      title: "CDC (Change Data Capture)",
      description:
        "Capture incremental changes with schema drift management to ensure consistency across datasets in real time.",
      icon: <MdChangeCircle className="text-external" />,
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Built to handle petabyte-scale workloads with distributed processing and parallel computation frameworks like Apache Spark.",
      icon: <MdStorage className="text-external" />,
    },
    {
      title: "Integration-Ready",
      description:
        "Seamless connectors for Snowflake, Redshift, BigQuery, and Azure Synapse, supporting hybrid and multi-cloud ecosystems.",
      icon: <MdCloud className="text-external" />,
    },
  ]

  const businessBenefits = [
    {
      title: "Empower Data Teams",
      description: "Empower data analysts and scientists with analytics-ready datasets for faster insights.",
      icon: <MdSpeed className="text-external text-4xl" />,
    },
    {
      title: "Minimize Latency",
      description: "Minimize latency in data pipelines with real-time data streaming and CDC integration.",
      icon: <MdAutorenew className="text-external text-4xl" />,
    },
    {
      title: "Reduce Development Time",
      description: "Reduce development time and costs with reusable ETL templates and self-healing pipelines.",
      icon: <MdReduceCapacity className="text-external text-4xl" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroSectionRef}  className={`bg-gradient-to-br  from-primary to-[#1BFFFF] transition-all duration-1000 ${isHeroSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl md:flex mx-auto px-4 py-20 md:py-32">
          <div className=" flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Extract, Transform, Load (ETL)
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Empower your organization with a robust ETL platform engineered to handle complex workflows with
              unparalleled speed, scalability, and reliability.
            </p>
          </div>
          <div className="md:w-4/5 h-80">
            <Image
              src={etldashboard}
              alt="ETL Solutions Illustration"
             className="rounded-lg shadow-2xl h-full"
             width={1080}
             height={1080}
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section   ref={overviewRef}  className={`py-16 bg-gray-50 transition-all duration-1000 ${isOverviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl  font-bold text-center mb-8 text-gray-800">Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            ETL (Extract, Transform, Load) processes are the backbone of modern data engineering, enabling organizations
            to collect, clean, and consolidate data from disparate sources for analytics and decision-making. In an era
            dominated by big data, IoT, and real-time analytics, our ETL platform is engineered to handle the most
            complex workflows with unparalleled speed, scalability, and reliability.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} id="features"  className={`py-24 bg-white transition-all duration-1000 ${isFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl  font-bold text-center mb-16 text-gray-800">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border-t-4 border-external"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section ref={benefitsRef} className={`py-16 bg-gray-50 transition-all duration-1000 ${isBenefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl  font-bold text-center mb-12 text-gray-800">Business Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-semibold my-3 text-external">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights Section */}
      <section ref={technologyRef}  className={`py-24 bg-white transition-all duration-1000 ${isTechnologyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl  font-bold text-center mb-12 text-gray-800">Technology Highlights</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              The platform leverages event-driven architectures and supports advanced orchestration tools like Apache
              Airflow and Prefect. It integrates with leading CI/CD pipelines, ensuring continuous delivery of optimized
              workflows.
            </p>
            <div className="flex justify-center items-center">
              <MdStorage className="text-6xl text-external mr-4" />
              <span className="text-xl font-semibold text-gray-800">Advanced Orchestration & Continuous Delivery</span>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
