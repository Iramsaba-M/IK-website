'use client';

import React, { useState } from 'react';
import { GrUserExpert } from "react-icons/gr";
import { BiSolidCustomize } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    contactMethod: '',
    timezone: '',
    preferredTime: '',
  });

  const services = [
    'Master Data Management',
    'AI/ML',
    'Data Engineering',
    'Front End Development',
    'Other'
  ];


 
  const contactMethods = ['Phone', 'Email'];
  const timezones = ['IST', 'EST', 'CST', 'PST', 'Other'];
  const preferredTimes = ['Morning', 'Afternoon', 'Evening']

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyK4NZBAlieAhQ1WSdSSPVmiNkDE6vW4P7vNUVVlWfa-9LfA59Q-68CNEcxYdoBNgg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(), // Convert JSON to URL-encoded format
      });

      if (response.ok) {
        console.log('Form data submitted successfully:', formData);
        alert('Thank you for your message. We will contact you soon!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectDetails: '',
            contactMethod: '',
            timezone: '',
            preferredTime: '',
          });
      } else {
        console.error('Error submitting form data:', response.status);
        alert('An error occurred while submitting your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('An error occurred while submitting your message. Please try again later.');
    }
  };


 

  return (
    <>
     
    <div className=''>
    {/* Banner Section */}
    <div className=" bg-external text-white py-36 px-4">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center mt-4 max-w-3xl mx-auto">
        Ready to transform your ideas into reality? We're here to collaborate with you and provide tailored solutions that match your business needs.
      </p>
    </div>

   


    {/* Contact Form Section */}
    <div className="bg-gray-100 px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-3 text-center">Let's build something exceptional together!</h2>
      <p className="text-gray-700 font-sans mb-8 max-w-4xl mx-auto text-center">
        Have a project in mind? Whether you’re looking to redefine your data strategy, explore no-code solutions, or adopt AI-driven innovations, we’re here to help.
        Reach out to us directly or fill out the form below to let us know how we can assist you. Together, we’ll design, engineer, and deliver solutions that drive value and success for your business.
      </p>

      <div className="max-w-5xl mx-auto">
        {/* Features Grid */}
        <h2 className="font-semibold text-xl text-gray-800 mb-4">Why Connect with Us?</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg drop-shadow-md">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2"><GrUserExpert className="text-external" /></span>
              <h3 className="font-semibold text-gray-800">Expert Guidance</h3>
            </div>
            <p className="text-sm text-gray-700 font-sans">Our team is ready to help solve your challenges with precision and innovation.</p>
          </div>

          <div className="bg-white p-4 rounded-lg drop-shadow-md">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2"><BiSolidCustomize className="text-external" /></span>
              <h3 className="font-semibold ttext-gray-800">Customized Solutions</h3>
            </div>
            <p className="text-sm text-gray-700 font-sans">We’ll collaborate with you to design a strategy tailored to your business goals.</p>
          </div>

          <div className="bg-white p-4 rounded-lg drop-shadow-md">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2"><AiOutlineMessage className="text-external" /></span>
              <h3 className="font-semibold text-gray-800">Quick Response</h3>
            </div>
            <p className="text-sm text-gray-700 font-sans">Our team ensures prompt and efficient responses to your queries.</p>
          </div>
        </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 drop-shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-8">Fill out the form below to tell us more about your project:</h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              {/* Company Name */}
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              {/* Project Details */}
              <div className="md:col-span-2">
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md h-24 focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              {/* 3 Select Fields in a Row */}
              <div className="grid md:grid-cols-3 gap-4 md:col-span-2">
                {/* Preferred Contact Method */}
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                >
                  <option value="">Preferred Contact Method</option>
                  {contactMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>

                {/* Timezone */}
                <select
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                >
                  <option value="">Your Timezone</option>
                  {timezones.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>

                {/* Preferred Time */}
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                >
                  <option value="">Your preferred time</option>
                  {preferredTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  className="py-2 px-4 bg-external text-white rounded-md hover:bg-[#4b50e6] transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>

          </div>

          {/* Contact Details */}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h1>
              <p className="text-gray-700 font-sans mb-8">
                Do you have specific requirements or need a custom solution? Let us know the details, and we'll provide a tailored proposal.
              </p>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h3>
              <div className="space-y-2 text-gray-700 font-sans">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaPhone className=" text-external" />
                    <a href="tel:+918050426308" className="font-medium">+91- 80504 26308</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdMarkEmailRead className=" text-external" />
                    <a href="mailto:communications@infokalash.com" className="font-medium hover:underline">communications@infokalash.com</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoGlobeOutline className=" text-external" />
                    <a href="https://www.infokalash.com" className="text-external hover:underline">www.infokalash.com</a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaLocationDot className="pt-1 text-external" />
                    <span>Deshpande Startups sandbox, Gokul Rd, Hubballi, Karnataka 580030</span>
                  </div>
                </div> 

              </div>
            </div>
          </div>
          <p className="text-center font-semibold text-external italic mt-10">
            Let's start a conversation today and explore how InfoKalash can drive enterprise excellence for you.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}