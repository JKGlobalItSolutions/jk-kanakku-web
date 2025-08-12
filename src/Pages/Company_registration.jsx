import React from 'react'
import img1 from "../assets/Company_registration/img1.png"
import img2 from "../assets/Company_registration/img2.png"
import img3 from "../assets/Company_registration/img3.png"
import img4 from "../assets/Company_registration/img4.png"
import img5 from "../assets/Company_registration/img5.png"
import img6 from "../assets/Company_registration/img6.png"
import img7 from "../assets/Company_registration/img7.png"
import img8 from "../assets/Company_registration/img8.png"
import img9 from "../assets/Company_registration/img9.png"
import img10 from "../assets/Company_registration/img10.png"
import Element_1 from '../components/Element_1'


const Company_registration = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
  <img src={img1} alt="" style={{ maxWidth: "100%" }} />
</div>

      <div className="container py-5 mt-5" style={{ backgroundColor: "#fc813d", color:"white"}}>
  <div className="row justify-content-center align-items-start">
    <div className="col-lg-7 mb-4">
      <h2 className="fw-bold mb-3">Pvt Ltd Company Registration</h2>
      <ul className="list-group mb-4" style={{ listStyleType: "none" }}>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Register your private limited company in 7 business days with our expert assistance.
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Our online company registration service includes the following features
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Obtain 2 Digital Signature Certificates (DSC) with 2 years validity
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Secure 2 Director Identification Numbers (DIN)
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Get unique name approval for your private company
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Acquire PAN and TAN for the company
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Open a current account with ICICI Bank
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Drafting the Memorandum of Association and Articles of Association
        </li>
        <li>
          <span
            className="me-2 text-warning"
            style={{ fontWeight: "bold" }}
          >
            &gt;
          </span>
          Receive the official Company Incorporation Certificate
        </li>
      </ul>
    </div>
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
                style={{ maxWidth: "70px", backgroundColor: "#eee" }}
                readOnly
              />
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile Number*"
              />
            </div>
            <button
            style={{backgroundColor: "#fc813d", color:"white"}}
              type="submit"
              className="btn btn-warning w-100 fw-bold rounded-pill"
            >
              Get Start Now &gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
   <div
  className="d-flex align-items-center justify-content-between px-4 py-3"
  style={{
    background: "linear-gradient(90deg, #ffffff 0%, #bbbbbb 100%)",
    borderRadius: "5px",
    boxShadow: "0 2px 6px 0 rgba(0,0,0,0.10)",
    margin: "24px 0"
  }}
>
  {/* Left Side */}
  <span className="fw-bold" style={{ fontSize: "1.8rem" }}>
    Required Document
  </span>

  {/* Replace SVG arrows with your image */}
  <span>
    <img src={img2} alt="Arrows" style={{ height: "42px", width: "54px" }} />
  </span>

  {/* Right Side */}
  <span className="fw-bold" style={{ fontSize: "1.8rem" }}>
    Registration Procedure
  </span>
</div>
    <div className="container py-4">
      <div className="row align-items-center"> {/* Vertical align center */}
        {/* Main Content (Left) */}
        <div className="col-lg-7 mb-4 mb-lg-0">
          <h2>Documents Required for Pvt Ltd Company Registration in India</h2>
          <h3>1. Identity Proof of Directors and Shareholders</h3>
          <p>
            To form a Private Limited Company in India, it is essential to submit valid identity and name
            proof documents for both directors and shareholders. These documents typically include PAN cards,
            passports, and voter ID cards, which are used to verify the identity and names of individuals
            associated with the company.
          </p>
          <h3>2. Address Proof of Directors and Shareholders</h3>
          <p>
            Another essential document required for company registration is the address proof of the directors
            and shareholders. Commonly accepted documents include the Aadhaar Card, bank statements, and
            driving licenses, which help establish the residential address of the individuals involved in the
            company.
          </p>
          <h3>3. PAN Card</h3>
          <p>
            The PAN Card is a mandatory document for both directors and shareholders of a Private Limited Company.
            This unique identification number is crucial for handling financial transactions and fulfilling legal
            and tax-related obligations, thereby ensuring transparency and accountability within the company.
          </p>
          <h3>4. Passport-size Photographs</h3>
          <p>
            Submission of Passport-sized Photographs is necessary during the private company registration process.
            These pictures are used for various formal reasons and papers, helping identify and show leaders and
            owners.
          </p>
          <h3>5. MOA and AOA</h3>
          <p>
            The Memorandum of Association and Articles of Association are important papers needed for filing.
            The MOA describes the company’s goals and area of operations, while the AOA sets the business’s
            internal rules and management structure. These papers are important for describing the company’s
            organisation and processes.
          </p>
        </div>

        {/* Expert Consultation Form (Right) */}
        <div className="col-lg-5 d-flex justify-content-center">
          <div className="border rounded p-4 bg-white shadow-sm w-100" style={{maxWidth: 350}}>
            <h2 className="fs-4 mb-3">Expert Consultation</h2>
            <form>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name *"
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email*"
              />
              <input
                type="tel"
                className="form-control mb-4"
                placeholder="Mobile Number*"
              />
              <button
                type="submit"
                className="btn btn-warning w-100 fw-bold"
              >
                Get Start Now &gt;
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
 <div className="container my-4">
      <div className="row align-items-stretch">
        {/* Left content */}
        <div className="col-lg-8 d-flex flex-column">
          <h2 className="text-primary fw-bold mb-3">
            Private Limited Company Registration Process in India
          </h2>
          <div className="text-warning fw-medium mb-4" style={{ fontSize: "1rem" }}>
            The registration process for a Private Limited Company is straightforward but requires compliance with several legal and procedural requirements under the Companies Act 2013. Below are the step-by-step processes involved:
          </div>

          <h3 className="mb-2">Step 1: Obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN)</h3>
          <div className="text-warning mb-3" style={{ fontSize: "0.98rem" }}>
            Before registering the company, the Directors of the proposed Private Limited Company are mandated by Law to two critical documents that are as follows:
          </div>
          <ul className="mb-4">
            <li>
              <strong>Digital Signature Certificate (DSC):</strong> A DSC is essential for electronically signing documents during the company registration process. It verifies the authenticity of the directors' signatures on official filings and helps prevent fraud by ensuring secure and tamper-proof electronic submissions.
            </li>
            <li>
              <strong>Director Identification Number (DIN):</strong> In accordance with Section 153 of the Companies Act, 2013, every individual intending to become a director in a company must obtain a DIN. This unique identification number is issued by the Ministry of Corporate Affairs (MCA).
            </li>
          </ul>

          <h3 className="mb-2">Step 2: Reserve a Company Name (Section 4 of the Companies Act, 2013)</h3>
          <div className="text-warning mb-3" style={{ fontSize: "1rem" }}>
            The second most essential step is to reserve the name of the company. The name must be unique, not similar to any existing company, and should not infringe on any registered trademarks. The law mandates the company name should reflect the business activity of the company and it should comply with the naming conventions laid down by the Registrar of Companies (ROC).
          </div>
          <ul className="mb-4">
            <li>
              The proposed company name must be checked for availability through the Ministry of Corporate Affairs (MCA) portal to ensure it is unique and not already in use or reserved by another entity.
            </li>
            <li>
              To reserve a company name, you must submit a Name Reservation Application online using the RUN (Reserve Unique Name) service available on the Ministry of Corporate Affairs (MCA) portal.
            </li>
          </ul>

          <h3 className="mb-2">Step 3: Draft the Memorandum of Association (MOA) and Articles of Association (AOA)</h3>
          <div className="text-warning mb-3" style={{ fontSize: "1rem" }}>
            The next crucial step is the submission of the Memorandum of Association (MOA) and the Articles of Association (AOA), which are critical documents that need to be drafted as part of the registration process:
          </div>
          <ul className="mb-4">
            <li>
              <strong>Memorandum of Association (MOA):</strong> The MOA is a critical document that defines the objectives, purpose, activities, and scope of the company. It outlines the company’s core operations and ensures that the company conducts business within the specified framework.
            </li>
            <li>
              <strong>Articles of Association (AOA):</strong> The AOA serves as a guide for the company’s operations and governance, ensuring that it functions in a structured and compliant manner.
            </li>
          </ul>

          <h3 className="mb-2">Step 4: File Incorporation Documents with the Registrar of Companies (ROC)</h3>
          <div className="text-warning mb-3" style={{ fontSize: "1rem" }}>
            Once the MOA and AOA of the company are drafted and are ready to be filed, the next step is to file them online through the MCA portal with the appropriate fee with the following necessary documents:
          </div>
          <ul className="mb-4">
            <li>
              <strong>Identity Proof of Directors and Shareholders:</strong> The identity proof for both directors and shareholders can include documents such as the PAN card, passport, or voter ID. These documents are essential for verifying the personal details of the individuals involved in the company.
            </li>
            <li>
              <strong>Address Proof of Directors and Shareholders:</strong> The address proof for both directors and shareholders can include documents such as Aadhaar cards, bank statements, or utility bills. These documents are required to verify the residential addresses of the individuals involved in the company.
            </li>
          </ul>

          <h3 className="mb-2">Step 5: Obtain a Certificate of Incorporation</h3>
          <div>
            Once all submitted documents are verified by the Registrar of Companies (ROC) and the ROC is satisfied that all legal and procedural requirements have been met, a Certificate of Incorporation is issued. This certificate officially confirms the formation of the Private Limited Company.
          </div>
        </div>

        {/* Right side: image, full height of left content */}
        <div className="col-lg-4 d-flex align-items-stretch justify-content-center">
          <img
            src={img3}
            alt="Private Limited Company Registration"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      </div>
    </div>
   <div style={{
      width: "100%",
      paddingLeft: "24px",
      paddingRight: "24px",
      fontFamily: "Arial, sans-serif",
      background: "#fff"
    }}>
      {/* Unique Advantage Section */}
      <div style={{ width: "100%", margin: "0 auto" }}>
        {/* Title */}
        <h2 style={{
          textAlign: "center",
          margin: "40px 0 30px",
          fontWeight: 700,
          fontSize: "2rem"
        }}>
          Our <span style={{ color: "#fb9808" }}>unique</span> advantage
        </h2>
        {/* Main grid */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "24px",
          flexWrap: "wrap"   // Ensures it stays neat on smaller screens
        }}>
          {/* Left side */}
          <div style={{
            flex: "1 1 240px",
            minWidth: "210px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "center"
          }}>
            {/* 300+ Services */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={img4} alt="300+ Services" style={{ width: 46, height: 46 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1rem", color: "#2747a0" }}>300+ Services</div>
                <div style={{ fontSize: "0.98rem", color: "#333" }}>
                  Your compliance, our responsibility
                </div>
              </div>
            </div>
            {/* Client Delight */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={img5} alt="Client Delight" style={{ width: 40, height: 40 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1rem", color: "#2747a0" }}>Client Delight</div>
                <div style={{ fontSize: "0.98rem", color: "#333" }}>
                  Focused on meeting your needs and exceeding your expectations
                </div>
              </div>
            </div>
            {/* Response Time */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={img6} alt="Response Time" style={{ width: 40, height: 40 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1rem", color: "#2747a0" }}>Response Time</div>
                <div style={{ fontSize: "0.98rem", color: "#333" }}>
                  We deliver 99% of our services within the promised timeline
                </div>
              </div>
            </div>
          </div>
          {/* Center illustration */}
          <div style={{
            flex: "1 1 280px", minWidth: "200px",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <img src={img10} alt="Expert Lady"
              style={{ width: 220, height: 220, borderRadius: "50%", objectFit: "cover" }} />
          </div>
          {/* Right side */}
          <div style={{
            flex: "1 1 240px",
            minWidth: "210px",
            display: "flex", flexDirection: "column", gap: "40px", justifyContent: "center"
          }}>
            {/* Google Reviews */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={img7} alt="Google Reviews" style={{ width: 40, height: 40 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1rem", color: "#2747a0" }}>Google Reviews</div>
                <div style={{ fontSize: "0.98rem", color: "#333" }}>
                  Almost every customer rated us 5 stars on Google
                </div>
              </div>
            </div>
            {/* Compliance */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={img8} alt="Compliance" style={{ width: 40, height: 40 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1rem", color: "#2747a0" }}>Compliance</div>
                <div style={{ fontSize: "0.98rem", color: "#333" }}>
                  We ensure 99.9% of compliance is handled before the due date
                </div>
              </div>
            </div>
            {/* Justifiable */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={img9} alt="Justifiable" style={{ width: 40, height: 40 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1rem", color: "#2747a0" }}>Justifiable</div>
                <div style={{ fontSize: "0.98rem", color: "#333" }}>
                  Affordable pricing paired with professional execution
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivering Excellence Section */}
      <div style={{
        width: "100%",
        margin: "40px 0",
        background: "#fff"
      }}>
        <h2 style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: 32
        }}>
          Delivering Excellence through Our Services
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "38px",
          marginBottom: 28
        }}>
          {/* Top row */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Start-Up Business Registration</h3>
            <div style={{ color: "#333", fontSize: "1rem", marginTop: 8 }}>
              We offer fast-track company formation and business incorporation, along with expert assistance for private limited, LLP, partnership, and proprietorship registrations, ensuring a smooth and hassle-free setup process.
            </div>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Business Registrations</h3>
            <div style={{ color: "#333", fontSize: "1rem", marginTop: 8 }}>
              We provide PAN, TAN, and other essential business registrations, along with digital signature certificates (DSC) and company name approvals to streamline your business setup.
            </div>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>GST Registration & Filing</h3>
            <div style={{ color: "#333", fontSize: "1rem", marginTop: 8 }}>
              We offers seamless GST registration and renewal services, along with automated GST filing and compliance tracking, to ensure that your firm remains compliant without difficulty.
            </div>
          </div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "38px"
        }}>
          {/* Bottom row */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Taxation Services</h3>
            <div style={{ color: "#333", fontSize: "1rem", marginTop: 8 }}>
              We provide comprehensive direct and indirect tax advisory services, along with income tax return (ITR) filing for both businesses and individuals, ensuring you stay compliant while optimizing your tax obligations.
            </div>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Trademark Registration</h3>
            <div style={{ color: "#333", fontSize: "1rem", marginTop: 8 }}>
              Protect your brand through our prompt trademark application and renewal services, complemented by legal support to navigate any objections or disputes effectively.
            </div>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Regulatory Compliance & Audits</h3>
            <div style={{ color: "#333", fontSize: "1rem", marginTop: 8 }}>
              Remain compliant with ROC filings, annual returns, and audits, backed by expert consultation that helps you avoid penalties and guarantees the smooth operation of your business.
            </div>
          </div>
        </div>
      </div>
    </div>
      <Element_1 />
    </>

  )
}

export default Company_registration
