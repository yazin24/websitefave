import React from "react";

const Services = () => {
  return (
    <div className="bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100">
      <h2 className="text-center pt-24 text-3xl font-bold text-gray-200">
        Services
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="m-8 md:m-24 hover:bg-violet-900 p-1 rounded-sm cursor-pointer hover:scale-[0.85] hover:!scale-100!important duration-500">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img src="./shoppee.jpg" alt="shoppee logo" className="w-96 h-52" />
          </a>
        </div>
        <div className="m-8 md:m-24 hover:bg-violet-900 p-1 rounded-sm cursor-pointer hover:scale-[0.85] hover:!scale-100!important duration-500">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img src="./lazada.jpg" alt="lazada logo" className="w-96 h-52" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="m-8 md:m-24 hover:bg-violet-900 p-1 rounded-sm cursor-pointer hover:scale-[0.85] hover:!scale-100!important duration-500">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img
              src="./marketplace.jpg"
              alt="shoppee logo"
              className="w-96 h-52"
            />
          </a>
        </div>
        <div className="m-8 md:m-24 hover:bg-violet-900 p-1 rounded-sm cursor-pointer hover:scale-[0.85] hover:!scale-100!important duration-500">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img src="./tiktok.png" alt="shoppee logo" className="w-96 h-52" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
