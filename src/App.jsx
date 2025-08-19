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
import Iec_registration from './Pages/Iec_registration';
import FSSAI_registration from './Pages/FSSAI_registration';
import Shop_establishment_license from './Pages/Shop_establishment_license';
import ISO_registration_online from './Pages/ISO_registration_online';
import Professional_tax_registration from './Pages/Professional_tax_registration';
import Digital_signature_certificate from './Pages/Digital_signature_certificate';
import FCRA_registrationn from './Pages/FCRA_registrationn';
import EightyG_12A_registration from './Pages/80G_12A_registration';
import TwelveAA_registration from './Pages/TwelveAA_registration';
import ICEGATE_registration from './Pages/ICEGATE_registration';
import Darpan_registration from './Pages/Darpan_registration';
import LEI_code_registration from './Pages/LEI_code_registration';
import APEDA_Registration_online from './Pages/APEDA_Registration_online';
import Apply_FSSAI_license_online from './Pages/Apply_FSSAI_license_online';
import Digital_signature_DGFT_version from './Pages/Digital_signature_DGFT_version';
import RCMC_registration from './Pages/RCMC_registration';
import GST_registration_online from './Pages/GST_registration_online';
import GST_LUT_filing from './Pages/GST_LUT_filing';
import GST_registration_cancellation from './Pages/GST_registration_cancellation';
import GST_Advisory_services from './Pages/GST_Advisory_services';
import GST_revocation_online from './Pages/GST_revocation_online';
import GST_return_filing from './Pages/GST_return_filing';
import GST_annual_return_filing from './Pages/GST_annual_return_filing';
import GST_invoicing_and_filing_software from './Pages/GST_invoicing_and_filing_software';
import GST_notice_reply from './Pages/GST_notice_reply';
import GST_registration_foreigners from './Pages/GST_registration_foreigners';
import GST_registration_amendment from './Pages/GST_registration_amendment';
import Income_tax_return_filing from './Pages/Income_tax_return_filing';
import TDS_return_filing from './Pages/TDS_return_filing';
import PF_return_filing from './Pages/PF_return_filing';
import ESI_return_filing from './Pages/ESI_return_filing';
import PT_return_filing from './Pages/PT_return_filing';
import Income_tax_notice_reply from './Pages/Income_tax_notice_reply';
import Tan_registration_online from './Pages/Tan_registration_online';
import Business_tax_filing from './Pages/Business_tax_filing';


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
        <Route path='registration/Iec_registration' element={<Iec_registration/>}/>
        <Route path='registration/FSSAI_registration' element={<FSSAI_registration/>}/>
        <Route path='registration/Shop_establishment_license' element={<Shop_establishment_license/>}/>
        <Route path='registration/ISO_registration_online' element={<ISO_registration_online/>}/>
        <Route path='registration/Professional_tax_registration' element={<Professional_tax_registration/>}/>
        <Route path='registration/Digital_signature_certificate' element={<Digital_signature_certificate/>}/>
        <Route path='registration/FCRA_registrationn' element={<FCRA_registrationn/>}/>
        <Route path='registration/EightyG_12A_registration' element={<EightyG_12A_registration/>}/>
        <Route path='registration/TwelveAA_registration' element={<TwelveAA_registration/>}/>
        <Route path='registration/ICEGATE_registration' element={<ICEGATE_registration/>}/>
        <Route path='registration/Darpan_registration' element={<Darpan_registration/>}/>
        <Route path='registration/LEI_code_registration' element={<LEI_code_registration/>}/>
        <Route path='registration/APEDA_Registration_online' element={<APEDA_Registration_online/>}/>
        <Route path='registration/Apply_FSSAI_license_online' element={<Apply_FSSAI_license_online/>}/>
        <Route path='registration/Digital_signature_DGFT_version' element={<Digital_signature_DGFT_version/>}/>
        <Route path='registration/RCMC_registration' element={<RCMC_registration/>}/>


        <Route path='gst/GST_registration_online' element={<GST_registration_online/>}/>
        <Route path='gst/GST_LUT_filing' element={<GST_LUT_filing/>}/>
        <Route path='gst/GST_registration_cancellation' element={<GST_registration_cancellation/>}/>
        <Route path='gst/GST_Advisory_services' element={<GST_Advisory_services/>}/>
        <Route path='gst/GST_revocation_online' element={<GST_revocation_online/>}/>
        <Route path='gst/GST_return_filing' element={<GST_return_filing/>}/>
        <Route path='gst/GST_annual_return_filing' element={<GST_annual_return_filing/>}/>
        <Route path='gst/GST_invoicing_and_filing_software' element={<GST_invoicing_and_filing_software/>}/>
        <Route path='gst/GST_notice_reply' element={<GST_notice_reply/>}/>
        <Route path='gst/GST_registration_foreigners' element={<GST_registration_foreigners/>}/>
        <Route path='gst/GST_registration_amendment' element={<GST_registration_amendment/>}/>


        <Route path='taxation/Income_tax_return_filing' element={<Income_tax_return_filing/>}/>
        <Route path='taxation/TDS_return_filing' element={<TDS_return_filing/>}/>
        <Route path='taxation/PF_return_filing' element={<PF_return_filing/>}/>
        <Route path='taxation/ESI_return_filing' element={<ESI_return_filing/>}/>
        <Route path='taxation/PT_return_filing' element={<PT_return_filing/>}/>
        <Route path='taxation/Income_tax_notice_reply' element={<Income_tax_notice_reply/>}/>
        <Route path='taxation/Tan_registration_online' element={<Tan_registration_online/>}/>
        <Route path='taxation/Business_tax_filing' element={<Business_tax_filing/>}/>
        
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App
