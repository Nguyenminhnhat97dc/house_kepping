//import logo from './logo.svg';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
//import Header  from '../Components/header';
import Home from "./HomePage/Home";
import Introduce from "./IntroducePage/Introduce";
import Services from "./ServicesPage/Services";
import { Routes, Route   } from 'react-router-dom'
import StaffInformation from "./ServicesPage/StaffInformation"; 
import Login from "./Login/Login";
import StaffLogin from "./Login/StaffLogin";
import CustomerLogin from "./Login/CustomerLogin";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="services" element={<Services />} />
          <Route path="login" element={ <Login /> } />
          <Route path="services/staffInformation" element={<StaffInformation />} />
          <Route path="staffInformation"  element={ <StaffLogin />} />
          <Route path="customerInformation" element={ <CustomerLogin /> } />
          <Route path="checkLogin" element = { localStorage.getItem("links") === "staffInformation" ? < StaffLogin /> : <Home /> } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
