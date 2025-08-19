import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/GST_registration_foreigners/img1.png";
import img3 from "../assets/GST_registration_foreigners/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_registration_foreigners = () => {
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
            <li className="breadcrumb-item fw-bold text-dark">GST</li>
            <li
              className="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              GST Registration for Foreigners
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img1} alt="" className="img-fluid rounded" />
      </div>

      {/* Hero Section with Form */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background:
            "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-6 mb-3">
                GST Registration for Foreigners
              </h1>
              <p>
                If you're a foreign national or NRI supplying goods or
                services in India, GST registration is mandatory under Indian
                tax law. Non-compliance can lead to penalties and legal
                issues.
              </p>
              <p>
                JK Kanakku simplifies the entire process—offering expert
                assistance and seamless online registration. Our experienced
                team ensures quick, accurate, and hassle-free GST compliance
                for international clients.
              </p>
              <p>
                Stay compliant. Avoid penalties. Apply for your GST
                registration with JK Kanakku today!
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div
                className="bg-white p-4 shadow rounded-4"
                style={{ minHeight: "100%" }}
              >
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

      {/* Section with Docs + Side Form */}
      <Element_2 />

      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for GST Registration for Foreigners </h2>
<p><b>1. Identity & Business Verification</b></p>
<p>Notarized and apostilled passport copy (for individuals).</p>
<p>Certificate of Incorporation (for companies, issued in the home country).</p>
<p>Tax Identification Number (TIN) or equivalent from your country.</p>
<p><b>2. Proof of Business Registration</b></p>
<p>Foreign business license or similar government-issued document.</p>
<p>Memorandum & Articles of Association (for corporate entities).</p>
<p><b>3. Address Proof</b></p>
<p>If operating in India: Lease agreement or utility bill of the Indian office.</p>
<p>No office in India? Provide address proof of your foreign headquarters.</p>
<p><b>4. Bank Account Details</b></p>
<p>Indian bank statement (if available), or foreign bank account details.</p>
<p>Cancelled cheque or bank certificate validating the account.</p>
<p><b>5. Authorized Signatory Documents</b></p>
<p>Appointment letter designating an Indian resident as the authorized signatory.</p>
<p>PAN & Aadhaar of the signatory (if an Indian citizen).</p>
<p>Digital Signature Certificate (DSC) – required for companies.</p>
<p><b>6. GST Application Form</b></p>
<p>Filled and signed GST REG-09 form (for non-resident taxable persons).</p>




<h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>GST Registration Process for Foreigners in India </h2>
<p><b>Step 1: Choose the Right Registration Type</b></p>
<p>Foreign businesses must register under one of these two categories:</p>
<p>NRTP (Non-Resident Taxable Person):</p>
<p>For businesses supplying goods or services without a permanent base in India.</p>
<p>📄 Form to use: GST REG-09</p>
<p>OIDAR Services:</p>
<p>For foreign companies offering digital services (like streaming, software, cloud platforms) to Indian users.</p>
<p>📄 Form to use: GST REG-10</p>
<p><b>Step 2: Appoint an Authorized Signatory in India</b></p>
<p>Since you don't have a physical presence in India:</p>
<p>Appoint an Indian resident as your authorized signatory.</p>
<p>This person will handle tax filings, payments, and correspondence with the tax department.</p>
<p>A signed authorization letter is required for appointment.</p>
<p><b>Step 3: Gather the Required Documents</b></p>
<p>Here’s what you’ll need to apply:</p>
<p>Valid passport and proof of business activity</p>
<p>Certificate of Incorporation (for companies)</p>
<p>Tax ID Number (TIN) or its equivalent from your country</p>
<p>Indian bank account details</p>
<p>Address proof (Indian office or foreign HQ)</p>
<p>Authorization letter for your Indian representative</p>
<p><b>Step 4: Apply Online</b></p>
<p>Go to gst.gov.in</p>
<p>Submit Form GST REG-09 or REG-10 depending on your category</p>
<p>Upload all supporting documents</p>
<p>Submit the application at least 5 days before starting operations</p>
<p>Get a Temporary Reference Number (TRN) to track your application</p>
<p><b>Step 5: Pay Advance GST</b></p>
<p>Make an advance tax payment based on estimated liability</p>
<p>This payment will be credited to your GST cash ledger and adjusted later</p>
<p><b>Step 6: Get Your GSTIN</b></p>
<p>The GST department will verify your application</p>
<p>Once approved, you’ll receive your GSTIN (Goods and Services Tax Identification Number)</p>
<p>You’re now ready to do business in India – fully compliant!</p>
<p><b>🎯 Let JK Kanakku Help You!</b></p>
<p><b>Skip the hassle. Our experts handle everything from document collection to registration — fast, reliable, and 100% online.</b></p>
          </div>

          {/* Right Sidebar Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">
                  Expert Consultation
                </h5>
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

export default GST_registration_foreigners;
