import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HomeTemplate = () => {

  const [details, setDetails] = useState({ fullName: "", email: "", password: "" });
  const [userDetails, setUserDetails] = useState([]);
  const [toogleUpdate, setToggleUpdate] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const handleInput = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserDetails([...userDetails, { id: userDetails.length + 1, ...details }]);
    setDetails({ fullName: "", email: "", password: "" });
  }
  console.log(userDetails);

  const handleUpdate = (updateDetails) => {
    console.log("Update details", updateDetails)
    setDetails({fullName: updateDetails.fullName, email: updateDetails.email, password: updateDetails.password})
    setCurrentId(updateDetails.id)
    setToggleUpdate(true);

  }

  const handleUpdateButton=(e)=>{
    e.preventDefault();
    setUserDetails(userDetails.map((ud)=> ud.id === currentId ? {...userDetails,...details} : userDetails));
    setDetails({ fullName: "", email: "", password: "" });
    setCurrentId(null);
    setToggleUpdate(false);

  }

  const handleDeleteSpecific = (deleteId) => {
    console.log("delete id ", deleteId)
    setUserDetails(userDetails.filter((f) => f.id !== deleteId));
  }

  const handleClearAll =(e)=>{
    e.preventDefault();
    setDetails({ fullName: "", email: "", password: "" });
    setUserDetails([]);
  }
  return (
    <div>
      <h1>Home Templates</h1>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/contactus">Contact us</Link>
        <Link to="/aboutus">About us</Link>
      </div> */}
      {toogleUpdate === true ? (
        <div>
          <form>
            <input type='text' name='fullName' value={details.fullName} onChange={handleInput} placeholder='Enter your name' /><br />
            <input type='email' name='email' value={details.email} onChange={handleInput} placeholder='Enter your email' /><br />
            <input type='password' name='password' value={details.password} onChange={handleInput} placeholder='Enter your password' /><br />
            <button onClick={handleUpdateButton}>Update</button>
          </form>
        </div>
      ) : (
        <div>
          <form>
            <input type='text' name='fullName' value={details.fullName} onChange={handleInput} placeholder='Enter your name' /><br />
            <input type='email' name='email' value={details.email} onChange={handleInput} placeholder='Enter your email' /><br />
            <input type='password' name='password' value={details.password} onChange={handleInput} placeholder='Enter your password' /><br />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      )
      }

      <div>
        {userDetails.map((ud) => {
          return (
            <div style={{ display: "flex", gap: '2rem', alignItems: "center" }} key={ud.id}>
              <p style={{ width: "5rem" }}>{ud.id}</p>
              <p style={{ width: "15rem" }}>{ud.fullName}</p>
              <p style={{ width: "15rem" }}>{ud.email}</p>
              <p style={{ width: "10rem" }}>{ud.password}</p>
              <div style={{ display: "flex" }}>
                <button onClick={() => { handleUpdate(ud) }}>Update</button>
                <button onClick={() => { handleDeleteSpecific(ud.id) }}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={handleClearAll}>Clear all</button>
      </div>
    </div>
  )
}

export default HomeTemplate
