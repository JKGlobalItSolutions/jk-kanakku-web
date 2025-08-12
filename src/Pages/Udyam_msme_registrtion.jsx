import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/Udyam_msme_registrtion/img1.png";
import img3 from "../assets/Udyam_msme_registrtion/img3.png";
import Element_2 from '../components/Element_2';
import Element_3 from '../components/Element_3';

const Udyam_msme_registrtion = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2 border-bottom">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="fw-bold text-dark text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">
              Registration
            </li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              Udyam MSME Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container my-4">
        <div className="text-center">
          <img src={img1} alt="Udyam MSME" className="img-fluid" />
        </div>
      </div>

      <div className="py-4" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-8 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>Udyam MSME Registration</h1>
              <div className="mb-3" style={{ fontSize: 15 }}>
                &#9654; Simplify your Udyam MSME Registration with <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span> experts - Unlock government benefits, loans and more
              </div>
              <div style={{ fontSize: 16, lineHeight: "2" }}>
                <div>&#9654; We understand the unique needs of MSMEs and offer customized registration services to fit your business type and industry</div>
                <div>&#9654; Our experts will handle the entire registration process, ensuring your application is completed accurately and submitted efficiently</div>
                <div>&#9654; Register now and avail of exclusive benefits!</div>
              </div>
            </div>

            {/* Right form card */}
            <div className="col-lg-4">
              <div className="bg-white rounded shadow p-4">
                <h5 className="fw-bold mb-3">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-2" placeholder="Name *" />
                  <input type="email" className="form-control mb-2" placeholder="Email*" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="text" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button className="btn w-100 fw-bold" style={{ background: "#c46a2f", color: "white" }}>Get Start Now &gt;</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <Element_2 />

      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left content */}
          <div className="col-lg-8">
            
            
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for the Udyam Registration</h2>
<h3 style={{ fontWeight: "bold" }}>1. Aadhar Card</h3>
<p>For a sole proprietorship, the business owner's Aadhaar card will be used. </p>
<p>For a partnership firm or LLP, the Aadhaar cards of the managing, authorized, or designated partners shall be used. </p>
<p>For private or Public Limited Companies, authorized signatory Aadhaar cards shall be used</p>

<h3 style={{ fontWeight: "bold" }}>2.Business Address Proof</h3>
<h3 style={{ fontWeight: "bold" }}>3. Certificate of Incorporation for the company, Partnership Deed, and LLP Agreement for the partnership firms</h3>
<h3 style={{ fontWeight: "bold" }}>4. Business Account details of the authorized signatory</h3>
<h3 style={{ fontWeight: "bold" }}>5. Detail the nature of business activity</h3>
<h3 style={{ fontWeight: "bold" }}>6. National Industrial Classification Code</h3>
<h3 style={{ fontWeight: "bold" }}>7. Investment & Turnover Details</h3>

<h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Online Process of Udyam MSME Registration in India</h2>
<p>Step 1: Visit the Official Udyam Registration Portal at https://udyamregistration.gov.in/</p>
<p>Step 2: Choose the appropriate registration option: On the homepage, you will find options for new entrepreneurs and those already having Udyog Aadhaar registrations. If you are a new entrepreneur, click on the option labeled "For New Entrepreneurs who are not Registered yet as MSME or those with EM-II."</p>
<p>Step 3: On the portal, enter your Aadhaar Details. After entering the details, click on "Validate & Generate OTP." An OTP (One-Time Password) will be sent to your registered mobile number linked with Aadhaar. Enter this OTP to verify the details</p>
<p>Step 4: Enter your PAN details</p>
<p>Step 5: Enter the details of your business:</p>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Enterprise Name:</span></p>
<p>Enter the official legal name of your business.</p>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Type of Organization:</span></p>
<p>Select the appropriate category — e.g., Proprietorship, Partnership, LLP, Private Limited Company, etc.</p>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Business Address:</span></p>
<p>Provide the primary location where your business operates.</p>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Date of Commencement of Business:</span></p>
<p>Specify the date on which your business began operations.</p>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Previous Registration Details:</span></p>
<p>If your business was previously registered under EM-II or UAM, please provide the relevant details.</p>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Bank Details:</span></p>
<p>Enter your enterprise’s bank account information, including the IFSC code.</p>

<p>Step 6: Select the primary activity of your business and select the appropriate National Industrial Classification (NIC) Code that corresponds to your business activity</p>
<p>Step 7: Enter the Investment and Turnover Details of your business</p>
<p>Step 8: Submit the details and generate the OTP</p>
<p>After completing all the required fields, accept the declaration provided at the end of the form. Then, click on "Submit and Get Final OTP." An OTP will be sent to your registered mobile number. Enter the OTP to complete the registration process. Upon successful verification, you will receive your Udyam Registration Number (URN). The registration certificate will include a QR code that links directly to your enterprise's details on the Udyam portal</p>



<h3 style={{ fontWeight: "bold" }}>2.Business Address Proof</h3>

<p>Incorrect Aadhaar Details:</p>
<p>Ensure the Aadhaar number and associated information are accurate and match official records</p>
<p>Mismatched PAN Information:</p>
<p>Verify that the PAN details correspond exactly with those on official business documents.</p>
<p>Wrong NIC Code Selection:</p>
<p>Select the appropriate National Industrial Classification (NIC) code that accurately represents your business activity.</p>
<p>Inaccurate Investment and Turnover Figures:</p>
<p>Provide correct and up-to-date figures for investment in plant/machinery and your business’s annual turnover.</p>
<p>Multiple Registrations:</p>
<p>Register your enterprise only once. Multiple registrations can lead to discrepancies and potential disqualification.</p>
<p>Incorrect Contact Information:</p>
<p>Use an active mobile number linked to Aadhaar and a valid, accessible email address to receive important updates.</p>
<p>Not Retaining the Udyam Registration Number:</p>
<p>Keep a record of your Udyam Registration Number (URN) for future reference and verification.</p>
<p>Ignoring GSTIN Requirements:</p>
<p>If your business is required to have a GSTIN, ensure it is obtained and correctly entered during registration.</p>
<p>Overlooking the Free Nature of Registration:</p>
<p>Remember that Udyam Registration is completely free. Avoid any third-party services that charge a fee.</p>
          </div>

          {/* Right form card */}
          <div className="col-lg-4">
            <div className="card shadow border-0 rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="d-flex mb-3">
                    <input type="text" value="+91" className="form-control me-2" style={{ maxWidth: "70px", background: "#eee" }} readOnly />
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold" style={{ background: "#b85423", color: "white", borderRadius: "1.5rem" }}>Get Start Now &gt;</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-4">
        <img src={img3} alt="Additional Info" className="img-fluid" />
      </div>


      <Element_3/>
    </>
  );
};

export default Udyam_msme_registrtion;
