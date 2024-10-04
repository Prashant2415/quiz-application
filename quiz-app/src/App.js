import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Banner from './component/Banner';
import Contactus from './component/Contactus';
import Home from './component/Home';
import Product from './component/Product';
import Quiz from './component/Quiz';
import Template from './component/Template';
import FAQComponent from './component/Dummy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FAQComponent/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
     );
}

export default App;
