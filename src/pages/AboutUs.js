import React from 'react'
import HighlightText from '../Components/common/Homepage/HighlightText'
import Quote from '../Components/Aboutus/Quote'
import StatsComponenet from '../Components/Aboutus/Stats'
import LearningGrid from '../Components/Aboutus/LearningGridArray'
import BannerImage1 from '../assets/images/aboutus1.webp'
import BannerImage2 from '../assets/images/aboutus2.webp'
import BannerImage3 from '../assets/images/aboutus3.webp'
import FoundingStory from '../assets/images/FoundingStory.png'
export default function AboutUs() {
  return (
    <div>
        
     <section className="bg-offwhite">
     
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between  text-center text-richblack-700">
        <header className="mx-auto py-28 text-4xl font-semibold lg:w-[70%]">
          Driving Innovation in Coding and Development for a
          <HighlightText text={"Dynamic Future"} />
          <p className="mx-auto mt-2 text-center text-base font-medium text-richblack-700 lg:w-[95%]">
            Your trusted partner for app development, website solutions, and e-commerce development. At Bombay Coding Company, we lead with cutting-edge technology, delivering innovative solutions and fostering a dynamic community.
          </p>
        </header>
        <div className=" sm:h-[70px] lg:h-[150px]"></div>
        <div className="absolute bottom-0 left-[50%] grid w-[100%] transform -translate-x-1/2 -translate-y-[-20%] grid-cols-3 gap-3 lg:gap-5">
          <img src={BannerImage1} alt="Banner 1" />
          <img src={BannerImage2} alt="Banner 2" />
          <img src={BannerImage3} alt="Banner 3" />
        </div>
      </div>
    </section>

    <section className="border-b bg-offwhite border-richblack-5">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between  text-richblack-700">
        <div className="h-[100px] "></div>
        <Quote />
      </div>
    </section>

    <section className='bg-bgblue'>
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
        <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
          <div className="my-4 flex lg:w-[50%] flex-col gap-10">
            <h1 className="text-white bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
              Our Founding Story
            </h1>
            <p className="text-base font-medium text-richblack-5 lg:w-[95%]">
            Bombay Coding Company was born out of a passion for technology and innovation. In 2022, a group of friends and tech enthusiasts, all sharing a common dream of transforming the digital landscape, came together in the vibrant city of Mumbai. Our journey began in a small co-working space, where late-night brainstorming sessions and relentless coding marathons laid the foundation for what we are today.
            </p>
            <p className="text-base font-medium text-richblack-5 lg:w-[95%]">
            From those humble beginnings, we have grown into a dynamic team of talented developers, designers, and strategists. Our commitment to excellence and our unyielding drive to push the boundaries of what’s possible have been the driving forces behind our success. Today, Bombay Coding Company stands as a testament to the power of collaboration, creativity, and a relentless pursuit of innovation.
            </p>
          </div>

          <div>
            <img
              src={FoundingStory}
              alt=""
              className="shadow-[0_0_20px_0] shadow-[#FC6767]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
          <div className=" flex lg:w-[40%] flex-col gap-10">
            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
              Our Vision
            </h1>
            <p className="text-base font-medium text-richblack-5 lg:w-[95%]">
            Our vision is to be at the forefront of the digital revolution, continuously setting new 
            standards of excellence in the tech industry. We envision a future where technology seamlessly 
            integrates with everyday life, making it simpler, more efficient, and more enjoyable. By staying 
            ahead of industry trends and consistently delivering innovative solutions, we aim to shape the digital
             landscape 
            and inspire a new generation of tech enthusiasts and entrepreneurs.
            </p>
          </div>
          <div className="my-9 flex lg:w-[40%] flex-col gap-10">
            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
            Our Mission
            </h1>
            <p className="text-base font-medium text-richblack-5 lg:w-[95%]">
            At Bombay Coding Company, our mission is to empower businesses and individuals through cutting-edge technology solutions. We strive to deliver exceptional digital experiences that drive growth, enhance efficiency, and create value. Our goal is to be a trusted partner for our clients, helping them navigate the complexities of the digital world with confidence and ease.
            </p>
          </div>
        </div>
      </div>
    </section>

    <StatsComponenet />
    <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
      <LearningGrid />
     
    </section>

   
    
    </div>
   
  
)
}

