import React from 'react'
import img1 from "../assets/One_person_company_registration/img1.png"
import img2 from "../assets/One_person_company_registration/img2.png"
import img3 from "../assets/One_person_company_registration/img3.png"
import Element_3 from '../components/Element_3'
import Element_2 from '../components/Element_2'

const One_person_company_registration = () => {
  return (
    <>
    <div className="container d-flex justify-content-center">
      <img src={img1} alt="" style={{ maxWidth: "100%" }} />
    </div>
<div className="container py-5 mt-5" style={{ background: "#b85423", color: "white" }}>
      <div className="row justify-content-center align-items-start">
        {/* Left: OPC Registration Features */}
        <div className="col-lg-7 mb-4">
          <h2 className="fw-bold mb-3">One Person Company Registration</h2>
          <ul className="list-group mb-4" style={{ listStyleType: "none", background: "transparent" }}>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              JK Kannakiu is India's No. 1 online legal services platform for one person company (OPC) registration
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              One person company can be formed with a single owner acting as the director and shareholder.
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Our online OPC registration service includes the following features:
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Obtain 2 DSCs (One for director and one for nominee) with 2 years validity.
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Get secure Director Identification Number (DIN).
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Get unique name approval for your OPC.
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Acquire PAN and TAN for the company.
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Open a current account with ICICI Bank.
            </li>
            <li>
              <span className="me-2 text-warning" style={{ fontWeight: "bold" }}>&gt;</span>
              Receive the official Company Incorporation Certificate.
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

    <div className="container py-5 mt-4" style={{ background: "#fff", color: "#333" }}>
      <div className="row justify-content-center align-items-center">
        {/* Left: Main document content */}
        <div className="col-lg-7 mb-4">
          <h2 className="fw-bold mb-3" style={{ color: "#2747A0" }}>
            Documents Required for OPC Company Registration
          </h2>
          <p style={{ fontSize: "0.99rem", color: "#8e683e", marginBottom: "20px" }}>
            Before registering the company, the Directors of the proposed Private Limited Company are mandated by Law to two critical documents that are as follows:
          </p>
          <ul className="list-group mb-4" style={{ listStyleType: "none", background: "transparent" }}>
            <li style={{ marginBottom: "22px" }}>
              <span className="fw-bold" style={{ color: "#2747A0" }}>The PAN</span>
              <span style={{ color: "#333" }}>
                &nbsp;(Permanent Account Number) card of the director serves as a crucial identity proof required by the Ministry of Corporate Affairs (MCA) for incorporating any company in India
              </span>
            </li>
            <li style={{ marginBottom: "22px" }}>
              <span className="fw-bold" style={{ color: "#2747A0" }}>The Aadhaar card</span>
              <span style={{ color: "#333" }}>
                &nbsp;is another essential document required by the Ministry of Corporate Affairs (MCA), as it verifies the director's name, address, and Indian residency status
              </span>
            </li>
            <li style={{ marginBottom: "22px" }}>
              <span className="fw-bold" style={{ color: "#2747A0" }}>Address proof</span>
              <span style={{ color: "#333" }}>
                &nbsp;of the registered office is required to verify the location of the One Person Company (OPC). Acceptable documents include a recent utility bill, lease or rent agreement, or any government-issued document that clearly states the address along with the name of the owner or the company
              </span>
            </li>
            <li>
              <span className="fw-bold" style={{ color: "#2747A0" }}>Recent passport-size photographs</span>
              <span style={{ color: "#333" }}>
                &nbsp;of the director are required to complete the OPC registration process. These photographs are typically attached to various forms and applications submitted to the Ministry of Corporate Affairs (MCA)
              </span>
            </li>
          </ul>
          {/* Image at the bottom */}
          <div className="my-4 d-flex justify-content-center">
  <img
    src={img2} // replace with actual image path as needed
    alt="One Person Company"
    style={{ width: 350, height: 215, objectFit: "contain", borderRadius: "10px" }}
  />
</div>
        </div>

        {/* Right: Expert Consultation card */}
        <div className="col-lg-4">
          <div className="card shadow rounded-4" style={{ minWidth: "290px" }}>
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
                  <span
                    className="form-control text-center"
                    style={{ maxWidth: "70px", background: "#eee", border: "1px solid #ccc", fontWeight: "bold", color: "#333" }}
                  >
                    +91
                  </span>
                  <input type="tel" className="form-control" placeholder="Mobile Number*" />
                </div>
                <button
                  type="submit"
                  className="btn w-100 fw-bold rounded-pill"
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
<div className="container-fluid py-5" style={{ background: "#fff", fontFamily: "Arial, sans-serif", maxWidth: "1400px" }}>
      <div className="row justify-content-start align-items-center">
        {/* Left side: Steps content */}
        <div className="col-lg-7 col-md-7 mb-4">
          <h2 className="fw-bold mb-3" style={{ color: "#234f95", fontSize: "2rem" }}>
            Process of One Person Company Registration in India
          </h2>
          <p style={{ color: "#b85423", fontWeight: "500", fontSize: "1.07rem", marginBottom: "24px" }}>
            The process of registering the OPC in India is straightforward but needs to strictly comply with procedural requirements as laid down under the Companies Act.
          </p>
          <div style={{ marginBottom: "28px" }}>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 1: Obtain a Digital Signature Certificate (DSC)</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              The Digital Signature Certificate (DSC) is used to electronically sign documents that must be submitted online. It is issued by government-recognized certifying authorities.
            </p>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 2: Obtain a Director Identification Number (DIN)</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              The Director Identification Number (DIN) is a unique ID issued by the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013.
            </p>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 3: Reserve a Company Name</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              After obtaining the DSC and DIN, the next step is selecting a unique and original company name.
              The name must not resemble any existing company or infringe on registered trademarks. Its availability can be checked on the MCA portal before submission.
            </p>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 4: Draft the Memorandum of Association (MoA)</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              Once the name is finalized, the next step is drafting the Memorandum of Association (MoA). The MoA defines the company's objectives, purpose, activities, and scope.
            </p>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 5: Draft the Article of Association (AoA)</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              It is the document that lays out the rules and regulations for the internal management of the company. The AoA contains the purpose/objective, capital structure, corporate governance, and internal administration of the company. The AoA of the company can be amended post incorporation of the company with the prior approval of the directors.
            </p>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 6: File Incorporation Documents with the Registrar of Companies (ROC)</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              Identity and Address Proof of Directors and Shareholders include PAN, passport, Aadhaar card, bank statements, or utility bills (dated within 2 months).
              Proof of Registered Office Address can include lease or rent agreements, or the company's electricity bill. Directors must provide written consent for their appointment by signing a consent form.
            </p>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 7: Obtain a Certificate of Incorporation</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              Once the RoC verifies all compliance and documents, a Certificate of Incorporation is issued, marking the official formation of the OPC.
              The certificate includes the Corporate Identification Number (CIN), a unique ID for the company. After incorporation, the PAN and TAN are automatically generated for the company.
            </p>
          </div>
          <div>
            <h4 className="fw-bold mb-2" style={{ fontSize: "1.19rem" }}>Step 8: Open a Bank Account</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              After applying for PAN and TAN number, a new bank account in the name of the company has to be opened to enable the company for monetary transaction.
            </p>
          </div>
        </div>

        {/* Right side: image, vertically centered */}
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <img
            src={img3}
            alt="One Person Company registration illustration"
            className="img-fluid"
            style={{ maxWidth: "100%", maxHeight: "700px", borderRadius: "10px", boxShadow: "0 2px 9px #eee" }}
          />
        </div>
      </div>
    </div>

    <Element_3/>
    </>
  )
}

export default One_person_company_registration
