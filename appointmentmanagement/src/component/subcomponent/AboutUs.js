import React  from 'react'
import { useLocation } from 'react-router-dom'

const AboutUs = () => {
    const getValue = useLocation();
    console.log("get value ", getValue?.state)
  return (
    <div>
      <h1>AboutUs</h1>
    </div>
  )
}

export default AboutUs
