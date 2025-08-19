import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/GST_notice_reply/img1.png";
import img12 from "../assets/Company_registration/img2.png";
import img3 from "../assets/GST_notice_reply/img3.png";
import Element_3 from "../components/Element_3";

const GST_notice_reply = () => {
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
              Registration
            </li>
            <li
              className="breadcrumb-item active fw-bold"
              style={{ color: "black" }}
              aria-current="page"
            >
              GST Notice Reply
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img1} alt="gst banner" className="img-fluid" />
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
            {/* Left Text */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-5 mb-3">GST Notice Reply</h1>
              <p className="fs-6 lh-lg">
                Got a GST Notice? We’re Here to Help. Respond promptly and
                correctly with expert assistance. Avoid penalties and stay fully
                compliant with GST laws. Let our professionals handle the notice
                reply process for you—smooth, accurate, and stress-free.
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
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number *"
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

      {/* Types vs Response */}
      <div className="container-fluid my-4">
        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 rounded shadow-sm"
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, #bbbbbb 100%)",
          }}
        >
          <span className="fw-bold fs-3">Types</span>
          <img
            src={img12}
            alt="arrow"
            className="my-3 my-md-0"
            style={{ height: "42px", width: "54px" }}
          />
          <span className="fw-bold fs-3">How to Respond</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-fluid my-4">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Types of GST Notices </h2>

<p><b>1. Show Cause Notice (SCN)</b></p>
<p>This notice is issued when the GST authorities believe that a taxpayer has violated the laws of GST like there is a case of non-payment, short payment or wrong availing/utilisation of Input Tax Credit (ITC), or any other non-compliance under GST. The authorities ask for an explanation for the non-compliance as the notice serves as an intimation to the taxpayer regarding the alleged discrepancy.</p>
<p><b>Common reasons for SCN:</b></p>
<p>Non-filing or late filing of GST returns.</p>
<p>Discrepancy in Input Tax Credit (ITC) claims.</p>
<p>Inaccurate information in GST returns.</p>
<p><b>2. Demand Notice (DRC-01)</b></p>
<p>The tax authorities issue a demand notice after the issuance of a show cause notice if they find that the taxpayer has not paid the taxes appropriately or has underpaid the taxes.</p>
<p><b>Common reasons for a Demand Notice:</b></p>
<p>Underreporting of sales.</p>
<p>Failure to pay the correct amount of tax</p>
<p>A mismatch between outward supply and returns filed.</p>
<p><b>3. GST Audit/Inspection Notice (ADT-01)</b></p>
<p>Under Section 65 of the CGST Act 2017, the GST authorities have the power to audit a taxpayer’s records to ensure compliance with GST laws. They can issue a notice asking for the taxpayer to present their books of accounts, financial statements, invoices, and relevant documents for audit.</p>
<p><b>Common reasons for an Audit Notice:</b></p>
<p>Random audit selection.</p>
<p>Taxpayers with a high volume of transactions.</p>
<p>Suspicion of fraud or tax evasion.</p>
<p><b>4. Investigation Notice (RVN-01)</b></p>
<p>An Investigation Notice is issued when the GST authorities suspect fraudulent activities such as tax evasion, misreporting of transactions, or incorrect claims of Input Tax Credit (ITC).</p>
<p><b>Common reasons for an Investigation Notice:</b></p>
<p>Sudden and large discrepancies in returns.</p>
<p>Misreporting of outward supply or underreporting of sales.</p>
<p>Issuing fake invoices or misuse of ITC.</p>
<p><b>5. GST Penalty Notice (DRC-01):</b></p>
<p>If the authorities believe that a business has violated GST law, tax authorities issue this notice to make the registered user liable for violation. This is a notice issued when it has been proved that there has been a clear violation.</p>
<p><b>Common reasons for a Penalty Notice:</b></p>
<p>Failure to maintain proper records</p>
<p>Providing false information on GST returns.</p>
<p>Evading GST payments.</p>
<p><b>6. Notice for cancellation of GST registration number</b></p>
<p>GST authorities shall issue this notice when they intend to cancel the GST registration number of a taxpayer due to non-compliance with the statutory obligations under the GST Act.</p>
<p><b>Common reasons for cancellation notice</b></p>
<p>Not filing GST returns for a long time</p>
<p>Not carrying business for a long time</p>
<p>Engaging in fraudulent activities</p>
<p><b>7. Notice for payment of due GST</b></p>
<p>GST authorities send this notice to remind the taxpayer of unpaid GST liabilities. When a taxpayer has not made payment for GST liabilities on time, the authority can send this notice.</p>
          </div>

          {/* Right Form Card */}
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
                    placeholder="Email *"
                  />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number *"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
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

      <div className="container-fluid">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>How to Reply to a GST Notice Online? </h2>

<p><b>1. Understand the Notice</b></p>
<p>Start by reading the notice carefully. Identify the section under which it has been issued and understand the reasons behind it. Since GST notices can be complex, it’s best to consult a tax professional for accurate interpretation.</p>
<p><b>2. Gather Relevant Documents</b></p>
<p>Collect all necessary records to support your case, including:</p>
<p>Filed GST returns</p>
<p>Sales and purchase invoices</p>
<p>Financial statements</p>
<p>Proof of tax payments</p>
<p><b>3. Rectify Any Errors</b></p>
<p>If the notice points out discrepancies—such as mismatches in Input Tax Credit (ITC) or invoice errors—rectify them promptly. Make the necessary corrections and prepare updated records as required.</p>
<p><b>4. Draft a Formal Reply</b></p>
<p>Prepare a clear and well-structured response addressing each issue raised in the notice. Ensure your reply is:</p>
<p>Accurate and consistent</p>
<p>Supported by proper documentation</p>
<p>Free of ambiguity or contradictions</p>
<p>Consider professional assistance to ensure your reply meets compliance standards.</p>
<p><b>5. Submit the Reply</b></p>
<p>File your response through the GST portal or submit it directly to the designated GST officer, depending on the instructions provided. Always retain a copy of your submission for future reference.</p>
      </div>

      {/* Bottom Banner */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img3} alt="gst banner bottom" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default GST_notice_reply;
