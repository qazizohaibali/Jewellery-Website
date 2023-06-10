import React from 'react'
import pic from '../Assets/productpic.jpg'
import './blogs.css'
import {BsArrowRightShort} from 'react-icons/bs'


const blogs_cards = [{
    img:pic,
    heading:"Unveiling the Timeless Elegance",
    description:"Discover the Captivating Legacy of Tiffany's Iconic Jewellery",
    button:"Explore More"
},
{
    img:pic,
    heading:"The Art of Romance",
    description:"Explore Tiffany's Exquisite Engagement Rings",
    button:"Explore More"
},
{
    img:pic,
    heading:"From Red Carpets to Runways",
    description:"Exploring Tiffany's Extravagant High Jewelry Creations",
    button:"Explore More"
},
{
    img:pic,
    heading:"Beyond Diamonds",
    description:"Embark on a Journey through Tiffany's Gemstone Jewellery",
    button:"Explore More"
}]

export default function Blogs() {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <h1>WHATS NEWS</h1>
      <div className='grid grid-cols-2 '>
            <div>
                {
                    blogs_cards.map(({img,heading,description,button})=>{
                        return(
                        <div className='flex items-center'>
                                <img src={img} alt="BlogsImage" className='h-[100px]' />
                                <div>
                                    <h3>{heading}</h3>
                                    <h5>{description}</h5>
                                    <a href="/" className='flex items-center'>{button}
                                    <BsArrowRightShort size="1.5rem"></BsArrowRightShort>
                                    </a>
                                </div>
                        </div>)

                    })
                }
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={pic} alt="BlogImage" className='blogs_image max-h-[400px]' />
                <div className='blogs_div  text-[25px]'>TIFFANY LOCK</div>
            </div>
      </div>
    </div>
  )
}
