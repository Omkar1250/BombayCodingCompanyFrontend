import React from 'react';
import { NavbarLinks } from '../../data/navbarLinks';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import ServiceTemplate from './ServiceTemplate';
import MobileNavbar from './Homepage/MobileNavbar';

export default function Navbar() {
  const location = useLocation();

  // Helper function to check if the current route matches the provided route
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className='flex justify-between items-center p-4 mx-auto border rounded-sm'>
      <div className='flex gap-1 justify-center items-center'>
        {/* Placeholder for logo */}
        {/* <img src='' alt="logo" className='w-20' /> */}
      </div>

      {/* Desktop Navbar */}
      <div className='hidden lg:flex'>
        <ul className='flex gap-x-4'>
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              {link.title === "Services" ? (
                <>
                  <div className={`group relative flex cursor-pointer items-center justify-center gap-1  
                    ${matchRoute("/services/:serviceName") ? "text-yellow-25" : "text-richblack-900"}`}>
                    <p>{link.title}</p>
                    <BsChevronDown className='mt-2 text-sm' />
                    <div className=' invisible bg-richblack-5 absolute left-[50%] top-[50%] z-[1000] flex w-[200px] 
                      translate-x-[-50%] translate-y-[3em] flex-col rounded-lg p-4 text-richblack-900 
                      opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[2.5em] 
                      group-hover:opacity-100 lg:w-[480px] '>
                      <div className='flex justify-center flex-row'>
                        <ServiceTemplate />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link to={link.path}>
                  <p className={`${matchRoute(link?.path) ? "text-yellow-100" : "text-richblack-900"}`}>
                    {link.title}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div>
        <MobileNavbar />
      </div>
    </div>
  );
}
