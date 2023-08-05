import React from "react";
import { FaRegCommentDots, FaRegEye } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100 pt-24">
        <h2 className="text-center font-bold text-3xl text-gray-200">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row md:mx-44">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl text-violet-700 font-bold mb-2">Mission</h2>
            <p className="font-bold">
              OUR MISSION AT FAVE IS TO PROVIDE TOP-QUALITY CLEANING PRODUCTS
              THAT PROMOTE A HEALTHIER, SAFER, AND CLEANER ENVIRONMENT FOR HOMES
              AND BUSINESSES WORLDWIDE. WE ARE COMMITTED TO DELIVERING
              ECO-FRIENDLY AND EFFECTIVE SOLUTIONS THAT MAKE CLEANING EASIER,
              WHILE MINIMIZING THE IMPACT ON THE PLANET. THROUGH INNOVATION,
              SUSTAINABILITY, AND A CUSTOMER-CENTRIC APPROACH, WE AIM TO BE THE
              TRUSTED BRAND OF CHOICE FOR ALL CLEANING NEEDS, EMPOWERING
              INDIVIDUALS AND BUSINESSES TO CREATE REFRESHING AND HYGIENIC
              SPACES THAT INSPIRE WELL-BEING AND HAPPINESS
            </p>
          </div>
          <div className="p-2 md:p-12 flex justify-center">
            <FaRegCommentDots className="text-8xl text-gray-200 md:mt-8" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mx-44 ">
          <div className="p-8 md:p-12 ">
            <h2 className="text-2xl text-violet-700 font-bold mb-2">Vision</h2>
            <p className="font-bold">
              DRIVEN BY OUR PASSION FOR CLEANLINESS AND ENVIRONMENTAL
              STEWARDSHIP, OUR VISION AT FAVE IS TO BECOME THE MOST TRUSTED AND
              ADMIRED BRAND FOR CLEANING PRODUCTS WORLDWIDE. WE ENVISION A
              FUTURE WHERE OUR INNOVATIVE AND ECO-FRIENDLY SOLUTIONS ARE
              SYNONYMOUS WITH CLEANLINESS AND HYGIENE, SETTING THE BENCHMARK FOR
              THE INDUSTRY. BY FOSTERING A CULTURE OF EXCELLENCE,
              SUSTAINABILITY, AND CONTINUOUS IMPROVEMENT, WE AIM TO INSPIRE AND
              EMPOWER INDIVIDUALS AND BUSINESSES TO EMBRACE A CLEANER AND
              HEALTHIER LIFESTYLE, MAKING A POSITIVE IMPACT ON THE WELL-BEING OF
              PEOPLE AND THE PLANET.
            </p>
          </div>
          <div className="p-8 md:p-12 flex justify-center">
            <FaRegEye className="text-8xl text-gray-200 md:mt-8" />
          </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="p-12 mt-8">
            <h2 className="text-violet-700 font-bold text-2xl">Fave Ecommerce</h2>
            <h2 className="font-bold text-sm">8 Calle Industria Bagumbayan Quezon City</h2>
            <h2 className="font-bold text-sm">09182687414</h2>
            <h2 className="font-bold text-sm">+298-8343-5</h2>
            <h2 className="font-bold text-sm">faveecommerce@gmail.com</h2>
          </div>
          <div className="p-4 md:p-12 flex justify-center items-center align-center">
            <img src="./favelogo.png" className="h-44" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
