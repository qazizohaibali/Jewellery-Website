import React from 'react'
import './newsletter.css'
export default function Newsletter() {
  return (
    <div className='flex mx-auto flex-col justify-center items-center max-w-[600px]'>
      <h1 className='text-[40px] font-medium'>SUBSCRIBE OUR NEWSLETTER</h1>
      <p className='mt-[20px] mb-[30px] text-center mx-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quis, asperiores repellendus quas omnis minima ipsum dolor sit amet consectetur.</p>
      <div className='flex'>
        <input type="text" className='pl-[10px] news_input' placeholder='Enter Your Email' />
        <div className='input_btn bg-[#5cf3e4] text-white font-semibold'>SUBSCRIBE</div>
      </div>
    </div>
  )
}
