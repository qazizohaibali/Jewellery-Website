import React from 'react'
import './button.css'

export default function Button(props) {
  return (
    <div className='flex button  justify-center  rounded-xl h-[40px]  w-[150px]  bg-[#5cf3e4]  items-center '>

    <div className=''>
     {props.ButtonName}
     
    </div>
    </div>
  )
}
