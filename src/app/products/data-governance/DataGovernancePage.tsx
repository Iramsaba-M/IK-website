"use client";

import { useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Head from "next/head";
import Image from "next/image";
import {
  MdSecurity,
  MdManageAccounts,
  MdCleaningServices,
  MdTimeline,
  MdAssessment,
  MdShield,
  MdTrendingUp,
  MdSpeed,
  MdGroups,
} from "react-icons/md";

import edadashboard from "@/assets/edadashboard.webp";

export default function DataGovernancePage() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const heroSectionRef = useRef(null);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const technologyRef = useRef(null);

  const isHeroSectionVisible = useIntersectionObserver(heroSectionRef);
  const isOverviewVisible = useIntersectionObserver(overviewRef);
  const isFeaturesVisible = useIntersectionObserver(featuresRef);
  const isBenefitsVisible = useIntersectionObserver(benefitsRef);
  const isTechnologyVisible = useIntersectionObserver(technologyRef);

  const keyFeatures = [
    {
      title: "Policy Management",
      description:
        "Define, enforce, and monitor policies for data access, retention, and security in line with regulatory standards like GDPR, CCPA, and ISO 27001.",
      icon: <MdSecurity className="text-external" />,
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description:
        "Ensure secure access to sensitive data with granular controls, encryption, and multi-factor authentication.",
      icon: <MdManageAccounts className="text-external" />,
    },
    {
      title: "Data Quality Management",
      description:
        "Automate profiling, validation, and cleansing with built-in AI algorithms to maintain high data quality standards.",
      icon: <MdCleaningServices className="text-external" />,
    },
    {
      title: "Data Lineage Tracking",
      description:
        "Visualize data flow across the organization, providing transparency for audits and root-cause analysis.",
      icon: <MdTimeline className="text-external" />,
    },
    {
      title: "Compliance Reporting",
      description:
        "Generate real-time compliance dashboards and reports to satisfy auditors and internal governance teams.",
      icon: <MdAssessment className="text-external" />,
    },
  ];

  const businessBenefits = [
    {
      title: "Mitigate Risks",
      description:
        "Mitigate risks associated with data breaches and non-compliance.",
      icon: <MdShield className="text-external text-4xl" />,
    },
    {
      title: "Enhance Decision-Making",
      description: "Enhance decision-making with high-quality, trusted data.",
      icon: <MdTrendingUp className="text-external text-4xl" />,
    },
    {
      title: "Improve Efficiency",
      description:
        "Improve operational efficiency by streamlining data governance processes.",
      icon: <MdSpeed className="text-external text-4xl" />,
    },
    {
      title: "Foster Accountability",
      description:
        "Foster a culture of accountability and trust across departments.",
      icon: <MdGroups className="text-external text-4xl" />,
    },
  ];

  return (
    <>
      <Head>
        {/* Meta Title */}
        <title>
          Data Governance Solutions | InfoKalash - Ensure Data Quality &
          Compliance
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="InfoKalash provides advanced Data Governance solutions to ensure data quality, security, compliance, and efficient data management for enterprises. Empower your business with trusted data."
        />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          ref={heroSectionRef}
          className={`bg-gradient-to-br  from-primary to-[#1BFFFF] transition-all duration-1000 ${
            isHeroSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container max-w-7xl md:flex mx-auto px-4 py-20 md:py-32">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Data Governance
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Empower your organization with a comprehensive Data Governance
                platform that ensures control, compliance, and quality of your
                data assets.
              </p>
            </div>
            <div className="md:w-4/5 h-80">
              <Image
                src={edadashboard}
                alt="Data Governance Illustration"
                className="rounded-lg shadow-2xl h-full"
                width={1080}
                height={1080}
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section
          ref={overviewRef}
          className={`py-16 bg-gray-50 transition-all duration-1000 ${
            isOverviewVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Data Governance ensures organizations maintain control over their
              data assets while complying with stringent regulations and
              industry standards. Our comprehensive Data Governance platform
              provides a policy-driven framework to manage data quality, access,
              security, and compliance at scale. It facilitates collaboration
              among data stewards, analysts, and executives, creating a culture
              of accountability and trust around enterprise data.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section
          ref={featuresRef}
          id="features"
          className={`py-24 bg-white transition-all duration-1000 ${
            isFeaturesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border-t-4 border-external"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits Section */}
        <section
          ref={benefitsRef}
          className={`py-16 bg-gray-50 transition-all duration-1000 ${
            isBenefitsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Business Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-semibold my-3 text-external">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Highlights Section */}
        <section
          ref={technologyRef}
          className={`py-24 bg-white transition-all duration-1000 ${
            isTechnologyVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Technology Highlights
            </h2>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6">
                Built on a metadata-driven architecture, our Data Governance
                solution integrates seamlessly with data catalogs, MDM systems,
                and enterprise applications, providing end-to-end data
                transparency and control.
              </p>
              <div className="flex justify-center items-center">
                <MdSecurity className="text-6xl text-external mr-4" />
                <span className="text-xl font-semibold text-gray-800">
                  End-to-End Data Transparency and Control
                </span>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
}
