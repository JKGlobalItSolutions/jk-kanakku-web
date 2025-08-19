import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/ICEGATE_registration/img1.png";
import img3 from "../assets/ICEGATE_registration/img2.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const ICEGATE_registration = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="text-decoration-none fw-bold"
                style={{ color: "black" }}
              >
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item fw-bold"
              style={{ color: "black" }}
            >
              Registration
            </li>
            <li
              className="breadcrumb-item active fw-bold"
              style={{ color: "black" }}
              aria-current="page"
            >
              ICEGATE Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Banner Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="" className="img-fluid" />
      </div>

      {/* Intro Section */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
        className="py-5"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-6 mb-3">ICEGATE Registration</h1>
              <p>
                &#9654; Register on ICEGATE (Indian Customs Electronic Gateway)
                to access essential import-export services and ensure smooth
                customs compliance under the Indian Customs EDI System.
              </p>

              <div>
                <p className="fw-semibold text-warning">
                  We provide end-to-end assistance, including:
                </p>
                <ul className="list-unstyled">
                  <li className="fw-semibold text-warning">
                    Digital Signature Certificate (DSC) setup
                  </li>
                  <li className="fw-semibold text-warning">
                    ICEGATE user account creation
                  </li>
                  <li className="fw-semibold text-warning">
                    Document filing and submission support
                  </li>
                  <li className="fw-semibold text-warning">EXIM Businesses</li>
                  <li className="fw-semibold text-warning">
                    Customs House Agents (CHA)
                  </li>
                  <li className="fw-semibold text-warning">
                    Freight forwarders and logistics companies
                  </li>
                </ul>
              </div>

              <p>
                &#9654; Ensure 100% accurate registration with our expert
                guidance and stay compliant with all customs regulations.
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div
                className="bg-white p-4 rounded-3 shadow"
                style={{ minHeight: "100%" }}
              >
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="form-control mb-3"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="form-control mb-3"
                  />
                  <div className="d-flex mb-3">
                    <span
                      className="px-3 d-flex align-items-center bg-light border border-end-0 rounded-start"
                      style={{ fontWeight: 600 }}
                    >
                      +91
                    </span>
                    <input
                      type="text"
                      placeholder="Mobile Number*"
                      className="form-control border-start-0 rounded-end"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold text-white"
                    style={{ backgroundColor: "#c46a2f" }}
                  >
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
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for ICEGATE Registration </h2>
<p>Class 3 Digital Signature Certificate (DSC)</p>
<p>Importer Exporter Code (IEC)</p>
<p>PAN Card of the business entity</p>
<p>GST Registration Certificate</p>
<p>Authorization Letter for the authorized signatory</p>
<p>Address Proof (e.g., Aadhaar card, electricity bill, etc.)</p>
<p>Bank Details, including:</p>
<p>Account Number</p>
<p>Bank Name</p>
<p>IFSC Code</p>

<p><b>Additional Documents Based on Business Type:</b></p>
<p>Customs Brokers:</p>
<p>CHA License</p>
<p>G-Card or F-Card of the authorized personnel</p>
<p>Shipping Lines:</p>
<p>Shipping License</p>
<p>Vessel Details</p>
          </div>

          {/* Right Form */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">
                  Expert Consultation
                </h5>
                <form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Name *"
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email*"
                  />
                  <div className="d-flex mb-3">
                    <input
                      type="text"
                      value="+91"
                      readOnly
                      className="form-control me-2 bg-light"
                      style={{ maxWidth: "70px" }}
                    />
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number*"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn fw-bold w-100 text-white"
                    style={{ background: "#b85423", borderRadius: "1.5rem" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Step-by-Step Guide to Register on ICEGATE Online </h2>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Follow the below-mentioned steps for ICEGATE Registration:</span></p>
<p><b>Step 1: Obtain a Valid DSC</b></p>
<p>Get a Class 3 Digital Signature Certificate (DSC) from a licensed Certifying Authority. This is mandatory for authentication on the ICEGATE portal.</p>
<p><b>Step 2: Visit the ICEGATE Portal</b></p>
<p>Go to www.icegate.gov.in and click on ‘Register Now’.</p>
<p>For new users: select ‘Fresh Registration – Don’t have Reference ID’</p>
<p>For returning users: select ‘Continue Using Reference ID’</p>
<p><b>Step 3: Choose Your Registration Type</b></p>
<p>Select your user role (e.g., Importer, Exporter, CHA, etc.)</p>
<p>Choose between:</p>
<p>Simplified Registration (basic functionality)</p>
<p>Full Registration (complete access to services)</p>
<p><b>Step 4: Enter Personal & Business Details</b></p>
<p>Fill out the registration form with key details such as:</p>
<p>Importer Exporter Code (IEC)</p>
<p>GSTIN</p>
<p>Email ID and Mobile Number</p>
<p><b>Step 5: Upload Required Documents</b></p>
<p>Upload all supporting documents in the required format and file size. Ensure clarity and accuracy.</p>
<p><b>Step 6: Verify Contact Information</b></p>
<p>You will receive OTPs on your registered email and phone number.</p>
<p>Enter the OTPs to verify your contact details.</p>
<p>Complete your registration within 15 days of starting the application.</p>
<p><b>Step 7: File the Role Registration Form</b></p>
<p>Once basic registration is complete, proceed to the Role Registration Form, which includes:</p>
<p>Organization Details</p>
<p>Authorized Parent User Information</p>
<p>Complete all mandatory fields and upload your documents and valid DSC.</p>
<p><b>Step 8: Review, Modify, and Submit</b></p>
<p>Preview the entire application.</p>
<p>If you need to correct any details, click ‘Modify’.</p>
<p>Once everything is accurate, click ‘Submit’ to send the application for processing.</p>


<h3 style={{ fontWeight: "bold", color: "#8f5d13" }}>Common Issues Faced During Registration</h3>
<p><b>Check Document Compliance</b></p>
<p>Ensure all uploaded documents are in the correct format (PDF, as required) and up to date.</p>
<p><b>Use a Supported Browser</b></p>
<p>Access the ICEGATE portal using a supported browser, preferably Google Chrome or Mozilla Firefox.</p>
<p>Make sure your browser is updated to the latest version.</p>
<p><b>Ensure a Stable Internet Connection</b></p>
<p>A weak or unstable internet connection can interrupt DSC validation. Ensure you're connected to a reliable network.</p>
<p><b>Verify DSC Installation and Configuration</b></p>
<p>Confirm that your DSC is properly installed on your system and recognized by the browser.</p>
<p>Ensure the Java Runtime Environment (JRE) and DSC utility tools (if required) are correctly configured.</p>
<p><b>Respond Promptly to ICEGATE Queries</b></p>
<p>If the ICEGATE verification team raises any concerns or requests clarification, respond quickly to avoid delays in approval.</p>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-4">
        <img src={img3} alt="" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default ICEGATE_registration;
