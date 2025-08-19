import React from 'react'
import img1 from "../assets/Patnership_firm_registration/img1.png"
import img2 from "../assets/Patnership_firm_registration/img2.png"
import img3 from "../assets/Patnership_firm_registration/img3.png"
import img4 from "../assets/Patnership_firm_registration/img4.png"
import Element_3 from '../components/Element_3'
import Element_2 from '../components/Element_2'
import { Link } from 'react-router-dom'
const Patnership_firm_registration = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="bg-white py-2">
<div className="container">
<ol className="breadcrumb mb-0" >
<li className="breadcrumb-item">
<Link to="/" className="text-decoration-none fw-bold" style={{color:"black"}}>Home</Link>
</li>
<li className="breadcrumb-item fw-bold" style={{color:"black"}}>
{/* <Link to="/registration" className="text-decoration-none fw-bold" style={{color:"black"}}> */}
Startup
{/* </Link> */}
</li>
<li className="breadcrumb-item active fw-bold" style={{color:"black"}} aria-current="page">
Partnership Firm Registration
</li>
</ol>
</div>
</nav>


<div className="container d-flex justify-content-center">
<img src={img1} alt="" style={{ maxWidth: "100%" }} />
</div>

<div 
  className="w-100 py-5" 
  style={{ 
    fontFamily: "Montserrat, Arial, sans-serif", 
    background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" 
  }}
>
  <div className="container">
    <div className="row align-items-center g-4">
      
      {/* Left content */}
      <div className="col-lg-7 text-white">
        <h1 className="fw-bold display-5 mb-3">
          Partnership Firm Registration
        </h1>

        <p className="fs-6 mb-3">
          ▶ Register your partnership firm hassle-free with 
          <span className="fw-semibold text-warning"> JK KANNAKU</span>
        </p>

        <ul className="list-unstyled fs-6 lh-lg">
          <li>▶ Drafting of Partnership Deed</li>
          <li>▶ PAN Card for your partnership firm</li>
          <li>▶ Seamless Form C submission</li>
          <li>▶ Registration certificate promptly</li>
          <li>▶ Free consultation to start your journey</li>
        </ul>
      </div>

      {/* Right form card */}
      <div className="col-lg-5">
        <div className="bg-white p-4 rounded-4 shadow">
          <h4 className="fw-bold mb-3">Expert Consultation</h4>
          <form>
            <input 
              type="text" 
              placeholder="Name *" 
              className="form-control mb-3" 
            />
            <input 
              type="email" 
              placeholder="Email *" 
              className="form-control mb-3" 
            />
            <div className="input-group mb-3">
              <span className="input-group-text fw-semibold">+91</span>
              <input 
                type="text" 
                placeholder="Mobile Number*" 
                className="form-control" 
              />
            </div>
            <button 
              className="btn w-100 fw-bold text-white" 
              style={{ background: "#c46a2f" }}
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




 <div className="container-fluid" style={{ background: "#fff", color: "#333" }}>
      <div className="row ">
        {/* Left: Document Checklist */}
        <div className="col-lg-7 mb-4">
          <h2 className="fw-bold mb-3" style={{ color: "#0a3c66" }}>
            Documents Required for Partnership Firm Registration
          </h2>
          <div style={{ color: "#fc813d", fontWeight: 500, marginBottom: "18px", fontSize: "1rem" }}>
            The following documents are required to register a partnership firm in India:
          </div>
          <ul className="mb-4" style={{ listStyleType: "none", paddingLeft: 0, background: "transparent", fontSize: "1rem" }}>
            <li style={{ marginBottom: "18px" }}>
              <span className="fw-bold" style={{ color: "#234f95" }}>1. Partnership Deed:</span><br />
              <span>
                Though partnership deed is not required under the partnership act but it specifies the roles and responsibilities of each partner. It is a standard document and notarization or registering of partnership deed offers legal benefits like it acts as the valid proof of the partnership in case of a dispute.
              </span>
            </li>
            <li style={{ marginBottom: "18px" }}>
              <span className="fw-bold" style={{ color: "#234f95" }}>2. PAN Card of the Firm:</span><br />
              <span>
                It is mandatory for a partnership firm to obtain its own PAN card. While applying for registration, two copies of the PAN card must be submitted to the Registrar’s office.
              </span>
            </li>
            <li style={{ marginBottom: "18px" }}>
              <span className="fw-bold" style={{ color: "#234f95" }}>3. KYC Documents of the Partners:</span><br />
              <span style={{ color: "#fc813d", fontSize: "0.97rem", display: "block", marginBottom: "3px" }}>
                Individuals acting as partners in the partnership firm have to submit the following documents to prove their identity and status to be part of the partnership firm:
              </span>
              <span>Aadhar card, PAN card, Address proof (like utility bills), Passport-sized photographs</span>
            </li>
            <li style={{ marginBottom: "18px" }}>
              <span className="fw-bold" style={{ color: "#234f95" }}>4. Address of Registered office of the Firm:</span><br />
              <span>
                It is mandatory to submit a document that proves the registered address of the partnership firm, such as a lease agreement or rent agreement.
              </span>
            </li>
            <li>
              <span className="fw-bold" style={{ color: "#234f95" }}>5. Form 1:</span><br />
              <span>
                This is an official document used to register a partnership firm. It is available from the Registrar of Firms in all states. The form requires details such as the exact nature of the business activity and information about the partners. It must be submitted physically to the Registrar’s office.
              </span>
            </li>
          </ul>
          {/* Bottom image: Partnership puzzle */}
          <div className="mt-4 mb-3 d-flex justify-content-center">
  <img
    src={img2}
    alt="Partnership Puzzle"
    style={{ width: 280, height: 170, objectFit: "contain" }}
  />
</div>
        </div>

        {/* Right: Expert Consultation Box */}
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

  <div className=" container-fluid" style={{ gap: '30px' }}>
  {/* Left side: Partnership Registration Content */}
  <div
    className="flex-grow-1"
    style={{ paddingRight: '30px', minWidth: 0, flexBasis: '50%' }}
  >
    <h2 className="fw-bold mb-3" style={{ color: '#234f95', fontSize: '2rem' }}>
      Partnership Firm Registration Process in India
    </h2>
    <div className="fw-semibold mb-3" style={{ color: '#f9892b', fontSize: '1.03rem' }}>
      The partnership firm registration process includes several key steps to ensure legal compliance and start the partnership successfully.
    </div>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 1: Choose Your Business</h4>
    <p style={{ fontSize: '1rem', color: '#333' }}>
      The foremost step of registering a partnership firm is that the partners need to decide the business that shall be carried out in the firm. While filling the registration form, the exact nature of the business of the firm has to be mentioned.
    </p>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 2: Choose Name</h4>
    <p style={{ fontSize: '1rem', color: '#333' }}>
      Choosing a name for your partnership firm is a critical step. The name has to be unique and should reflect the nature of your business. It is advisable to avoid confusion and to be similar to a well-known company or trademark.
    </p>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 3: Draft the Partnership Deed</h4>
    <p className="mb-2" style={{ color: '#f9892b', fontSize: '0.97rem', fontWeight: 500 }}>
      This is the most important document. It formally lays down all the rules and regulations of the partnership firm. The partnership deed should clearly specify the following:
    </p>
    <ul style={{ fontSize: '1rem', marginBottom: '18px' }}>
      <li>The name and registered address of the firm</li>
      <li>The names and residential addresses of all partners</li>
      <li>The method of sharing profits and losses among partners</li>
      <li>The roles and responsibilities of each partner in the business</li>
      <li>The procedure to be followed when a partner wishes to join or leave the firm</li>
    </ul>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 4: Documents Preparation</h4>
    <p className="mb-2" style={{ color: '#f9892b', fontSize: '0.97rem', fontWeight: 500 }}>
      The following documents are needed to register the partnership:
    </p>
    <ul style={{ fontSize: '1rem', marginBottom: '18px' }}>
      <li>PAN card of each partner (including corporate partners, if any)</li>
      <li>Aadhaar card or passport for identity proof</li>
      <li>Recent passport-sized photographs of all partners</li>
      <li>Proof of address for each partner (such as a utility bill or bank statement)</li>
      <li>Proof of the business address (such as a lease agreement, utility bill, or property tax receipt)</li>
      <li>Partnership deed duly signed by all partners</li>
    </ul>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 5: Fill Out Form 1</h4>
    <p className="mb-2" style={{ color: '#f9892b', fontSize: '0.97rem', fontWeight: 500 }}>
      The following details are needed to register the partnership:
    </p>
    <ul style={{ fontSize: '1rem', marginBottom: '18px' }}>
      <li>Name of the partnership firm</li>
      <li>Description of the business activity</li>
      <li>Full names and residential addresses of all partners</li>
      <li>Date of commencement of business</li>
      <li>Other essential details as required by the registration form</li>
    </ul>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 6: Submit the Forms</h4>
    <p style={{ fontSize: '1rem', color: '#333' }}>
      After completing Form 1, it must be submitted to the Registrar of Firms in your respective state, along with all the required documents—such as the partnership deed, proof of business address, PAN cards, and identity/address proofs of partners. Registration fees also vary depending on the state. Some states offer online submission; others may require physical submission.
    </p>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 7: Wait for Approval</h4>
    <p style={{ fontSize: '1rem', color: '#333' }}>
      The Registrar of Firms will review the submitted documents, and if everything is in order, the partnership will be formally registered. Upon successful registration, a Registration Certificate will be issued, serving as legal proof of the existence of your partnership firm.
    </p>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 8: Apply for PAN & TAN</h4>
    <p style={{ fontSize: '1rem', color: '#333' }}>
      Once your firm is registered, obtain a PAN card in the name of the partnership firm. If the firm is required to deduct tax at source (TDS), you must also apply for a TAN.
    </p>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 9: Register for GST (if applicable)</h4>
    <p style={{ fontSize: '1rem', color: '#333' }}>
      If annual turnover of the firm exceeds a certain limit (currently Rs.40 lakh for goods or Rs.20 lakh for services), GST registration is mandatory.
    </p>

    <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 10: Open a Business Bank Account</h4>
    <p style={{ fontSize: '1rem', color: '#333' }}>
      Following the registration of the partnership firm, it is necessary to open a bank account in the name of the firm for conducting business transactions.
    </p>

    <p className="mt-4" style={{ fontSize: '1rem', color: '#555' }}>
      By following these straightforward steps, you can efficiently complete the partnership firm registration process, establish a legally compliant entity, and lay a strong foundation for your business.
    </p>
  </div>

  {/* Right side: Image */}
  <div style={{ flexBasis: '50%', maxWidth: '50%' }}>
    <img
      src={img3}
      alt="Business Woman Partnership Registration"
      style={{ width: '100%', height: 'auto' }}
      className="img-fluid"
    />
  </div>
</div>

<div className="container-fluid">
  <h2 className="fw-bold mb-3" style={{ color: '#234f95', fontSize: '2rem' }}>
    Partnership Firm Registration Process in India
  </h2>
  <div className="fw-semibold mb-3" style={{ color: '#f9892b', fontSize: '1.03rem' }}>
    The partnership firm registration process includes several key steps to ensure legal compliance and start the partnership successfully.
  </div>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 1: Choose Your Business</h4>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    The foremost step of registering a partnership firm is that the partners need to decide the business that shall be carried out in the firm. While filling the registration form, the exact nature of the business of the firm has to be mentioned.
  </p>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 2: Choose Name</h4>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    Choosing a name for your partnership firm is a critical step. The name has to be unique and should reflect the nature of your business. It is advisable to avoid confusion and to be similar to a well-known company or trademark.
  </p>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 3: Draft the Partnership Deed</h4>
  <p className="mb-2" style={{ color: '#f9892b', fontSize: '0.97rem', fontWeight: 500 }}>
    This is the most important document. It formally lays down all the rules and regulations of the partnership firm. The partnership deed should clearly specify the following:
  </p>
  <ul style={{ fontSize: '1rem', marginBottom: '18px' }}>
    <li>The name and registered address of the firm</li>
    <li>The names and residential addresses of all partners</li>
    <li>The method of sharing profits and losses among partners</li>
    <li>The roles and responsibilities of each partner in the business</li>
    <li>The procedure to be followed when a partner wishes to join or leave the firm</li>
  </ul>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 4: Documents Preparation</h4>
  <p className="mb-2" style={{ color: '#f9892b', fontSize: '0.97rem', fontWeight: 500 }}>
    The following documents are needed to register the partnership:
  </p>
  <ul style={{ fontSize: '1rem', marginBottom: '18px' }}>
    <li>PAN card of each partner (including corporate partners, if any)</li>
    <li>Aadhaar card or passport for identity proof</li>
    <li>Recent passport-sized photographs of all partners</li>
    <li>Proof of address for each partner (such as a utility bill or bank statement)</li>
    <li>Proof of the business address (such as a lease agreement, utility bill, or property tax receipt)</li>
    <li>Partnership deed duly signed by all partners</li>
  </ul>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 5: Fill Out Form 1</h4>
  <p className="mb-2" style={{ color: '#f9892b', fontSize: '0.97rem', fontWeight: 500 }}>
    The following details are needed to register the partnership:
  </p>
  <ul style={{ fontSize: '1rem', marginBottom: '18px' }}>
    <li>Name of the partnership firm</li>
    <li>Description of the business activity</li>
    <li>Full names and residential addresses of all partners</li>
    <li>Date of commencement of business</li>
    <li>Other essential details as required by the registration form</li>
  </ul>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 6: Submit the Forms</h4>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    After completing Form 1, it must be submitted to the Registrar of Firms in your respective state, along with all the required documents—such as the partnership deed, proof of business address, PAN cards, and identity/address proofs of partners. Registration fees also vary depending on the state. Some states offer online submission; others may require physical submission.
  </p>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 7: Wait for Approval</h4>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    The Registrar of Firms will review the submitted documents, and if everything is in order, the partnership will be formally registered. Upon successful registration, a Registration Certificate will be issued, serving as legal proof of the existence of your partnership firm.
  </p>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 8: Apply for PAN & TAN</h4>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    Once your firm is registered, obtain a PAN card in the name of the partnership firm. If the firm is required to deduct tax at source (TDS), you must also apply for a TAN.
  </p>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 9: Register for GST (if applicable)</h4>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    If annual turnover of the firm exceeds a certain limit (currently Rs.40 lakh for goods or Rs.20 lakh for services), GST registration is mandatory.
  </p>

  <h4 className="fw-bold mt-4 mb-2" style={{ fontSize: '1.13rem' }}>Step 10: Open a Business Bank Account</h4>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    Following the registration of the partnership firm, it is necessary to open a bank account in the name of the firm for conducting business transactions.
  </p>

  <p className="mt-4" style={{ fontSize: '1rem', color: '#555' }}>
    By following these straightforward steps, you can efficiently complete the partnership firm registration process, establish a legally compliant entity, and lay a strong foundation for your business.
  </p>

  {/* Bottom image */}
  <div className="mt-5 text-start">
    <img 
      src={img4} 
      alt="Partnership Registration" 
      className="img-fluid rounded w-100" 
      style={{ maxWidth: "480px" }} 
    />
  </div>
</div>


<Element_3/>
    </>
  )
}

export default Patnership_firm_registration
