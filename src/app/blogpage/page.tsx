// pages/blog.js
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function BlogPage() {
  const [cookieConsent, setCookieConsent] = useState(false);

  const heroSectionRef = useRef(null);
  const isHeroSectionVisible = useIntersectionObserver(heroSectionRef);

  return (
    <div className="min-h-screen flex flex-col ">

      {/* Main Featured Blog Post */}
      <section
        ref={heroSectionRef}
        className={`bg-gradient-to-br from-primary to-[#1BFFFF] transition-all duration-1000 ${isHeroSectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
          }`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className=" overflow-hidden  flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-32 md:h-auto">
              <Image
                src="/blog.png"
                alt="AI Data Fusion"
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <div className="uppercase text-sm font-medium text-gray-200 mb-2">Infokalash BLOG</div>
              <h1 className="text-2xl font-bold mb-4 text-white">AI Data Fusion – New from Infokalash</h1>
              <p className="text-white mb-6">
                AI Data Fusion connects enterprise data with Large Language Models – on demand and in real time – to ground GenAI apps and deliver responses users trust.
              </p>
              <button className="bg-external text-white rounded-full px-6 py-2 text-sm font-medium">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="Blog Post 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 3, 2025</div>
                <h2 className="text-xl font-bold mb-3">5 Key Challenges in Modern Data Management </h2>
                <p className="text-gray-600 mb-4">
                  In today’s digital landscape, organizations generate and manage vast amounts of data daily. Effective data management is critical for businesses to drive insights, enhance decision-making, and ensure compliance. However, modern data management comes with its own set of challenges.
                </p>
                <Link href="/blogpage/mdmblog" className="text-blue-500 font-medium">
                  READ
                </Link>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="Blog Post 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 21, 2025</div>
                <h2 className="text-xl font-bold mb-3">Trends Shaping Data Analytics in 2025 </h2>
                <p className="text-gray-600 mb-4">
                  The world of data analytics is evolving rapidly, driven by technological advancements, increasing data volumes, and the demand for real-time insights.
                </p>
                <Link href="blogpage/analytics" className="text-blue-500 font-medium">
                  READ
                </Link>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="Blog Post 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 14, 2025</div>
                <h2 className="text-xl font-bold mb-3">AI Virtual Assistants Streamline Tasks and Increase Efficiency</h2>
                <p className="text-gray-600 mb-4">
                  AI virtual assistants are software programs that can do things for you and your team. Companies use them to enhance customer service and boost productivity.
                </p>
                <Link href="/blog/virtual-assistants" className="text-blue-500 font-medium">
                  READ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics/Categories Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Explore more content</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/tag/rag" className="px-4 py-2 bg-white hover:bg-blue-400 hover:text-white text-blue-500 border-2 border-gray-300 rounded-full text-sm font-medium">
              RAG
            </Link>
            <Link href="/tag/data-modeling" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white  border-2 border-gray-300 rounded-full text-sm font-medium">
              Data Modeling
            </Link>
            <Link href="/tag/test-data-management" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Test Data Management
            </Link>
            <Link href="/tag/synthetic-data" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Synthetic Data Generation
            </Link>
            <Link href="/tag/data-products" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Data Products
            </Link>
            <Link href="/tag/data-anonymization" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Data Anonymization
            </Link>
            <Link href="/tag/etlplus" className="px-4 py-2 bg-white text-blue-500 hover:bg-blue-400 hover:text-white border-2 border-gray-300 rounded-full text-sm font-medium">
              ETLPlus
            </Link>
            <Link href="/tag/data-fabric" className="px-4 py-2 bg-white text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Data Fabric
            </Link>
            <Link href="/tag/data-mesh" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Data Mesh
            </Link>
            <Link href="/tag/rag" className="px-4 py-2 bg-white hover:bg-blue-400 hover:text-white text-blue-500 border-2 border-gray-300 rounded-full text-sm font-medium">
              RAG
            </Link>
            <Link href="/tag/data-modeling" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white  border-2 border-gray-300 rounded-full text-sm font-medium">
              Data Modeling
            </Link>
            <Link href="/tag/test-data-management" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Test Data Management
            </Link>
            <Link href="/tag/synthetic-data" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Synthetic Data Generation
            </Link>
            <Link href="/tag/data-products" className="px-4 py-2 bg-white  text-blue-500 hover:bg-blue-400 hover:text-white rounded-full border-2 border-gray-300 text-sm font-medium">
              Data Products
            </Link>

          </div>
        </div>
      </section>

      {/* Secondary Featured Articles */}
      <section className="py-12">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="AI Customer Service"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">AI Customer Service: Serving your Customers Better with Fresh Ground Data</h2>
                <p className="text-gray-600 mb-4">
                  Discover how injecting fresh, real-time enterprise data into AI systems improves your customer service by enabling more accurate and personalized interactions.
                </p>
                <Link href="/blog/ai-customer-service" className="text-blue-500 font-medium">
                  READ
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="Snowflake Data Masking"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">Snowflake Data Masking: Overcoming Challenges with YourCompany</h2>
                <p className="text-gray-600 mb-4">
                  Learn how YourCompany protects sensitive data by controlling access and masking using SnowMask. Learn how YourCompany data masking does the job.
                </p>
                <Link href="/tag/data-masking" className="text-blue-500 font-medium">
                  Data Masking
                </Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="LLM Single Action Agent"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">LLM Single Action Agent Solution: Target Task Completion</h2>
                <p className="text-gray-600 mb-4">
                  An AI system designed to respond to a specific query more effectively by leveraging the power of your large language model.
                </p>
                <Link href="/tag/rag" className="text-blue-500 font-medium">
                  RAG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="LLM Graph Database"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">LLM Graph Database: For Better Data Queries, Insights, and Understanding</h2>
                <p className="text-gray-600 mb-4">
                  LLM graph database merges LLMs with graph DBs to enable more natural data queries, enriched data insights, and deeper understanding of data relationships.
                </p>
                <Link href="/blog/llm-graph-database" className="text-blue-500 font-medium">
                  READ
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="SQL Agent LLMs"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">SQL Agent LLMs: Empowering Business Users to Query Data in Plain English</h2>
                <p className="text-gray-600 mb-4">
                  An SQL agent LLM converts text queries into SQL commands to let non-technical and mobile users access and augment data easily.
                </p>
                <Link href="/blog/sql-agent-llms" className="text-blue-500 font-medium">
                  READ
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Data-Analytics.png"
                  alt="Synthetic Data Generation Tools"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">Best Synthetic Data Generation Tools for 2025</h2>
                <p className="text-gray-600 mb-4">
                  Synthetic data generation tools create secure fake data that mirrors real data. The top 2025 synthetic data tools include MOSTLY AI, Syntho, YData, and Hazy.
                </p>
                <Link href="/tag/synthetic-data-generation" className="text-blue-500 font-medium">
                  Synthetic Data Generation
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-external text-white rounded-full px-8 py-3 text-sm font-medium">
              Explore More Posts
            </button>
          </div>
        </div>
      </section>


      {/* Cookie consent popup */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            By clicking "Accept", you agree to storing cookies on your device so that we may enhance your experience on our website.
            <Link href="/cookies" className="text-blue-500 hover:underline ml-1">
              Cookie Policy
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCookieConsent(true)}
              className="bg-external text-white px-4 py-2 rounded text-sm font-medium"
            >
              Accept
            </button>
            <button
              onClick={() => setCookieConsent(true)}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-sm font-medium"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
