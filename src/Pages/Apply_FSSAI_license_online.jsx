import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Apply_FSSAI_license_online/img1.png";
import img3 from "../assets/Apply_FSSAI_license_online/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const Apply_FSSAI_license_online = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="text-decoration-none fw-bold text-dark"
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">Registration</li>
            <li
              className="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              Apply FSSAI License Online
            </li>
          </ol>
        </div>
      </nav>

      {/* Banner Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="" className="img-fluid w-100 rounded" />
      </div>

      {/* Hero Section with Gradient */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
        className="py-5"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-6 mb-3">
                Apply FSSAI License Online
              </h1>
              <ul className="list-unstyled fs-6 lh-lg">
                <li>
                  &#9654; Running a food business in India? Obtaining an FSSAI
                  license is a legal necessity—no food business can operate
                  without it.
                </li>
                <li>
                  &#9654; From identifying the correct license type (Basic,
                  State, or Central) to compiling documents and submitting your
                  application, our team ensures a smooth, hassle-free process.
                </li>
                <li>
                  &#9654; Stay compliant. Build trust. Grow your business with
                  confidence.
                </li>
              </ul>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Name *"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Email *"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <span className="px-3 d-flex align-items-center bg-light border rounded-start">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      className="form-control border-start-0 rounded-end"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold text-white"
                    style={{ background: "#c46a2f" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Element Section */}
      <Element_2 />

      {/* Documents Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required to Apply for an FSSAI License </h2>

<p>Identity Proof of the Proprietor/Owner</p>
<p>Aadhaar Card, PAN Card, or Voter ID</p>
<p>Address Proof of Business Premises</p>
<p>Utility bill, rental agreement, lease agreement, property tax receipt, or electricity bill (last two months)</p>
<p>Photograph</p>
<p>A recent passport-size photograph of the business owner</p>
<p>Proof of Business Registration</p>
<p>Partnership Deed, Company Incorporation Certificate, or any valid registration proof</p>
<p>Aadhaar card, PAN card, or Voter ID of the proprietor/owner.</p>
<p>A recent photograph of the business owner.</p>
<p>Proof of business registration, such as a Partnership Deed or a Company Incorporation Certificate.</p>
<p>Completed Application Form B in which the business information is detailed.</p>
<p>A detailed layout showing the production area, storage, and processing units.</p>
<p>A clear inventory of the products you manufacture, process, or sell.</p>
<p>List of Machinery and Equipment.</p>
<p>No Objection Certificate (NOC) from Local Authorities.</p>
          </div>

          {/* Right Form Card */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Name *"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Email *"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <span className="px-3 d-flex align-items-center bg-light border rounded-start">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      className="form-control border-start-0 rounded-end"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn fw-bold w-100 text-white"
                    style={{ background: "#b85423" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Section */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Step-by-Step Process for Obtaining an FSSAI License Online </h2>
<p><b>Step 1: Determine Your Eligibility</b></p>
<p>Choose the appropriate license type based on your business turnover and operations:</p>
<p>Basic Registration: For businesses with an annual turnover up to ₹12 lakh.</p>
<p>State License: For businesses with a turnover between ₹12 lakh and ₹20 crore.</p>
<p>Central License: For turnover above ₹20 crore, or if operating in multiple states, or engaged in import/export of food products.</p>
<p><b>Step 2: Gather Required Documents</b></p>
<p>Prepare the necessary documents based on your license type. These typically include:</p>
<p>Identity and address proof of the proprietor/owner</p>
<p>Business registration proof</p>
<p>Recent passport-sized photograph</p>
<p>Proof of business premises (utility bills, rental agreements, etc.)</p>
<p><b>Step 3: Register on the FoSCoS Portal</b></p>
<p>Visit the FoSCoS Portal and register by entering your basic details.</p>
<p>Log in with your credentials and select “Apply for New License/Registration.”</p>
<p>Choose your state of operation and the appropriate license type based on turnover and business structure.</p>
<p><b>Step 4: Complete the Application Form</b></p>
<p>Fill out the correct form:</p>
<p>Form A – For Basic Registration</p>
<p>Form B – For State and Central Licenses</p>
<p>Provide accurate information such as:</p>
<p>Business name and address</p>
<p>Contact details</p>
<p>List of food products</p>
<p>Operational timelines</p>
<p>Validity period (1 to 5 years)</p>
<p><b>Step 5: Upload Supporting Documents</b></p>
<p>Upload the required documents, including identity proof, address proof, and other relevant certificates, depending on your business category.</p>
<p><b>Step 6: Pay the Fee Online</b></p>
<p>Pay the applicable fee online as per the fee structure provided on the FoSCoS portal.</p>
<p><b>Step 7: Verification and Inspection</b></p>
<p>After submission:</p>
<p>The FSSAI will review your application.</p>
<p>For State and Central licenses, a physical inspection of your premises may be conducted to ensure food safety compliance.</p>
<p><b>Step 8: Receive Your FSSAI License/Registration Certificate</b></p>
<p>Once approved, you’ll receive a 14-digit FSSAI license or registration number.</p>
<p>This must be clearly displayed at your business location and on all food packaging.</p>
<p><b>Step 9: Stay Compliant and Renew Timely</b></p>
<p>Regularly monitor your operations for compliance with FSSAI regulations.</p>
<p>Annual returns are required for certain license holders.</p>
<p>Renew your license at least 90 days before expiry to avoid penalties or suspension.</p>
      </div>

      {/* Closing Image */}
      <div className="container text-center">
        <img src={img3} alt="" className="img-fluid w-100 rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default Apply_FSSAI_license_online;
