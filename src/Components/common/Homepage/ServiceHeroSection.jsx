import React, { useEffect, useState } from 'react';
import Img1 from '../../../assets/images/clientImg.jpg';
import Img2 from '../../../assets/images/innovation.jpg';
import Img3 from '../../../assets/images/integration.jpg';
import Img4 from '../../../assets/images/collaboration.jpg';
import HighlightText from './HighlightText';
import '../../../App.css'

export default function ServiceHeroSection() {
  const [animateBackground, setAnimateBackground] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBackground(false), 60000); // 60 seconds
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className='w-11/12 mx-auto'>
      <div className='flex flex-col mt-4'>
        <h1 className='text-3xl font-semibold text-richblack-700'>
          Empowering Ideas, <HighlightText text={"Enabling Innovation"} />
        </h1>
        <p className='mt-3'>
          At Bombay Coding Company, we turn your digital dreams into reality. Specializing in web development, app development, and enterprise solutions, we offer cutting-edge technology and innovative strategies to elevate your business. Our dedicated team of experts collaborates with you to create custom solutions that drive success and foster growth. Whether you're a startup or a large enterprise, we are committed to delivering exceptional service and transformative results. Let's build the future together.
        </p>
      </div>
      <div className='flex lg:flex-row flex-col'>
        <div className={`p-4 fade-in ${animateBackground ? 'animated-background' : ''}`}>
          <h2 className='text-xl font-semibold'>Customer-Centric Approach</h2>
          <img src={Img1} alt="Customer-Centric Approach" className='w-full h-64 object-cover' />
          <p className='mt-2 text-sm'>Prioritizing our clients' needs and goals to ensure their complete satisfaction and success.</p>
        </div>
        <div className={`p-4 fade-in ${animateBackground ? 'animated-background' : ''}`}>
          <h2 className='text-xl font-semibold'>Innovation and Quality</h2>
          <img src={Img2} alt="Innovation and Quality" className='w-full h-64 object-cover' />
          <p className='mt-2 text-sm'>Delivering innovative solutions with uncompromising quality to exceed customer expectations.</p>
        </div>
        <div className={`p-4 fade-in ${animateBackground ? 'animated-background' : ''}`}>
          <h2 className='text-xl font-semibold'>Integrity and Transparency</h2>
          <img src={Img3} alt="Integrity and Transparency" className='w-full h-64 object-cover' />
          <p className='mt-2 text-sm'>Building trust through honest communication and ethical business practices.</p>
        </div>
        <div className={`p-4 fade-in ${animateBackground ? 'animated-background' : ''}`}>
          <h2 className='text-xl font-semibold'>Collaboration and Support</h2>
          <img src={Img4} alt="Collaboration and Support" className='w-full h-64 object-cover' />
          <p className='mt-2 text-sm'>Working closely with clients to provide continuous support and build lasting partnerships.</p>
        </div>
      </div>
    </div>
  );
}
