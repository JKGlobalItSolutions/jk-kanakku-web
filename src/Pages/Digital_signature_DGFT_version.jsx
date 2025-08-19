import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Digital_signature_DGFT_version/img1.png";
import img2 from "../assets/Digital_signature_DGFT_version/img2.png";
import img3 from "../assets/Digital_signature_DGFT_version/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const Digital_signature_DGFT_version = () => {
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
            <li
              className="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              Digital Signature - DGFT Version
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="container text-center my-3">
        <img src={img1} alt="" className="img-fluid w-100 rounded" />
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
              <h1 className="fw-bold display-6 mb-3">
                Digital Signature - DGFT Version
              </h1>
              <p className="fs-6 lh-lg">
                A DGFT Digital Signature Certificate (DSC) is a must-have for
                any business involved in import-export under the Directorate
                General of Foreign Trade. It ensures secure, authenticated access
                to the DGFT portal and is essential for applying for an IEC,
                filing returns, and digitally signing official documents.
              </p>
              <p className="fs-6 lh-lg mb-0">
                We simplify the process—offering end-to-end assistance to help
                you obtain your DGFT-class DSC quickly, securely, and in full
                compliance with all requirements.
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
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
                      placeholder="Email *"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <span className="px-3 d-flex align-items-center bg-light border rounded-start">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      className="form-control border-start-0 rounded-end"
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

      <Element_2 />

      {/* Documents Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for DSC Registration with DGFT </h2>
<p><b>For Individuals:</b></p>
<p>PAN Card</p>
<p>Aadhaar Card or Passport</p>
<p>Recent passport-sized photograph</p>
<p>Mobile number and email verification</p>
<p><b>For Organizations:</b></p>
<p>Company PAN Card</p>
<p>Company Registration Certificate (e.g., GST, Incorporation Certificate)</p>
<p>Board Resolution or Authorization Letter</p>
<p>KYC documents of the Authorized Signatory</p>
            <img
              src={img2}
              alt="DSC Registration"
              className="img-fluid w-50 rounded mt-3"
            />
          </div>

          {/* Right Form Card */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
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
                      placeholder="Email *"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <span className="px-3 d-flex align-items-center bg-light border rounded-start">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      className="form-control border-start-0 rounded-end"
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

      {/* Steps Section */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>How to Apply for a DGFT Digital Signature Certificate? </h2>
<p><b>Step 1: Choose a Licensed Certifying Authority (CA)</b></p>
<p>Select any of the government-recognized Certifying Authorities like:</p>
<p>eMudhra</p>
<p>Capricorn</p>
<p>Sify</p>
<p>NSDL</p>
<p>VSign</p>
<p><b>Step 2: Select Certificate Type</b></p>
<p>For the DGFT filings, you need a Class 2 or Class 3 IEC-based DSC.</p>
<p><b>Step 3: Prepare the Documents</b></p>
<p>Collect the documents and make sure that</p>
<p><b>Step 3: Complete KYC Verification</b></p>
<p>Submit identity proof, address proof, and a photograph. For organizations, company registration documents and authorization letters are also required.</p>
<p><b>Step 4: USB Token (Cryptographic Device)</b></p>
<p>The DSC is stored in a secure USB token (FIPS-compliant), which is mandatory for secure digital signing.</p>
<p><b>Step 5: Digital Signature Issuance</b></p>
<p>After successful verification, the DSC is issued and delivered via token or e-token within 24–72 hours.</p>


<h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>How to Register DSC on DGFT Portal? </h2>
<p><b>1.Visit the Official DGFT Portal</b></p>
<p>Go to https://www.dgft.gov.in</p>
<p><b>2. Log In</b></p>
<p>Sign in using your DGFT credentials or the email address linked to your Importer Exporter Code (IEC).</p>
<p>3. Navigate to DSC Registration</p>
<p><b>From the dashboard, go to:</b></p>
<p>My Dashboard &gt; View and Register Digital Signature Token</p>
<p><b>4. Insert the USB Token</b></p>
<p>Connect your DSC USB token to your system and click on Register New DSC.</p>
<p><b>5. Select Your Certificate</b></p>
<p>When prompted, choose your certificate from the pop-up window and enter the token PIN.</p>
<p><b>6. Confirmation</b></p>
<p>Once successfully registered, your DSC will be linked to your IEC profile for all future transactions and filings on the DGFT portal.</p>

{/* heading 2 */}

<h3 style={{ fontWeight: "bold" }}>Technical Requirements for Using DSC</h3>
<ul>
<li>USB e-token with pre-installed digital signature</li>
<li>Java-enabled browser (preferably Internet Explorer or older versions of Chrome/Edge)</li>
<li>DSC software utility (provided by the CA)</li>
<li>Disable pop-up blockers and enable ActiveX controls</li>
<li>Windows OS (DGFT DSCs generally do not support Mac)</li>
</ul>


<h3 style={{ fontWeight: "bold" }}>Validity and Renewal of DGFT DSC</h3>
<p>A DSC is usually valid for 1 to 3 years</p>
<p>You must renew it before expiration to avoid disruption</p>
<p>Renewal can be done online via the same CA provider</p>
<p>No need for fresh KYC unless details have changed</p>
      </div>

      {/* Closing Image */}
      <div className="container text-center my-4">
        <img src={img3} alt="" className="img-fluid w-100 rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default Digital_signature_DGFT_version;
