import React from 'react'
import image2 from "../images/3398605.jpg"
import Banner from './Banner';
 const Home = () => {
  const imageValue = image2;
  return (
    <div>
      <Banner images={image2}/>
    </div>
  )
}

export default Home
