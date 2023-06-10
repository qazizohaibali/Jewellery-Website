import React from 'react'
import Button from './Button'
import {BsArrowRightShort} from 'react-icons/bs'
import product from '../Assets/productpic.jpg'
import './product.css'
export default function Products() {
  return (
    <div className='mx-auto px-[20px]  lg:px-0 max-w-[1140px]'>
      <h5>NEW COLLECTION</h5>
      <h1>FEEL LOVE PRODUCT</h1>
      <div className='grid grid-cols-1 gap-x-5 items-center md:grid-cols-2'> 
            <div className='flex justify-center '>
            <img src={product} alt="ProductImage"  className='productimage max-h-[400px] '/>
            </div>
            <div className='   content max-w-[450px]'>
                <h1 className='mb:text-[50px] text-[40px]'>NOW OPEN THE LANDMARK</h1>
                <p className='mt-[20px] mb-[30px]'>A legacy of brilliance continues with The Landmark. Discover a new Tiffany & Co. for a new era at 727 Fifth Avenue, New York</p>
               <Button ButtonName={`Learn More `} />
            </div>
      </div>
    </div>
  )
}
