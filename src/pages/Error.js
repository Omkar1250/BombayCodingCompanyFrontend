import React from 'react'
import CTAButton from '../Components/common/Homepage/Button'


const Error = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-y-5 text-3xl bg-bgblue opacity-80 text-yellow-50 h-screen font-bold'>
      
      <p>Error - 404 Page Not found</p>
      <CTAButton active={true} linkto={"/"}>
                  <div>Go Back To HomePage</div>
              </CTAButton>
     
    
      
    </div>
  )
}

export default Error
