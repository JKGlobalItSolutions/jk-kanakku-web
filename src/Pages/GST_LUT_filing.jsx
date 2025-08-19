import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/GST_LUT_filing/img1.png";
import img3 from "../assets/GST_LUT_filing/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_LUT_filing = () => {
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
            <li className="breadcrumb-item fw-bold" style={{ color: "black" }}>
              GST
            </li>
            <li
              className="breadcrumb-item active fw-bold"
              style={{ color: "black" }}
              aria-current="page"
            >
              GST LUT Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Banner */}
      <div className="container text-center my-3">
        <img src={img1} alt="" className="img-fluid rounded" />
      </div>

      {/* Hero Section */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background:
            "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
        className="py-5"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-lg-7 text-white">
              <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
                GST LUT Filing
              </h1>
              <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                <p>Simplify Your Exports with Hassle-Free GST LUT Filing from JK Kanakku</p>
<p>Avoid paying IGST on exports—file your GST LUT (Letter of Undertaking) today!</p>
<p>✅ Check your eligibility</p>
<p>✅ Ensure timely, accurate filing</p>
<p>✅ Stay GST-compliant and penalty-free</p>
<p>Get expert help and complete support from start to finish.</p>
<p>Call now for a smooth filing experience!</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
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
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number*"
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

      {/* Element 2 */}
      <Element_2 />

      {/* Content Section */}
      <div className="container-fluid py-5">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for GST LUT Filing </h2>
<p><b>GST Registration Certificate</b></p>
<p>Proof that the applicant is a registered taxpayer under GST.</p>
<p><b>PAN Card</b></p>
<p>A copy of the PAN card of the individual, company, or firm.</p>
<p><b>Export Details</b></p>
<p>Information about the export of goods/services, including business nature and export turnover.</p>
<p><b>LUT Cover Letter</b></p>
<p>A signed request letter from an authorized person requesting acceptance of the LUT.</p>
<p><b>Bank Details</b></p>
<p>Cancelled cheque or bank statement to verify the business bank account.</p>
<p><b>GST RFD-11 Form</b></p>
<p>The required LUT form available on the GST portal.</p>
<p><b>IEC Code</b></p>
<p>A copy of the Importer Exporter Code (IEC) license.</p>
<p><b>Authorization Letter</b></p>
<p>If someone other than the owner/director is signing, a letter authorizing them is needed.</p>
<p><b>Board Resolution / Partnership Deed</b></p>
<p>Required for companies or partnership firms to authorize the LUT application.</p>
<p><b>Self-Declaration</b></p>
<p>A declaration confirming GST compliance and no pending tax dues or filings.</p>
<p><b>Other Documents (if applicable)</b></p>
<p>Additional documents may be requested by GST authorities depending on the business type or specific circumstances.</p>
          </div>

          {/* Right Form Again */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4" style={{height:"300px"}}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
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
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number*"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold text-white"
                    style={{ background: "#b85423", borderRadius: "1.5rem" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-5">
          <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Process of GST LUT Filing Online </h2>

<p><b>Log in to the GST Portal</b></p>
<p>Visit the official GST website and log in to your account using your credentials.</p>
<p><b>Go to the LUT Filing Section</b></p>
<p>Navigate to:</p>
<p>Services &gt; User Services &gt; Furnish Letter of Undertaking (LUT)</p>
<p><b>Select Financial Year</b></p>
<p>Choose the applicable financial year for which you are filing the LUT.</p>
<p><b>Upload Previous LUT (if applicable)</b></p>
<p>If you've filed an LUT in a previous year, upload it using the “Choose File” option.</p>
<p><b>Fill in the LUT Form</b></p>
<p>Complete the declaration with the following:</p>
<p>A promise to export goods/services within the specified time (usually 3 months)</p>
<p>Compliance with GST laws</p>
<p>Agreement to pay IGST with interest in case of default</p>
<p><b>Enter Witness Details</b></p>
<p>Provide names, occupations, and addresses of two witnesses.</p>
<p><b>Sign the LUT</b></p>
<p>The LUT must be signed by an authorized person (e.g., proprietor, partner, MD, or authorized signatory).</p>
<p>Use either:</p>
<p>Digital Signature Certificate (DSC)</p>
<p>Electronic Verification Code (EVC)</p>
<p><b>Submit the Application</b></p>
<p>Click “Sign and File with DSC” or “Sign and File with EVC” to complete the submission.</p>
<p><b>Get Confirmation</b></p>
<p>After successful filing, you'll receive an Application Reference Number (ARN) via email and SMS.</p>
<p><b>Track Status</b></p>
<p>To track your LUT application, go to:</p>
<p>Services &gt; User Services &gt; View My Submitted LUTs</p>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="container text-center my-4">
        <img src={img3} alt="" className="img-fluid rounded" />
      </div>

      {/* Element 3 */}
      <Element_3 />
    </>
  );
};

export default GST_LUT_filing;
