
import './App.css';
import Appointment from './component/Appointment';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeTemplate from './component/subcomponent/HomeTemplate';
import Home from './component/subcomponent/Home';
import ContactUs from './component/subcomponent/ContactUs';
import AboutUs from './component/subcomponent/AboutUs';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Appointment/>}/>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
