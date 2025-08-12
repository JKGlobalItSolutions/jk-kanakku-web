import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Company_registration from './Pages/Company_registration';
import Registration_online from './Pages/Registration_online';
import One_person_company_registration from './Pages/One_person_company_registration';
import Patnership_firm_registration from './Pages/Patnership_firm_registration';
import Sole_proprietorship_registration from './Pages/Sole_proprietorship_registration';
import Indian_subsidiary_company from './Pages/Indian_subsidiary_company';
import Startup_india_registration from './Pages/Startup_india_registration';
import Registration_of_section8company from './Pages/Registration_of_section8company';
import NGO_registration_online from './Pages/NGO_registration_online';
import Trust_registration from './Pages/Trust_registration';
import Society_registration from './Pages/Society_registration';
import Udyam_msme_registrtion from './Pages/Udyam_msme_registrtion';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='startup/Company_registration' element={<Company_registration/>}/>
        <Route path='startup/Registration_online' element={<Registration_online/>}/>
        <Route path='startup/One_person_company_registration' element={<One_person_company_registration/>}/>
        <Route path='startup/Patnership_firm_registration' element={<Patnership_firm_registration/>}/>
        <Route path='startup/Sole_proprietorship_registration' element={<Sole_proprietorship_registration/>}/>
        <Route path='startup/Indian_subsidiary_company' element={<Indian_subsidiary_company/>}/>
        <Route path='startup/Startup_india_registration' element={<Startup_india_registration/>}/>
        <Route path='startup/Registration_of_section8company' element={<Registration_of_section8company/>}/>
        <Route path='startup/NGO_registration_online' element={<NGO_registration_online/>}/>
        <Route path='startup/Trust_registration' element={<Trust_registration/>}/>
        <Route path='startup/Society_registration' element={<Society_registration/>}/>

        <Route path='registration/Udyam_msme_registrtion' element={<Udyam_msme_registrtion/>}/>
        
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App
