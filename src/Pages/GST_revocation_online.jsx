import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/GST_revocation_online/img1.png";
import img2 from "../assets/GST_revocation_online/img2.png";
import img3 from "../assets/GST_revocation_online/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_revocation_online = () => {
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
              GST Revocation Online
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="GST Revocation" className="img-fluid rounded" />
      </div>

      {/* Intro Section with Form */}
      <div className="py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            
            {/* Left Text */}
            <div className="col-lg-7 text-white">
              <h1 className="fw-bold mb-4">GST Revocation Online</h1>
              <p>GST Registration Cancelled? We Can Help You Get It Back!</p>
              <p>Reinstate your GST registration smoothly with our expert GST Revocation Services. Avoid penalties and stay compliant with the latest tax regulations. Our experienced team will manage the entire process for you—quickly, efficiently, and stress-free.</p>
              <p>Act now to reactivate your GST and keep your business on track!</p>
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
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required to Apply for GST Revocation </h2>
<p><b>Submit Form GST REG-21</b></p>
<p>This is the official application form to request revocation of your GST cancellation. It must be filed through the GST portal.</p>
<p><b>Letter of Authorization (if applicable)</b></p>
<p>If an authorized representative (e.g., accountant or legal advisor) is filing the application on your behalf, provide a signed authorization letter.</p>
<p><b>GST Registration Certificate</b></p>
<p>Keep a copy of your original GST registration for reference.</p>
<p><b>Reason for Revocation</b></p>
<p>Clearly state the reason for the original cancellation and explain why you are requesting reactivation.</p>
<p><b>Cancellation Notice</b></p>
<p>Include a copy of the cancellation notice issued by the GST authorities.</p>
<p><b>Compliance with Pending Returns</b></p>
<p>Ensure all previously due GST returns are filed and your account is compliant with tax regulations.</p>
<p><b>Supporting Documents (if any)</b></p>
<p>Attach any additional evidence to support your application, such as proof that your business is active and operational.</p>

            {/* Checklist Image */}
            <div className="my-3" style={{maxWidth:"50%"}}>
              <img src={img2} alt="GST Revocation Docs" className="img-fluid rounded" />
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

      {/* How to Apply Section */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>How to Apply for GST Revocation Online in India? </h2>
<p><b>Step 1:</b> Log In to the GST Portal</p>
<p>Visit the official GST portal at www.gst.gov.in. Use your registered username and password to log in to your account.</p>
<p><b>Step 2:</b> Navigate to the Revocation Application</p>
<p>Go to the ‘Services’ tab, select ‘Registration’, and then click on ‘Application for Revocation of Cancellation of Registration’.</p>
<p><b>Step 3:</b> Complete the Application Form</p>
<p>Fill in the required details, including the reason for seeking revocation. Be clear and concise in your explanation. Attach all necessary supporting documents to strengthen your case.</p>
<p><b>Step 4:</b> Submit the Application</p>
<p>Review all the information and uploaded documents carefully. Once confirmed, submit the application. After submission, an acknowledgement reference number (ARN) will be generated, which you can use to track the status of your application.</p>
<p><b>Step 5:</b> Await GST Officer's Review</p>
<p> The GST officer will review your application and documents:</p>
<ul>
<li>If satisfied, your GST registration will be reinstated, and you’ll receive an official confirmation.</li>
<li>If not satisfied, the officer will issue a Show Cause Notice (Form GST REG-23) explaining the reasons for rejection.</li>
<li>You will then have an opportunity to respond and justify why your registration should be restored.</li>
</ul>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-5">
        <img src={img3} alt="GST Revocation Process" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  )
}

export default GST_revocation_online
