import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/GST_annual_return_filing/img1.png";
import img2 from "../assets/GST_annual_return_filing/img2.png";
import img3 from "../assets/GST_annual_return_filing/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_annual_return_filing = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">GST</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              GST Annual Return Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="GST Annual Filing" className="img-fluid rounded" />
      </div>

      {/* Intro + Form Section */}
      <div className="py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            
            {/* Left Content */}
            <div className="col-lg-7 text-white">
              <h1 className="fw-bold mb-4">GST Annual Return Filing</h1>
              <div>&#9654; Stay GST Compliant with JK Kanakku – File Your GSTR-9 with Ease</div>
<div>&#9654; Avoid penalties by filing your GSTR-9 on time with the support of our GST experts.</div>
<div>&#9654; Maximize your tax benefits — we’ll help you claim all eligible input tax credits.</div>
<div>&#9654; Receive personalized support tailored to your business's specific requirements.</div>
<div>&#9654; Enjoy a free consultation and stay updated with the latest GST rules and compliance tips.</div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email *" />
                  <div className="input-group mb-3">
                    <span className="input-group-text fw-bold">+91</span>
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

      {/* Documents Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">

          {/* Left Text */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for GST Annual Return Filing </h2>

<p><b>GST Registration Certificate:</b></p>
<p>A copy of your GST registration certificate serves as official proof of your registered GST status.</p>
<p><b>GSTR-1, GSTR-2A, and GSTR-3B Filings:</b></p>
<p>Monthly or quarterly GST return filings are required to ensure accurate annual return reporting.</p>
<p><b>Invoices and Bills:</b></p>
<p>Maintain all invoices, bills, and supporting documents to validate the authenticity of your business transactions.</p>
<p><b>Reconciliation Statements:</b></p>
<p>These help identify and resolve discrepancies between your accounting records and filed GST returns, ensuring accuracy.</p>
<p><b>Financial Statements:</b></p>
<p>Include your company’s balance sheet, profit and loss account, and cash flow statement to support full compliance and complete reporting.</p>

            <img src={img2} style={{maxWidth:"50%"}} alt="Annual GST Documents" className="img-fluid rounded mt-3" />
          </div>

          {/* Right Form */}
          <div className="col-lg-4">
            <div className="card shadow border-0 rounded-4" style={{maxWidth:"300px"}}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email *" />
                  <div className="input-group mb-3">
                    <span className="input-group-text fw-bold">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number *" />
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

      {/* Procedure Section */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Procedure for Filing of GST Annual Returns </h2>
<p><b>1. Compile Essential Documents:</b></p>
<p>Begin by collecting all necessary records to support your annual return filing. This includes invoices, bills, balance sheets, GST paid on sales and purchases, tax payment details, and other financial statements. Reconcile your books of accounts with the GST returns filed throughout the year to ensure accuracy and consistency.</p>
<p><b>2. Assess Tax Liability and Input Tax Credit (ITC):</b></p>
<p>Carefully analyze all business transactions to accurately calculate your total tax liability and eligible input tax credit for the financial year.</p>
<p><b>3. Fill Out the GSTR-9 Form:</b></p>
<p>Enter all required information in the GSTR-9 form, including details on sales, purchases, tax payments, and vendor data. If applicable, complete the GSTR-9C form, which must be verified and certified by a Chartered Accountant to ensure accuracy and proper reconciliation.</p>
<p><b>4. Review and Verify Data:</b></p>
<p>Thoroughly cross-check all figures against your books of accounts, previously filed GST returns, and financial statements to ensure consistency and correctness.</p>
<p><b>5. Submit the GST Return:</b></p>
<p>After completing the form and verifying all information, file your GSTR-9 on the GST portal. Upon successful submission, you will receive an acknowledgment as official proof of filing.</p>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-5">
        <img src={img3} alt="GST Filing Process" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  )
}

export default GST_annual_return_filing
