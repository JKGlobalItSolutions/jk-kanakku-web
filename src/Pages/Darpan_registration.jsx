import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/Darpan_registration/img1.png";
import img2 from "../assets/Darpan_registration/img2.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const Darpan_registration = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">
              Registration
            </li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              Darpan Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Banner Image */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img1} alt="" className="img-fluid" />
      </div>

      {/* Hero Section */}
      <div 
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)"
        }}
        className="py-5"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-5 mb-3">Darpan Registration</h1>
              <p className="fs-6 lh-lg">
                Make your NGO visible where it matters! Want to unlock government funding and CSR opportunities for your NGO? 
                Darpan Registration with NITI Aayog is the first step. It gives your trust, society, or Section 8 company official recognition 
                and puts you on the priority list for grants, partnerships, and more. We will help you every step of the way, from preparing documents 
                to completing the online application. Fast, compliant, and hassle-free registration so that you can focus on creating an impact!
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email*" className="form-control mb-3" />
                  <div className="d-flex mb-3">
                    <span className="px-3 py-2 bg-light border rounded-start">+91</span>
                    <input type="text" placeholder="Mobile Number*" className="form-control rounded-end" />
                  </div>
                  <button className="btn w-100 fw-bold text-white" style={{ backgroundColor: "#c46a2f" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element_2 />

      {/* Documents Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for Darpan Registration </h2>

<p><b>Registration Certificate of NGO: </b>PDF copy of the Society, Trust, or Section 8 Company registration certificate.</p>
<p><b>PAN of the Organization: </b>PAN card issued in the name of the organization, not the individual trustee or member.</p>
<p><b>Details of Key organization functions: </b>PAN, contact info, and designations of main office bearers (e.g., President, Secretary).</p>
<p><b>MOA, Trust Deed</b>, or by-laws, depending on the NGO type.</p>
<p><b>Annual Reports/Financials: </b>It is optional, but it shows credibility and past work.</p>
<p><b>Valid Email ID and Mobile Number</b> of the key signatory or responsible officer for OTP verification</p>
            <img src={img2} alt="Documents" className="img-fluid rounded mt-3" />
          </div>

          {/* Side Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4" style={{height:"300px"}}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="d-flex mb-3">
                    <input type="text" className="form-control" value="+91" style={{ maxWidth: "70px", background: "#eee" }} readOnly />
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#b85423", borderRadius: "1.5rem" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">

<h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Step-by-Step Guide to Register on ICEGATE Online</h2>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Follow the below-mentioned steps for ICEGATE Registration:</span></p>

<p><b>Step 1:</b> Visit the NGO-DARPAN Portal</p>
<p>Go to https://ngodarpan.gov.in.</p>
<p>Click “Sign Up” to create a new user account.</p>

<p><b>Step 2:</b> Enter Organizational Details</p>
<p>Provide your NGO’s PAN number, registration number, date of registration, and type of registration (e.g., Trust, Society, Section 8 Company).</p>
<p>Upload a PDF copy of the registration certificate and PAN card.</p>

<p><b>Step 3:</b> Add Office Bearers' Information</p>
<p>Enter the name, Aadhaar number, mobile number, and email ID of at least three key functionaries (e.g., President, Secretary, Treasurer).</p>
<p>Verify contact details using the OTP sent to the registered email and mobile number.</p>

<p><b>Step 4:</b> Create Login Credentials</p>
<p>Set a username and password for future logins.</p>
<p>Use these credentials to sign in to the portal.</p>

<p><b>Step 5:</b> Complete Profile Setup</p>
<p>Fill in the head office address.</p>
<p>List at least three governing body members with their designations and contact details.</p>
<p>Specify your NGO’s areas of work (e.g., Health, Education, Environment).</p>
<p>Upload necessary supporting documents.</p>

<p><b>Step 6:</b> Obtain Unique DARPAN ID</p>
<p>After successful verification, NITI Aayog will issue a Unique DARPAN ID—required for applying to government schemes and grants.</p>

<p><b>Step 7:</b> Submit and Await Approval</p>
<p>Submit your application for review.</p>
<p>Once approved, you will receive your Unique DARPAN ID (UD ID).</p>

<h3 style={{ color: "#8f5d13", fontWeight: "bold" }}>Darpan Registration and CSR Funding</h3>
<p>Under the Companies Act, 2013, companies are mandated to allocate a portion of their profits toward Corporate Social Responsibility (CSR) initiatives. To ensure that these funds are utilized effectively, many corporations collaborate with credible NGOs. In this framework, DARPAN registration becomes essential, as it helps establish that NGOs:</p>
<p>Are compliant with FCRA regulations (for receiving foreign contributions)</p>
<p>Adhere to government guidelines and statutory norms</p>
<p>Have submitted Form CSR-1, which is mandatory to receive CSR funds</p>
<p>Maintain clear objectives and measurable impact records</p>

<h3 style={{ fontWeight: "bold" }}>Common Issues and Mistakes During Darpan Registration</h3>
<p><b>PAN and Organization Name Don’t Match</b></p>
<p>The name on the PAN card must exactly match the name of the NGO; any discrepancy can lead to rejection.</p>

<p><b>Incorrect or Outdated Contact Details</b></p>
<p>Using wrong mobile numbers or email addresses can prevent successful OTP verification and communication.</p>

<p><b>Blurry or Wrong Documents Uploaded</b></p>
<p>Submitting unclear scans or uploading the wrong files can delay approval—always double-check before uploading.</p>

<p><b>Missing or Incomplete Governing Body Information</b></p>
<p>Make sure details of at least three key members (like name, designation, and contact info) are filled in completely.</p>

<p><b>Duplicate Registrations Using the Same PAN</b></p>
<p>Registering multiple times with the same PAN is not allowed and may cause issues.</p>

<p><b>Not Following Up on Submission Status</b></p>
<p>Don’t assume everything is fine—log in regularly to check for updates or requests for clarification.</p>

<p><b>Unverified or Unofficial Signatories</b></p>
<p>Only authorized personnel should handle the registration and document submission.</p>

<p><b>Failing to Update the Profile After Registration</b></p>
<p>Changes in address, leadership, or activities must be updated to keep the profile accurate and valid.</p>


</div>

      <Element_3 />
    </>
  );
};

export default Darpan_registration;
