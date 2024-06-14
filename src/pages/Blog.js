import React from 'react'
import CTAButton from '../Components/common/Homepage/Button'
export default function Blog() {
  return (
    <div className='flex justify-center items-center flex-col gap-y-5 text-3xl bg-bgblue opacity-80 text-yellow-50 h-screen font-bold'>
      
      <p>No Post found</p>
      <CTAButton active={true} linkto={"/"}>
                  <div>Go Back To HomePage</div>
              </CTAButton>
     
    
      
    </div>
  )
}
