import React from 'react'
import img1 from "../assets/Startup_india_registration/img1.png"
import img2 from "../assets/Startup_india_registration/img2.png"
import img3 from "../assets/Startup_india_registration/img3.png"
import Element_2 from '../components/Element_2'
import Element_3 from '../components/Element_3'

const Startup_india_registration = () => {
  return (
    <>
     <div className="container d-flex justify-content-center">
           <img src={img1} alt="" style={{ maxWidth: "100%" }} />
         </div> 


  <div style={{
    minHeight: 'auto', // removed 100vh to make the box smaller
    background: 'linear-gradient(to bottom, #a95121 0%, #ef8032 100%)',
    padding: 0,
    margin: 0,
    marginTop:"50px",
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '16px',            // optional: round corners for box feel
    maxWidth: '90%',               // restrict width
    marginInline: 'auto',             // center horizontally
    paddingBlock: '50px'              // vertical padding
  }}>
    <div style={{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '40px',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      
      {/* Left Section */}
      <div style={{ flex: '1 1 55%', color: '#fff', minWidth: '300px' }}>
        <h1 style={{
          fontSize: '2.6rem',
          fontWeight: 'bold',
          marginBottom: '28px',
          lineHeight: 1.2
        }}>
          Startup India Registration
        </h1>
        <ul style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          paddingLeft: '20px',
          marginBottom: 0
        }}>
          <li style={{ marginBottom: '10px' }}>
            Get Recognized as a Startup in Just 3-5 Days! Your Startup, Our Expertise!
          </li>
          <li style={{ marginBottom: '10px' }}>
            Experience a simple and secure process for Startup India Registration with 
            <span style={{ color: '#ffd8a3', fontWeight: 'bold' }}> JK KANNAKU</span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            Get your Startup India certificate hassle-free with our expert guidance
          </li>
          <li>
            Contact us and Fast-track your startup recognition today!
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '32px 24px',
        flex: '1 1 320px',
        maxWidth: '380px',
        boxSizing: 'border-box',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
          marginBottom: '24px',
          color: '#222',
          textAlign: 'center'
        }}>
          Expert Consultation
        </h2>
        <form>
          <input
            type="text"
            placeholder="Name *"
            style={{
              width: '100%',
              marginBottom: '16px',
              padding: '12px',
              borderRadius: '8px',
              border: '1.3px solid #d0d5dd',
              fontSize: '1rem'
            }}
          />
          <input
            type="email"
            placeholder="Email*"
            style={{
              width: '100%',
              marginBottom: '16px',
              padding: '12px',
              borderRadius: '8px',
              border: '1.3px solid #d0d5dd',
              fontSize: '1rem'
            }}
          />
          <div style={{
            display: 'flex',
            marginBottom: '20px',
            alignItems: 'center',
            border: '1.3px solid #d0d5dd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <span style={{
              display: 'inline-block',
              background: '#f7f7f8',
              padding: '12px 14px',
              fontSize: '1rem',
              borderRight: '1.3px solid #d0d5dd'
            }}>+91</span>
            <input
              type="text"
              placeholder="Mobile Number*"
              style={{
                flex: '1',
                border: 'none',
                padding: '12px 10px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #ef8032 60%, #a95121 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              padding: '12px 40px',
              fontSize: '1.05rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #a95121 0%, #ef8032 100%)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #ef8032 60%, #a95121 100%)'}
          >
            Get Start Now &nbsp; &gt;
          </button>
        </form>
      </div>
    </div>
  </div>
<Element_2/>

<div style={{
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  flexWrap: 'wrap'
}}>
  {/* Left Section */}
  <div style={{
    maxWidth: '60%',
    lineHeight: '1.6',
    color: '#333',
    flex: '1 1 60%',
    minWidth: '300px'
  }}>
    <h3 style={{ color: '#1a52a1' }}>Documents Required for Startup India Registration</h3>
    <p>PAN Card, Aadhar Card, Passport, Passport-size photograph, proof of address, and of all the partner(s) and director(s)</p>
    <p>Certificate of Incorporation/Registration</p>
    <p>PAN and Account Number of the Business.</p>
    <p>Proof of Funding from investors</p>
    <p>Letter of Authorization by an authorized representative of the company/business</p>
    <p>Any video, link, or PowerPoint presentation describing the startup</p>

    <h3 style={{ marginTop: '30px', color: '#1a52a1' }}>Online Process of Startup India Registration</h3>

    <div>
      <h4>Step 1: Choose a Business Structure</h4>
      <p>The first and most crucial step in registering a startup in India is selecting the appropriate business structure. Common options include:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Private Limited Company</li>
        <li>Limited Liability Partnership (LLP)</li>
        <li>Partnership Firm</li>
      </ul>
    </div>

    <div>
      <h4>Step 2: Register with MCA</h4>
      <p>Once you have selected the business structure for your startup, the next step is to register with the Ministry of Corporate Affairs (MCA). This involves the following steps:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Obtain a Digital Signature Certificate (DSC)</li>
        <li>Obtain a Director Identification Number (DIN)</li>
        <li>Get approval for the proposed business name</li>
      </ul>

      <h4>Step 3: Meet the Eligibility Criteria</h4>
      <p>After registering the business, the next step is to ensure it meets the eligibility criteria outlined on the Startup India website. These criteria include:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>The entity must be incorporated as a Private Limited Company, Partnership Firm, or Limited Liability Partnership</li>
        <li>It must be less than 10 years old</li>
        <li>The annual turnover should be below ₹100 crores</li>
        <li>The business should be engaged in innovation, development, or improvement of products or processes</li>
      </ul>

      <h4>Step 4: Register with Startup India</h4>
      <p>The next step is to register your business as a startup online on the Startup India Website. Following the given steps:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Visit the official Startup India website at https://www.startupindia.gov.in</li>
        <li>Click on the “Register” button on the homepage</li>
        <li>Fill in the necessary details, including your business name, address, and contact information</li>
        <li>Upload the required documents, such as the Certificate of Incorporation, PAN card, and Aadhaar card</li>
      </ul>

      <h4>Step 5: Obtain a Permanent Account Number (PAN)</h4>
      <p>After registering your startup, the next step is to obtain a Permanent Account Number (PAN). Follow these steps:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Visit the NSDL website (https://www.tin-nsdl.com)</li>
        <li>Click on the “Apply for New TAN” option</li>
        <li>Upload the necessary documents, such as proof of identity and address</li>
      </ul>

      <h4>Step 6: Obtain a Tax Deduction and Collection Account Number (TAN)</h4>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Visit the NSDL official website at https://www.tin-nsdl.com</li>
        <li>Click on the “Apply for New TAN” option under the TAN section</li>
        <li>Fill out the application form, providing details such as your name, address, and contact information</li>
        <li>Upload the required documents, including valid proof of identity and address</li>
      </ul>

      <h4>Step 7: Register for Goods and Services Tax (GST)</h4>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Visit the GST portal</li>
        <li>Click on the “New Registration” button</li>
        <li>Fill in the required details, including your business name, address, and contact information</li>
        <li>Upload the required documents, including your business registration certificate, PAN card, and Aadhaar card</li>
      </ul>

      <h4>Step 8: Obtain Other Necessary Licenses and Permits</h4>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Shop and Establishment Act Registration</li>
        <li>Professional Tax Registration</li>
        <li>Food Safety License (FSSAI)</li>
        <li>Environmental Clearance Certificate</li>
      </ul>
    </div>
  </div>

  {/* Right Section */}
  <div className="col-lg-4" style={{ flex: '1 1 320px', maxWidth: '380px' }}>
    <div className="card shadow" style={{ borderRadius: "1.5rem", marginBottom: '20px' }}>
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

    {/* Image Below Card */}
    <div style={{ flexBasis: '40%',marginTop:"244px", maxWidth: '100%' }}>
        <img
          src={img3}
          alt="Business Woman Partnership Registration"
          style={{ maxwidth: '100%', height: 'auto',  }}
          className="img-fluid"
        />
      </div>
  </div>
</div>
<div className="container d-flex justify-content-center">
           <img src={img2} alt="" style={{ maxWidth: "100%" }} />
         </div> 
    
      
<Element_3/>
      

    </>
)
}

export default Startup_india_registration
