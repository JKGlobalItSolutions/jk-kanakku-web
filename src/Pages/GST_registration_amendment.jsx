import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/GST_registration_amendment/img1.png";
import img3 from "../assets/GST_registration_amendment/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_registration_amendment = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">GST</li>
            <li
              className="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              GST Registration Amendment
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img1} alt="" className="img-fluid rounded" />
      </div>

      {/* Hero Section */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-6 mb-3">
                GST Registration Amendment
              </h1>
              <p>
                Keeping your GST details up to date is crucial for compliance
                and smooth business operations. Whether it’s a change in your
                business name, address, authorized signatory, or other key
                information, the GST Registration Amendment process ensures your
                records stay accurate with the tax authorities.
              </p>
              <p>
                At JK Kanakku, we make GST amendments quick, simple, and
                stress-free.
              </p>
              <ul className="mb-0">
                <li>✅ Ensure legal compliance</li>
                <li>✅ Avoid penalties and disruptions</li>
                <li>✅ Get expert assistance at every step</li>
              </ul>
              <p className="mt-2">
                Update your GST registration with confidence — contact us today!
              </p>
            </div>

            {/* Right form */}
            <div className="col-lg-5">
              <div className="bg-white p-4 shadow rounded-4">
                <h5 className="fw-bold mb-3">Expert Consultation</h5>
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
                      placeholder="Email*"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <span
                      className="d-flex align-items-center justify-content-center px-3 bg-light border rounded-start"
                      style={{ minWidth: "70px" }}
                    >
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Mobile Number*"
                      className="form-control rounded-end"
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

      {/* Main Content */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left section */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required to Amend Your GST Registration </h2>
<p><b>🔄 Change in Business Name</b></p>
<p>Board resolution or affidavit confirming the new business name</p>
<p><b>Updated Certificate of Incorporation (if applicable)</b></p>
<p><b>🏢 Change in Business Address</b></p>
<p>Any one of the following as proof of new address:</p>
<p>Latest property tax receipt</p>
<p>Municipal khata copy</p>
<p>Electricity bill</p>
<p><b>If rented:</b></p>
<p>Valid rent/lease agreement</p>
<p>Proof of ownership from the landlord (e.g., electricity bill or property document)</p>
<p>Consent letter from the owner (if applicable)</p>
<p><b>👥 Change in Key Personnel (e.g., Partners or Directors)</b></p>
<p>Board resolution or revised partnership deed showing the change</p>
<p>Identity and address proof of the person being added/removed:</p>
<p>PAN card, Aadhaar card, or passport-sized photograph</p>
<p>Appointment letter for new authorized signatory</p>
<p><b>🏦 Update of Bank Account Details</b></p>
<p><b>Any one of the following documents showing correct bank details and IFSC code:</b></p>
<p>Canceled cheque</p>
<p>Recent bank statement</p>
<p>Passbook copy</p>



<h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>GST Registration Process for Foreigners in India </h2>
<p><b>Step 1: Identify the Changes Required</b></p>
Start by clearly identifying what changes are needed in your GST registration. This could be a change in business name, address, contact details, or other <p></p>registration-related information.
<p><b>Step 2: Log In to the GST Portal</b></p>
<p>Visit www.gst.gov.in and log in using your registered username and password.</p>
<p><b>Step 3: Choose the Type of Amendment</b></p>
<p><b>Determine whether the change is a core field (major change) or a non-core field (minor change):</b></p>
<p>Core Fields (e.g., legal name, principal place of business):</p>
<p>Go to Services &gt; Registration &gt; Amendment of Registration Core Fields</p>
<p>Non-Core Fields (e.g., phone number, email):</p>
<p>Go to Services &gt; Registration &gt; Amendment of Registration Non-Core Fields</p>
<p><b>Step 4: Complete the Amendment Application (Form GST REG-14)</b></p>
<p>Update the required information in the form and provide a brief explanation for the amendment.</p>
<p><b>Step 5: Upload Supporting Documents</b></p>
<p>Attach relevant documents to validate the changes. For example:</p>
<p>Name change: Board resolution or certificate of name change</p>
<p>Address change: Rent agreement, utility bill, or NOC from the owner</p>
<p><b>Step 6: Digitally Sign the Application</b></p>
<p><b>Authenticate your submission using either:</b></p>
<p>A Digital Signature Certificate (DSC), or</p>
<p>An Electronic Verification Code (EVC)</p>
<p><b>Step 7: Submit the Form and Note the ARN</b></p>
<p>After submission, an Application Reference Number (ARN) will be sent to your registered email and mobile number.</p>
<p><b>Step 8: Await Approval</b></p>
<p>A GST officer will verify the details. If all documents are valid and complete, the change is typically auto-approved within 15 working days.</p>
<p><b>Step 9: Download the Updated GST Certificate</b></p>
<p>Once approved, log in to your GST portal account and download the revised GST registration certificate.</p>
          </div>

          {/* Sidebar form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="form-control"
                      value="+91"
                      style={{ maxWidth: "70px", background: "#eee" }}
                      readOnly
                    />
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number*"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold text-white"
                    style={{ backgroundColor: "#b85423" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Banner */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img3} alt="" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default GST_registration_amendment;
