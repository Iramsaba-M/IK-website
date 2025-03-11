"use client"

import {useRef, useState } from "react"
import Image from "next/image"
import { MdSchool, MdChat, MdNoteAlt, MdVideoLibrary, MdGroups, MdRocketLaunch } from "react-icons/md"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import lmsdashboard from "@/assets/lmsdashboard.webp"
import Link from "next/link";

export default function LMSSolutionsPage() {
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
      title: "AI-Driven Learning Paths",
      description:
        "The system uses AI to analyze project-related data and deliver personalized learning recommendations, ensuring that each team member gets the right training at the right time.",
      icon: <MdSchool className="text-external" />,
    },
    {
      title: "Integrated Chatbot Support",
      description:
        "Our intelligent chatbot acts as a real-time assistant, answering questions, providing guidance, and helping users navigate the LMS with ease.",
      icon: <MdChat className="text-external" />,
    },
    {
      title: "Notes Taking and Bookmarking",
      description:
        "Capture essential insights, highlight key points in training materials, and organize your thoughts with built-in notes taking and bookmarking features.",
      icon: <MdNoteAlt className="text-external" />,
    },
    {
      title: "Video Editing and Interactive Content",
      description:
        "Edit training videos, add annotations, and integrate multimedia elements to enhance learning materials and improve engagement.",
      icon: <MdVideoLibrary className="text-external" />,
    },
    {
      title: "Real-Time Project Collaboration",
      description:
        "Track project progress, share resources, and collaborate with teammates directly within the LMS to ensure on-time project delivery and alignment with organizational goals.",
      icon: <MdGroups className="text-external" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroSectionRef}  className={`bg-gradient-to-br from-primary to-secondary transition-all duration-1000 ${isHeroSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl md:flex mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              LMS: Empowering Project Learning with AI-Powered Insights
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Our Commercial Projects Learning Management System (LMS) is designed to streamline training, development,
              and knowledge sharing for teams involved in large-scale projects.
            </p>
          </div>
         
          <div className="md:w-1/2 h-72">
            <Image
              src={lmsdashboard}
              alt="LMS Solutions Illustration"
              className="rounded-lg shadow-2xl h-full"
              width={1080}
             height={1080}
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className={`py-16 bg-gray-50 transition-all duration-1000 ${isOverviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800">Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            This platform integrates advanced AI capabilities and intuitive tools to elevate the learning experience.
            Our AI-powered LMS is the ultimate solution for commercial projects, ensuring your teams are well-trained,
            aligned, and ready to tackle challenges efficiently.
          </p>
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
      <section ref={benefitsRef} className={`py-24 bg-white transition-all duration-1000 ${isBenefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Benefits of Our LMS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <MdRocketLaunch className="text-external text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-external">Accelerated Learning</h3>
              <p className="text-gray-600">
                Personalized AI-driven learning paths ensure faster skill acquisition and knowledge retention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <MdGroups className="text-external text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-external">Enhanced Collaboration</h3>
              <p className="text-gray-600">
                Real-time project collaboration tools foster teamwork and knowledge sharing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <MdSchool className="text-external text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-external">Continuous Improvement</h3>
              <p className="text-gray-600">
                AI-powered insights help identify skill gaps and optimize training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={catRef}  className={`py-24 bg-external transition-all duration-1000 ${isCatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Project Learning?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Empower your teams with our AI-driven LMS and take your commercial projects to the next level.
          </p>
          <Link href="/contact" className="bg-white text-external font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">
            Get Started Today
          </Link>
        </div>
      </section>

     
    </div>
  )
}
