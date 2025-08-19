import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/GST_return_filing/img1.png";
import img2 from "../assets/GST_return_filing/img2.png";
import img3 from "../assets/GST_return_filing/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_return_filing = () => {
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
              GST Return Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="GST Return Filing" className="img-fluid rounded" />
      </div>

      {/* Intro Section with Form */}
      <div className="py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            
            {/* Left Content */}
            <div className="col-lg-7 text-white">
              <h1 className="fw-bold mb-4">GST Return Filing</h1>
              <p>▶ Make GST Return Filing Easy with JK Kanakku’s Hassle-Free Services</p>
              <p>▶ Our GST filing specialists assist you step-by-step to ensure a seamless process.</p>
              <p>▶ Have your GST returns submitted within 24 hours by our experienced team of Chartered Accountants.</p>
              <p>▶ We guarantee on-time filings to help you avoid penalties and stay fully compliant.</p>
              <p>▶ Join more than 100,000 satisfied businesses trusting JK Kanakku for their GST filing needs.</p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email *" className="form-control mb-3" />
                  <div className="input-group mb-3">
                    <span className="input-group-text fw-bold">+91</span>
                    <input type="tel" placeholder="Mobile Number *" className="form-control" />
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

      {/* Checklist + Side Form */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          
          {/* Checklist */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for GST Return Filing </h2>

<p><b>Invoices:</b> Invoices are essential for maintaining accurate records of business transactions. Ensure they are accurate, properly signed, and include all required details.</p>
<p><b>Purchase Orders:</b> Keep a record of all purchases made. It is crucial to cross-check purchase orders against corresponding bills and invoices for accuracy.</p>
<p><b>Bank Statements:</b> Bank statements must be presented during GST return filing as they provide definitive proof of transactions within the reporting period. They help verify the income and expenses reported by the business.</p>
<p><b>Tax Payment Receipts:</b> Always keep records of your tax payments. These receipts are important documents that serve as proof of your compliance with tax obligations.</p>

            <div className="my-3" style={{maxWidth:"50%"}}>
              <img src={img2} alt="GST Return Docs" className="img-fluid rounded" />
            </div>
          </div>

          {/* Side Form */}
          <div className="col-lg-4">
            <div className="card shadow border-0 rounded-4">
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

      {/* GST Return Filing Process */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Online GST Return Filing Process </h2>

<p><b>Step 1:</b> Gather All Required Documents</p>
<p>Start by collecting all essential documents, such as sales and purchase invoices, bank statements, tax invoices, and payment receipts.</p>
<p><b>Step 2:</b> Select the Appropriate GST Return Form</p>
<p>Choose the right GST return form based on your business type and taxpayer category:</p>
<p><b>GSTR-1:</b> Report your sales transactions.</p>
<p><b>GSTR-3B:</b> Submit a summary of tax payments and claim input tax credit (ITC).</p>
<p><b>GSTR-9:</b> Annual return covering the entire financial year.</p>
<p><b>GSTR-4:</b> For businesses registered under the Composition Scheme.</p>
<p><b>GSTR-5:</b> For non-resident foreign taxpayers.</p>
<p><b>Step 3:</b> Log In to the GST Portal</p>
<p>Go to www.gst.gov.in, log in using your credentials, and access your dashboard to start filling in the required information.</p>
<p><b>Step 4:</b> Reconcile Your Data</p>
<p>Verify that all entered details, especially sales figures, match your tax payments as reported in GSTR-3B. Inconsistencies can lead to issues during </p>filing.
<p><b>Step 5:</b> Submit Your Returns</p>
<p>After reviewing the details, click the ‘File’ button to submit your return. For GSTR-3B, you’ll be prompted to pay any outstanding taxes before submission.</p>
<p><b>Step 6:</b> Make GST Payments</p>
<p>If taxes are due, complete your payment via online banking, credit/debit cards, or other approved methods.</p>
<p><b>Step 7:</b> Receive Acknowledgment</p>
<p>After submission and payment, you will receive an acknowledgment receipt from the GST portal confirming your filing.</p>
<p><b>Step 8:</b> Reconcile Payments and Tax Credits</p>
<p>Tax authorities will verify your submitted details. If discrepancies arise, they may request additional clarification.</p>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-5">
        <img src={img3} alt="GST Return Filing Process" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  )
}

export default GST_return_filing
