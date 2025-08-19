import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/PT_return_filing/img1.png";
import img3 from "../assets/PT_return_filing/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const PT_return_filing = () => {
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
              Taxation
            </li>
            <li
              className="breadcrumb-item active fw-bold"
              style={{ color: "black" }}
              aria-current="page"
            >
              PT Return Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Image */}
      <div className="container d-flex justify-content-center">
        <img src={img1} alt="PT Filing" className="img-fluid rounded" />
      </div>

      {/* Hero Section */}
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
              <h1 className="fw-bold display-5 mb-3">PT Return Filing</h1>
              <p>Seamless Professional Tax Filing with JK Kanakku.</p>
              <p>
                Effortlessly file your Professional Tax Return online with
                expert guidance.
              </p>
              <p>
                Stay compliant, avoid late fees, and experience hassle-free
                service from start to finish.
              </p>
              <p>
                Let our professionals handle the details—reach out today and
                make tax filing stress-free!
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="form-control mb-3"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="form-control mb-3"
                  />
                  <div className="input-group mb-3">
                    <span className="input-group-text fw-bold">+91</span>
                    <input
                      type="text"
                      placeholder="Mobile Number *"
                      className="form-control"
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

      {/* Documents Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left Docs */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for Filing Professional Tax Return </h2>
<p><b>1. For Salaried Employees (Filed by Employer):</b></p>
<p>Monthly Salary Slips</p>
<p>Form 16 or Income Statement</p>
<p>Payment Receipts of PT</p>
<p>Employer’s Name and Address</p>
<p><b>2. For Self-Employed Professionals / Business Owners:</b></p>
<p>Income Proof (e.g., Balance Sheets, Profit & Loss Statements, ITR)</p>
<p>Professional Tax Payment Receipts</p>
<p>Professional Tax Enrollment Certificate (PTEC)</p>
<p>Bank Statements reflecting PT payments</p>
<p>Business Registration Documents (e.g., Company/GST Registration, Address Proof)</p>
<p><b>3. For Employers (Filing on Behalf of Staff):</b></p>
<p>Employee Details: Name, Designation, Salary, and PT Deducted</p>
<p>Professional Tax Registration Certificate (PTRC)</p>
<p>Payroll or Salary Register showing deductions</p>
<p>PT Payment Challans</p>
<p>TDS Certificates (Form 16, if applicable)</p>
<p><b>4. For Claiming Exemptions:</b></p>
<p>Age Proof (e.g., for senior citizens)</p>
<p>Income Proof (for low-income earners)</p>
<p>Disability Certificate (if applicable)</p>
<p><b>5. Additional Supporting Documents (if required):</b></p>
<p>PAN Card</p>
<p>Aadhaar Card</p>
<p>Bank Account Details</p>
<p>GST Registration Certificate</p>
          </div>

          {/* Right Form */}
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

      {/* Procedure Section */}
      <div className="container-fluid my-5">
         <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Online Procedure for Filing Professional Tax Returns</h2>

<p><b>Step 1: Get Registered</b></p>
<p><b>Before filing returns, registration is mandatory:</b></p>
<p>Employers must obtain a Professional Tax Registration Certificate (PTRC) to deduct and remit tax on employees’ behalf.</p>
<p>Self-employed professionals need a Professional Tax Enrollment Certificate (PTEC) to pay tax based on personal income.</p>
<p><b>Step 2: Collect Required Documents</b></p>
<p><b>Ensure you have the following:</b></p>
<p>Employers: Salary slips, Form 16, PTRC, previous challans, employee details.</p>
<p>Self-Employed: P&L statements or ITRs, PTEC, proof of income (like bank statements).</p>
<p><b>Step 3: Calculate Tax Liability</b></p>
<p><b>Professional Tax is calculated as per your state’s slab rates:</b></p>
<p>Employees: PT is deducted monthly from salaries.</p>
<p>Self-Employed: PT is calculated on annual income.</p>
<p><b>Step 4: File Return Online</b></p>
<p><b>Most states provide online portals. Log in and:</b></p>
<p>Select the filing period (monthly/quarterly/annually).</p>
<p>Enter income, deductions, and payment details.</p>
<p>Review and submit the return.</p>
<p><b>Step 5: Make the Payment</b></p>
<p>Pay your dues online via net banking, cards, or UPI. Ensure payment is linked correctly with the return.</p>
<p><b>Step 6: Download Acknowledgement</b></p>
<p>After successful submission and payment, download the acknowledgment as proof of compliance.</p>
<p><b>Step 7: Maintain Timely Compliance</b></p>
<p><b>Keep track of your due dates:</b></p>
<p>Filing frequency varies by state (monthly, quarterly, or annually).</p>
<p>Employers must file for employees.</p>
<p>Self-employed individuals must file on their own.</p>
      </div>

      {/* Bottom Image */}
      <div className="container d-flex justify-content-center my-4">
        <img src={img3} alt="PT Process" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default PT_return_filing;
