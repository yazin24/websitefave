import React from 'react'
import { FaFacebook, FaYoutube, FaTiktok,FaEnvelope } from "react-icons/fa";

const Footerbar = () => {
  return (
    

   
<footer className="bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100">
               
      <div className='mb-8 px-8 bg-gradient-to-l from-violet-900 via-violet-400 to-blue-100'>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Fave-Ecommerce.Ph™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <FaFacebook className='text-blue-500'/>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 <FaYoutube className='text-red-700'/>
                  <span className="sr-only">Youtube channel</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaTiktok className='text-gray-800'/>
                  <span className="sr-only">Tiktok</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <FaEnvelope className='text-gray-200'/>
                  <span className="sr-only">Gmail</span>
              </a>
        
          </div>
      </div>
    </div>
</footer>



  )
}

export default Footerbar