import React from "react";
import faveVideo from "../faveVideo.mp4";
import { FaCheck } from "react-icons/fa";

const Videoplayer = () => {
  return (
    <div className="colorlay flex flex-col-reverse md:flex-row md:items-center">
      <div className="mt-4 md:mt-0 md:pr-6 md:ml-12 md:w-1/2">
        <div className="md:ml-10 flex flex-col items-center justify-center pb-10">
          <img src="newlogo.png" className="h-20 w-40" alt="" />
          <div className="mt-10 pl-10 flex flex-col gap-3 text-center">

            <div className="flex justify-start items-center gap-3 font-bold italic">
              <FaCheck className="text-2xl" />
              <p>Grease cutting power</p>
            </div>

            <div className="flex justify-start align-items gap-3 font-bold italic">
              <FaCheck className="text-2xl" />
              <p>Residue free clean</p>
            </div>

            <div className="flex justify-start align-items gap-3 font-bold italic">
              <FaCheck className="text-2xl" />
              <p>Eliminate Odor</p>
            </div>

            <div className="flex justify-start align-items gap-3 font-bold italic">
              <FaCheck className="text-2xl" />
              <p>2x Antibacterial Power</p>
            </div>

            <div className="flex justify-start align-items gap-3 font-bold italic">
              <FaCheck className="text-2xl" />
              <p>pH Balance (5.5-6.0)</p>
            </div>

            <div className="flex justify-start align-items gap-3 font-bold italic">
              <FaCheck className="text-2xl" />
              <p>with Moitsturizers for softer hands</p>
            </div>
          </div>
        </div>
      </div>

      <video className="video" src={faveVideo} autoPlay loop muted />
    </div>
  );
};

export default Videoplayer;

// mt-4 md:mt-0 md:pr-52
