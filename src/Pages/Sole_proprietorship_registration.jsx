import React from 'react'
import img1 from "../assets/Sole_proprietorship_registration/img1.png"
import img2 from "../assets/Sole_proprietorship_registration/img2.png"
import img4 from "../assets/Sole_proprietorship_registration/img4.png"
import Element_3 from '../components/Element_3'
import Element_2 from '../components/Element_2'
import { Link } from 'react-router-dom'

const Sole_proprietorship_registration = () => {
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
            <li className="breadcrumb-item fw-bold text-dark">Startup</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              Sole Proprietorship Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="Hero" className="img-fluid w-100 h-auto rounded" />
      </div>

      {/* Hero Section with Text + Form */}
      <div className="container-fluid py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container">
          <div className="row align-items-center g-4">

            {/* Left Content */}
            <div className="col-lg-7 text-white">
              <h1 className="fw-bold display-5 mb-3">Sole Proprietorship Registration</h1>
              <p className="mb-3 fs-6">
                ▶ Register your partnership firm hassle-free with
                <span className="fw-semibold text-warning"> JK KANNAKU</span>
              </p>
              <ul className="list-unstyled fs-6">
                <li>▶ Drafting of Partnership Deed</li>
                <li>▶ PAN Card for your partnership firm</li>
                <li>▶ Seamless Form C submission</li>
                <li>▶ Partnership registration certificate</li>
                <li>▶ Free consultation to start your journey</li>
              </ul>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white p-4 rounded-4 shadow">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email *" className="form-control mb-3" />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="text" placeholder="Mobile Number *" className="form-control" />
                  </div>
                  <button className="btn w-100 text-white fw-bold" style={{ background: "#c46a2f" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Element_2 />

      {/* Documents Required */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 style={{
          fontWeight: "bold",
          
          color: "#0a3c66",
          marginBottom: 10
        }}>
          Documents Required for Sole Proprietorship Registration in India
        </h2>
        <p style={{ fontSize: 12, margin: "5px 0", color: "#cc6600" }}>
          When initiating the procedure for filing for a sole proprietorship in India, particular papers are required to show the official name of the business and its owner. Following is the full list of the required documents for sole proprietorship registration.
        </p>

        <h4 style={{ fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
          Identity Proof:
        </h4>
        <p style={{ fontSize: 12, margin: "5px 0" }}>
          A valid proof of identity is required to verify the legitimacy of the proprietor. Acceptable documents include:
        </p>
        
          <p>Aadhar Card</p>
          <p>PAN Card</p>
          <p>Voter ID card or Passport or Driver&apos;s License</p>
        

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
        
          <p>
            <b>Choose a Unique Business Name</b>
            <br />
            Select a business name that is distinctive and not already in use by another entity. A unique name strengthens brand identity and helps avoid legal conflicts.
          </p>
          <p style={{ marginTop: 10 }}>
            <b>Prepare the Required Documents</b>
            <br />
            Address proof (e.g., Aadhaar card, utility bills) <br />
            Identity proof (e.g., PAN card, Aadhaar card) <br />
            Passport-size photograph <br />
            Rental agreement (if the business premises are leased)
          </p>
          <p style={{ marginTop: 10 }}>
            <b>Verify Eligibility Criteria</b>
            <br />
            Ensure that you meet all the eligibility requirements for registering a sole proprietorship. Failure to comply with the criteria may lead to delays or rejection of your application
          </p>
          <p style={{ marginTop: 10 }}>
            <b>Register Online</b>
            <br />
            Take advantage of the convenient online registration services offered by JK KANNAKU. Their expert guidance can help simplify the process and ensure a smooth and accurate registration experience
          </p>

            <img src={img2} alt="Business Woman" className="img-fluid rounded mt-3" />
          </div>

          {/* Sidebar Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body">
                <h5 className="fw-bold text-center mb-3">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-2" placeholder="Name *" />
                  <input type="email" className="form-control mb-2" placeholder="Email *" />
                  <div className="input-group mb-2">
                    <span className="input-group-text">+91</span>
                    <input type="tel" className="form-control" placeholder="Mobile Number *" />
                  </div>
                  <button className="btn w-100 fw-bold text-white" style={{ background: "#b85423" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Process Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2
              style={{

                color: "#0a3c66",
                marginBottom: 28
              }}
            >
              Process of Sole Proprietorship Registration in India
            </h2>

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
          <div className="col-lg-4 ">
          <img src={img4} alt="Process" className="img-fluid rounded" />
        </div>
        </div>

        
      </div>
   

      <Element_3 />
    </>
  )
}

export default Sole_proprietorship_registration
