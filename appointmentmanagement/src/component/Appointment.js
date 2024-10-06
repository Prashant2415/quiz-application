import React, { useState } from 'react';
import "../component/Appointment.css";
const Appointment = () => {
    const [appointment, setAppointment] = useState({ fullname: "", phoneNumber: "", date: "" });
    const [appointmentList, setAppointmentList] = useState([]);
    const [currentId , setCurrentId] = useState(null);
    const [updateToggle, setUpdateToggle] = useState(false);
    //handle user input
    const handleAppointmentInput = (event) => {
        const {name, value} = event.target;
        setAppointment({...appointment,[name]: value});
    }
    //handle add appointment
    const handleAddAppointment = (event) => {
        event.preventDefault();
        setAppointmentList([...appointmentList,{id: appointmentList.length + 1, ...appointment}]);
        setAppointment({ fullname: "", phoneNumber: "", date: "" });
    }

    //handle update list
    const handleUpdateList = (updateDetails) => {
        setAppointment({fullname: updateDetails.fullname, phoneNumber: updateDetails.phoneNumber, date: updateDetails.date})
        setCurrentId(updateDetails.id);
        setUpdateToggle(true);
    }

    const submitUpdateListData =(e)=>{
        e.preventDefault();
        setAppointmentList(appointmentList.map((al)=> al.id === currentId ? {...appointmentList, ...appointment} : appointmentList));
        setAppointment({ fullname: "", phoneNumber: "", date: "" });
        setCurrentId(null);
        setUpdateToggle(false);
    }

    //handle specific delete
    const handleSpecificDelete =(deleteId)=>{
        setAppointmentList(appointmentList.filter((f)=> f.id !== deleteId));
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
                                        <div className='inner-container' key={list.id}>
                                            <div className='list-container' >
                                                <p className='list-value'>{list.fullname}</p>
                                                <p className='list-value'>{list.phoneNumber}</p>
                                                <p className='list-value'>{list.date}</p>
                                            </div>
                                            <div className='button-container'>
                                                <button className='list-button' onClick={() => { handleUpdateList(list) }}>Edit</button>
                                                <button className='list-button' onClick={() => { handleSpecificDelete(list.id) }}>Delete</button>
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
