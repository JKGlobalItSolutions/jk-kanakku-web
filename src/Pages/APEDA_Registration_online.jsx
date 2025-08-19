import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/APEDA_Registration_online/img1.png";
import img2 from "../assets/APEDA_Registration_online/img2.png";
import img3 from "../assets/APEDA_Registration_online/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const APEDA_Registration_online = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">Registration</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              APEDA Registration Online
            </li>
          </ol>
        </div>
      </nav>

      {/* Banner Image */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img1} alt="APEDA Registration Banner" className="img-fluid rounded" />
      </div>

      {/* Hero Section */}
      <div 
        style={{ fontFamily: "Montserrat, Arial, sans-serif", background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}
        className="py-5"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-6 mb-3">APEDA Registration Online</h1>
              <p className="fs-6 lh-lg">
                Step confidently into international markets with official APEDA Registration—your government-approved license to export Indian agricultural and food products worldwide. Whether you're an agriculture exporter, food processor, or spice trader, this registration is your gateway to global trade. At <span className="fw-bold text-warning">JK KANNAKU</span>, we handle everything from application preparation to securing your RCMC certificate—quickly and efficiently. With our expert support, you can focus on scaling your business while we take care of the compliance. Start exporting with confidence today.
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
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for APEDA Registration </h2>
<p>Duly filled and signed application form</p>
<p>Self-attested copy of the Import Export Code (IEC) certificate issued by the Directorate General of Foreign Trade (DGFT)</p>
<p>Bank certificate on the bank's letterhead confirming account details, duly signed by the bank</p>
<p>Bank statement of the firm’s account for the last two months</p>
<p>Cancelled cheque from the firm’s current bank account</p>
<p>List of directors/partners/proprietor on the company’s letterhead, with full names and designations</p>
            <img src={img2} alt="Documents" className="img-fluid rounded mt-3" />
          </div>

          {/* Right Form */}
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

      {/* Online Process */}
      <div className="container-fluid my-5">
         <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Online Process of APEDA Registration in India </h2>
<p><b>Step 1:</b> Access the APEDA Portal</p>
<p>Visit the official APEDA website at https://apeda.gov.in/RCMC and click "Get Started."</p>
<p>If you are an individual exporter, select "Register as Exporter (RCMC)."</p>
<p>If you are a partnership firm or business entity, choose "Register as a Unit."</p>
<p><b>Step 2:</b> Enter Basic Details</p>
<p>Provide your Import-Export Code (IEC), email address, and mobile number.</p>
<p>An OTP will be sent to your email and phone for verification.</p>
<p><b>Step 3:</b> Fill Out the Application Form</p>
<p>Complete the application form by entering all required information and uploading the necessary documents.</p>
<p><b>Step 4:</b> Pay the Registration Fee</p>
<p>Make the online payment of the registration fee.</p>
<p>Once payment is successful, you will receive an application number to track the status of your registration.</p>
<p><b>Step 5:</b> Verification & Certificate Issuance</p>
<p>APEDA will review your application and documents.</p>
<p>Upon successful verification, you will be issued a Registration-cum-Membership Certificate (RCMC), valid for five years.</p>





{/* heading 2 */}

<h3 style={{ color: "#8f5d13", fontWeight: "bold" }}>Renewal</h3>

<p>Log in to the APEDA Online Portal using login credentials</p>
<p>Once you log in, select the ‘Renewal’ option</p>
<p>Review the application and update any changes in the business information</p>
<p>Upload the documents:</p>
<p>Self-certified copy of the Import-Export Code (IEC)</p>
<p>Copy of the existing APEDA registration certificate</p>
<p>Updated Food Safety and Standards Authority of India (FSSAI) registration certificate, only if applicable</p>
<p>Pay the renewal fee of ₹5,000</p>
<p>Submit the renewal application along with documents. APEDA will issue the renewed RCMC, which can be downloaded from the portal</p>
      </div>

      {/* Bottom Banner */}
      <div className="container d-flex justify-content-center my-4">
        <img src={img3} alt="APEDA Registration" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default APEDA_Registration_online;
