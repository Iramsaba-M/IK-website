
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
<>

<Head>
        {/* Meta Title */}
        <title>InfoKalash | Modern Data Engineering & Low-Code Solutions for Enterprises</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="InfoKalash specializes in scalable data architectures, intelligent automation, and low-code platforms, helping enterprises navigate complex data ecosystems and drive digital transformation."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="InfoKalash | Modern Data Engineering & Low-Code Solutions" />
        <meta property="og:description" content="Transform your enterprise with scalable data solutions and automation." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.infokalash.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

    <main >

      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <SuccessStories />

    </main>

    </>
  );
}
