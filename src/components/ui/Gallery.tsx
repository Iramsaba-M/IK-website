import React from 'react';
import Image from 'next/image';  // Import the Image component from Next.js

import galleryIK1 from '@/assets/galleryIK10.jpeg';
import galleryIK3 from '@/assets/galleryIK4.jpeg';
import galleryIK4 from '@/assets/galleryIK5.jpeg';
import galleryIK5 from '@/assets/galleryIK6.jpeg';
import galleryIK7 from '@/assets/galleryIK12.jpg';
import galleryIK8 from '@/assets/galleryIK8.jpeg';
import galleryIK9 from '@/assets/galleryIK9.jpeg';


function Gallery() {
  return (
    <section>
      <div className="container lg:flex items-center  mx-auto px-4 py-16 max-w-7xl font-sans ">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-2">Our Gallery</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Moments That <br /> Define Us
          </h1>
          <p className="text-gray-600 max-w-2xl text-base font-sans">
          At InfoKalash, we believe in the power of collaboration and shared experiences. 
          Our gallery showcases team get-togethers, meetings, and events that reflect our journey, culture, and commitment to innovation. 
          These moments highlight the people behind our success and the vibrant spirit that drives us forward.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className=" lg:ml-[15vh] ">
          {/* First Column */}
          <div className='flex '>
            <div className='h-[19vh] w-[25vh] mt-[15vh] lg:ml-[8vh]'>
            <Image
              src={galleryIK1}
              alt="Gallery 1"
              width={720}  // Add width
              height={720} // Add height
              className="w-full h-full object-cover mt-"
            />
            </div>
            <div className='ml-3.5 h-[24vh] mt-[10vh]'>
            <Image
              src={galleryIK3}
              alt="Gallery 2"
              width={720}  // Add width
              height={720} // Add height
              className="w-full h-full object-cover"
            />
            </div>
            <div className='ml-3.5 h-[12vh] mt-[21vh]'>
            <Image
              src={galleryIK8}
              alt="Gallery 3"
              width={720}  // Add width
              height={720} // Add height
              className="w-full h-full object-cover"
            />
            </div>
          </div>

          {/* Second Column */}
          <div className='flex mt-3.5'>
            <div className='h-[23vh] w-[19vh]'>
            <Image
              src={galleryIK9}
              alt="Gallery 4"
              width={720}  // Add width
              height={720} // Add height
              className="w-full h-full object-cover"
            />
            </div>
            <div className='ml-3.5 h-[28vh] w-[42vh]'>
            <Image
              src={galleryIK5}
              alt="Gallery 5"
              width={720}  // Add width
              height={720} // Add height
              className="w-full h-full object-cover"
            />
            </div>
           <div className='ml-3.5'>
           <div className='h-[14vh] w-[18vh]'>
            <Image
              src={galleryIK7}
              alt="Gallery 6"
              width={720}  // Add width
              height={720} // Add height
              className="w-full h-full object-cover"
            />
            </div>
            <div className='h-[11vh] w-[11vh] mt-[3vh]'>
            <Image
              src={galleryIK4}
              alt="Gallery 7"
              width={720}  // Add width
              height={720} // Add height
              className="w-full h-full object-cover"
            />
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;