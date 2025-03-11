import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import galleryIK3 from "@/assets/galleryIK3.jpeg"
import galleryIK2 from "@/assets/galleryIK2.jpeg"
import payroll2 from "@/assets/payroll.webp"
import payroll3 from "@/assets/payroll3.jpeg"
import lms1 from "@/assets/lms1.png"
import lmsdashboard from "@/assets/lmsdashboard.webp"
import apibuilder2 from "@/assets/apibuilder2.png"
import apibuilder3 from "@/assets/apibuilder3.png"



export function Journey() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4 font-sans">
            We began our operations at Deshpande Startups in Hubli, 
            creating a foundation for innovation and growth in a thriving entrepreneurial ecosystem. 
            </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={galleryIK3}
              alt="startup template"
              width={1024}
              height={1024}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={galleryIK2}
              alt="startup template"
              width={720}
              height={720}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8 font-sans">
          Took a significant leap by launching our first flagship products – Payroll and LMS – 
          delivering practical, user-focused solutions to simplify enterprise processes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={payroll2}
              alt="hero template"
              width={1024}
              height={1024}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-[34vh] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            <Image
              src={payroll3}
              alt="feature template"
              width={1024}
              height={1024}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-[34vh] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
             <Image
              src={lms1}
              alt="feature template"
              width={1024}
              height={1024}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-[34vh] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
           <Image
            src={lmsdashboard}
            alt="feature template"
            width={1024}
            height={1024}
            className="rounded-lg object-contain h-20 md:h-44 lg:h-[34vh] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4 font-sans">
          Continued our journey of innovation with the introduction of Low-Code Applications, 
          empowering businesses to break down development barriers and accelerate their digital transformation. 
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={apibuilder2}
              alt="hero template"
              width={1024}
              height={1024}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-[34vh] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            <Image
              src={apibuilder3}
              alt="feature template"
              width={1024}
              height={1024}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-[34vh] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}