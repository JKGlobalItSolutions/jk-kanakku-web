import React from 'react'
import img4 from "../assets/Company_registration/img4.png"
import img5 from "../assets/Company_registration/img5.png"
import img6 from "../assets/Company_registration/img6.png"
import img7 from "../assets/Company_registration/img7.png"
import img8 from "../assets/Company_registration/img8.png"
import img9 from "../assets/Company_registration/img9.png"
import img10 from "../assets/Company_registration/img10.png"
import Element_1 from '../components/Element_1'

const Element_3 = () => {
  return (
    <>
      <div className="container py-5" style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>
        
        {/* Unique Advantage Section */}
        <h2 className="text-center fw-bold mb-5" style={{ fontSize: "2rem" }}>
          Our <span style={{ color: "#fb9808" }}>unique</span> advantage
        </h2>

        <div className="row g-4 align-items-center">
          {/* Left side */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-3">
              <img src={img4} alt="300+ Services" className="img-fluid" style={{ width: 46, height: 46 }} />
              <div>
                <div className="fw-semibold text-primary">300+ Services</div>
                <small>Your compliance, our responsibility</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={img5} alt="Client Delight" className="img-fluid" style={{ width: 40, height: 40 }} />
              <div>
                <div className="fw-semibold text-primary">Client Delight</div>
                <small>Focused on meeting your needs and exceeding expectations</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={img6} alt="Response Time" className="img-fluid" style={{ width: 40, height: 40 }} />
              <div>
                <div className="fw-semibold text-primary">Response Time</div>
                <small>We deliver 99% of our services within the promised timeline</small>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <img src={img10} alt="Expert Lady"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "220px", objectFit: "cover" }}
            />
          </div>

          {/* Right side */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-3">
              <img src={img7} alt="Google Reviews" className="img-fluid" style={{ width: 40, height: 40 }} />
              <div>
                <div className="fw-semibold text-primary">Google Reviews</div>
                <small>Almost every customer rated us 5 stars on Google</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={img8} alt="Compliance" className="img-fluid" style={{ width: 40, height: 40 }} />
              <div>
                <div className="fw-semibold text-primary">Compliance</div>
                <small>We ensure 99.9% of compliance is handled before due date</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={img9} alt="Justifiable" className="img-fluid" style={{ width: 40, height: 40 }} />
              <div>
                <div className="fw-semibold text-primary">Justifiable</div>
                <small>Affordable pricing paired with professional execution</small>
              </div>
            </div>
          </div>
        </div>

        {/* Delivering Excellence Section */}
        <h2 className="text-center fw-bold my-5" style={{ fontSize: "2rem" }}>
          Delivering Excellence through Our Services
        </h2>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">Start-Up Business Registration</h5>
            <p>We offer fast-track company formation and incorporation, along with expert assistance for private limited, LLP, partnership, and proprietorship registrations.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">Business Registrations</h5>
            <p>We provide PAN, TAN, and other essential business registrations, along with DSC and company name approvals.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">GST Registration & Filing</h5>
            <p>We offer seamless GST registration, renewal, automated filing, and compliance tracking.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">Taxation Services</h5>
            <p>Comprehensive tax advisory and ITR filing for businesses and individuals to stay compliant and optimize taxes.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">Trademark Registration</h5>
            <p>Protect your brand with trademark application, renewal, and legal support for disputes.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">Regulatory Compliance & Audits</h5>
            <p>Ensure smooth operations with ROC filings, annual returns, audits, and expert consultation.</p>
          </div>
        </div>
      </div>

      <Element_1 />
    </>
  )
}

export default Element_3
