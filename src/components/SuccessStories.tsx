'use client'

import React from "react";
import { Building2, Target, Lightbulb, BarChart } from 'lucide-react';
import { FaWrench, FaLightbulb, FaChartBar } from 'react-icons/fa';
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const successStoriesRef = useRef(null)
  const isSuccessStoriesVisible = useIntersectionObserver(successStoriesRef)


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stories = [
    {
      company: "Indian Insurance",
      category: "Streamlining Policy Data with Precision",
      challenge: "A leading insurance provider faced significant hurdles due to fragmented policy data coming from multiple sources—agents, customers, and claims departments. The data was riddled with inconsistencies and redundancies, making it difficult to process claims efficiently and provide customers with accurate, timely information. The insurer needed a robust solution to centralize and cleanse the data for better management and service.",
      solution: "We developed a powerful ETL pipeline, utilizing advanced scripts to filter, cleanse, and integrate the policy data into a centralized system. The solution ensured that only valid, duplicate-free data was included, and the pipeline was designed to scale as the insurer's needs evolved.",
      impact: {
        point1: "Data redundancy reduced by 95%: Ensuring more accurate and reliable records",
        point2: "30% faster claim processing: Streamlined workflows for quicker decision-making",
        point3: "Enhanced analytics capabilities: Unified data enabled more accurate predictive analytics."
      }, 
      metrics: {
        timeSaved: "70%",
        accuracy: "95%",
        storesServed: "50K+",
        satisfaction: "85%"
      },
      review: {
        quote: "By transforming chaotic data into a unified system, the insurer not only improved operational efficiency but also gained the ability to provide customers with personalized, responsive service they can trust.",
      
      }
    },
    {
      company: "Canadian Telecom",
      category: "Empowering Customer Insights for Seamless Experience",
      challenge: "A leading Canadian telecom provider faced a challenge in delivering personalized experiences to its vast customer base. With data scattered across multiple systems—SIMs, customer insights, billing, and order systems—the need for a unified approach was critical to creating a seamless customer journey.",
      solution: "We integrated data from multiple systems into a powerful engine that processed customer insights. This engine generated personalized tiles for each user, combining SIM data, order details, and billing information. The result was a real-time, dynamic dashboard offering relevant, actionable insights for both the provider and the customer.",
      impact: {
        point1: "Personalized customer tiles delivered in real time",
        point2: "Streamlined order and billing system for quicker service activation",
        point3: "Enhanced user experience through data-driven insights, increasing customer satisfaction."
      },
      metrics: {
        timeSaved: "60%",
        accuracy: "98%",
        storesServed: "500+",
        satisfaction: "92%"
      },
      review: {
        quote: "By combining customer data across systems, the telecom provider enhanced customer interactions and streamlined operations, providing the right information at the right time.",
        
      }
    },

    {
      company: "Indian Healthcare",
      category: "Streamlining Data for Operational Efficiency",
      challenge: "A leading insurer struggled with fragmented, inconsistent data from multiple sources, affecting its operational efficiency and customer experience. They needed a unified solution to clean, validate, and integrate data seamlessly into Salesforce.",
      solution: "We developed an ETL pipeline that filtered, cleansed, and unified the insurer’s data, removing redundancies and ensuring data accuracy.",
      impact: {
        point1: "95% reduction in data redundancy",
        point2: "30% faster claim processing",
        point3: "Predictive analytics enabled personalized insurance plans"
      },
      metrics: {
        timeSaved: "60%",
        accuracy: "98%",
        storesServed: "500+",
        satisfaction: "92%"
      },
      review: {
        quote: "The insurer now operates with reliable, actionable data, transforming the customer experience and driving operational excellence.",
        
      }
    },

    {
      company: "Indian Pharma",
      category: "Seamless Data Migration to AWS for Business Intelligence",
      challenge: "A leading Indian pharma company needed to migrate critical sales data from their legacy on-premises data warehouse to AWS Redshift to power an analytics dashboard project. With multiple vendors and business entities involved, the solution needed to support varying levels of data access across hierarchical positions.",
      solution: "We led the migration to AWS Redshift, leveraging an ELT approach with DBT for data transformation and modeling, bypassing traditional methods for greater efficiency. Data ingestion was automated across daily, weekly, monthly, quarterly, and yearly cycles, ensuring up-to-date information from various sources.",
      impact: {
        point1: "Streamlined migration to a cloud-based data warehouse with faster query performance.",
        point2: "10 dynamic dashboards tailored to different business roles, enhancing decision-making.",
        point3: "Automated, scalable data onboarding process with high-frequency updates, ensuring data accuracy and accessibility."
      },
      metrics: {
        timeSaved: "60%",
        accuracy: "98%",
        storesServed: "500+",
        satisfaction: "92%"
      },
      review: {
        quote: "This solution enabled the pharma company to efficiently manage and analyze their sales data, driving better insights and business outcomes.",
        
      }
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <div ref={successStoriesRef}  className={`min-h-screen bg-gray-50 md:p-8 p-4 relative font-sans px-4 md:py-12 transition-all duration-1000 ${isSuccessStoriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <p className="text-2xl  lg:text-4xl font-sans font-semibold text-zinc-700 text-center mb-4">
        Our Client Success Stories
      </p>
      <p className="text-center text-sm md:text-base md:leading-relaxed">Discover how industry leaders transformed their data landscape with our solutions. <br />
        Journey through their success stories of modernization, innovation, and measurable business impact.</p>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto bg-gray-50 rounded-2xl   font-sans">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 p-9">
          <div className="w-16 h-16 bg-[#e2eaf5] rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-external" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 15.5l-6 3-6-3V6.5l6-3 6 3v11z" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl md:text-xl font-semibold">{stories[currentIndex].company}</h2>
            <p className="text-external">{stories[currentIndex].category}</p>
          </div>
        </div>

        {/* Challenge/Solution/Impact and Quote section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 mx-2 md:mx-10">
          {/* Left Side (Challenge, Solution, Impact) */}
          <div className="flex flex-col justify-between gap-4 md:w-3/6 ">
            {/* Challenge */}
            <div className="border-gray-100 border-2 text-gray-800 rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaWrench className="text-external w-5 h-5" />
                <h3 className="font-medium text-sm md:text-base text-external">Challenge</h3>
              </div>
              <p className="text-gray-800 text-xs md:text-base font-light">{stories[currentIndex].challenge}</p>
            </div>

            {/* Solution */}
            <div className="border-gray-100 border-2 text-gray-800 rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaLightbulb className="text-external w-5 h-5" />
                <h3 className="font-medium text-sm md:text-base text-external">Solution</h3>
              </div>
              <p className="text-xs md:text-base font-light">{stories[currentIndex].solution}</p>
            </div>

            {/* Impact */}
            <div className="border-gray-100 border-2 text-gray-800 rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaChartBar className="text-external w-5 h-5" />
                <h3 className="font-medium text-sm md:text-base text-external">Impact</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-md font-light">
  {stories[currentIndex].impact &&
    typeof stories[currentIndex].impact === "object" && (
      <>
        <li className="leading-5 text-xs md:text-base">{stories[currentIndex].impact.point1}</li>
        <li className="leading-5 text-xs md:text-base">{stories[currentIndex].impact.point2}</li>
        <li className="leading-5 text-xs md:text-base">{stories[currentIndex].impact.point3}</li>
      </>
    )}
</ul>
             
            </div>
          </div>

          {/* Right Side (Quote, Author, Position) */}
          <div className="sm:w-1/2 flex flex-col justify-between  ">
            <div className="flex items-center  rounded-md bg-white shadow-md border border-gray-100 p-4 h-full  ">
              <div>
                <p className="text-xl sm:text-2xl lg:text-xl font-sans font-semibold text-zinc-700 text-start mb-8 ">Impact Story</p>
                <p className=" font-light text-[#353636] text-sm md:text-base mb-8 ">{stories[currentIndex].review.quote}</p>
              
              </div>
            </div>

            {/* Results & Quote Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              {Object.entries(stories[currentIndex].metrics).map(([key, value], index) => {
                // Define your icons and colors here
                const icons = [Target, Lightbulb, Building2, BarChart]; // Replace with your actual imported icons
                const colors = ["#074799", "#2784ff", "#074799", "#2784ff"];
                const Icon = icons[index % icons.length]; // Use the component directly
                const color = colors[index % colors.length];

                return (
                  <div
                    key={key}
                    className="p-4 rounded-md bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {Icon && <Icon className="w-5 h-5 -m-1" style={{ color }} />} {/* Use the Icon component */}
                      <span className="text-sm text-gray-600">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    </div>
                    <p className="text-2xl font-bold" style={{ color }}>
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-6 sm:w-8 bg-external" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

};

export default SuccessStories;

