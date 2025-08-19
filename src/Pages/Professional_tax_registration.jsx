import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/Professional_tax_registration/img1.png"
import img2 from "../assets/Professional_tax_registration/img2.png"
import img3 from "../assets/Professional_tax_registration/img3.png"
import Element_2 from '../components/Element_2'
import Element_3 from '../components/Element_3'

const Professional_tax_registration = () => {
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
            <li className="breadcrumb-item fw-bold text-dark">
              Registration
            </li>
            <li
              className="breadcrumb-item active fw-bold text-dark"
              aria-current="page"
            >
              Professional Tax Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container d-flex justify-content-center my-3">
        <img src={img1} alt="" className="img-fluid" />
      </div>

      {/* Hero Section with Form */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
        className="py-5"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left content */}
            <div className="col-lg-8 text-white">
              <h1 className="fw-bold fs-1 mb-3">Professional Tax Registration</h1>
              <div className="mb-3">
                &#9654; Simplify tax compliance: Get professional tax registered with{" "}
                <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span>
              </div>
              <div style={{ fontSize: 16, lineHeight: "2" }}>
                <div>
                  &#9679; Our tax experts will handle the entire process efficiently,
                  saving you time and ensuring compliance
                </div>
                <div>
                  &#9654; We understand the specific needs of freelancers, consultants
                  and professionals and offer personalized registration services
                </div>
                <div>
                  &#9654; Call now and get expert guidance for professional tax compliance
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-4">
              <div
                className="bg-white p-4 rounded shadow"
                style={{ minHeight: "100%" }}
              >
                <div className="fw-bold fs-5 mb-3">Expert Consultation</div>
                <input
                  type="text"
                  placeholder="Name *"
                  className="form-control mb-2"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="form-control mb-2"
                />
                <div className="d-flex mb-3">
                  <span
                    style={{
                      padding: "12px 10px",
                      background: "#ece5e0",
                      border: "1px solid #e5e8ee",
                      borderRadius: "7px 0 0 7px",
                      minWidth: "54px",
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#222",
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile Number*"
                    className="form-control"
                    style={{ borderRadius: "0 7px 7px 0" }}
                  />
                </div>
                <button className="btn w-100 fw-bold text-white" style={{ backgroundColor: "#c46a2f" }}>
                  Get Start Now &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element_2 />

      {/* Main Content */}
      <div className="container-fluid my-4">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 className="fw-bold " style={{color:"#0a3c66"}}>Required Documents for Professional Tax Registration in India</h2>
            <h3 className="fw-bold">PAN Card</h3>
            <p>A Permanent Account Number (PAN) is mandatory for professional tax filing. It serves as a unique identifier for individuals and businesses in tax-related matters.</p>
<h3 style={{ fontWeight: "bold" }}>Address Proof</h3>
<p>Proof of the business or professional address is required. This verifies the actual location of the business or individual, ensuring accurate tax assessment and compliance.</p>

<h3 style={{ fontWeight: "bold" }}>Identity Proof</h3>
<p>Identity proof of the individual or an authorized representative of the business must be submitted. This helps confirm the identity of the applicant and ensures the legitimacy of the registration process.</p>


<h3 style={{ fontWeight: "bold" }}>Bank Account Information</h3>
<p>Details of the bank account belonging to the business or individual must be provided. This information is essential for processing tax payments.</p>


<h3 style={{ fontWeight: "bold" }}>Proof of Business Registration</h3>
<p>Registered businesses must submit proof of registration, such as a Certificate of Incorporation from the Ministry of Corporate Affairs (MCA). This confirms the legal existence and regulatory status of the business.</p>

<h3 style={{ fontWeight: "bold" }}>Professional License</h3>
<p>Medical Council Registration (for doctors)</p>
<p>Bar Council Registration (for lawyers)</p>
<p>Institute of Chartered Accountants Registration (for CAs)</p>

<h3 style={{ fontWeight: "bold" }}>Bank Account Information</h3>
<p>Eligibility Check</p>
<p>Application Process</p>
<p>Document Gathering</p>
<p>Fee Payment</p>
<p>PTRC Certificate</p>
          </div>

          {/* Right Form Card */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4 ">
              <div className="card-body p-4" style={{height:"300px"}}>
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
                  <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#b85423" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="container d-flex justify-content-center my-4">
          <img src={img2} alt="" className="img-fluid" />
        </div>

        {/* Process Section */}
        <h2 className="fw-bold " style={{color:"#0a3c66"}}>The Process of Professional Tax Registration in India</h2>
       <p><b>Visit Website</b> The first step is to visit the official website of the state government's professional tax department</p>
<p><b>Fill Application Form</b></p>
<p>Complete the application form with accurate and up-to-date information. Carefully review all entries before submission, as any errors or discrepancies may result in delays.</p>
<p><b>Pay Applicable Fees</b></p>
<p>Pay the registration fee and the professional tax amount in accordance with your state's regulations. The fee structure may vary from state to state.</p>
<p><b>Submit Application</b></p>
<p>After completing the form, uploading all necessary documents, and making the payment, submit the application online through the official portal.</p>
<p><b>Await PTRC Certificate</b></p>
<p>Once the application is successfully submitted, wait for the issuance of the Professional Tax Registration Certificate (PTRC) by the relevant tax authority. This certificate confirms that you are officially registered and compliant with professional tax regulations.</p>
<p></p>


<h3 style={{ fontWeight: "bold" }}>Professional Tax Compliance</h3>
<p><b>Monthly Tax Deposits</b></p>
<p>Employers are required to deduct professional tax from their employees' salaries and remit it to the government on a monthly basis, as per the regulations set by the respective state government.</p>

<p><b>Annual Tax Return Filing</b></p>
<p>In certain states, it is mandatory to file an annual professional tax return. This return should include details of professional income, tax payments, and any refunds claimed during the financial year.</p>

<p><b>Record Maintenance</b></p>
<p>Maintaining accurate and up-to-date records of professional tax payments is essential. This includes:</p>
<p>Payment receipts</p>
<p>Filed returns</p>

<p><b>Supporting documents</b></p>
<p>These records are crucial for demonstrating compliance during audits or government inspections.</p>

<p><b>Importance of Compliance</b></p>
<p>Adhering to these compliance measures helps individuals and businesses fulfill their professional tax obligations, maintain a good standing with tax authorities, and ensure uninterrupted operations. Proper compliance not only prevents penalties and legal issues but also builds credibility and trust with regulatory bodies and business partners.</p>
      </div>

      <div className="container d-flex justify-content-center my-4">
        <img src={img3} alt="" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  )
}

export default Professional_tax_registration
