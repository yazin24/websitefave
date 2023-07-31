import React from "react";
import { FaRegCommentDots, FaRegEye } from "react-icons/fa";

const AboutUs = () => {
  return (
   
    
    <div className="">
      <div className="bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100 pt-24">
      <h2 className="text-center font-bold text-3xl text-gray-200">About Us</h2>
      <div className="flex flex-col md:flex-row md:mx-44">
        <div className="p-8 md:p-12">
          <h2 className="text-2xl text-violet-700 font-bold mb-2">Mission</h2>
          <p className="font-bold">Our mission at Fave is to provide top-quality cleaning products that promote a healthier, safer, and cleaner environment for homes and businesses worldwide. We are committed to delivering eco-friendly and effective solutions that make cleaning easier, while minimizing the impact on the planet. Through innovation, sustainability, and a customer-centric approach, we aim to be the trusted brand of choice for all cleaning needs, empowering individuals and businesses to create refreshing and hygienic spaces that inspire well-being and happiness</p>
        </div>
        <div className="p-2 md:p-12 flex justify-center">
        <FaRegCommentDots className="text-8xl text-gray-200 md:mt-8"/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:mx-44 ">
        <div className="p-8 md:p-12 ">
          <h2 className="text-2xl text-violet-700 font-bold mb-2">Vision</h2>
          <p className="font-bold">Driven by our passion for cleanliness and environmental stewardship, our vision at Fave is to become the most trusted and admired brand for cleaning products worldwide. We envision a future where our innovative and eco-friendly solutions are synonymous with cleanliness and hygiene, setting the benchmark for the industry. By fostering a culture of excellence, sustainability, and continuous improvement, we aim to inspire and empower individuals and businesses to embrace a cleaner and healthier lifestyle, making a positive impact on the well-being of people and the planet.</p>
        </div>
        <div className="p-8 md:p-12 flex justify-center">
        <FaRegEye className="text-8xl text-gray-200 md:mt-8"/>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="p-12 mt-8">
        <h2 className="text-violet-700 font-bold">Fave Ecommerce</h2>
        <h2>8 Calle Industria Bagumbayan Quezon City</h2>
        <h2>09182687414</h2>
        <h2>+298-8343-5</h2>
        <h2>faveecommerce@gmail.com</h2>
        </div>
        <div className="p-4 md:p-12 flex justify-center items-center align-center">
          <img src="./favelogo.png" className="h-44"/>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default AboutUs;