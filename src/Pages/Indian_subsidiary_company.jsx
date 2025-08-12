import React from 'react'
import img1 from "../assets/Indian_subsidiary_company/img1.png"
import img3 from "../assets/Indian_subsidiary_company/img3.png"
import Element_3 from '../components/Element_3'
import Element_1 from '../components/Element_2'



const Indian_subsidiary_company = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <img src={img1} alt="" style={{ maxWidth: "100%" }} />
      </div>

      <div style={{
        fontFamily: "Montserrat, Arial, sans-serif",
        background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        padding: 0, // can be removed or set to a small value if needed
      }}>
        <div style={{
          maxWidth: 1050,
          height: "500px",
          margin: "40px auto",  // marginTop and marginBottom set to 40px, but you can use 24px for tighter fit
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",         // Remove top/bottom padding for tighter fit
        }}>
          {/* Left content */}
          <div style={{ flex: 2, color: "white", paddingRight: 50 }}>
            <h1 style={{
              fontWeight: 700,
              fontSize: 40,
              marginBottom: 25
            }}>
              Indian Subsidiary Company
            </h1>
            <div style={{ fontSize: 15, marginBottom: 20 }}>
              <span style={{ color: "#fff" }}>
                &#9654; Enter the Thriving Indian Market - Register Your Subsidiary with <span style={{ color: "#ffd08d", fontWeight: 600 }}>JK KANNAKU</span>
              </span>
            </div>
            <div style={{ fontSize: 16, lineHeight: "2" }}>
              <div>&#9679; Our online subsidiary registration service includes the following features</div>
              <div>&#9654; Obtain 2 DSCs with 2 years validity</div>
              <div>&#9654; Get 2 secure Director Identification Number (DIN)</div>
              <div>&#9654; Get unique name approval for your subsidiary company</div>
              <div>&#9654; Acquire PAN and TAN for the company</div>
              <div>&#9654; Open a current account with ICICI Bank</div>
              <div>&#9654; Receive the official Company Incorporation Certificate</div>
            </div>
          </div>
          {/* Right form card */}
          <div style={{
            flex: 1,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 18px 0 rgba(0,0,0,0.07)",
            padding: "32px 30px 26px 30px", // Slightly reduced padding
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 22, // Reduced space
              textAlign: "left"
            }}>
              Expert Consultation
            </div>
            <input
              type="text"
              placeholder="Name *"
              style={{
                width: "100%",
                marginBottom: 12,
                padding: "12px 9px",
                fontSize: 16,
                borderRadius: 7,
                border: "1.2px solid #e5e8ee"
              }}
            />
            <input
              type="email"
              placeholder="Email*"
              style={{
                width: "100%",
                marginBottom: 12,
                padding: "12px 9px",
                fontSize: 16,
                borderRadius: 7,
                border: "1.2px solid #e5e8ee"
              }}
            />
            <div style={{ display: "flex", marginBottom: 17 }}>
              <span style={{
                padding: "12px 10px",
                background: "#ece5e0",
                border: "1px solid #e5e8ee",
                borderRadius: "7px 0 0 7px",
                fontSize: 16,
                minWidth: 54,
                fontWeight: 600,
                textAlign: "center",
                color: "#222"
              }}>+91</span>
              <input
                type="text"
                placeholder="Mobile Number*"
                style={{
                  flex: 1,
                  padding: "12px 9px",
                  fontSize: 16,
                  borderRadius: "0 7px 7px 0",
                  border: "1.2px solid #e5e8ee",
                  borderLeft: "none"
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "#c46a2f",
                color: "white",
                border: "none",
                padding: "13px 0",
                width: "100%",
                borderRadius: 7,
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 16,
                transition: "background 0.2s"
              }}>
              Get Start Now &gt;
            </button>
          </div>
        </div>
      </div>

      <Element_1 />
      <div
        style={{
          display: "flex",
          gap: "30px",
          maxWidth: "100%",
          margin: "40px auto",
          alignItems: "flex-start",
          fontFamily: "Segoe UI, Arial, sans-serif"
        }}
      >
        {/* Left Content - No box */}
        <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>

          {/* First Section */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>
              Documents Required for Subsidiary Company Registration
            </h2>
            <p style={{ fontWeight: "600", fontSize: "14px", marginBottom: "10px" }}>
              The following documents are essential for registering a subsidiary company in India
            </p>

            <h3 style={{ fontWeight: "bold", marginTop: "20px" }}>For the Foreign Parent Company:</h3>
            <p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Parent Company&apos;s</span> Certificate of Incorporation</p>
            <p><span style={{ fontWeight: "600" }}>Board Resolution:</span> A certified copy authorizing the establishment of a subsidiary in India</p>
            <p><span style={{ color: "green" }}>Proof of Address (Parent Company):</span><br />
              Rent or lease agreement for the registered office; and<br />
              A recent utility bill, bank statement, or other official document confirming the address of the parent company.
            </p>
            <p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Director Details:</span> Identity proof (e.g., passport) and address proof of all foreign directors.</p>
            <p><span style={{ color: "#8f5d13", fontWeight: "600" }}>Memorandum and Articles of Association:</span> A copy of the parent company&apos;s MOA and AOA.</p>

            <h3 style={{ fontWeight: "bold" }}>For Indian Directors:</h3>
            <p>
              Proof of Identity: Passport, voter ID, or any other government-issued ID.<br />
              Proof of Address: Utility bill, bank statement, or lease agreement showing the residential address of the director.
            </p>

            <h3 style={{ fontWeight: "bold" }}>For the Subsidiary Company:</h3>
            <p>Proposed Company Name: To be approved by the MCA.</p>
            <p>Registered Office Address: Utility bill or lease agreement in India.</p>
          </div>

          {/* Second Section */}
          <div>
            <h2 style={{ color: "#b26728", fontWeight: 700, fontSize: 24, marginBottom: 16 }}>
              Checklist for Indian Subsidiary Company Registration
            </h2>

            <p style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px", color: "#111" }}>Incorporation Documents:</p>
            <ul style={{ margin: "0 0 20px 20px" }}>
              <li>MOA and AOA detailing the business purpose and operational framework</li>
              <li>Certificate of establishment of the parent company</li>
            </ul>

            <p style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px", color: "#111" }}>
              Identity Proof of Directors and Shareholders:
            </p>
            <ul style={{ margin: "0 0 20px 20px" }}>
              <li>Founders’ Disclosure of Interests in External Companies, Photographs of the directors</li>
            </ul>

            <p style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px", color: "#111" }}>
              Address Proof of Registered Office:
            </p>
            <ul style={{ margin: "0 0 20px 20px" }}>
              <li>Documented proof of the listed office address, such as a rent deal or ownership papers</li>
              <li>Copies of utility bills for the registered office address</li>
              <li>Details of the listed office location for legal records and compliance reasons</li>
            </ul>

            <p style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px", color: "#111" }}>
              Name Approval and Reservation:
            </p>
            <ul style={{ margin: "0 0 20px 20px" }}>
              <li>Subsidiary’s name should ideally reflect its Indian jurisdiction</li>
              <li>Reserve a unique business name in compliance with legal rules</li>
            </ul>

            <p style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px", color: "#111" }}>
              Bank Account Opening and Tax Registration:
            </p>
            <ul style={{ margin: "0 0 20px 20px" }}>
              <li>Open a company bank account post-registration</li>
              <li>Secure PAN and TAN to facilitate tax filings and deductions</li>
            </ul>
          </div>

        </div>

        {/* Right Side Form Box */}
        <div className="col-lg-4">
          <div className="card shadow" style={{ borderRadius: "1.5rem" }}>
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
                  className="btn btn-warning w-100 fw-bold"
                  style={{
                    background: "#b85423",
                    color: "white",
                    borderRadius: "1.5rem"
                  }}
                >
                  Get Start Now &gt;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>



      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', padding: '32px' }}>
        {/* Left Side: Text */}
        <div style={{ flex: '1', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ color: '#4169a1', fontWeight: 700, fontSize: 24, marginBottom: 20 }}>
            Procedure for Subsidiary Company Registration in India
          </h2>

          {/* Step 1 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '20px 0 10px' }}>
            Step 1: Obtain a Digital Signature Certificate (DSC)
          </p>
          <p style={{ marginBottom: 18 }}>
            Digital Signature Certificates (DSCs) are required for all directors to sign incorporation documents electronically.
          </p>

          {/* Step 2 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 2: Obtain Director Identification Number (DIN)
          </p>
          <p style={{ marginBottom: 18 }}>
            Directors of the subsidiary company have to apply for a Director Identification Number (DIN) through the Ministry of Corporate Affairs (MCA) website.
          </p>

          {/* Step 3 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 3: Name Approval from MCA
          </p>
          <p style={{ marginBottom: 18 }}>
            The proposed company name must be submitted for approval to the Ministry of Corporate Affairs (MCA). The name should not conflict with any existing companies or trademarks.
          </p>

          {/* Step 4 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 4: Prepare Documents
          </p>
          <p style={{ marginBottom: 18 }}>
            Prepare the Memorandum of Association (MOA) and Articles of Association (AOA) for the subsidiary company. You will also need to submit the Board Resolution from the parent company that authorizes the incorporation of the subsidiary company.
          </p>

          {/* Step 5 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 5: Submit Registration Forms to MCA
          </p>
          <div style={{ marginBottom: 18 }}>
            <p>Form SPICe (INC-32): This form is used for company registration</p>
            <p>Form DIR-12: For the appointment of directors.</p>
            <p>Form INC-22: For the registered office address.</p>
          </div>

          {/* Step 6 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 6: Payment of Registration Fees
          </p>
          <p style={{ marginBottom: 18 }}>
            The registration fee is determined by the authorized capital of the company. The fee has to be paid online during the filing process.
          </p>

          {/* Step 7 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 7: Obtain a Certificate of Incorporation
          </p>
          <p style={{ marginBottom: 18 }}>
            Upon approval of the submitted documents by the Ministry of Corporate Affairs (MCA), the company will be issued a Certificate of Incorporation. This certificate serves as official confirmation that the subsidiary is legally registered in India.
          </p>

          {/* Step 8 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 8: Apply for PAN, TAN, and GST Registration
          </p>
          <div style={{ marginBottom: 18 }}>
            <p>Permanent Account Number (PAN): Required for all financial and tax-related transactions in India</p>
            <p>Tax Deduction and Collection Account Number (TAN): Necessary for deducting and remitting tax at source</p>
            <p>Goods and Services Tax (GST) Registration (if applicable): Required for companies involved in the supply of goods or services above the prescribed threshold</p>
          </div>

          {/* Step 9 */}
          <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 10px' }}>
            Step 9: Open a Bank Account
          </p>
          <p>
            Once the company is incorporated, it can open a bank account in India. The authorized signatories (usually the directors) will be the ones to operate this account.
          </p>
        </div>

        {/* Right Side: Image */}
        <div style={{ flexBasis: '40%', maxWidth: '40%' }}>
          <img
            src={img3}
            alt="Business Woman Partnership Registration"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            className="img-fluid"
          />
        </div>
      </div>



      <Element_3 />
    </>
  )
}

export default Indian_subsidiary_company
