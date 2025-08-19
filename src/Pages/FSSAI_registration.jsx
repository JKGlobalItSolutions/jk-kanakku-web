import React from 'react';
import img1 from "../assets/FSSAI_registration/img1.png";
import img2 from "../assets/FSSAI_registration/img2.png";
import { Link } from 'react-router-dom';
import Element_2 from '../components/Element_2';
import Element_3 from '../components/Element_3';

const FSSAI_registration = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold" style={{ color: "black" }}>Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold" style={{ color: "black" }}>
              Registration
            </li>
            <li className="breadcrumb-item active fw-bold" style={{ color: "black" }} aria-current="page">
              FSSAI Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center my-3">
        <img src={img1} alt="FSSAI Registration" className="img-fluid rounded" />
      </div>

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
            <div className="col-lg-7 text-white text-start">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>FSSAI Registration</h1>
              <p>
                &#9654; Ensure compliance and enhance credibility with{" "}
                <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span> FSSAI registration - Your partner in Food Safety and Quality Assurance.
              </p>
              <p>&#9654; Display your FSSAI license to assure consumers of the safety and quality of your food products</p>
              <p>&#9654; We offer FSSAI registration services for all types of food businesses, from small cafes to large restaurants and manufacturers</p>
              <p>&#9654; Register your food business today!</p>
            </div>

            {/* Right form */}
            <div className="col-lg-5">
              <div className="bg-white rounded shadow p-4">
                <h5 className="fw-bold mb-3">Expert Consultation</h5>
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
                    className="btn fw-bold w-100"
                    style={{ background: "#c46a2f", color: "white" }}
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

      {/* Content Section */}
      <div className="container-fluid my-4">
        <div className="row g-4">
          {/* Left content */}
          <div className="col-lg-8 px-4">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Required Documents for FSSAI Registration in India</h2>
            <h3 className="fw-bold">PAN Card:</h3>
            <p>PAN Card is mandatory for FSSAI registration. Issued by the Income Tax Department, it contains the applicant’s name, photograph, and signature.</p>

            <h3 className="fw-bold">Aadhaar Card:</h3>
            <p>Unique identification number by UIDAI, containing name, picture, and biometric details.</p>

            <h3 className="fw-bold">Passport:</h3>
            <p>Legal identity proof for foreign applicants.</p>

            <h3 className="fw-bold">Address Proof:</h3>
            <ul>
              <li>Recent utility bill (electricity, water, gas)</li>
              <li>Rent/Lease agreement</li>
            </ul>

            <h3 className="fw-bold">Trademark Representation:</h3>
            <ul>
              <li>Logo image (if applicable)</li>
              <li>Word mark in clear format</li>
            </ul>

            <h3 className="fw-bold">Classification Information:</h3>
            <p>FSSAI categories for food items/services — 45 classes available. Choose the correct one based on your offerings.</p>

            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Process of FSSAI Registration in India</h2>
            <p><b>Select Brand:</b> Choose a unique and striking brand.</p>
            <p><b>Class Identification:</b> Pick the right FSSAI class.</p>
            <p><b>Application Preparation:</b> Fill details about business, owners, FSMS, and premises.</p>
            <p><b>Document Submission:</b> Self-attested ID proofs, photographs, utility bills, GST certificate, FSMS certificate.</p>
            <p><b>Examination & Publication:</b> FSSAI reviews the application, followed by a 30-day public review period.</p>
            <p><b>Registration:</b> Official registration grants exclusive rights and legal protection.</p>
          </div>

          {/* Right form card */}
          <div className="col-lg-4">
            <div className="card shadow border-0 rounded-4">
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
                    className="btn fw-bold w-100"
                    style={{ background: "#b85423", color: "white" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom image */}
      <div className="container text-center my-4">
        <img src={img2} alt="Business Partnership" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  );
};

export default FSSAI_registration;
