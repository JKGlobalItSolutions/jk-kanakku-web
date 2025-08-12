import React from 'react'
import img1 from "../assets/Sole_proprietorship_registration/img1.png"
import img2 from "../assets/Sole_proprietorship_registration/img2.png"
import img4 from "../assets/Sole_proprietorship_registration/img4.png"
import Element_3 from '../components/Element_3'
import Element_2 from '../components/Element_2'

const Sole_proprietorship_registration = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
            <img src={img1} alt="" style={{ maxWidth: "100%" }} />
          </div>
<div style={{ background: "#b85423", color: "white" }} className="partnership-section container py-5 mt-5 text-white">
    <div className="row justify-content-center align-items-center">
      {/* Left: Content Section */}
      <div className="col-lg-7 mb-4">
        <h2 className="fw-bold mb-3">Partnership Firm Registration</h2>
        <ul className="list-unstyled">
          <li>
            <span className="me-2 text-warning fw-bold">&gt;</span>
            Register your partnership firm hassle-free with{" "}
            <span className="highlight">JK Kannaku</span> in 3 days
          </li>
          <li>
            <span className="me-2 text-warning fw-bold">&gt;</span>
            Our comprehensive service includes drafting of Partnership Deed
          </li>
          <li>
            <span className="me-2 text-warning fw-bold">&gt;</span>
            Obtain PAN Card for your partnership firm swiftly
          </li>
          <li>
            <span className="me-2 text-warning fw-bold">&gt;</span>
            Ensure seamless Form C submission with expert guidance
          </li>
          <li>
            <span className="me-2 text-warning fw-bold">&gt;</span>
            Receive your partnership registration certificate promptly
          </li>
          <li>
            <span className="me-2 text-warning fw-bold">&gt;</span>
            Get a free consultation and start your partnership journey today!
          </li>
        </ul>
      </div>
      {/* Right: Form Section */}
      <div className="col-lg-4">
        <div className="card shadow rounded-4">
          <div className="card-body p-4">
            <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
            <form /* action="/your-backend-endpoint" method="POST" */>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name *"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email*"
                  required
                />
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="text"
                  className="form-control text-center prefix-input"
                  value="+91"
                  readOnly
                  tabIndex={-1}
                />
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile Number*"
                  required
                />
              </div>
              <button
              style={{background: "#b85423", color:"white"}}
                type="submit"
                className="btn btn-warning w-100 fw-bold custom-btn"
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

    <div style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "1200px",
      margin: "auto",
      display: "flex",
      alignItems: "center",   // right box vertically center
      padding: 20
    }}>
      {/* Left Section */}
      <div style={{ flex: 2, paddingRight: 20 }}>
        <h3 style={{
          fontWeight: "bold",
          fontSize: "18px",
          color: "#004d99",
          marginBottom: 10
        }}>
          Documents Required for Sole Proprietorship Registration in India
        </h3>
        <p style={{ fontSize: 12, margin: "5px 0", color: "#cc6600" }}>
          When initiating the procedure for filing for a sole proprietorship in India, particular papers are required to show the official name of the business and its owner. Following is the full list of the required documents for sole proprietorship registration.
        </p>

        <h4 style={{ fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
          Identity Proof:
        </h4>
        <p style={{ fontSize: 12, margin: "5px 0" }}>
          A valid proof of identity is required to verify the legitimacy of the proprietor. Acceptable documents include:
        </p>
        <ul style={{ fontSize: 12, marginTop: 5 }}>
          <li>Aadhar Card</li>
          <li>PAN Card</li>
          <li>Voter ID card or Passport or Driver&apos;s License</li>
        </ul>

        <h4 style={{ fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
          Proof of Address:
        </h4>
        <p style={{ fontSize: 12, margin: "5px 0" }}>
          It is a valid document used to confirm the business location. Acceptable documents may include an Aadhaar card, utility bills
        </p>

        <h4 style={{ fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
          Bank Account in the Name of Business:
        </h4>
        <p style={{ fontSize: 12, margin: "5px 0" }}>
          A bank account in the name of the firm is not mandatory for a sole proprietorship, but having one can simplify financial management and enhance credibility
        </p>

        <h4 style={{ fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
          Passport Size Photograph:
        </h4>
        <p style={{ fontSize: 12, margin: "5px 0" }}>
          A passport-size picture of the proprietor is needed for registration. It serves as proof of identity for the proprietor.
        </p>

        <h4 style={{ color: "#cc6600", fontWeight: "bold", marginTop: 30 }}>
          Checklist for Sole Proprietorship Firm Registration in India
        </h4>
        <ul style={{ fontSize: 12, marginTop: 10, paddingLeft: 15 }}>
          <li>
            <b>Choose a Unique Business Name</b>
            <br />
            Select a business name that is distinctive and not already in use by another entity. A unique name strengthens brand identity and helps avoid legal conflicts.
          </li>
          <li style={{ marginTop: 10 }}>
            <b>Prepare the Required Documents</b>
            <br />
            Address proof (e.g., Aadhaar card, utility bills) <br />
            Identity proof (e.g., PAN card, Aadhaar card) <br />
            Passport-size photograph <br />
            Rental agreement (if the business premises are leased)
          </li>
          <li style={{ marginTop: 10 }}>
            <b>Verify Eligibility Criteria</b>
            <br />
            Ensure that you meet all the eligibility requirements for registering a sole proprietorship. Failure to comply with the criteria may lead to delays or rejection of your application
          </li>
          <li style={{ marginTop: 10 }}>
            <b>Register Online</b>
            <br />
            Take advantage of the convenient online registration services offered by JK KANNAKU. Their expert guidance can help simplify the process and ensure a smooth and accurate registration experience
          </li>
        </ul>
      </div>
      {/* Right Box Section */}
      <div style={{
        flex: 1,
        border: "1px solid #ccc",
        borderRadius: 6,
        padding: 20,
        backgroundColor: "white",
        height: "fit-content"
      }}>
        <h4 style={{ fontWeight: "bold", marginBottom: 20 }}>
          Expert Consultation
        </h4>
        <input
          type="text"
          placeholder="Name *"
          style={{
            width: "100%",
            marginBottom: 15,
            padding: 10,
            fontSize: 14,
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        />
        <input
          type="email"
          placeholder="Email *"
          style={{
            width: "100%",
            marginBottom: 15,
            padding: 10,
            fontSize: 14,
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        />
        <div style={{ display: "flex", marginBottom: 15 }}>
          <span style={{
            padding: 10,
            backgroundColor: "#eee",
            border: "1px solid #ccc",
            borderRadius: "4px 0 0 4px",
            fontSize: 14
          }}>+91</span>
          <input
            type="text"
            placeholder="Mobile Number *"
            style={{
              flex: 1,
              padding: 10,
              fontSize: 14,
              borderRadius: "0 4px 4px 0",
              border: "1px solid #ccc",
              borderLeft: 0
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: "#cc6600",
            color: "white",
            border: "none",
            padding: "12px 0",
            width: "100%",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold"
          }}>
          Get Start Now &gt;
        </button>
      </div>
    </div>

<div className="container d-flex justify-content-start">
  <img src={img2} alt="" style={{ maxWidth: "100%" }} />
</div>

<div
  style={{
    fontFamily: "Segoe UI, Arial, sans-serif",
    background: "#f6f7f9",
    minHeight: "100vh",
    padding: "32px 0"
  }}
>
  {/* Full-width white box */}
  <div
    style={{
      width: "100%",
      margin: "0 auto",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 10px 0 rgba(0,0,0,0.06)",
      padding: "36px 44px 36px 40px",
      display: "flex",
      gap: 44,
      alignItems: "flex-start",
      boxSizing: "border-box"
    }}
  >
    {/* Left content */}
    <div style={{ flex: 2 }}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: 24,
          color: "#345F96",
          marginBottom: 28
        }}
      >
        Process of Sole Proprietorship Registration in India
      </h1>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 1: Choose a Business Name
      </div>
      <p style={{ color: "#232323", fontSize: 15, marginBottom: 18 }}>
        The business name should be unique, easy to remember, and clearly reflect
        the nature of the business. Additionally, it must not infringe upon any
        existing trademarks.
      </p>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 2: Obtain a PAN Card
      </div>
      <p style={{ color: "#232323", fontSize: 15, marginBottom: 18 }}>
        Every sole proprietor must possess a personal PAN card. It is essential
        for tax compliance, including filing income tax returns and conducting
        other financial transactions.
      </p>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 3: Register for GST (If Applicable)
      </div>
      <ul style={{ fontSize: 15, marginBottom: 18, marginLeft: 16 }}>
        <li>PAN Card: A personal PAN card is mandatory for the sole proprietor for tax-related compliance.</li>
        <li>Business Address Proof: Documents such as utility bills, Aadhaar card, rental agreement, or property tax receipt can serve as valid proof.</li>
        <li>Bank Account Details: While not mandatory, having a dedicated bank account in the name of the business can streamline financial management.</li>
        <li>GST Registration: For businesses with turnover below the threshold limits, GST registration is not mandatory. However, registering for GST can be advantageous for claiming input tax credits and for partnering with GST-registered vendors or clients.</li>
      </ul>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 4: Register the Business (Optional but Recommended)
      </div>
      <p style={{ color: "#232323", fontSize: 15, marginBottom: 14 }}>
        Shops and Establishment Act registration is mandatory for most businesses and must be obtained from the local municipal corporation or the relevant state authority. This registration ensures that the business operates in compliance with local labor laws and regulatory requirements.
      </p>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14, marginTop: 32 }}>
        Step 5: Open a Business Bank Account
      </div>
      <ul style={{ fontSize: 15, marginBottom: 18, marginLeft: 16 }}>
        <li>PAN Card</li>
        <li>Business Address Proof</li>
        <li>Identity Proof</li>
        <li>GST Registration (if applicable)</li>
      </ul>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 6: Obtain Relevant Licenses and Permits (If Applicable)
      </div>
      <ul style={{ fontSize: 15, marginBottom: 18, marginLeft: 16 }}>
        <li><span style={{ color: "#b45718" }}>Food License (FSSAI)</span> for businesses in the food industry.</li>
        <li>Import/Export License for international trade.</li>
        <li>Trademark registration to protect your brand name or logo.</li>
        <li>Professional Tax Registration for businesses in certain states.</li>
        <li><span style={{ color: "#c89143" }}>MSME Registration (optional)</span> to avail government benefits.</li>
      </ul>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 7: Maintain Proper Financial Records
      </div>
      <ul style={{ fontSize: 15, marginBottom: 18, marginLeft: 16 }}>
        <li>Keeping accurate records will help.</li>
        <li>Filing Income Tax Returns (ITR).</li>
        <li>Claiming business expenses.</li>
        <li>Managing cash flow effectively.</li>
      </ul>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 8: File Income Tax Returns
      </div>
      <p style={{ color: "#232323", fontSize: 15, marginBottom: 18 }}>
        As a sole proprietor, you must report your business income along with your personal income tax return using ITR-3. The profits from the business are added to your total personal income and taxed as per the applicable income tax slabs. Additionally, if your estimated annual tax liability exceeds ₹10,000, you are required to pay advance tax during the financial year.
      </p>

      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 14 }}>
        Step 9: Compliance with Other Laws (If Applicable)
      </div>
      <ul style={{ fontSize: 15, marginLeft: 16 }}>
        <li>Employees&apos; Provident Fund (EPF) for employees earning above a certain threshold.</li>
        <li>Employees&apos; State Insurance (ESI) for businesses with a certain number of employees.</li>
        <li>Labour laws, such as the Factories Act, if applicable.</li>
        <li>Ensure your business complies with these regulations to avoid penalties.</li>
      </ul>
    </div>

    {/* Right image without its own box */}
    <img
      src={img4}
      alt="Registration Illustration"
      style={{
        flex: 1,
        maxWidth: "40%",
        height: "auto",
        borderRadius: 18
      }}
    />
  </div>
</div>



      <Element_3/>
    </>
  )
}

export default Sole_proprietorship_registration
