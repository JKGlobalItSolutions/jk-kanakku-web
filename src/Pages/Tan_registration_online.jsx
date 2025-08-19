import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/Tan_registration_online/img1.png";
import img2 from "../assets/Tan_registration_online/img2.png";
import img3 from "../assets/Tan_registration_online/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const Tan_registration_online = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2 shadow-sm">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">Taxation</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              TAN Registration Online
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="TAN Registration" className="img-fluid rounded" />
      </div>

      {/* Hero Section with Gradient */}
      <div className="py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-5">TAN Registration Online</h1>
              <p className="fs-5 lh-lg">
                If you're required to deduct or collect tax at source, obtaining a Tax Deduction and Collection Account Number (TAN) is mandatory under Indian tax laws. JK Kanakku offers end-to-end online TAN registration services to help you meet compliance requirements with ease. Our experienced professionals handle the entire application process, ensuring accuracy and quick turnaround. Get your TAN registered effortlessly and stay compliant — partner with JK Kanakku today!
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email *" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number *" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#c46a2f" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element_2 />

      {/* Documents Required Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for TAN Registration </h2>

<p><b>While there is no fixed list of documents required for TAN registration, you must provide the following essential details when applying:</b></p>
<p>Full Name and Address of the applicant</p>
<p>Type of Entity – such as Individual, Company, Partnership Firm, etc.</p>
<p>PAN Card Information of the applicant</p>
<p>Contact Details – including a valid Email ID and Mobile Number</p>
<p>Authorized Signatory Information (for companies or firms)</p>
<p>Providing accurate details ensures smooth and timely processing of your TAN application.</p>
            <img src={img2} alt="TAN Documents" className="img-fluid rounded mt-3" />
          </div>

          {/* Right Sidebar Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4" style={{height:"300px"}}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#b85423" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAN Registration Process */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>TAN Registration Process in India </h2>
<p><b>How to Apply for TAN Online:</b></p>
<p>Access the NSDL Website: Visit https://tin.tin.nsdl.com.</p>
<p>Navigate to TAN Application: Choose ‘Online Application for TAN’ (Form 49B). Scroll down to ‘Apply for New TAN’ and pick the relevant category from the eight options. If you have a Digital Signature Certificate (DSC), select the ‘Category of Deductors.’</p>
<p>Complete Form 49B: Fill in all mandatory fields such as entity type, PAN, and business information.</p>
<p>Make the Payment: The application fee is ₹77 (₹65 plus 18% GST), payable via debit/credit card, net banking, demand draft, or cheque.</p>
<p>Submit Your Application: After submitting, you will receive a 14-digit Acknowledgement Number.</p>
<p>Print and Send Acknowledgement: Print the acknowledgment form, sign it, and mail it to the NSDL e-Governance office for processing.</p>
<p><b>How to Apply for TAN Offline:</b></p>
<p>Get Form 49B: Pick up the form from your nearest TIN Facilitation Center (TIN-FC).</p>
<p>Fill Out the Form: Provide the required information carefully.</p>
<p>Attach Supporting Documents: Include necessary documents like PAN and business proofs.</p>
<p>Submit at TIN-FC: Submit the filled form along with the application fee at the center.</p>
<p>Receive TAN: After verification, TAN will be allotted and sent to you by post.</p>
      </div>

      {/* Closing Image */}
      <div className="container text-center my-4">
        <img src={img3} alt="TAN Process" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default Tan_registration_online;
