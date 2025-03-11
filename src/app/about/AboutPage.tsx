'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaChess } from "react-icons/fa";
import { VscVmConnect } from "react-icons/vsc";
import { BsClipboardData } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import {OrbitingCirclesDemo} from '../../components/ui/OrbitingCirclesDemo';
import { FaLightbulb, FaUser, FaRocket } from 'react-icons/fa'; 
import Image from 'next/image';
import { Journey } from '../../app/about/Journey';
import rameshSir from '@/assets/teamRamesh2.png'
import sapnaMaam from '@/assets/teamSapna2.png'
import sanjay from '@/assets/teamSanjay.png'
import shweta4 from '@/assets/teamShweta2.png';
import aishwarya from '@/assets/teamAishwary4.jpeg'
import vishwas from '@/assets/teamVishwas.png';
import gopal7 from '@/assets/teamGopal2.png';
import manjunath from '@/assets/teamManjunath.png';
import galleryIK10 from '@/assets/galleryIK1.jpeg';
import { Database, Settings } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import Gallery from '@/components/ui/Gallery';


const AboutPage: React.FC = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const solutions = [
    {
      title: 'Data Strategy',
 
      point1: " Helping businesses align their data with their strategic goals.",
      icon: <FaChess />
 
    },
    {
      title: 'Data Platform',
 
      point1: " Building scalable, future-ready data infrastructures.",
      icon: <VscVmConnect />
 
    },
    {
      title: 'Metadata Strategy',
 
      point1: " Enhancing data governance and clarity with metadata solutions.",
      icon: <BsClipboardData />
    },
    {
      title: 'GenAI and ML Solutions',
 
      point1: "Leveraging Generative AI and Machine Learning to deliver transformative insights and solutions.",
      icon: <HiOutlineSparkles />
 
    },
  ];
  const reasons = [
    {
      title: 'Precision and Innovation',
      description: 'Creating products and services that align perfectly with your goals.',
      icon: <FaLightbulb className="w-10 h-10 text-[#0c28a5]" />,
    },
    {
      title: 'Customer-Centric Focus',
      description: 'Building solutions tailored to your unique challenges.',
      icon: <FaUser className="w-10 h-10 text-[#0c28a5]" />,
    },
    {
      title: 'Future-Ready Solutions',
      description: 'Empowering enterprises with scalable, cutting-edge technologies.',
      icon: <FaRocket className="w-10 h-10 text-[#0c28a5]" />,
    },
  ];
  const teamMembers = [
    {
      name: 'Ramesh Kulkarni',
      role: 'CEO, Founder, Director',
      description: 'Visionary leader driving strategic growth and innovation to achieve organizational excellence.',
      imageUrl: rameshSir,
    },
    {
      name: 'Sapna Sardesai Kulkarni',
      role: 'Co-Founder, HR and Finance Head',
      description: 'Operational strategist ensuring seamless execution and optimal performance across all functions.',
      imageUrl: sapnaMaam,
    },
    {
      name: 'Gopal Kommuri',
      role: ' CDO',
      description: 'Custodian of data strategy, governance, and analytics for unlocking business potential.',
      imageUrl: gopal7,
    },
    {
      name: 'Sanjay Kulkarni',
      role: 'Admin Lead',
      description: 'Ensuring secure, reliable, and efficient IT infrastructure to empower business operations.',
      imageUrl: sanjay,
    },
    {
      name: 'Vishwas Jagan Mohan',
      role: 'Data Engineering Lead',
      description: 'Architect of data pipelines and frameworks, enabling scalable and efficient data-driven decisions.',
      imageUrl: vishwas,
    },
    {
      name: 'Shwetha Shivan Goud',
      role: 'MDM/ETL Lead',
      description: 'Expert in mastering data solutions, delivering unified, accurate, and actionable insights.',
      imageUrl: shweta4,
    },
    {
      name: 'Aishwarya Salimath',
      role: 'Low Code  Lead',
      description: 'Pioneering technology solutions with robust and innovative coding practices.',
      imageUrl: aishwarya,
    },
    {
      name: 'Manjunath Kundargi',
      role: 'Devops Lead',
      description: 'Orchestrating seamless collaboration between development and operations to deliver efficient, scalable, and reliable solutions.',
      imageUrl: manjunath,
    },
  ];
  const backgroundPatterns = [
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E"
  ];
  return (

    <>

<Head>
  {/* Meta Title */}
  <title>About Us | InfoKalash - Driving Innovation & Digital Transformation</title>

  {/* Meta Description */}
  <meta name="description" content="Discover InfoKalash’s journey since 2021. We blend creativity with precision, delivering data engineering, low-code, and AI-driven solutions to empower enterprises and drive digital transformation." />

  {/* Open Graph Meta Tags (for social media sharing) */}
  <meta property="og:title" content="About Us | InfoKalash - Driving Innovation & Digital Transformation" />
  <meta property="og:description" content="Discover InfoKalash’s journey since 2021. We blend creativity with precision, delivering data engineering, low-code, and AI-driven solutions to empower enterprises and drive digital transformation." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.infokalash.com/about" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="About Us | InfoKalash - Driving Innovation & Digital Transformation" />
  <meta name="twitter:description" content="Discover InfoKalash’s journey since 2021. We blend creativity with precision, delivering data engineering, low-code, and AI-driven solutions to empower enterprises and drive digital transformation." />
  <meta name="twitter:image" content="/assets/infokalash-banner.png" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Canonical URL (SEO best practice) */}
  <link rel="canonical" href="https://www.infokalash.com/about" />
</Head>
    <div className='h-full'>
   <section 
  className="flex items-center text-center relative bg-cover bg-center" 
  style={{
    backgroundImage: `url(${galleryIK10.src})`, 
    height: '70vh'
  }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 "></div>

  <div className="h-full w-full flex justify-center items-center px-4 sm:px-8 text-white relative z-10 font-sans">
    <div className="flex flex-col md:flex-row justify-between items-center mt-20 md:mt-36 max-w-6xl w-full">

      {/* Text Content with Background */}
      <div className="md:w-1/2 text-left pt-10 md:pt-14 bg-black/40 p-6 rounded-lg  md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4 leading-normal">
          About Us
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
          At <span className="font-bold text-[#facc15]">InfoKalash</span>
          , we operate at the dynamic intersection of creativity and precision, transforming innovative ideas into impactful, tangible products.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="">
  <div className="flex justify-center items-center bg-gray-100">
    <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[90%] h-auto font-sans py-8">
      {/* Text Section */}
      <div className="w-full lg:w-[76vh] md:w-[38%] px-4 md:px-8">
        <div className="text-2xl md:text-4xl font-semibold text-zinc-700 my-4 md:my-8 lg:mr-5">
          Our Mission
        </div>
        <div className="text-base md:text-base text-gray-600 mt-2 md:mt-3 leading-6 md:leading-8 mb-4 md:mb-8">
          <p className="w-full md:w-[93%] leading-relaxed text-md font-sans">
            Our mission is to enable organizations to harness the power of cutting-edge technology and unlock their full potential.
            By delivering tailored solutions in data engineering, low-code platforms, and advanced AI-driven strategies,
            we strive to create a lasting impact on businesses, industries, and communities.
          </p>
        </div>
      </div>

      {/* Animation Section */}
      <div className="w-full md:w-[50%] px-4 md:px-8 mt-8 md:mt-0">
        {/* <AnimatedBeamDemo /> */}
        <OrbitingCirclesDemo />
      </div>
    </div>
  </div>
</section>
      
      <section className="py-16 bg-gray-50 text-center items-center">
  <div className='h-60 bg-[#0c28a5] font-sans'>
    <h2 className=" text-2xl md:text-4xl font-semibold mb-12 pt-10 text-white">What We Do</h2>
  </div> 

  <div className="max-w-screen-xl mx-auto px-4 lg:-mt-[14vh] -mt-[11vh] sm:-mt-[13vh] text-start">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center ml-0">
      
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex  justify-between">
          <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 font-sans">
            Modern Data Engineering Solutions for Enterprises
          </h3>
          <div className='-mt-2 font-sans'>
          <Database className="w-14 h-14 text-[#0c28a5]" />
          </div>
        </div>
        <p className="text-base font-sans md:text-base text-gray-600 mt-2 md:mt-3 leading-6 md:leading-8 mb-4 md:mb-8">
          We specialise in helping enterprises navigate the complexities of data ecosystems. From designing foundational architectures to implementing intelligent automation, our comprehensive solutions ensure excellence at every stage of your data journey.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex justify-between">
          <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb- font-sans">
            Agentic Low-Code Platform for Enterprise Excellence
          </h3>
          <div className='-mt-2'>
          <Settings className="w-14 h-14 text-[#0c28a5]" />
          </div>
        </div>
        <p className="text-base font-sans md:text-base text-gray-600 mt-2 md:mt-3 leading-6 md:leading-8 mb-4 md:mb-8">
          We accelerate digital transformation with our no-code platform, designed to eliminate traditional development barriers. Our platform enables businesses to scale their operations seamlessly while driving efficiency and innovation through intelligent automation.
        </p>
      </div>
      
    </div>
  </div>
</section>

<section className='bg-[#f1f0f0]'>
  <div className="container  mx-auto  py-8 font-sans bg-[#f1f0f0] ">
    <h2 className="text-4xl font-sans font-bold text-center mb-16 text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-[rgb(202,206,205)]">
      Specialized Services
    </h2>
    <div className="lg:flex gap-4 w-full p-10 justify-between ">
      {solutions.map((solution, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-in-out cursor-pointer lg:h-[40vh] sm:h-[30vh] h-[40vh] md:mt-10 mt-8 sm:mt-5 bg-cover overflow-hidden shadow-lg lg:w-[40vh] sm:w-[30vh] ${hoverIndex === index ? 'lg:w-[70vh] sm:w-[40vh] bg-blue-50 shadow-lg' : 'w-64 bg-gray-50'}`}
          style={{
            backgroundImage: `url("${backgroundPatterns[index % backgroundPatterns.length]}")`,
            backgroundColor: hoverIndex === index ? '#ffffff' : '#F9FAFB'
          }}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div className="p-6 h-full flex flex-col shadow-lg transition-all duration-700 ease-in-out relative">
            <div className="min-w-[160px]">
              {/* Icon styling for first three cards vs. fourth card */}
              <div
                className={`flex justify-center  items-center text-4xl text-white w-[10vh] h-[10vh] rounded-full mb-4 transition-all duration-500 ease-in-out 
                ${index < 3 ? 'bg-[#0c28a5]' : 'bg-[#0c28a5]'}`} // Blue for first 3, Green for 4th
              >
                {solution.icon}
              </div>
              <div className="p-0">
                <h3 className="text-lg font-sans pt-3 font-semibold text-zinc-900">
                  {solution.title}
                </h3>
                {/* Display point1 as a description */}
                <div className={`transition-all duration-500 ease-in-out ${hoverIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-md font-sans font-light text-gray-700">
                    {solution.point1}
                  </p>
                </div>
                {/* Arrow Icon positioned correctly */}
                <div
                  className={`absolute left-4 flex items-center text-2xl text-[#0c28a5]
                  ${index === 3 ? 'bottom-4' : 'bottom-4'}`}
                >
                  <FaArrowRightLong />
                </div>
              </div>              
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* TimelineSlider section */}
      <section className="mt-8 ">
        <div className='flex justify-center items-center mt-2'>

        <Journey />  
        </div>
      </section>

      <section>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 font-sans">
          Why Choose InfoKalash?
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 font-sans">
          At InfoKalash, we combine innovation, agility, and expertise to deliver solutions that drive value.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-80 transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-3 font-sans">{reason.title}</h3>
              </div>
              <p className="text-gray-600 font-sans">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </section>


      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          Meet Our Team
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                 <Image
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={member.imageUrl}
            alt={member.name}
            width={720} // Set the width of the image
            height={720} // Set the height of the image
          />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className='bg-gray-100'>
  <Gallery />
</section>

      <section className="py-20 bg-gradient-to-r from-external to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-xl font-extrabold leading-tight sm:text-xl font-sans">
            Whether you are looking to redefine your data strategy, embrace no-code solutions, or adopt AI-driven innovations, InfoKalash is your trusted partner in driving enterprise excellence.
          </h2>
          <p className="mt-6 text-xl font-medium text-indigo-100 font-sans">
            Let’s design, engineer, and deliver success together.
          </p>
        </div>
        <div className="mt-12 text-center text-base">
          <a
            href="/contact"
            className="inline-block font-sans px-8 py-3 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 transition duration-300 ease-in-out"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default AboutPage;