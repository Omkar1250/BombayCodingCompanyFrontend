import React from 'react';
import { FooterLink2 } from '../data/footerLinks';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../App.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-offwhite  '>
            <div className='flex flex-wrap justify-between  gap-3 px-4'>
                {
                    FooterLink2.map((element, index) => (
                        <div key={index} className=' flex flex-col mt-10 mx-auto '>
                            <h1 className='text-lg font-semibold'>
                                {element.title}
                            </h1>
                            <div className=' gap-2 mt-2'>
                                {
                                    element.links.map((link, linkIndex) => (
                                        <div key={linkIndex} className='hover:text-bgblue'>
                                            <Link to={link.url}>{link.title}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='bg-offwhite mt-6'>
                <div className='text-center'>
                    <h3 className='mb-2 text-lg font-semibold'>Follow Us On</h3>
                    <div className='flex justify-center items-center gap-x-6'>
                        <FaInstagram size={28} className='text-bgblue  zoom-effect' />
                        <FaLinkedin size={28} className='text-bgblue  zoom-effect' />
                        <FaGithub size={28} className='text-bgblue  zoom-effect' />
                        <FaFacebook size={28} className='text-bgblue  zoom-effect' />
                    </div>
                </div>
            </div>
            <div className=' px-8 pl-3 mt-6 flex flex-col justify-center items-center '>
                <div className='mx-4 mb-3'>
                    <ul className='flex gap-x-4 text-sm'>
                        <li className='hover:text-bgblue'>
                            <Link to="/termsandcondition">Terms & Conditions</Link>
                        </li>
                        <li className='hover:text-bgblue '>
                            <Link to="/privacypolicy">Privacy Policy</Link>
                        </li>
                        <li className='hover:text-bgblue '>
                            <Link to="/cookiepolicy">Cookie Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className='mx-4 mb-3 text-center lg:text-left text-sm '>
                    © {currentYear} Bombay Coding Company. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
