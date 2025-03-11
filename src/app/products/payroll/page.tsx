"use client"

import { useState, useRef } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import Image from "next/image"
import {
  MdCalculate,
  MdAccessTime,
  MdGavel,
  MdReceipt,
  MdInsights,
  MdSync,
  MdPerson,
  MdSecurity,
  MdSpeed,
} from "react-icons/md"

import payrolldashboard from "@/assets/payroll.webp"
import Link from "next/link";

export default function PayrollManagementSystemPage() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)


  const heroSectionRef = useRef(null)
  const overviewRef = useRef(null)
  const featuresRef = useRef(null)
  const benefitsRef = useRef(null)
  const catRef = useRef(null)
 
  
  const isHeroSectionVisible = useIntersectionObserver(heroSectionRef)
  const isOverviewVisible = useIntersectionObserver(overviewRef)
  const isFeaturesVisible = useIntersectionObserver(featuresRef)
  const isBenefitsVisible = useIntersectionObserver(benefitsRef)
  const isCatVisible = useIntersectionObserver(catRef)

  const keyFeatures = [
    {
      title: "Comprehensive Payroll Processing",
      description:
        "Handle pay calculations, deductions, bonuses, and commissions with precision for a diverse workforce across various industries.",
      icon: <MdCalculate className="text-external" />,
    },
    {
      title: "Attendance and Leave Management",
      description:
        "Seamlessly integrate attendance tracking with punch-in/punch-out functionality for accurate work hours. Employees can easily mark their leaves, and managers can approve time off with a click of a button.",
      icon: <MdAccessTime className="text-external" />,
    },
    {
      title: "Industry-Specific Compliance",
      description:
        "Tailored to meet the regulations of industries such as healthcare, finance, manufacturing, and retail. Features include tax calculations, overtime policies, and compliance with local labor laws.",
      icon: <MdGavel className="text-external" />,
    },
    {
      title: "Automated Tax Filing",
      description:
        "Simplifies tax calculations, filings, and reports, ensuring that your organization stays compliant with national and international tax laws.",
      icon: <MdReceipt className="text-external" />,
    },
    {
      title: "Payroll Reports and Analytics",
      description:
        "Gain insights into payroll trends, departmental costs, and workforce productivity through intuitive analytics and customizable reports.",
      icon: <MdInsights className="text-external" />,
    },
    {
      title: "Seamless Integrations",
      description:
        "Easily integrate with other enterprise systems such as HRMS, ERP, and accounting software to ensure smooth data flow across departments.",
      icon: <MdSync className="text-external" />,
    },
  ]

  const benefits = [
    {
      title: "Accuracy and Reliability",
      description: "Ensure precise payroll calculations and reduce errors.",
      icon: <MdCalculate className="text-external text-4xl" />,
    },
    {
      title: "Time and Cost Savings",
      description: "Automate processes to reduce administrative overhead.",
      icon: <MdSpeed className="text-external text-4xl" />,
    },
    {
      title: "Compliance Assurance",
      description: "Stay up-to-date with changing regulations and tax laws.",
      icon: <MdSecurity className="text-external text-4xl" />,
    },
    {
      title: "Employee Satisfaction",
      description: "Provide transparent and timely payroll information to employees.",
      icon: <MdPerson className="text-external text-4xl" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroSectionRef}  className={`bg-gradient-to-br from-primary to-secondary transition-all duration-1000 ${isHeroSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl gap-5 md:flex mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Payroll: Advanced Payroll and Workforce Management Solution
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Our Payroll Management System (PMS) simplifies payroll processing with < br />a full suite of features that cater
              to diverse business needs while ensuring compliance with industry regulations.
            </p>
          </div>
          <div className="md:w-4/5 h-80">
            <Image
              src={payrolldashboard}
              alt="Payroll Management System Illustration"
              className="rounded-lg shadow-2xl h-full w-full "
              width={1080}
             height={1080}
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} id="features"  className={`py-24 bg-white transition-all duration-1000 ${isFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-800">Key Features</h2>
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className={`py-16 bg-gray-50 transition-all duration-1000 ${isBenefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Benefits of Our PMS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-semibold my-3 text-external">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={catRef}  className={`py-24 bg-external transition-all duration-1000 ${isCatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Streamline Your Payroll Process?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Empower your HR team with our advanced Payroll Management System and ensure accurate, timely payments for
            your workforce.
          </p>
          <Link href="/contact" className="bg-white text-external font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Request a Demo
          </Link>
        </div>
      </section>

      
    </div>
  )
}
