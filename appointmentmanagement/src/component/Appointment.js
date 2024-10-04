import React, { useState } from 'react';
import "../component/Appointment.css";
const Appointment = () => {
    const [appointment, setAppointment] = useState({ fullname: "", phoneNumber: "", date: "" });
    const [appointmentList, setAppointmentList] = useState([]);

    const [updateToggle, setUpdateToggle] = useState(false);
    //handle user input
    const handleAppointmentInput = (event) => {
        const { name, value } = event.target;
        setAppointment((appoint) => ({ ...appoint, [name]: value }));
    }

    //handle add appointment
    const handleAddAppointment = (event) => {
        event.preventDefault();
        setAppointmentList((list) => [...list, appointment])
        setAppointment({ fullname: "", phoneNumber: "", date: "" });
    }

    //handle update list
    const handleUpdateList = (index) => {
        console.log(index);
        setUpdateToggle(true)
    }

    //handle specific delete
    const handleSpecificDelete =(index)=>{
        console.log(index)
        const deleteSpecific = [...appointmentList];
        deleteSpecific.splice(index,1);
        setAppointmentList(deleteSpecific)
    }

    const submitUpdateListData =()=>{
        setUpdateToggle(false)
    }
    return (
        <div className='container'>
            <h1 className='title'>Appointment Management System</h1>
            <div className='main-container'>
                {updateToggle === true ? (
                    <div className='form-container'>
                        <form className='form'>
                        <label className='label-tag'>Full Name</label><br />
                        <input className='form-input' type='text' name='fullname' value={appointment.fullname} onChange={handleAppointmentInput} placeholder='Enter your full name' /><br />
                        <label className='label-tag'>Appointment Date</label><br />
                        <input className='form-input' type='date' name='date' value={appointment.date} onChange={handleAppointmentInput} placeholder='Enter your appointment Date' /><br />
                        <button className='add-appointment-button' onClick={submitUpdateListData}>Update</button>
                        </form>
                    </div>
                ) : (
                    <div className='form-container'>
                    <form className='form'>
                        <label className='label-tag'>Full Name</label><br />
                        <input className='form-input' type='text' name='fullname' value={appointment.fullname} onChange={handleAppointmentInput} placeholder='Enter your full name' /><br />
                        <label className='label-tag'>Phone Number</label><br />
                        <input className='form-input' type='tel' name='phoneNumber' value={appointment.phoneNumber} onChange={handleAppointmentInput} placeholder='Enter your phone number' /><br />
                        <label className='label-tag'>Appointment Date</label><br />
                        <input className='form-input' type='date' name='date' value={appointment.date} onChange={handleAppointmentInput} placeholder='Enter your appointment Date' /><br />
                        <button className='add-appointment-button' onClick={handleAddAppointment}>Add Appointment</button>
                    </form>
                </div>
                )}
                <div className='result-container'>
                    <div className='appointment-schedules'>
                        <h1 className='title-appointment-schedule'>Appointment scheduled</h1>
                        <div className='display-schedule'>
                            <div className='display-appointment-heading'>
                                <p className='appointment-heading'>Full Name</p>
                                <p className='appointment-heading'>Phone Number</p>
                                <p className='appointment-heading'>Appointment Date</p>
                            </div>
                            <div className='display-appointment-values'>
                                {appointmentList?.map((list, index) => {
                                    return (
                                        <div className='inner-container' key={index}>
                                            <div className='list-container' >
                                                <p className='list-value'>{list.fullname}</p>
                                                <p className='list-value'>{list.phoneNumber}</p>
                                                <p className='list-value'>{list.date}</p>
                                            </div>
                                            <div className='button-container'>
                                                <button className='list-button' onClick={() => { handleUpdateList(index+1) }}>Edit</button>
                                                <button className='list-button' onClick={() => { handleSpecificDelete(index+1) }}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment
