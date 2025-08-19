import React from 'react';
import img1 from "../assets/Iec_registration/img1.png";
import img3 from "../assets/Iec_registration/img3.png";
import Element_2 from '../components/Element_2';
import Element_3 from '../components/Element_3';
import { Link } from 'react-router-dom';

const Iec_registration = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold" style={{ color: "black" }}>Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold" style={{ color: "black" }}>Registration</li>
            <li className="breadcrumb-item active fw-bold" style={{ color: "black" }} aria-current="page">
              IEC Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="IEC Registration" className="img-fluid" />
      </div>

      {/* Hero Section */}
      <div style={{
        fontFamily: "Montserrat, Arial, sans-serif",
        background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        padding: "2rem 0"
      }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-8 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>IEC Registration</h1>
              <p>▶ Streamline your export business with <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span> IEC registration service</p>
              <p>▶ Obtain your import export code and open the door to international trade opportunities and markets</p>
              <p>▶ Experience a smooth and efficient IEC registration process with our expert assistance, ensuring minimal paperwork and quick approval</p>
              <p>▶ Register now and explore international markets!</p>
            </div>

            {/* Right Form */}
            <div className="col-lg-4">
              <div className="p-4 bg-white rounded shadow">
                <h5 className="fw-bold mb-3">Expert Consultation</h5>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email *" className="form-control mb-3" />
                  <div className="d-flex mb-3">
                    <span className="px-3 py-2 bg-light border rounded-start">+91</span>
                    <input type="tel" placeholder="Mobile Number *" className="form-control rounded-end" />
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

      {/* Main Content */}
      <div className="container-fluid my-5">
        <div className="row">
          {/* Left */}
          <div className="col-lg-8 px-4">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for IEC Registration in India </h2>

<h3 style={{ fontWeight: "bold" }}>Proof of Incorporation/Registration:</h3>
<p>Submit valid proof of your business’s incorporation or registration. This may include the Registration Certificate or relevant documentation for Hindu Undivided Families (HUFs), Registered Societies, Trusts, and other entities.</p>

<h3 style={{ fontWeight: "bold" }}>PAN Card:</h3>
<p>A Permanent Account Number (PAN) card is mandatory for all types of business entities, including Proprietorships, Partnership Firms, Limited Liability Partnerships (LLPs), Societies, Trusts, and HUFs.</p>

<h3 style={{ fontWeight: "bold" }}>Aadhaar Card:</h3>
<p>Provide the Aadhaar card of the proprietor, managing partner, or authorized signatory, depending on the type of organization.</p>

<h3 style={{ fontWeight: "bold" }}>Address Proof: </h3>
<p>Sale Deed</p>
<p>Rent agreement</p>
<p>Lease deed</p>
<p>Electricity bill</p>
<p>Telephone landline bill</p>
<p>Mobile, post-paid bill</p>
<p>MoU</p>
<p>Partnership deed</p>

<h3 style={{ fontWeight: "bold" }}>Cancelled Cheque (Rejected Cheque):</h3>
<p>A cancelled cheque serves as proof of the company's bank account. Ensure that the account holder’s name, account number, and IFSC code are clearly visible on the cheque.</p>

<h3 style={{ fontWeight: "bold" }}>Passport-Sized Photograph:</h3>
<p>Submit the latest passport-sized photograph of the applicant. This is required for processes such as Import Export Code (IEC) registration.</p>

<h3 style={{ fontWeight: "bold" }}>Memorandum of Association (MOA) & Articles of Association (AOA):</h3>
<p>Private Limited Companies must provide copies of the MOA and AOA as evidence of the company's objectives and the scope of its business activities.</p>

<h3 style={{ fontWeight: "bold" }}>Digital Signature Certificate (DSC):</h3>
<p>A valid Digital Signature Certificate of the company’s Director is required for secure online filing and verification. </p>
<p>It is pertinent to note that if the address proof is not in the name of applicant firm/organization, then a no objection certificate (NOC) has to be obtained from the owner of the premises in favor of the firm/organization and Bank account of the firm/organization, cancelled cheque along with active aadhar card of the firm/organization needs to be submitted as a single PDF document.</p>


<h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Process of IEC Registration Online</h2>
<h3 style={{ fontWeight: "bold" }}>Register for IEC: </h3>
<p>If you don’t have an account at DGFT, the first step is to visit the DGFT website. Then click on Apply for IEC at https://www.dgft.gov.in/CP/.</p>
<p>Click on the ‘Start Fresh Application’</p>
<p>Enter the required information and captcha, then click on ‘Send OTP’</p>

<h3 style={{ fontWeight: "bold" }}>Payment of the Requisite Fee:</h3>
<p>The required application fee must be paid online during the registration process. Ensure successful payment to proceed with the application.</p>

<h3 style={{ fontWeight: "bold" }}>Verification of Documents: </h3>
<p>Ensure that all necessary documents are provided, including proof of name, proof of address, proof of the firm’s bank account, a cancelled cheque, and any other supporting documents as specified by the Directorate General of Foreign Trade (DGFT).</p>

<h3 style={{ fontWeight: "bold" }}>Issuance of the IEC Code:</h3>
<p>After completing the application, uploading all required documents, and paying the applicable fee, you will be redirected to the DGFT website. From there, you can download the payment receipt, and your IEC (Import Export Code) Certificate will be issued and sent to your registered email address.</p>
<p>By following these steps carefully and submitting right documents, individuals, groups/organizations can successfully finish the IEC Registration process and receive the necessary Import Export Code.</p>
          </div>

          {/* Right Form */}
          <div className="col-lg-4 px-4">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="d-flex mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value="+91"
                      style={{ maxWidth: "70px", background: "#eee" }}
                      readOnly
                    />
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn fw-bold w-100 text-white" style={{ background: "#b85423", borderRadius: "1.5rem" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-3">
        <img src={img3} alt="IEC Process" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default Iec_registration;
