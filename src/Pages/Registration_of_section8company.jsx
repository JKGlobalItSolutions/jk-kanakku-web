import React from 'react'
import img1 from "../assets/Registration_of_section8company/img1.png"
import img2 from "../assets/Registration_of_section8company/img2.png"
import img3 from "../assets/Registration_of_section8company/img3.png"
import Element_3 from '../components/Element_3'
import Element_1 from '../components/Element_2'

const Registration_of_section8company = () => {
  return (
    <>
      {/* Banner Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="Section 8 Registration" className="img-fluid" />
      </div>

      {/* Hero Section */}
      <div
        className="w-100 py-5"
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                Section 8 Company Registration
              </h1>
              <p className="fs-6">
                ▶ Empower Change with a Section 8 Company! Register Your Non-Profit with{" "}
                <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span>
              </p>
              <p className="fs-6">▶ Section 8 Company registration offers benefits like legal recognition, tax exemptions, grant eligibility, enhanced credibility and ability to pursue charitable objectives with structured governance.</p>
              <p className="fs-6">▶ We provide a seamless Section 8 Company registration process, handling all documentation and compliance requirements for quick and hassle-free approval</p>
              <p className="fs-6">▶ For personalised assistance, reach out to our support team today!</p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email *" className="form-control mb-3" />
                  <div className="d-flex mb-3">
                    <span
                      className="d-flex align-items-center justify-content-center px-3 bg-light border rounded-start"
                      style={{ fontWeight: 600 }}
                    >
                      +91
                    </span>
                    <input type="text" placeholder="Mobile Number*" className="form-control rounded-end" />
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

      {/* Middle Connector */}
      <Element_1 />

      {/* Main Content */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for Section 8 Company Registration</h2>
            

            <h4 style={{ fontWeight: "bold" }}>1. For Directors:</h4>
            <p>Aadhaar Card, PAN Card, or Passport (for foreign nationals)</p>
            <p>Recent passport-size photographs of all directors</p>
            <p>Mandatory for filing registration documents electronically</p>
            <p>Required for each proposed director</p>

            <h4 style={{ fontWeight: "bold" }}>2.For the Shareholders:</h4>
            <p>Identity Proof</p>
            <p>Proof of the company's registered office (e.g., utility bill, rent agreement, or ownership deed)</p>
            <p>Duly signed declaration in Form INC-15, stating the company’s non-profit objectives</p>

            <h4 style={{ fontWeight: "bold" }}>2.For the Shareholders:</h4>
            <p>Identity Proof</p>
            <p>Proof of the company's registered office (e.g., utility bill, rent agreement, or ownership deed)</p>
            <p>Outlines the company’s objectives and scope of operations</p>
            <p>Defines the internal rules and regulations governing the company</p>
            <p>Application for obtaining a Section 8 Company License</p>
            <p>Issued upon approval of the proposed company name through the RUN (Reserve Unique Name) service</p>
            <p>A declaration from a practising Chartered Accountant or Company Secretary confirming that the MoA and AoA comply with the Companies Act, 2013</p>


            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for Section 8 Company Registration</h2>

            <h4 style={{ fontWeight: "bold" }}>STEP 1: Obtain Digital Signature Certificates (DSC)</h4>
            <p>All proposed directors of the company must obtain a Digital Signature Certificate (DSC) to sign electronic documents during the registration process. DSCs can be acquired from authorized Certifying Authorities (CAs) such as eMudhra, Sify, or NSDL. These agencies are licensed by the Controller of Certifying Authorities (CCA), which governs the issuance and regulation of digital signatures in India.</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 2: Apply for Director Identification Number (DIN)</h4>
            <p>All proposed directors of the company must obtain a Director Identification Number (DIN) to file incorporation documents with the Ministry of Corporate Affairs (MCA). The DIN can be applied for online through the MCA portal by submitting Form DIR-3, along with the required identity proof and verification documents.</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 3: Name Reservation</h4>
            <p>Once the DSC and DIN have been obtained, the next step is to choose a unique name for your company that reflects its non-profit or charitable objectives. It is recommended to include terms such as "Foundation", "Association", "Society", or similar words that signify the company’s purpose.</p>
            <p>To reserve the name, you must file Form INC-1 (or use the RUN—Reserve Unique Name—service) on the Ministry of Corporate Affairs (MCA) portal. Once approved, the name will be reserved for a period of 20 days, during which the incorporation process must proceed.</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 4: SPICe Form (INC-32) Filing</h4>
            <p>Details of the Company</p>
            <p>Details of Members and Subscribers of MOA and AOA.</p>
            <p>Application for Director Identification Number (DIN)</p>
            <p>Application for PAN and TAN</p>
            <p>Declaration by Directors and subscribers</p>
            <p>Declaration and Certification by professional</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 5: Draft MoA and AoA</h4>
            <p>Once your company name is reserved, draft the Memorandum of Association (MoA) to outline your organization’s charitable objectives and the Articles of Association (AoA) that define your governance structure.</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 6: File Incorporation Forms</h4>
            <p>Submit Form INC-12 to apply for a license under Section 8 Upon approval, file Form SPICe+ (INC-32) along with the MoA and AoA to incorporate the company.</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 7: Obtain Certificate of Incorporation</h4>
            <p>After verification, the Registrar of Companies (RoC) issues the Certificate of Incorporation, officially recognizing the entity as a Section 8 Company.</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 8: Apply for PAN and TAN</h4>
            <p>Once your company is incorporated, apply for the company's Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN).</p>

            <h4 style={{ fontWeight: "bold" }}>STEP 9: Open a Bank Account</h4>
            <p>Use the Certificate of Incorporation, PAN, and other documents to open a bank account in the company's name.</p>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4 mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="d-flex mb-3">
                    <input type="text" className="form-control" value="+91" style={{ maxWidth: "70px", background: "#eee" }} readOnly />
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#b85423" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>

            <img src={img2} alt="Business Woman" className="img-fluid rounded my-4" />
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <div className="container text-center my-5">
        <img src={img3} alt="Section 8 Footer" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  )
}

export default Registration_of_section8company
