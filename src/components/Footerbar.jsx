import React from "react";
import {
  FaFacebookSquare,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const Footerbar = () => {
  return (
    <footer className="bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100">
      <div className="mb-8 px-8 bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100 ">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex md:space-x-14 md:flex-row justify-between mx-8 grid grid-cols-1 md:grid-cols-3">
          <div className="mb-4 md:mb-0">
            <img src="newlogo.png" alt="" className="h-24 w-22" />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-white">Fave Ecommerce INC.</p>
            <p className="font-semibold text-white">
              8 Calle Industria Bagumbayan, Quezon City
            </p>
            <p className="font-semibold text-white">625-916-359-000</p>
            <p className="font-semibold text-white">0998-887-3878</p>
            <p className="font-semibold text-white">faveecommerce@gmail.com</p>
          </div>

          <div className="mt-8 md:mt-12 flex flex-row sm:flex-row py-4 mx-auto items-center justify-end space-x-4">
            <div className="">
              <FaFacebookSquare className="h-5 w-5 text-white" />
            </div>

            <div className="">
              <FaTiktok className="h-5 w-5 text-white" />
            </div>

            <div className="">
              <FaYoutube className="h-5 w-5 text-white" />
            </div>

            <div className="">
              <FaEnvelope className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerbar;


