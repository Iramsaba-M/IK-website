"use client";
import React, { Suspense,   useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FiThumbsUp } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChess } from "react-icons/fa";
import { VscVmConnect } from "react-icons/vsc";
import { BsClipboardData } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { GrConnectivity } from "react-icons/gr";
import { BsDatabaseCheck } from "react-icons/bs";
import { MdWarehouse } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { BsSpeedometer2} from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";
import { GrTree } from "react-icons/gr";
import { VscTypeHierarchy } from "react-icons/vsc";
import { BsUiChecksGrid } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { MdAutoMode } from "react-icons/md";
import { RiChatVoiceAiLine } from "react-icons/ri";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";


interface Feature {
  icon: JSX.Element;
  title: string;
  text: string;
}

interface Slide {
  heading: string;
  paragraph: string;
  headerIcon: JSX.Element;
  features: Feature[];
}


const slidesData = [
  {
    heading: "Metadata Strategy",
    paragraph:
      "Elevate your data governance with comprehensive metadata management solutions. Our approach integrates robust compliance frameworks with advanced lineage tracking and quality management systems. We ensure your data remains not just compliant and traceable, but also maintains the highest quality standards across your entire data ecosystem.",
    headerIcon: <BsClipboardData size={60} />,
    features: [
      {
        icon: <RiGovernmentLine size={30} />,
        title: "Data Governance and Compliance",
        text: "Ensuring regulatory alignment while maintaining operational flexibility",
      },
      {
        icon: <GrTree size={30} />,
        title: "Data Lineage and Tracking",
        text: "Maintaining complete visibility of data journey across your ecosystem",
      },
      {
        icon: <VscTypeHierarchy size={30} />,
        title: "Metadata Management",
        text: "Orchestrating metadata for enhanced data discovery and utilization",
      },
      {
        icon: <BsUiChecksGrid size={30} />,
        title: "Data Quality Management and Strategy",
        text: "Implementing comprehensive quality frameworks for trusted data",
      },
    ],
  },
  {
    heading: "GenAI and ML Solutions",
    paragraph:"Harness the power of next-generation intelligence with our GenAI and ML solutions. From engineering governance enhanced by artificial intelligence to sophisticated machine learning designs and agentic workflows, we help you navigate the future of data intelligence. Our expertise in prompting engineering ensures you maximize the potential of generative AI technologies.",
    headerIcon: <HiOutlineSparkles size={60} />,
    features: [
      {
        icon: <RiRobot2Line size={30} />,
        title: "Engineering Govern by GenAI",
        text: "Leveraging generative AI to enhance engineering governance",
      },     
      {
        icon: <LuBrainCircuit size={30} />,
        title: "Machine Learning Design",
        text: "Architecting ML solutions that deliver actionable insights",
      },
       {
        icon: <MdAutoMode size={30} />,
        title: "Workflow and Agentic Solutions",
        text: "Creating autonomous workflows that adapt and evolve",
      },
      {
        icon: <RiChatVoiceAiLine size={30} />,
        title: "Prompting Engineering Strategies",
        text: "Optimizing AI interactions through advanced prompting techniques",
      },
    ],
  },
  {
    heading: "Data Strategy",
    paragraph:
      "Architect your data future with our comprehensive strategy solutions. From designing robust data architectures to implementing engineering excellence and DataOps automation, we create dynamic, adaptable frameworks that evolve with your enterprise needs. Our approach ensures your data infrastructure remains agile, scalable, and ready for tomorrow's challenges.",
    headerIcon: <FaChess size={60} />,
    features: [
      {
        icon: <AiTwotoneAppstore size={30} />,
        title: "Data Architecture Design",
        text: "Crafting resilient data frameworks that scale with your enterprise vision",
      },
      {
        icon: <SlBadge size={30} />,
        title: "Engineering Excellence",
        text: "Implementing best-in-class engineering practices for robust data systems",
      },
      {
        icon: <FiThumbsUp size={30} />,
        title: "DataOps and Automation",
        text: "Streamlining operations through intelligent automation and continuous integration",
      },
      {
        icon: <GrConnectivity size={30} />,
        title: "Dynamic Pipelines",
        text: "Building adaptive data pipelines that evolve with your business needs",
      },
    ],
  },
  {
    heading: "Data Platform",
    paragraph:
      "Transform your data infrastructure with our modern platform solutions. We specialize in implementing cutting-edge data warehouse and lakehouse architectures, seamlessly migrating your systems to the cloud while optimizing performance at every level. Our platforms combine flexibility with enterprise-grade reliability, creating a robust foundation for your data operations.",
    headerIcon: <VscVmConnect size={60} />,
    features: [
      {
        icon: <BsDatabaseCheck size={30} />,
        title: "Modern Data Warehouse",
        text: "Implementing next-generation warehousing solutions for enhanced data accessibility",
      },
      {
        icon: <MdWarehouse size={30} />,
        title: "Data Lakehouse Solutions",
        text: "Unifying data lakes and warehouses for optimal data management",
      },
      {
        icon: <FaCloudUploadAlt size={30} />,
        title: "Cloud Migration",
        text: "Seamlessly transitioning your data ecosystem to cloud infrastructure",
      },
      {
        icon: <BsSpeedometer2 size={30} />,
        title: "Performance Optimization",
        text: "Maximizing system efficiency through advanced optimization techniques",
      },
    ],
  },
 
 
];

interface SlideContentProps {
  heading: string;
  paragraph: string;
  features: Feature[];
  headerIcon: JSX.Element;
  isActive: boolean;
  onSlideDone: () => void;
}

const SlideContent: React.FC<SlideContentProps> = ({ heading, paragraph, features, headerIcon, isActive, onSlideDone }) => {
  const [progressIndex, setProgressIndex] = useState(-1);
  const [cardsDone, setCardsDone] = useState([false, false, false]);


  useEffect(() => {
    if (isActive) {
      setProgressIndex(0);
      setCardsDone([false, false, false]);
    } else {
      setProgressIndex(-1);
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive || progressIndex === -1 || progressIndex >= features.length) return;

    const timer = setTimeout(() => {
      const updatedCardsDone = [...cardsDone];
      updatedCardsDone[progressIndex] = true;
      setCardsDone(updatedCardsDone);

      if (progressIndex < features.length - 1) {
        setProgressIndex(progressIndex + 1);
      } else {
        onSlideDone();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isActive, progressIndex, features.length, cardsDone, onSlideDone]);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-20 max-w-6xl font-sans mb-8 mx-auto items-start h-full px-2 md:px-0 md:h-[60vh] mt-7">
      {/* Header Section with Icon */}
      <div className="flex flex-col  md:gap-4 gap-8 justify-between ">
        
          {/* Dynamically render the headerIcon */}
          <Suspense fallback={<div>Loading...</div>}>
          <div className="text-external">{headerIcon}</div>
        </Suspense>
          <h2 className="text-2xl md:text-3xl font-bold text-external ">{heading}</h2>
        
        <p className=" text-sm md:text-base text-gray-700   md:leading-6">{paragraph}</p>
        <div className="flex justify-start space-x-4 ">        
        <a
          href="/"
          className="inline-block px-6 py-3  md:mb-0 border-none cursor-pointer text-center font-semibold transition-colors duration-300 rounded bg-external text-white hover:bg-[#357ad4]"
        >
          Learn More
        </a>
      </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col gap-4 mt-8 md:mt-0">
        {features.map((feature, idx) => {
          
          const barState =
            progressIndex > idx ? "h-full" : progressIndex === idx ? "h-full animate-progress-bar" : "h-0";
          const isActiveCard = progressIndex === idx;

          return (
            <div
              key={idx}
              
              className={`relative flex items-center  shadow-md gap-4 p-4  bg-white overflow-hidden transition-all duration-500 ${
                isActiveCard ? "h-[20vh]" : "h-24"
              }`}
            >
              <div
                className={`absolute left-0 top-0 w-1 bg-external transition-all duration-520 ${barState}`}
              ></div>
               <Suspense fallback={<div>Loading...</div>}>
              <div className={`flex-shrink-0 ${isActiveCard ? "text-black" : "text-zinc-600"}`}>
                {feature.icon}
              </div>
              </Suspense>
              <div>
                <h3 className={`text-xs font-bold  ${
                isActiveCard ? "text-black" : "text-zinc-700"
              }`}>{feature.title}</h3>
                {isActiveCard && <p className={` text-zinc-600 ${
                isActiveCard ? "text-xs  pt-2 " : ""
              }`}>{feature.text}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const FeaturesSection: React.FC = () => {

  const featureSectionRef = useRef(null)
  const isFeatureSectionVisible = useIntersectionObserver(featureSectionRef)


  const sliderRef = useRef<Slider>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    afterChange: (index: number) => setCurrentSlideIndex(index),
  };

  const handleSlideDone = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <section ref={featureSectionRef} className={` min-h-screen  py-8 px-4 md:py-6 md:px-12 box-border font-sans transition-all duration-1000 ${isFeatureSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="text-center  mb-6">
        <h1 className="text-xl px-2 md:text-4xl font-semibold text-zinc-700">Modern Data Solutions for Enterprise</h1>
        <p className="text-gray-600 mt-3 md:leading-8 md:w-3/5 mx-auto ">
          Orchestrate your enterprise data ecosystem with our comprehensive suite of solutions, 
          from foundational architecture to intelligent automation,  delivering excellence at every layer of your data journey.
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, idx) => (
          <div key={idx}>
            <SlideContent
              heading={slide.heading}
              paragraph={slide.paragraph}
              features={slide.features}
              headerIcon={slide.headerIcon}  
              isActive={currentSlideIndex === idx}
              onSlideDone={handleSlideDone}
            />
          </div>
        ))}
      </Slider>
      </Suspense>
    </section>
  );
}

export default FeaturesSection;