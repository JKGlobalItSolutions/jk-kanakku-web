import React from 'react';
import img1 from "../assets/Shop_establishment_license/img1.png";
import img3 from "../assets/Shop_establishment_license/img3.png";
import { Link } from 'react-router-dom';
import Element_2 from '../components/Element_2';
import Element_3 from '../components/Element_3';

const Shop_establishment_license = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold" style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li className="breadcrumb-item fw-bold" style={{ color: "black" }}>
              Registration
            </li>
            <li className="breadcrumb-item active fw-bold" style={{ color: "black" }} aria-current="page">
              Shop & Establishment License
            </li>
          </ol>
        </div>
      </nav>

      {/* Top image */}
      <div className="container text-center my-3">
        <img src={img1} alt="" className="img-fluid" />
      </div>

      {/* Hero section */}
      <div style={{ fontFamily: "Montserrat, Arial, sans-serif", background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container py-5">
          <div className="row align-items-center g-4">
            {/* Left content */}
            <div className="col-lg-8 text-white">
              <h1 style={{ fontWeight: 700, fontSize: "2.5rem" }}>Shop & Establishment License</h1>
              <div className="mb-3" style={{ fontSize: 15 }}>
                &#9654; Get your shop up and running faster: Partner with
                <span style={{ color: "#ffd08d", fontWeight: 600 }}> JK KANNAKU</span> for a shop & establishment license
              </div>
              <div style={{ fontSize: 16, lineHeight: "2" }}>
                <div>&#9654; We understand the unique needs of shop owners and offer personalized registration services to fit your shop type and industry</div>
                <div>&#9654; Shop establishment license builds trust among customers and stakeholders</div>
                <div>&#9654; Register your shop today with our expert guidance!</div>
              </div>
            </div>

            {/* Right form card */}
            <div className="col-lg-4">
              <div className="bg-white rounded shadow p-4">
                <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 22 }}>Expert Consultation</div>
                <input type="text" placeholder="Name *" className="form-control mb-3" />
                <input type="email" placeholder="Email*" className="form-control mb-3" />
                <div className="d-flex mb-3">
                  <span style={{ padding: "12px 10px", background: "#ece5e0", border: "1px solid #e5e8ee", borderRadius: "7px 0 0 7px", fontSize: 16, minWidth: 54, fontWeight: 600, textAlign: "center", color: "#222" }}>+91</span>
                  <input type="text" placeholder="Mobile Number*" className="form-control" style={{ borderRadius: "0 7px 7px 0" }} />
                </div>
                <button className="btn w-100 fw-bold" style={{ backgroundColor: "#c46a2f", color: "white" }}>
                  Get Start Now &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section below hero */}
      <Element_2 />

      {/* Documents section */}
      <div className="container-fluid my-4 px-3">
        <div className="row g-4">
          <div className="col-lg-8">
           <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for Shop and Establishment Registration </h2>
<h3 style={{ fontWeight: "bold" }}>1. Identity Proof</h3>
<p>Provide any one of the following for the business owner(s) or authorized signatory(ies):</p>
<p>PAN Card</p>
<p>Aadhaar Card</p>
<p>Any other government-approved identity proof</p>

<h3 style={{ fontWeight: "bold" }}>2. Address Proof</h3>
<p>Submit one of the following documents as proof of the business premises:</p>
<p>Utility Bill (electricity, water, etc.)</p>
<p>Rent Agreement</p>
<p>Property Tax Receipt</p>
<p>Any other valid official address document</p>

<h3 style={{ fontWeight: "bold" }}>3. Business Proof</h3>
<p>Documents that establish the legal status of the business, such as:</p>
<p>GST Registration Certificate</p>
<p>Certificate of Incorporation</p>
<p>Memorandum of Association (MoA)</p>
<p>Articles of Association (AoA)</p>
<p>LLP Agreement</p>
<p>Partnership Deed</p>
<p>Any other officially accepted business registration document</p>

<h3 style={{ fontWeight: "bold" }}>4. Employee Details</h3>
<p>Provide valid identification and records of employees, such as:</p>
<p>Aadhaar Cards</p>
<p>Passport-size Photographs</p>
<p>Any other formal documentation containing employee information</p>
<p>These papers are needed to start a shop or business under the Shops and Business Act. The specific needs may change slightly from state to state, so it is suggested that the rules given by the individual state's labour department website be checked.</p>
<ol>
  <li><b>Gather all necessary documents</b></li>
  <li><b>Ensure compliance with work laws</b></li>
  <li><b>Verify the accuracy of the information provided</b></li>
  <li><b>Submit the application along with the needed fees</b></li>
</ol>

          </div>

          {/* Right form card */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4 h-30">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email*" />
                  <div className="d-flex mb-3">
                    <input type="text" className="form-control me-2" value="+91" style={{ maxWidth: "70px", background: "#eee" }} readOnly />
                    <input type="tel" className="form-control" placeholder="Mobile Number*" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold" style={{ background: "#b85423", color: "white", borderRadius: "1.5rem" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process and compliance section */}
      <div className="container-fluid ms-2 my-4">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Process of Shop and Establishment License Registration </h2>
<p>The process of Shop and Establishment Registration includes several steps, which may change based on the state where the business is located. The following is a rough outline of the process:</p>
<p><b>Fill out the register form with the correct details:</b> The operator or owner of the shop or business must log into the individual State Labour Department website. The founder or owner must fill out the registration form for the record under the Shop and Establishment Act, giving information such as the name of the boss and establishment, address and type of the establishment, number of workers, and other important details.</p>
<p><b>Attach the supporting papers:</b> Attach all the documents required, including the PAN card, proof of address, proof of ownership of the property, and other related documents. Make sure to cross-check all the papers before filing the application.</p>
<p><b>Submit the application online or offline:</b> The registration application can be made online or offline based on the state guidelines. For online registration, the application form and papers are available on the State Labour Department website. For offline registration, the registration application is finished and given to the Chief Inspector of the particular area along with the stated fees.</p>
<p><b>Await proof and permission from the authorities:</b> After the application is received, the Chief Inspector will check the information and papers given. Once happy, the registration proof will be given online to the founder or owner of the business. If any differences are found, the application may be denied, and the proprietor or owner will be told to fix the mistakes and submit the application.</p>
<p>The registration paper is important for all shops and business places working within the state. </p>

<h3 style={{ fontWeight: "bold" }}>Compliance with Shop and Establishment Act</h3>

<p>Adhering to the Shop and Establishment Act is essential for businesses operating in India. This Act governs various aspects of employment and workplace conditions, including working hours, rest intervals, employee leave (both paid and unpaid), fines, wages, and holidays.</p>
<p>All commercial establishments—such as shops, offices, retail outlets, restaurants, hotels, bars, gyms, and entertainment services—are required to register under the Act within 30 days of commencing operations.</p>
<p><b>Once registered, businesses must comply with the provisions of the Act, which include:</b></p>
<p>Maintaining accurate records related to employees, wages, attendance, and leave</p>
<p>Adhering to prescribed working hours and ensuring proper rest periods</p>
<p>Providing employee benefits in line with legal requirements</p>
<p>Ensuring workplace safety and prohibiting child labour</p>
<p><b>Additionally, companies must:</b></p>
<p>Maintain proper documentation and accounts</p>
<p>Ensure compliance with applicable labour laws, including those related to contract labour</p>
<p>Submit annual reports and complete necessary filings as mandated by the Act</p>
<p>Non-compliance may result in penalties, which vary depending on the rules of the respective state where the business operates.</p>

<h3 style={{ fontWeight: "bold" }}>Renewal of Shop and Establishment Act License</h3>
<p>Registration under the Shops and Establishments Act is not permanent and must be renewed periodically to ensure uninterrupted business operations. Renewal is typically required annually or every five years, depending on the respective state’s regulations.</p>
<p>The renewal process involves submitting an application in the prescribed format to extend the validity of the Registration Certificate within 15 days of its expiry. Timely renewal ensures continued compliance with the provisions of the Act and prevents legal or operational setbacks.</p>
<p><b>Key Points to Note:</b></p>
<p>The renewal fee and validity period of the certificate vary from state to state.</p>
<p>Some states issue a lifetime-valid certificate, while others issue certificates valid for one to five years.</p>
<p>Any modification in business details or structure must be updated before the expiry of the current registration.</p>
<p>The Shops and Establishments Act applies nationwide, but each state or Union Territory has its own version of the Act to govern establishments operating within its jurisdiction. While the core provisions remain similar across states, specific rules and procedures may differ slightly.</p>
      </div>

      {/* Bottom image */}
      <div className="container text-center my-3">
        <img src={img3} alt="" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default Shop_establishment_license;
