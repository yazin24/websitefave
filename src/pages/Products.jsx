import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
  return (
    <div className="bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100 px-10">
      <div className="pt-12">
        <h2 className="text-center pt-12 text-3xl font-bold text-gray-200">
          List of Products
        </h2>
      </div>

      <div className="pt-20 sm:pl-60 md:pl-60 flex md:flex-row gap-2">
        <h2 className="font-bold text-xl text-yellow-500 mt-2">Honey Lemon</h2>
        <img src="lemon.png" alt="" className="h-11 w-11 pb-2" />
      </div>

      <div className="flex items-center flex-col md:flex-row justify-center md:justify-center gap-16 md:gap-40 mt-10">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="4000"
        >
          <div className="bg-white text-gray-700 shadow-lg overflow-hidden border-2 border-violet-700 cursor-pointer hover:scale-[1.05] hover:!scale-100!important duration-100">
            <img className="h-56 w-56" src="1.jpg" alt="" />
            <div className="p-2 flex-col bg-violet-700">
              <div className="px-3 py-1 text-md font-bold text-center text-gray-200">
                <span>₱ 129.00</span>
              </div>
              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200">
                  <a href="https://shopee.ph/Fave-Dishwashing-Liquid-1Gallon-i.1007082223.18382745086?sp_atk=a186c8cb-1434-4b03-a6fe-4c132712dfbf&xptdk=a186c8cb-1434-4b03-a6fe-4c132712dfbf">
                    Shopee
                  </a>
                </button>
              </div>

              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200 mt-2">
                  <a href="https://www.lazada.com.ph/products/dishwashing-liquid-1gallon-i4052909460-s22028589341.html?&search=pdp_same_topselling?spm=a2o4l.pdp_revamp.recommendation_1.1.495e6f2eLpRKBH&mp=1&scm=1007.16389.286994.0&clickTrackInfo=18ea58ee-0d68-47e6-9cf2-8562a754eea9__4052909460__24447__trigger2i__224806__1.0__1.0__0.0__0.0__0.0__1.0__0__null__null__null__null__null__null____129.0__0.0__0.0__0__129.0__255084,255127,255313__null__null__null__3650.16544_955.3633_3650.16540_955.3632__null__13426__null__0.0__0.0________null__null">
                    Lazada
                  </a>
                </button>
              </div>
              <ul class="mb-0 flex items-center justify-center pt-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="flex items-center flex-col md:flex-row justify-center md:justify-center gap-10"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="4000"
        >
          <div className="bg-white text-gray-700 shadow-lg overflow-hidden border-2 border-violet-700 cursor-pointer hover:scale-[1.05] hover:!scale-100!important duration-100">
            <img className="h-56 w-56" src="4.jpg" alt="" />
            <div className="p-2 flex-col bg-violet-700">
              <div className="px-3 py-1 text-md font-bold text-center text-gray-200">
                <span>₱35.00</span>
              </div>
              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200">
                  <a href="https://shopee.ph/Fave-Dishwashing-Liquid-1Liter-i.1007082223.22576356482?sp_atk=bbc81f20-e3ff-4356-8f7b-eca7f1523ebe&xptdk=bbc81f20-e3ff-4356-8f7b-eca7f1523ebe">
                    Shopee
                  </a>
                </button>
              </div>

              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200 mt-2">
                  <a href="https://www.lazada.com.ph/products/fave-dishwashing-liquid-1-liter-i4050182063-s22000015331.html?&search=pdp_same_topselling?spm=a2o4l.pdp_revamp.recommendation_1.1.1fe4325apHAEUg&mp=1&scm=1007.16389.286994.0&clickTrackInfo=40c92685-10ec-48ba-a103-4d29638c4d22__4050182063__24447__trigger2i__224806__1.0__1.0__0.0__0.0__0.0__1.0__0__null__null__null__null__null__null____35.0__0.0__0.0__0__35.0__255084,255127,255313__null__null__null__3650.16537_955.3629_3650.16544_955.3632__null__13426__null__0.0__0.0________null__null">
                    Lazada
                  </a>
                </button>
              </div>
              <ul class="mb-0 flex items-center justify-center pt-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 sm:pl-60 md:pl-64 flex md:flex-row gap-2">
        <h2 className="font-bold text-lime-500 text-xl mt-1">Calamansi</h2>
        <img src="calamansi.png" alt="" className="h-11 w-11 pb-2" />
      </div>

      <div className="flex items-center  flex-col md:flex-row justify-center md:justify-center gap-16 md:gap-40 mt-10">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="4000"
        >
          <div className="bg-white text-gray-700 shadow-lg overflow-hidden border-2 border-violet-700 cursor-pointer hover:scale-[1.05] hover:!scale-100!important duration-100">
            <img className="h-56 w-56" src="3.jpg" alt="" />
            <div className="p-2 flex-col bg-violet-700">
              <div className="px-3 py-1 text-md font-bold text-center text-gray-200">
                <span>₱ 129.00</span>
              </div>
              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200">
                  <a href="https://shopee.ph/Fave-Dishwashing-Liquid-1Gallon-i.1007082223.18382745086?sp_atk=a186c8cb-1434-4b03-a6fe-4c132712dfbf&xptdk=a186c8cb-1434-4b03-a6fe-4c132712dfbf">
                    Shopee
                  </a>
                </button>
              </div>

              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200 mt-2">
                  <a href="https://www.lazada.com.ph/products/dishwashing-liquid-1gallon-i4052909460-s22028589341.html?&search=pdp_same_topselling?spm=a2o4l.pdp_revamp.recommendation_1.1.495e6f2eLpRKBH&mp=1&scm=1007.16389.286994.0&clickTrackInfo=18ea58ee-0d68-47e6-9cf2-8562a754eea9__4052909460__24447__trigger2i__224806__1.0__1.0__0.0__0.0__0.0__1.0__0__null__null__null__null__null__null____129.0__0.0__0.0__0__129.0__255084,255127,255313__null__null__null__3650.16544_955.3633_3650.16540_955.3632__null__13426__null__0.0__0.0________null__null">
                    Lazada
                  </a>
                </button>
              </div>
              <ul class="mb-0 flex items-center justify-center pt-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="flex items-center  flex-col md:flex-row justify-center md:justify-center gap-10"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="4000"
        >
          <div className="bg-white text-gray-700 shadow-lg overflow-hidden border-2 border-violet-700 cursor-pointer hover:scale-[1.05] hover:!scale-100!important duration-100">
            <img className="h-56 w-56" src="6.jpg" alt="" />
            <div className="p-2 flex-col bg-violet-700">
              <div className="px-3 py-1 text-md font-bold text-center text-gray-200">
                <span>₱35.00</span>
              </div>
              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200">
                  <a href="https://shopee.ph/Fave-Dishwashing-Liquid-1Liter-i.1007082223.22576356482?sp_atk=bbc81f20-e3ff-4356-8f7b-eca7f1523ebe&xptdk=bbc81f20-e3ff-4356-8f7b-eca7f1523ebe">
                    Shopee
                  </a>
                </button>
              </div>

              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200 mt-2">
                  <a href="https://www.lazada.com.ph/products/fave-dishwashing-liquid-1-liter-i4050182063-s22000015331.html?&search=pdp_same_topselling?spm=a2o4l.pdp_revamp.recommendation_1.1.1fe4325apHAEUg&mp=1&scm=1007.16389.286994.0&clickTrackInfo=40c92685-10ec-48ba-a103-4d29638c4d22__4050182063__24447__trigger2i__224806__1.0__1.0__0.0__0.0__0.0__1.0__0__null__null__null__null__null__null____35.0__0.0__0.0__0__35.0__255084,255127,255313__null__null__null__3650.16537_955.3629_3650.16544_955.3632__null__13426__null__0.0__0.0________null__null">
                    Lazada
                  </a>
                </button>
              </div>
              <ul class="mb-0 flex items-center justify-center pt-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 sm:pl-60 md:pl-60 flex md:flex-row gap-2">
        <h2 className="font-bold text-blue-700 text-xl mt-1">Fresh Antibac</h2>
        <img src="anti-bacteria.png" alt="" className="h-10 w-10 pb-2" />
      </div>

      <div className="flex items-center flex-col md:flex-row justify-center md:justify-center gap-16 md:gap-40 mt-10">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="4000"
        >
          <div className="bg-white text-gray-700 shadow-lg overflow-hidden border-2 border-violet-700 cursor-pointer hover:scale-[1.05] hover:!scale-100!important duration-100">
            <img className="h-56 w-56" src="2.jpg" alt="" />
            <div className="p-2 flex-col bg-violet-700">
              <div className="px-3 py-1 text-md font-bold text-center text-gray-200">
                <span>₱ 129.00</span>
              </div>
              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200">
                  <a href="https://shopee.ph/Fave-Dishwashing-Liquid-1Gallon-i.1007082223.18382745086?sp_atk=a186c8cb-1434-4b03-a6fe-4c132712dfbf&xptdk=a186c8cb-1434-4b03-a6fe-4c132712dfbf">
                    Shopee
                  </a>
                </button>
              </div>

              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200 mt-2">
                  <a href="https://www.lazada.com.ph/products/dishwashing-liquid-1gallon-i4052909460-s22028589341.html?&search=pdp_same_topselling?spm=a2o4l.pdp_revamp.recommendation_1.1.495e6f2eLpRKBH&mp=1&scm=1007.16389.286994.0&clickTrackInfo=18ea58ee-0d68-47e6-9cf2-8562a754eea9__4052909460__24447__trigger2i__224806__1.0__1.0__0.0__0.0__0.0__1.0__0__null__null__null__null__null__null____129.0__0.0__0.0__0__129.0__255084,255127,255313__null__null__null__3650.16544_955.3633_3650.16540_955.3632__null__13426__null__0.0__0.0________null__null">
                    Lazada
                  </a>
                </button>
              </div>
              <ul class="mb-0 flex items-center justify-center pt-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="flex items-center  flex-col md:flex-row justify-center md:justify-center gap-10"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="4000"
        >
          <div className="bg-white text-gray-700 shadow-lg overflow-hidden border-2 border-violet-700 cursor-pointer hover:scale-[1.05] hover:!scale-100!important duration-100">
            <img className="h-56 w-56" src="5.jpg" alt="" />
            <div className="p-2 flex-col bg-violet-700">
              <div className="px-3 py-1 text-md font-bold text-center text-gray-200">
                <span>₱35.00</span>
              </div>
              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200">
                  <a href="https://shopee.ph/Fave-Dishwashing-Liquid-1Liter-i.1007082223.22576356482?sp_atk=bbc81f20-e3ff-4356-8f7b-eca7f1523ebe&xptdk=bbc81f20-e3ff-4356-8f7b-eca7f1523ebe">
                    Shopee
                  </a>
                </button>
              </div>

              <div className="flex justify-center">
                <button className="w-full rounded-md p-1 text-white font-bold bg-gradient-to-t from-yellow-400 via-lime-400 to-lime-700 hover:from-pink-200 mt-2">
                  <a href="https://www.lazada.com.ph/products/fave-dishwashing-liquid-1-liter-i4050182063-s22000015331.html?&search=pdp_same_topselling?spm=a2o4l.pdp_revamp.recommendation_1.1.1fe4325apHAEUg&mp=1&scm=1007.16389.286994.0&clickTrackInfo=40c92685-10ec-48ba-a103-4d29638c4d22__4050182063__24447__trigger2i__224806__1.0__1.0__0.0__0.0__0.0__1.0__0__null__null__null__null__null__null____35.0__0.0__0.0__0__35.0__255084,255127,255313__null__null__null__3650.16537_955.3629_3650.16544_955.3632__null__13426__null__0.0__0.0________null__null">
                    Lazada
                  </a>
                </button>
              </div>
              <ul class="mb-0 flex items-center justify-center pt-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
