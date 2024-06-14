import React from 'react';
import Banner from '../assets/images/dottedmap.svg';
import bgHome from '../assets/images/bghome.svg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';
import TimelineSection from '../Components/common/Homepage/TimeineSection';
import HighlightText from '../Components/common/Homepage/HighlightText';
import CTAButton from '../Components/common/Homepage/Button'
import ServiceHeroSection from '../Components/common/Homepage/ServiceHeroSection';
export default function Home() {
  return (
    <div >
      {/* Section 1 (Hero Section) */}
      <div className='relative px-4 mx-auto border rounded-sm  '>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-center"
          style={{
            backgroundImage: `url(${Banner})`,
            opacity: 0.7, // Adjust opacity as needed
          }}
        ></div>

        {/* Overlay to reduce opacity */}
        <div className="absolute inset-0 bg-bgblue opacity-90"></div>

        {/* Content */}
        <div className="relative h-[80vh]  flex items-center justify-center flex-col gap-4 mb-16">
          <h1 className="text-yellow-50 shadow-blue-500  text-5xl font-bold ">Bombay Coding Company</h1>
          <p className='text-white text-lg font-semibold'>Transforming Ideas into Digital Excellence</p>
          <p className='text-white'>At Bombay Coding Company, we specialize in crafting bespoke websites, innovative mobile applications, and robust 
            enterprise solutions. Our team is dedicated to delivering cutting-edge technology and personalized service to help your business thrive in the digital age. Partner with
            us to turn your vision into reality 
            with seamless, high-quality solutions.</p>
          <Link to={"/contactus"}>
            <div className='group mx-auto w-fit rounded-full bg-yellow-50 p-1 font-bold
                            text-richblack-700 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-none'>
              <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg:richblack-900'>
                <p>Contact Us</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Section 2 */}
      <div 
        className='relative h-[320px] lg:h-[220px] bg-richblack-5 flex justify-center  '
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className='flex flex-col justify-center items-center  lg:flex-row '>
          <div className='top-[-20%] absolute text-sm lg:left-[22%] text-richblack-700 font-semibold  bg-white rounded-md w-3/4  lg:w-[340px]  h-[160px] p-3 border  flex justify-center items-center z-10 zoom-effect'>
          "At Bombay Coding Company, we excel in MERN stack development. Crafting innovative solutions with MongoDB, Express.js, React, and Node.js, we transform ideas into digital brilliance."
          </div>
          <div className='absolute bg-white text-sm  text-richblack-700 top-[40%] font-semibold rounded-md w-3/4 lg:left-[56%] lg:top-[-20%]  lg:w-[340px] h-[160px] p-3 border  flex justify-center items-center z-10 zoom-effect'>
          "At Bombay Coding Company, we're your go-to experts for Android app development. From concept to deployment, 
          we create cutting-edge mobile experiences tailored to your needs."
          </div>
        </div>
      </div>

    
    
      <div className='w-11/12 mx-auto'>
            <ServiceHeroSection/>
          </div>
          <div className='mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between lg:mt-2 mt-28'>
          <div className=' mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>
          <div className="text-4xl font-semibold lg:w-[45%] ">
          Ready to Start Your Project?{" "}
              <HighlightText text={"Contact us today "} />
            </div>
            <div className='flex flex-col lg:items-start gap-10 lg:w-[40%]'>
              <div className="text-[16px]">
              To discuss your requirements and get a free quote.
              </div>
              <CTAButton active={true} linkto={"/contactctus"}>
                  <div>Contact Us</div>
              </CTAButton>
            </div>
          </div>
      </div>

          {/* section 3 */}
          <div className='w-11/12 mx-auto'>
            <TimelineSection/>
          </div>
        



    </div>

 
  );
}
