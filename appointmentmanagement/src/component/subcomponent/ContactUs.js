import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {

    
    const navigate = useNavigate();
    const name = "Prashant";
    const handleRedirect =(e)=>{
        e.preventDefault();
        navigate("/aboutus",{state: name})
    }
    return (
        <div>
            <h1>ContactUs</h1>
            <button onClick={handleRedirect}>Click</button>
            <a href='https://chatgpt.com/c/67016664-af8c-8007-a534-90d58e31ec4e'>Home</a>
        </div>
    )
}

export default ContactUs
