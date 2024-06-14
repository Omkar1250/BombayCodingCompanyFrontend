import React, { useRef, useState, useEffect } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { RiCloseLargeFill, RiMenuFill } from 'react-icons/ri';
import '../../../App.css';
import ServiceTemplate from '../ServiceTemplate';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../../data/navbarLinks';
import {  BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MobileNavbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const [accordianOpen, setAccordionOpen] = useState(false)




    const matchRoute = (route) => {
      return matchPath({path: route}, location.pathname)
    }
    useEffect(() => {
        console.log('Component rendered');
        console.log('isOpen:', isOpen);
    });

    const handleClickOutside = () => {
        console.log('Clicked outside, closing menu');
        setIsOpen(false);
    };

    const handleMenuOpen = () => {
        console.log("Opening menu");
        setIsOpen(true);
    };

    const handleMenuClose = () => {
        console.log("Closing menu");
        setIsOpen(false);
    };
    const handleAccordionToggle = () => {
      setAccordionOpen(prev => !prev);
  };

    useOnClickOutside(menuRef, handleClickOutside);

    return (
        <div className="lg:hidden h-6">
            {isOpen ? (
               ''
            ) : (
                <button onClick={handleMenuOpen} className='text-bgblue'>
                    <RiMenuFill size={24} />
                </button>
            )}
            <div 
                ref={menuRef} 
                className={`absolute top-0 left-0 h-screen w-3/4 bg-white
                     z-50 border border-richblack-200 transform transition-transform duration-300 overflow-hidden 
                     ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className=' flex justify-end p-2  ' >
                        <RiCloseLargeFill size={24} className='text-bgblue' onClick={handleMenuClose} />
                </div>
                  <div>
                    
                  </div>


                <ul className="space-y-4 p-4">
                {NavbarLinks.map((link, index) => (
            <li key={index} className='text-lg'>
              {link.title === "Services" ? (
                  <>
                  <div>
                        <div onClick={handleAccordionToggle} className={`  flex cursor-pointer justify-center items-center gap-1 
                    ${matchRoute("/services/:serviceName") 
                      ? "text-yellow-25"
                      : "text-richblack-900"
                    }`}>
                      <div>
                      <p className='font-semibold'>{link.title}</p>
                      </div>
                      <div>
                      {
                        accordianOpen ? <BsChevronUp className='text-caribbeangreen-100 font-semibold '/>
                        : <BsChevronDown fontWeight={28} className='text-caribbeangreen-100  '/>
                      }
                      </div>
                        
                     </div> 
                     <div className={`grid overflow-hidden transition-all duration-300 ease-in-out
                      text-black ${accordianOpen
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                      }`}>
                        <div className='overflow-hidden bg-offwhite  rounded-lg'>
                              <div className='p-4 '>
                              <ServiceTemplate/>
                              </div>
                        </div>

                     </div>
                      
                  </div>
                  </>
              )
            :
            (
             <Link to={link.path}>
               <p className={`
                ${matchRoute(link?.path)
                  ? "text-yellow-100"
                  : "text-richblack-900"
                } font-semibold`}>
                    {link.title}
               </p>
             
             </Link>
            )}
            </li>
          ))}
                </ul>
              <div className='border'></div>
                <div className='text-center mt-6'>
                    <h3 className='mb-2 text-lg font-semibold'>Follow Us On</h3>
                    <div className='flex justify-center items-center gap-x-6'>
                        <FaInstagram size={28} className='text-pink-200 zoom-effect' />
                        <FaLinkedin size={28} className='text-bgblue  zoom-effect' />
                        <FaGithub size={28} className='text-caribbeangreen-200  zoom-effect' />
                        <FaFacebook size={28} className='text-bgblue  zoom-effect' />
                    </div>
                </div>
                
            </div>
           
        </div>
    );
};

export default MobileNavbar;
