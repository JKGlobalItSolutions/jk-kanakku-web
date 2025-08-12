import React from 'react'
import img1 from "../assets/Registration_online/img1.png"
import Element_2 from '../components/Element_2'
import Element_3 from '../components/Element_3'

const Registration_online = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <img src={img1} alt="" style={{ maxWidth: "100%" }} />
      </div>
       <div className="container py-5 mt-5" style={{ background: "linear-gradient(180deg, #d87637 0%, #b85423 100%)", color: "white" }}>
      <div className="row justify-content-center align-items-start">
        {/* Left: Features List */}
        <div className="col-lg-7 mb-4">
          <h2 className="fw-bold mb-3">LLP Registration Online</h2>
          <ul className="list-group mb-4" style={{ listStyleType: "none", background: "transparent" }}>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Obtain Designated Partner Identification Numbers (DPIN) for up to 2 partners
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Name approval and reservation for your LLP
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Seamless LLP incorporation filing process
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Acquire PAN and TAN for the company
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Expert drafting of LLP Agreement
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Exclusive current account opening with ICICI Bank
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Receive your LLP Incorporation Certificate promptly
            </li>
          </ul>
        </div>

        {/* Right: Expert Consultation Form */}
        <div className="col-lg-4">
          <div className="card shadow rounded-4">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name *"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                  />
                </div>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    value="+91"
                    style={{ maxWidth: "70px", background: "#eee" }}
                    readOnly
                  />
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number*"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold rounded-pill"
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
    <Element_2/>
    <Element_3/>
    </>
  )
}

export default Registration_online
