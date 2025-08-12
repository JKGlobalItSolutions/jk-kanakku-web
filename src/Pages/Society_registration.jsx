import React from 'react'
import img1 from "../assets/Society_registration/img1.png"
import img2 from "../assets/Society_registration/img2.png"
import img3 from "../assets/Society_registration/img3.png"
import Element_2 from '../components/Element_2'
import Element_3 from '../components/Element_3'

const Society_registration = () => {
  return (
    <>
      {/* Hero Image */}
      <div className="container d-flex justify-content-center">
        <img src={img1} alt="" className="img-fluid" />
      </div>

      {/* Hero Section */}
      <div className="container-fluid py-5" style={{ fontFamily: "Montserrat, Arial, sans-serif", background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="row align-items-center justify-content-center">
          
          {/* Left Text */}
          <div className="col-lg-8 col-md-12 text-white px-4">
            <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>Society Registration</h1>
            <p className="mb-3">
              &#9654; Join Hands for a Better Tomorrow! Register Your Society with <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span>
            </p>
            <ul className="ps-3" style={{ lineHeight: "1.8" }}>
              <li>Society registration provides legal recognition, access to government grants, tax exemptions, enhanced credibility, and the ability to open a bank account.</li>
              <li>We provide expert guidance through every step of society registration, from document preparation to final submission, with our dedicated support team.</li>
              <li>Visit us and get your society registered in no time and start impacting your community!</li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="fw-bold mb-4">Expert Consultation</h4>
              <input type="text" className="form-control mb-3" placeholder="Name *" />
              <input type="email" className="form-control mb-3" placeholder="Email*" />
              <div className="input-group mb-3">
                <span className="input-group-text">+91</span>
                <input type="tel" className="form-control" placeholder="Mobile Number*" />
              </div>
              <button className="btn w-100 fw-bold" style={{ backgroundColor: "#c46a2f", color: "white" }}>
                Get Start Now &gt;
              </button>
            </div>
          </div>

        </div>
      </div>

      <Element_2 />

      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">

          {/* Left Content */}
          <div className="col-lg-8 px-4">

            <h2 className="fw-bold" style={{ color: "#0a3c66" }}>Documents Required For Society Registration in India</h2>
            <p>Documentation is central to registering as a member of society in India. The papers listed in the Societies Act 1860 must be submitted with the application for society registration...</p>

            <h3 className="fw-bold">Documentation of the Society Registration</h3>
            <p>Passport Size Colour Photograph</p>
            <p>Copy of PAN card</p>

            <h3 className="fw-bold">Address Proof: (any one document)</h3>
            <p>Telephone Bill</p>
            <p>Gas Bill</p>
            <p>Electricity Bill</p>
            <p>Bank Statement</p>

            <h3 className="fw-bold">Identity Proof: (any one document)</h3>
            <p>Passport</p>
            <p>Voter ID</p>
            <p>Driving License</p>
            <p>Signed MOA & By-Laws</p>
            <p>Affidavits from President</p>

            <h3 className="fw-bold">Documentation for the Society Registered Address</h3>
            <p>Telephone</p>
            <p>Electricity</p>
            <p>Water Bill</p>

            <h2 className="fw-bold" style={{ color: "#0a3c66" }}>The Procedure of the Society Registration in India</h2>

            <h3 className="fw-bold">1. Documentation:</h3>
            <p>The initial step in registering a society is to compile and organize the required printed documents...</p>

            <h3 className="fw-bold">2. Selecting the Special Title of Your Society:</h3>
            <p>The title of the society should be essential and express its establishing targets...</p>

            <h3 className="fw-bold">3. Drafting a MOA:</h3>
            <p>A Memorandum of Association (MOA) represents the foundation of the organization...</p>

            <h3 className="fw-bold">4. Rules & Regulations:</h3>
            <p>The rules dictate how the internal affairs of the society are managed...</p>

            <h3 className="fw-bold">5. Application for Enlistment of Society:</h3>
            <p>An application is submitted to the Registrar of Societies along with...</p>

            <h3 className="fw-bold">6. Issuance of Certificate of Society Registration:</h3>
            <p>In Tamil Nadu, obtaining a Certificate of Registration requires over a month...</p>

            <h3 className="fw-bold">Society Registration Renewal</h3>
            <ul>
              <li>Application</li>
              <li>Enlistment declaration</li>
              <li>Rundown of Leader Individuals</li>
              <li>Realness Certificate</li>
              <li>Budget summaries</li>
              <li>Review Report</li>
              <li>Duplicate of Use Declaration</li>
              <li>Mark of New Individuals</li>
              <li>Financial balance and Passbook</li>
              <li>Affirmation</li>
              <li>Identification size Photograph</li>
              <li>Reestablishment Fee</li>
            </ul>

          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4 px-4 mt-5 mt-lg-0">
            <div className="card shadow rounded-4 w-100 mb-5">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold" style={{ background: "#b85423", color: "white", borderRadius: "1.5rem" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>

            <img src={img2} alt="Business Woman Partnership Registration" className="img-fluid rounded mt-4" />
          </div>

        </div>
      </div>

      {/* Bottom Image */}
      <div className="container d-flex justify-content-center mt-5">
        <img src={img3} alt="" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  )
}

export default Society_registration
