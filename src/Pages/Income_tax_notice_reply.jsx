import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/Income_tax_notice_reply/img1.png";
import img3 from "../assets/Income_tax_notice_reply/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const Income_tax_notice_reply = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2 shadow-sm">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">
              Taxation
            </li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              Income Tax Notice Reply
            </li>
          </ol>
        </div>
      </nav>

      {/* Banner Image */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img1} alt="Income Tax" className="img-fluid rounded" />
      </div>

      {/* Hero Section with Gradient + Form */}
      <div className="py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-5">Income Tax Notice Reply</h1>
              <p className="mt-3 fs-5 lh-lg">
                Got an Income Tax Notice? Stay stress-free with JK Kanakku! Our tax experts help you draft accurate, timely replies and guide you through the resolution process—avoiding penalties and ensuring compliance. Connect with us today for reliable, hassle-free tax support!
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email *" className="form-control mb-3" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
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

      {/* Types of Notices */}
      <Element_2 />
      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Types of Income Tax Notices </h2>
<p><b>1. Section 139(9) – Defective Return Notice</b></p>
<p>Issued when there are errors or omissions in the income tax return, such as missing details, incorrect calculations, or absent attachments.</p>
<p><b>2. Section 143(1) – Intimation Notice</b></p>
<p>Sent post-return processing to confirm the income and tax computation. It may indicate discrepancies between the taxpayer’s and department’s figures.</p>
<p><b>3. Section 143(2) – Scrutiny Notice</b></p>
<p>Triggers a detailed examination of the return. The taxpayer may be asked to provide supporting documents and explanations for claims made.</p>
<p><b>4. Section 142(1) – Inquiry Notice</b></p>
<p>Requests additional information or documents related to the return. It may also require filing a return if none has been filed previously.</p>
<p><b>5. Section 148 – Reassessment Notice</b></p>
<p>Issued when the department believes income has escaped assessment. It prompts the taxpayer to refile and provide relevant financial details.</p>
<p><b>6. Section 156 – Demand Notice</b></p>
<p>Sent to demand payment of taxes, interest, or penalties. It includes the payable amount, due date, and consequences of non-payment.</p>
<p><b>7. Section 245 – Set-Off Notice</b></p>
<p>Informs the taxpayer that their refund will be adjusted against any outstanding tax dues.</p>
<p><b>8. Section 131(1A) – Investigation Notice</b></p>
<p>Issued when the department suspects tax evasion. It may request detailed records or explanations regarding specific transactions.</p>
<p><b>9. Section 144 – Best Judgment Assessment Notice</b></p>
<p>If the taxpayer fails to comply with tax authorities’ requests, the department assesses the return based on the best available information.</p>
<p><b>10. Section 271(1)(c) – Penalty for Concealment</b></p>
<p>Applied when the department believes the taxpayer has concealed income or provided false information in the return.</p>
<p><b>11. Section 234F – Penalty for Late Filing</b></p>
<p>Notifies taxpayers of penalties for filing returns after the due date, along with the fine amount and deadline for payment.</p>
<p><b>12. Section 271B – Penalty for Non-Audit of Accounts</b></p>
<p>Issued when the taxpayer fails to get their accounts audited as mandated. It requires compliance with audit regulations.</p>
<p><b>13. Section 263 – Revision of Assessment</b></p>
<p>Served by the Commissioner of Income Tax if an assessment order is deemed erroneous or prejudicial to revenue interest. It allows revision of the order.</p>
          </div>

          {/* Right Sidebar Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
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

      {/* How to Respond Section */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>How to Respond to an Income Tax Notice Online?</h2>
<p><b>1. Carefully Read the Notice</b></p>
<p>Begin by thoroughly reviewing the notice. Identify the section under which it is issued, the reason for the notice, and the response deadline. Make note of these points separately for reference.</p>
<p><b>2. Verify the Details</b></p>
<p>Cross-check all information mentioned in the notice—such as your name, PAN, assessment year, and income details—for accuracy. Report any discrepancies to the Income Tax Department promptly.</p>
<p><b>3. Gather Required Documents</b></p>
<p><b>Based on the nature of the notice, collect supporting documents like:</b></p>
<p>Bank statements</p>
<p>TDS certificates</p>
<p>Income proofs (salary slips, Form 16, etc.)</p>
<p>Investment proofs</p>
<p>Tax payment receipts</p>
<p><b>4. Respond Within the Deadline</b></p>
<p>Timely compliance is crucial. Failing to respond by the given date may result in penalties or further legal implications. If more time is needed, consider requesting an extension in writing.</p>
<p><b>5. File a Revised Return (if necessary)</b></p>
<p>If the notice points out errors in your original filing, you may be required to submit a revised return via the Income Tax e-Filing portal.</p>
<p><b>6. Submit Your Response Online (if applicable)</b></p>
<p>For many notices (e.g., under Section 143(1)), the response can be submitted directly through the online portal. Upload supporting documents or explanations as requested.</p>
<p><b>7. Pay Any Outstanding Tax</b></p>
<p>If the notice includes a demand for additional tax, pay it before the due date through the portal. Save the challan or payment receipt for your records.</p>
<p><b>8. Keep All Records Safe</b></p>
<p>Maintain copies of the notice, your response, supporting documents, and any payment receipts. These will be essential for any future queries or audits.</p>
      </div>

      {/* Closing Image */}
      <div className="container d-flex justify-content-center my-4">
        <img src={img3} alt="Tax Support" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default Income_tax_notice_reply;
