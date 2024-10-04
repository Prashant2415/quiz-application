import React from 'react'
import { Link } from 'react-router-dom'

const Template = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/product">Product</Link>
    </div>
  )
}

export default Template
