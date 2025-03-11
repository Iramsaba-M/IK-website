"use client"

import { useState,useRef } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image"
import { MdApi, MdSecurity, MdSpeed, MdMonitor, MdRocketLaunch, MdIntegrationInstructions } from "react-icons/md"
import apibuilder from "@/assets/apibuilderdashboard.png"

const apiBuilderImagePlaceholder = "/placeholder.svg?height=400&width=600"

export default function APIBuilderPage() {
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
      title: "Schema-First Design",
      description:
        "Quickly design APIs using OpenAPI and GraphQL standards with built-in validation and testing tools.",
      icon: <MdApi className="text-external" />,
    },
    {
      title: "Dynamic Endpoint Management",
      description: "Create, version, and update APIs with zero downtime.",
      icon: <MdRocketLaunch className="text-external" />,
    },
    {
      title: "Robust Security Framework",
      description: "Implement OAuth2.0, JWT authentication, and advanced rate limiting to secure your API endpoints.",
      icon: <MdSecurity className="text-external" />,
    },
    {
      title: "High-Performance Payloads",
      description: "Optimize API response times with gRPC, caching mechanisms, and load balancing.",
      icon: <MdSpeed className="text-external" />,
    },
    {
      title: "Real-Time Monitoring",
      description: "Gain visibility into API usage, performance, and error rates with interactive dashboards.",
      icon: <MdMonitor className="text-external" />,
    },
  ]

  const businessBenefits = [
    {
      title: "Accelerate Development",
      description: "Accelerate development lifecycles with low-code configurations and reusable components.",
    },
    {
      title: "Seamless Integration",
      description: "Enable seamless integration with legacy systems and modern cloud-native applications.",
    },
    {
      title: "Reduce Operational Risks",
      description: "Reduce operational risks with built-in error handling and monitoring capabilities.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroSectionRef}  className={`bg-gradient-to-br h-[70vh] from-primary to-[#1BFFFF] transition-all duration-1000 ${isHeroSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl  md:flex mx-auto h-full px-4 py-20 md:py-20">
          <div className=" flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">API Builder</h1>
            <p className="text-xl text-gray-100 mb-8">
              Empower your organization to accelerate innovation and enhance digital experiences with our comprehensive
              API solution.
            </p>
          </div>
          <div className="md:w-4/5 h-96">
            <Image
              src={apibuilder}
              alt="API Builder Illustration"
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
            APIs are the lifeblood of modern digital ecosystems, enabling seamless integration between applications,
            microservices, and third-party systems. Our API Builder provides a comprehensive solution for designing,
            deploying, and managing scalable APIs, empowering organizations to accelerate innovation and enhance digital
            experiences.
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-external">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights Section */}
      <section ref={technologyRef}  className={`py-24 bg-white transition-all duration-1000 ${isTechnologyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technology Highlights</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              The API Builder is engineered for microservices architectures, offering native integration with Kubernetes
              and Docker for deployment. Its compatibility with CI/CD pipelines ensures continuous delivery, while
              real-time observability tools provide actionable insights into performance and scalability.
            </p>
            <div className="flex justify-center items-center">
              <MdIntegrationInstructions className="text-6xl text-external mr-4" />
              <span className="text-xl font-semibold text-gray-800">Seamless Integration & Scalability</span>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}
