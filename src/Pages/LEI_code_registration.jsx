import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/LEI_code_registration/img1.png";
import img2 from "../assets/LEI_code_registration/img2.png";
import img3 from "../assets/LEI_code_registration/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const LEI_code_registration = () => {
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
              LEI Code Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Banner */}
      <div className="container text-center my-3">
        <img src={img1} alt="LEI Registration" className="img-fluid" />
      </div>

      {/* Hero Section */}
      <div className="py-5" style={{ fontFamily: "Montserrat, Arial, sans-serif", background: "linear-gradient(to bottom, #c46a2f, #e68741)" }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-6 mb-3">LEI Code Registration</h1>
              <p className="fs-6 lh-lg">
                One global identity for your financial transactions. Legal Entity Identifier (LEI) is a globally recognized code 
                that verifies your company's identity in international financial systems. The code is essential for businesses involved 
                in cross-border transactions, OTC derivatives, and regulatory reporting. 
                We handle everything from preparing documents to liaising with LEIL and timely renewals. 
                Ensure your global credibility with expert-led LEI registration with 
                <span className="fw-bold text-warning"> JK KANNAKU!</span>
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email*" className="form-control mb-3" />
                  <div className="d-flex mb-3">
                    <span className="px-3 py-2 bg-light border rounded-start">+91</span>
                    <input type="text" placeholder="Mobile Number*" className="form-control rounded-end" />
                  </div>
                  <button className="btn w-100 fw-bold text-white" style={{ backgroundColor: "#c46a2f" }}>
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
            <h2 className="fw-bold" style={{ color: "#0a3c66", fontWeight: "bold" }}>What Documents Will You Need to Obtain the LEI Code?</h2>
            <ul className="list-unstyled">
              <li>PAN Card of the entity</li>
              <li>Certificate of Incorporation / Registration</li>
              <li>Memorandum & Articles of Association / LLP Deed</li>
              <li>Authorised Signatory Letter</li>
              <li>GST certificate (optional but preferred)</li>
              <li>Board resolution (in case of corporate entities)</li>
              <li>Audited financials or ownership details</li>
              <li>Declaration of Ultimate Parent / Direct Parent</li>
              <li>Authorised signatory's ID proof (Aadhaar/PAN)</li>
            </ul>
            <img src={img2} alt="Documents" className="img-fluid rounded mt-3" />
          </div>

          {/* Side Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4 " style={{height:"300px"}}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="d-flex mb-3">
                    <input type="text" className="form-control" value="+91" style={{ maxWidth: "70px", background: "#eee" }} readOnly />
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#b85423", borderRadius: "1.5rem" }}>
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
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>How to Get LEI Code Online?</h2>
<p><b>Step 1: Select the Authorized Issuing Authority</b></p>
<p>The Reserve Bank of India (RBI) has designated Legal Entity Identifier India Ltd. (LEIL)—a wholly owned subsidiary of the Clearing Corporation of India Ltd. (CCIL)—as the official Local Operating Unit (LOU) for issuing LEIs in India.</p>
<p><b>Step 2: Register and Start Your Application</b></p>
<p>Visit https://www.ccilindia-lei.co.in and create an account.</p>
<p>Once logged in, begin a new LEI application by providing the required entity information and uploading relevant documents in PDF or scanned format, as specified by the portal.</p>
<p><b>Step 3: Pay the Application Fee</b></p>
<p>Submit the applicable fee to proceed.</p>
<p>Note: The fee structure may vary slightly depending on the LOU and service requirements.</p>
<p><b>Step 4: Application Verification</b></p>
<p>After submission, the LEIL team will examine your application and validate the provided data against multiple sources, including:</p>
<p>MCA21 database (Ministry of Corporate Affairs)</p>
<p>PAN records (Income Tax Department)</p>
<p>Global LEI System (GLEIF) database</p>
<p><b>Step 5: Receive Your LEI Code</b></p>
<p>Upon successful verification, your organization will be issued a 20-character LEI code.</p>
<p>This code will be published on the GLEIF Global LEI Index, where it is publicly accessible along with your registered entity details.</p>

<h3 style={{ color: "#8f5d13", fontWeight: "bold" }}>LEI Code Validity Period</h3>
<p>An LEI code remains valid for one year from the date it is issued. To maintain its active status, it must be renewed annually. Failure to renew on time will result in the LEI being marked as “Lapsed”, which may lead to regulatory non-compliance and impact participation in financial transactions.</p>

<h3 style={{ color: "#8f5d13", fontWeight: "bold" }}>LEI Renewal in India</h3>
<p>LEI codes expire after 12 months from the date of issuance. Renewal is critical to maintaining validity. If your LEI lapses:</p>
<p>You may not be allowed to process financial transactions.</p>
<p>You may face non-compliance under RBI/SEBI guidelines.</p>
      </div>

      {/* Closing Image */}
      <div className="container text-center my-4">
        <img src={img3} alt="LEI Registration" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default LEI_code_registration;
