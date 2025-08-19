import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/TDS_return_filing/img1.png";
import img3 from "../assets/TDS_return_filing/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const TDS_return_filing = () => {
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
            <li className="breadcrumb-item fw-bold text-dark">Taxation</li>
            <li
              className="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              TDS Return Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center my-3">
        <img src={img1} alt="TDS Filing" className="img-fluid" />
      </div>

      {/* Intro Section with Form */}
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
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                TDS Return Filing
              </h1>
              <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                <p>
                  Get your TDS return filed today by our expert team at JK
                  Kanakku!
                </p>
                <p>
                  Our professionals manage the entire filing process, ensuring
                  precision and on-time submission.
                </p>
                <p>
                  We assist in gathering all required documents like Form 16,
                  PAN details, and challan receipts.
                </p>
                <p>
                  Your financial information is treated with the utmost
                  confidentiality and security.
                </p>
                <p>
                  We ensure full compliance with TDS rules, helping you avoid
                  penalties and notices.
                </p>
                <p>
                  Enjoy a smooth and stress-free filing experience with our
                  trusted TDS return services.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div
                className="bg-white p-4 shadow rounded"
                style={{ borderRadius: "12px" }}
              >
                <h5 className="fw-bold mb-3">Expert Consultation</h5>
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
                      placeholder="Email *"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <span
                      className="px-3 d-flex align-items-center"
                      style={{
                        background: "#ece5e0",
                        border: "1px solid #e5e8ee",
                        borderRadius: "7px 0 0 7px",
                      }}
                    >
                      +91
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number*"
                      style={{ borderRadius: "0 7px 7px 0" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold"
                    style={{
                      background: "#c46a2f",
                      color: "white",
                      borderRadius: "7px",
                    }}
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

      {/* Documents Required */}
      <div className="container-fluid my-5">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for TDS Return Filing Online </h2>
<p><b>PAN Details</b></p>
<p>PAN numbers of both the deductor (person deducting TDS) and the deductee (person receiving the payment) are essential for accurate reporting.</p>
<p><b>TAN of the Deductor</b></p>
<p>The Tax Deduction and Collection Account Number (TAN) of the deductor is mandatory for filing TDS returns.</p>
<p><b>Proof of TDS Payment</b></p>
<p>Challans or receipts confirming the TDS payment to the government, such as Forms 26QB, 26QC, etc., depending on the type of transaction, must be submitted.</p>
<p><b>Bank Account Information</b></p>
<p>Bank account details of both the deductor and deductee are required for record and verification purposes.</p>
<p><b>TDS Deduction Details</b></p>
<p>Include specifics like the amount deducted, nature of payment (e.g., salary, rent, professional fees), and recipient details.</p>
<p><b>Form 16 / Form 16A</b></p>
<p>These TDS certificates, issued by the deductor, serve as proof of deduction. Form 16 is used for salary income, while Form 16A applies to non-salary payments such as contracts or commissions.</p>
<p><b>Past TDS Returns (if any)</b></p>
<p>Keep previous TDS return filings handy, especially if you are making corrections or referencing prior deductions.</p>
<p><b>Digital Signature Certificate (DSC)</b></p>
<p>A valid DSC is necessary if you’re filing TDS returns on behalf of a company or registered firm.</p>
<p><b>Quarterly TDS Return Forms</b></p>
<p><b>Prepare the correct form based on the nature of the payment:</b></p>
<p>Form 24Q – Salary payments</p>
<p>Form 26Q – Non-salary domestic payments</p>
<p>Form 27Q – Payments to non-residents</p>
<p><b>Additional Supporting Documents</b></p>
<p>In cases involving specific or uncommon transactions, keep related documents like invoices, agreements, or contracts ready for submission to clarify the nature of the payment.</p>

          </div>

          {/* Right Card */}
          <div className="col-lg-4 mt-4 mt-lg-0">
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
                    className="btn w-100 fw-bold"
                    style={{
                      background: "#b85423",
                      color: "white",
                      borderRadius: "1.5rem",
                    }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Online Procedure */}
      <div className="container-fluid my-5">
         <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Online Procedure for TDS Return Filing in India </h2>
<p><b>Log in to the Income Tax e-Filing Portal</b></p>
<p>Visit the official e-filing portal and log in using your credentials. If you're a new user, register to create an account before proceeding.</p>
<p><b>Navigate to the TDS Return Filing Section</b></p>
<p>Once logged in, select the appropriate option for filing TDS returns from the main menu. This will redirect you to the dedicated TDS return filing page.</p>
<p><b>Enter TAN and PAN Information</b></p>
<p>On the TDS filing page, enter your TAN (Tax Deduction and Collection Account Number) and PAN (Permanent Account Number) accurately. These are crucial for validating your return and avoiding errors or penalties.</p>
<p><b>Provide TDS Deduction Details</b></p>
<p>Input the relevant TDS information—such as the amount deducted, the deductee’s PAN, type of payment, and the date of deduction. Accuracy is key to successful filing.</p>
<p><b>Review and Submit the TDS Return</b></p>
<p>Carefully review all the entered information. Once verified, submit the return to the Income Tax Department for processing.</p>
<p><b>Download the Acknowledgement Receipt</b></p>
<p>After submission, download the acknowledgement slip for your records. It contains a unique TDS filing reference number, which is essential for tracking the status or addressing future queries.</p>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-3">
        <img src={img3} alt="TDS Filing" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default TDS_return_filing;
