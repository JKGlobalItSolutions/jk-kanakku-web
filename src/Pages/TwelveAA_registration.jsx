import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/TwelveAA_registration/img1.png";
import img3 from "../assets/TwelveAA_registration/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const TwelveAA_registration = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">
              Registration
            </li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              12AA Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center">
        <img src={img1} alt="12AA Registration" className="img-fluid" />
      </div>

      {/* Hero Section with Form */}
      <div 
        style={{ 
          fontFamily: "Montserrat, Arial, sans-serif", 
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)", 
          padding: "40px 15px" 
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            
            {/* Left Text */}
            <div className="col-12 col-lg-7 text-white">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>12AA Registration</h1>
              <p>▶ Gain tax exemption and boost credibility with <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span> 12AA registration</p>
              <p>▶ 12AA registration provides tax exemption for charitable organisations, attracting donations, ensuring compliance and supporting NGO growth.</p>
              <p>▶ Our expert team (CAs, CSs) will help you navigate compliance smoothly.</p>
              <p>▶ Contact us today for a free consultation and unlock 12AA benefits.</p>
            </div>

            {/* Right Form */}
            <div className="col-12 col-lg-5">
              <div className="bg-white p-4 shadow rounded-3">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email *" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number *" />
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

      <Element_2/>

      {/* Content Sections */}
      <div className="container-fluid my-5">
        <div className="row g-4">

          {/* Left Main Content */}
          <div className="col-12 col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for 12AA Registration </h2>
<h3 style={{ fontWeight: "bold" }}>Documents for 12A:</h3>
<p><b>Foundational Document</b></p>
<p>Submit a self-certified copy of the instrument (e.g., Trust Deed or Memorandum of Association) used to establish the trust or institution.</p>

<p><b>Alternative Evidence of Establishment</b></p>
<p>If the trust or institution was not created through a formal instrument, submit a self-attested document evidencing its formation or existence.</p>

<p><b>Proof of Registration with Relevant Authority</b></p>
<p>Provide a self-attested copy of registration with the appropriate statutory authority, such as:</p>
<p>Registrar of Public Trusts</p>
<p>Registrar of Firms and Societies</p>
<p>Registrar of Companies</p>

<p><b>Documentation of Amendments or Changes</b></p>
<p>If the objectives of the trust or institution have been modified, submit a self-certified copy of the amendment document or resolution reflecting the change.</p>

<p><b>Financial Statements</b></p>
<p>Submit audited financial reports for up to the three preceding financial years, if applicable.</p>

<p><b>Activity Report</b></p>
<p>Include a brief note on the activities carried out by the entity.</p>

<p><b>Previous Registration Orders</b></p>
<p>If the entity has been previously registered under Section 12A and the registration was later revoked, a self-certified copy of the revocation order must be provided.</p>
<p>If the entity is applying for re-registration after resolving prior issues, a self-attested copy of the current registration order must accompany the application.</p>

<p><b>Rejection of Application</b></p>
<p>In cases where a previous application was rejected, a self-certified copy of the rejection order must be submitted along with the new application.</p>

<h3 style={{ fontWeight: "bold" }}>Eligibility for 12AA Registration</h3>
<p>The NGO must follow the Income Tax Act's definition of charity activity. The word "charitable" suggests improving the lives of the underprivileged, furthering medical research, education, and other environmental preservation initiatives. </p>
<p>The main factor used to determine whether to approve or reject an NGO application is whether or not the organisation is driven solely by self-interest. Only non-profit organisations not motivated by profit may receive a 12AA Registration Certificate.</p>
<p>The income tax exemption benefit will not be granted if the assessee engages in trade or commerce. In this scenario, the registration will only be approved if the assessee's total receipts are less than 20% of the trading activity.</p>
<p>12 AA The Income Tax Act 1961 does not require family or private trusts to register. Therefore, the assessee must be the public's benefactor.</p>
          </div>

          {/* Right Sidebar Form */}
          <div className="col-12 col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body">
                <h5 className="fw-bold text-center mb-3">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email *" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number *" />
                  </div>
                  <button className="btn w-100 fw-bold text-white" style={{ backgroundColor: "#b85423" }}>
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
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Registration Procedure for Obtaining 12AA Registration </h2>
<p>The Commissioner will request further documentation from you using the extra criteria once you have submitted the application in the manner specified and made it accessible online. The request for additional document verification will aid in demonstrating the legitimacy of the organisation's operations.</p>
<p>The Commissioner only has to issue an order to start the registration procedure if the Commissioner is satisfied with the application and wants to register the Trust or Institution under Section 12AA.</p>
<p>According to Section 12AA(2), the registering authority must decide on registration before the end of the month the application was submitted, and they must do so within six months.</p>
<p>Taking everything into account, In India, 12AA registration takes one to three months. In any event, a trust that obtains registration is valid for the trust's duration and does not require renewal.</p>

<h2 style={{ color: "#8f5d13", fontWeight: "bold" }}>Cancellation of 12AA Registration</h2>
<p>The Commissioner or Principal Commissioner of Income Tax may issue a written order to cancel the registration of a trust or institution under Section 12A of the Income Tax Act if any of the following conditions are met:</p>

<p><b>Serving a Particular Caste or Religious Community</b></p>
<p>The trust or institution, established after the enactment of the Income Tax Act, serves exclusively the interests of a specific caste or religious community</p>

<p><b>Private Benefit from Trust Income or Assets</b></p>
<p>The income or assets of the trust are used for the benefit of specified individuals, including:</p>
<p>Trustees</p>
<p>Founders</p>
<p>Any persons exercising substantial influence over the trust</p>

<p><b>Investment in Prohibited Modes</b></p>
<p>The assets of the trust or institution are invested in modes that are not permitted under the Income Tax Act (as specified in Section 11(5)).</p>
<p>When any of these violations are observed, the Commissioner or Principal Commissioner has the authority to terminate the trust’s or institution’s registration through a formal written order.</p>
      </div>

      {/* Bottom Image */}
      <div className="container text-center">
        <img src={img3} alt="12AA Registration Process" className="img-fluid" />
      </div>

      <Element_3/>
    </>
  );
}

export default TwelveAA_registration;
