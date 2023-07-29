import React from 'react'
import Reviews from '../components/Reviews';
import { FaCheckCircle,FaExchangeAlt, FaMagic, FaHandsWash, FaTree, FaRegArrowAltCircleRight } from "react-icons/fa";
import { GiFragrance } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <div class="wrapper flex flex-justify-center">
        <section className='flex flex-col items-center justify-center bg-blue-300/10 backdrop-blur-sm drop-shadow-lg shadow-md p-6 rounded-lg'>
          <h2 className='text-2xl text-center font-bold mb-4'>
            Discover the power of professional-grade cleaning at your home
          </h2>
          <h4 className='text-center text-sm mb-6'>
            Elevate your cleaning game with our industry-leading products that deliver unmatched performance. Don't wait, take action and elevate your cleaning standards today.
          </h4>
          <a href='#chat' className='flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full md:w-3/4 lg:w-1/2 transition-all duration-200 text-center'>Chat with our Cleaning Experts
          </a>
        </section>

        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
        <div className='bubble'><span className="dot"></span></div>
      </div>

      <div className='flex flex-justify-center mt-24'>
        <div className=''>
        <img className='w-1/2' src="/cleaning.jpg" alt="Logo" />
        </div>
        <div className='bg-violet-400'>
          <h2>Why Choose Us?</h2>
        </div>
      </div>

      <div className='flex flex-col mt-8 w-full mb-8'>

      <div className='flex flex-col md:flex-row w-full mb-4'>
        <div className='bg-violet-700 w-full p-4 m-4 flex flex-col rounded-md shadow-md'>
          <span className='flex flex-row items-center'>
          <span><FaCheckCircle className='text-5xl text-gray-100'/></span>
          <span className='ml-2 text-2xl text-gray-200 font-bold'>Safety</span>
          </span>
          <span>
            <p className='text-gray-200 font-bold'>Safety is paramount, especially when it comes to household cleaning products. We offer a good cleaning products that are safe to use around people, pets, and the environment. It has a clear usage instructions and precautions to avoid any potential hazards.</p>
          </span>
          </div>

        <div className='bg-violet-700 w-full p-4 m-4 flex flex-col rounded-md shadow-md'>
        <span className='flex flex-row items-center'>
          <span><FaExchangeAlt className='text-5xl text-gray-100'/></span>
          <span className='ml-2 text-2xl text-gray-200 font-bold'>Versatility</span>
          </span>
          <span>
            <p className='text-gray-200 font-bold'>Our cleaning products can handle multiple cleaning tasks, reducing the need for numerous specialized products. It is easy and can be used on various surfaces or materials provide convenience and cost-effectiveness.</p>
          </span>
        </div>

        <div className='bg-violet-700 w-full p-4 m-4 flex flex-col rounded-md shadow-md'>
        <span className='flex flex-row items-center'>
          <span><FaMagic className='text-5xl text-gray-100'/></span>
          <span className='ml-2 text-2xl text-gray-200 font-bold'>Effectiveness</span>
          </span>
          <span>
            <p className='text-gray-200 font-bold'>Our cleaning products are effective at removing dirt, grime, stains, and other contaminants from various surfaces. It can be use to clean efficiently and leave the area or item looking and feeling clean.</p>
          </span>
        </div>
        </div>

        <div className='flex flex-col md:flex-row w-full'>
        <div className='bg-violet-700 w-full p-4 m-4 flex flex-col rounded-md shadow-md'>
        <span className='flex flex-row items-center'>
          <span><FaHandsWash className='text-5xl text-gray-100'/></span>
          <span className='ml-2 text-2xl text-gray-200 font-bold'>Ease Of Use</span>
          </span>
          <span>
            <p className='text-gray-200 font-bold'>Our cleaning products are designed with user-friendliness in mind, ensuring that whether they come in spray, liquid, powder, or wipe form, the cleaning process demand minimal effort from the user. It is straightforward to use and is efficient in achieving cleaning goals.</p>
          </span>
        </div>
        <div className='bg-violet-700 w-full p-4 m-4 flex flex-col rounded-md shadow-md'>
        <span className='flex flex-row items-center'>
          <span><GiFragrance className='text-5xl text-gray-100'/></span>
          <span className='ml-2 text-2xl text-gray-200 font-bold'>Fragrance And Residue</span>
          </span>
          <span>
            <p className='text-gray-200 font-bold'>Our good cleaning products leaves a pleasant fragrance after cleaning. Additionally, it doesnt leave behind any harmful residues that might attract dirt or cause long-term damage to the surface.</p>
          </span>
        </div>
        <div className='bg-violet-700 w-full p-4 m-4 flex flex-col rounded-md shadow-md'>
        <span className='flex flex-row items-center'>
          <span><FaTree className='text-5xl text-gray-100'/></span>
          <span className='ml-2 text-2xl text-gray-200 font-bold'>Environment Friendly</span>
          </span>
          <span>
            <p className='text-gray-200 font-bold'>With increasing environmental concerns, choosing our cleaning products that are eco-friendly and biodegradable is essential. These products have a lower impact on the environment during manufacturing, usage, and disposal.</p>
          </span>
        </div>
        </div>
      </div>

      <div className='md:my-24 md:mx-8 mx-8'>
      <Reviews/>
      </div>

      <h2 className='md:mx-8 mx-8 underline text-xl'>Want a Business? Lets talk!</h2>

      <div className='flex flex-col md:flex-row my-4 md:my-8 md:mx-8 mx-4'>
        
      <div className='w-full md:w-1/4'>
        <span className='flex flex-row md:flex-row'>
        <FaRegArrowAltCircleRight className='text-5xl text-violet-700'/>
        <h3 className='text-xl mt-4 ml-2'>Setup a Schedule</h3>
        </span>
       <p className='mt-2 md: mt-4'>Fill up the form below and wait for our cleaning experts to call or contact you</p>
       <br/>
       <hr/>
       <br/>
        </div>
        <div className='w-full md:w-1/4'>
        <span className='flex flex-row md:flex-row'>
        <FaRegArrowAltCircleRight className='text-5xl text-violet-700'/>
        <h3 className='text-xl mt-4 ml-2'>Talk with us</h3>
        </span>
       <p className='mt-2 md: mt-4'>Our cleaning experts and agents will talk to you about your inquiries in starting a business with us</p>
       <br/>
       <hr/>
       <br/>
        </div>
      <div className='w-full md:w-1/4'>
      <span className='flex flex-row md:flex-row'>
        <FaRegArrowAltCircleRight className='text-5xl text-violet-700'/>
        <h3 className='text-xl mt-4 ml-2'>Visit our office</h3>
        </span>
       <p className='mt-2 md: mt-4'> Our cleaning experts and agents will talk to you about your inquiries in starting a business with us</p>
       <br/>
       <hr/>
       <br/>
      </div>
      <div className='w-full md:w-1/4'>
      <span className='flex flex-row md:flex-row'>
        <FaRegArrowAltCircleRight className='text-5xl text-violet-700'/>
        <h3 className='text-xl mt-4 ml-2'>Run your business</h3>
        </span>
       <p className='mt-2 md: mt-4'>Our cleaning experts and agents will talk to you about your inquiries in starting a business with us</p>
       <br/>
       <hr/>
       <br/>
      </div>
      </div>

    </div>
  )
}

export default Home