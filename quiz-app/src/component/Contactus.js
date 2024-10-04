import React, { useState } from 'react'

const Contactus = () => {
    const [details, setDetails] = useState({fullName:"", email:"", password:""});
    const [userDetails, setUserDetails] = useState(new Set());

    const handleInputChange =(e)=>{
        const {name, value} = e.target;
        setDetails((d)=>({...d,[name]: value}));
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        const detailsString = JSON.stringify(details);
        setUserDetails((ud)=> new Set(ud).add(detailsString));
        setDetails({fullName:"", email:"", password:""});
    }
    console.log(userDetails)
  return (
    <div>
      <form>
        <h1>Contact Details</h1>
        <input type='text' name='fullName' value={details.fullName} onChange={handleInputChange} placeholder='Enter your name'/><br/>
        <input type='email' name='email' value={details.email} onChange={handleInputChange} placeholder='Enter your email'/><br/>
        <input type='password' name='password' value={details.password} onChange={handleInputChange} placeholder='Enter your password'/><br/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Contactus
