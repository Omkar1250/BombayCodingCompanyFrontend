import React from 'react';
import HighlightText from '../common/Homepage/HighlightText';

const Quote = () => {
  return (
    <div className="text-xl md:text-4xl font-semibold mx-auto  pb-3 text-center text-richblack-700">
      We are passionate about coding and innovation. Our platform{' '}
      <HighlightText text={'enables cutting-edge app, website, and e-commerce solutions'} /> and{' '}
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        {' '}
        expertise
      </span>
      , combined with a vibrant community, create an{' '}
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {' '}
        unparalleled learning and business experience.
      </span>
    </div>
  );
};

export default Quote;
