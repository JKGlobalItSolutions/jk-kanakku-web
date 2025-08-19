import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/Digital_signature_certificate/img1.png";
import img2 from "../assets/Digital_signature_certificate/img2.png";
import img3 from "../assets/Digital_signature_certificate/img3.png";
import Element_2 from '../components/Element_2';
import Element_3 from '../components/Element_3';

const Digital_signature_certificate = () => {
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
            <li className="breadcrumb-item fw-bold text-dark">Registration</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              Digital Signature Certificate
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="" className="img-fluid" />
      </div>

      {/* Intro Section */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
      >
        <div className="container my-5">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-lg-8 text-white">
              <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                Digital Signature Certificate
              </h1>
              <p style={{ fontSize: 15 }}>
                &#9654; Secure your online transactions - Get your Digital Signature Certificate with{" "}
                <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span>!
              </p>
              <div style={{ fontSize: 16, lineHeight: "2" }}>
                <div>&#9679; Get Class-3 DSC with 2 Years Validity</div>
                <div>
                  &#9654; Our DSCs are recognized across various platforms including GST, MCA, Income Tax, DGFT, IEC, etc
                </div>
                <div>&#9654; Experience a paperless process to buy or renew expiring DSCs</div>
                <div>&#9654; Avail a DSC Token for just ₹200/-, ensuring cost-effective compliance solutions</div>
                <div>&#9654; Bulk orders will be provided with a special discount</div>
                <div>&#9654; We guarantee reliable service - Over 50,000 DSCs issued all over India</div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-4">
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                  padding: "32px 30px",
                }}
              >
                <div className="fw-bold mb-3" style={{ fontSize: 22 }}>
                  Expert Consultation
                </div>
                <input
                  type="text"
                  placeholder="Name *"
                  className="form-control mb-3"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="form-control mb-3"
                />
                <div className="d-flex mb-3">
                  <span
                    style={{
                      padding: "12px 10px",
                      background: "#ece5e0",
                      border: "1px solid #e5e8ee",
                      borderRadius: "7px 0 0 7px",
                      fontSize: 16,
                      minWidth: 54,
                      fontWeight: 600,
                      textAlign: "center",
                      color: "#222",
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile Number*"
                    className="form-control"
                    style={{ borderRadius: "0 7px 7px 0", borderLeft: "none" }}
                  />
                </div>
                <button
                  style={{
                    backgroundColor: "#c46a2f",
                    color: "white",
                    border: "none",
                    padding: "13px 0",
                    width: "100%",
                    borderRadius: 7,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Get Start Now &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element_2 />

      {/* Content Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 className="fw-bold" style={{color:"#0a3c66"}}>Required Documents for DSC Registration in India </h2>
            <p>Identity Verification</p>
            <p>Applicants must submit a valid government-issued identity document. Acceptable options include:</p>
            <p>PAN Card</p>
            <p>Aadhaar Card</p>
            <p>Visa (for foreign applicants)</p>

            <h3 className="fw-bold">Proof of Address</h3>
            <p>Valid address proof must be provided. Commonly accepted documents include:</p>
            <p>Aadhaar Card</p>
            <p>Utility Bills (Electricity, Water, or Telephone)</p>
            <p>Passport</p>

            <h3 className="fw-bold">Passport-Sized Photograph</h3>
            <p>A recent, clear, and high-resolution passport-sized photograph of the applicant is required.</p>

            <h3 className="fw-bold">Permission Letter (for Organizational DSCs)</h3>
            <p>For applicants requesting a Digital Signature Certificate on behalf of an organization, an authorized representative must submit:</p>
            <p>A permission letter on the organization’s letterhead</p>
            <p>The letter must include the company seal and name</p>
            <p>It should be signed by a person with authorization within the organization</p>
            <p className="fw-semibold" style={{ color: "#8f5d13" }}>
              The documents must be cross-checked, collected, and submitted to avoid unnecessary errors and delays.
            </p>

            <h2 className="fw-bold" style={{color:"#0a3c66"}}>Digital Signature (DSC) Registration Process in India</h2>
            <h3 className="fw-bold">Choose the DSC Type</h3>

            <div className="mt-5">
              <img
                src={img2}
                alt="Business Woman Partnership Registration"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="col-lg-4">
            <div className="card shadow border-0" style={{ borderRadius: "1.5rem" }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name *" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email*" />
                  </div>
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="form-control"
                      value="+91"
                      style={{ maxWidth: "70px", background: "#eee" }}
                      readOnly
                    />
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
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

      {/* Extra Information */}
      <div className="container-fluid">
        <p><b>Complete the Online Application</b></p>
<p>Fill out the online application form given by the Certifying Authority (CA) with the necessary personal or group details, such as name, contact information, and business registration details </p>
<p><b>Submit the Documents</b></p>
<p>Upload or submit the appropriate supporting documents, which usually include proof of identity (e.g., Aadhaar card, PAN card, passport), proof of address (e.g., gas bill, bank statement), and a recent passport-sized picture</p>
<p><b>Make the Payment</b></p>
<p>Pay the appropriate fees for the DSC register through the CA's safe payment route. The fees may vary based on the type of DSC and the validity term</p>
<p><b>Verification and Approval</b></p>
<p>The CA will study your application and supporting papers. Upon successful proof, your DSC will be accepted and given</p>
<p><b>Receive the DSC</b></p>
<p>The accepted DSC will be given to you, either in the form of a smart card or a soft code, which can be placed on your computer or device for use in digital sales and document signing</p>


{/* heading 2 */}

<h3 style={{ color: "#0a3c66", fontWeight: "bold" }}>DSC Compliance</h3>
<p>Digital Signature Certificates (DSCs) play a crucial role in helping businesses meet various legal and regulatory obligations. In India, DSCs are mandatory for electronically filing income tax returns (ITRs), Goods and Services Tax (GST) returns, and other key documents with government authorities. Failure to use a legally valid DSC can lead to penalties, delays, or rejection of submissions. Regulatory bodies such as the Income Tax Department and GST authorities require DSCs for online compliance processes; without them, taxpayers and businesses may be unable to file returns or submit essential forms within the stipulated timelines.</p>
<p>Beyond tax compliance, DSCs are also essential for company incorporation, acquiring business licenses, and digitally signing contracts, where verifying the signer's identity is critical. They are particularly vital in sectors that rely heavily on online transactions, ensuring secure and legally recognized digital communications.</p>
      </div>

      {/* Closing Image */}
      <div className="container text-center my-3">
        <img src={img3} alt="" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default Digital_signature_certificate;
