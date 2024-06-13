import React, { useRef, useState, useEffect } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { RiCloseLargeFill, RiMenuFill } from 'react-icons/ri';
import '../../../App.css';
import ServiceTemplate from '../ServiceTemplate';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../../data/navbarLinks';
import {  BsChevronDown } from 'react-icons/bs';

const MobileNavbar = () => {
    const location = useLocation();
    const matchRoute = (route) => {
      return matchPath({path: route}, location.pathname)
    }
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

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
                <ul className="space-y-4 p-4">
                {NavbarLinks.map((link, index) => (
            <li key={index} className='text-lg'>
              {link.title === "Services" ? (
                  <>
                  <div className={`group relative flex cursor-pointer  items-center justify-center gap-1 
                    ${matchRoute("/services/:serviceName") 
                      ? "text-yellow-25"
                      : "text-richblack-900"
                    }`}>
                      <p>{link.title}</p>
                      <BsChevronDown className='mt-2 text-sm'/>
                        <div className=' '>
                       
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
                }`}>
                    {link.title}
               </p>
             
             </Link>
            )}
            </li>
          ))}
                </ul>
                
            </div>
        </div>
    );
};

export default MobileNavbar;
