import React from 'react'
import { ServicesLinks } from '../../data/servicesData'
import { Link } from 'react-router-dom'

export default function ServiceTemplate() {
  return (
    <div className='flex flex-col gap-y-6  text-richblack-700'>
      {
        ServicesLinks.map((link, index) => (
          <div key={index} >
              <ul >
                <li>
                <Link to={link.url}>
                  <div className='flex flex-row items-center justify-center gap-x-3'>
                 
                  <p className='font-semibold hover:text-bgblue'>{link.title}</p> <span><link.icon className='text-xl text-caribbeangreen-200'/></span>
                  
                  </div>
                  </Link>
                  <p className='text-sm text-richblack-800'>{link.description}</p>
                </li>
              </ul>
              
          </div>
        ))
      }
    </div>
  )
}
