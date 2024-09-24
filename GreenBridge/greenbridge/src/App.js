import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import RegLogin from './Pages/Authentication/RegLogin';
import './Login.css';
import Header from './components/Header';
import Admin from './Pages/Dashboard/Admin/Admin';
import ShgRegistration from './Pages/Dashboard/Shg/ShgRegistration';
import './Pages/Dashboard/Shg/ShgRegitration.css';
import Home from './Pages/Home/Home';
import LandingPage from './Pages/Home/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main>
      <Routes>
        
        {/* <Route path="/." element={<LandingPage/>}/> */}
        {/* <Route path="/shg" element={<ShgRegistration/>} />
        <<oute path="/admin" element={<Admin />} /> */}
        <Route path="/login" element={<RegLogin />} />
        <Route path="/signup" element={<RegLogin />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
