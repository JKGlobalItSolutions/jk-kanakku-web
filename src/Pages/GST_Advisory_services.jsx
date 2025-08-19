import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/GST_Advisory_services/img1.png";
import img3 from "../assets/GST_Advisory_services/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_Advisory_services = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">Registration</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              GST Advisory Services
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="" className="img-fluid rounded" />
      </div>

      {/* Intro Section with Form */}
      <div className="py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Text */}
            <div className="col-lg-7 text-white">
              <h1 className="fw-bold mb-4">GST Advisory Services</h1>
              <p>&#9654; Struggling with GST? Let JK Kanakku Help. Our experienced GST advisors make navigating tax laws simple and stress-free.</p>
              <p>&#9654; We provide tailored guidance to help you stay compliant, reduce risk, and save more.</p>
              <p>&#9654; Book your free consultation today and get clarity on all your GST needs.</p>
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
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Checklist for GST Advisory Services </h2>
<p><b>1. Business Registration Documents</b></p>
<p>PAN card of the business entity (Sole Proprietorship, Partnership, LLP, or Company)</p>
<p><b>GST Registration Certificate</b></p>
<p>Other relevant business registration documents (e.g., Certificate of Incorporation, LLP Agreement, Partnership Deed)</p>
<p><b>2. Financial Records</b></p>
<p>Audited financial statements (Balance Sheet, Profit & Loss Account)</p>
<p>Detailed financial data, including sales and purchase records, invoices, and supporting documentation</p>
<p><b>3. GST Transaction Records</b></p>
<p>Complete records of all GST-related transactions (sales, purchases, Input Tax Credit, etc.)</p>
<p>Details of any pending GST issues or concerns requiring resolution</p>
<p><b>4. Proof of Business Address</b></p>
<p>Utility bills (electricity, water), rent agreement, property tax receipts, etc., as evidence of the principal place of business</p>
<p>Documents for additional business locations, if applicable</p>
<p><b>5. Identity and Personal Documents</b></p>
<p>Photographs of the business owner, partners, or authorized signatories</p>
<p>Aadhaar cards of key individuals involved in the business</p>
<p><b>6. Additional/Category-Specific Documents</b></p>
<p>Importers/Exporters: IEC (Importer Exporter Code) issued by the DGFT</p>
<p>Reverse Charge Entities: Additional documents as required by GST authorities</p>
<p>OIDAR Service Providers: Documents as prescribed by GST officials for cross-border digital services</p>

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

      {/* Duties & Skills */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Duties, Responsibilities, Skills and Eligibility Criteria of the GST Advisor </h2>
<p><b>Clarify GST Concepts:</b> Explain GST laws and their impact on business operations, helping clients understand compliance and opportunities for growth.</p>
<p><b>Guide GST Registration:</b> Assist businesses with the registration process by evaluating eligibility and ensuring timely completion of all registration formalities.</p>
<p><b>Optimize Tax Savings:</b> Advise on effective ways to reduce tax liability, including proper utilization of Input Tax Credit (ITC) and identifying applicable exemptions.</p>
<p><b>Manage Tax Risks:</b> Identify and mitigate risks related to GST filing, audits, and interactions with tax authorities to avoid disputes and penalties.</p>
<p><b>Ensure Compliance:</b> Monitor and ensure that all GST returns and documentation are filed accurately and on time, protecting businesses from fines and legal issues.</p>


<h3 style={{ fontWeight: "bold" }}>Skills Needed for a GST Advisor</h3>

<p><b>Strong Communication Skills:</b> A GST advisor must convey complex GST concepts in clear, simple language. They should effectively communicate with business owners and accountants, translating technical terms into practical, actionable advice.</p>
<p><b>Critical Thinking & Problem-Solving:</b> Since GST challenges vary by business, an advisor needs sharp analytical skills to assess unique situations, identify tax issues, and develop tailored solutions.</p>
<p><b>Attention to Detail:</b> GST compliance involves meticulous paperwork such as tax returns, invoices, and receipts. An effective advisor carefully reviews these documents to ensure accuracy and completeness.</p>
<p><b>In-Depth Knowledge of Tax Law and Finance:</b> A GST advisor must have comprehensive understanding of regional tax laws and finance regulations, and stay updated on changes. Familiarity with international tax laws is a plus for businesses with cross-border transactions.</p>
<p><b>Analytical Ability:</b> Advisors should interpret business transactions to spot gaps or risks, recommend pricing adjustments, correctly apply tax rates, and identify available exemptions.</p>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-5">
        <img src={img3} alt="" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  )
}

export default GST_Advisory_services;
