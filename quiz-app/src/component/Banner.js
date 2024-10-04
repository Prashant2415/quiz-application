import React from 'react'
import "../component/Banner.css"
import image1 from "../images/3398605.jpg"
const Banner = ({images}) => {
  console.log(images)
  return (
    <div className='banner-container'>
      <img className='banner-image' src={images}/>
    </div>
  )
}

export default Banner
