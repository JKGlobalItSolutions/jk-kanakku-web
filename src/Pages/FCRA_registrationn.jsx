import React from "react";
import img1 from "../assets/FCRA_registration/img1.png";
import img3 from "../assets/FCRA_registration/img3.png";
import { Link } from "react-router-dom";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const FCRA_registrationn = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="text-decoration-none fw-bold"
                style={{ color: "black" }}
              >
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item fw-bold"
              style={{ color: "black" }}
            >
              Registration
            </li>
            <li
              className="breadcrumb-item active fw-bold"
              style={{ color: "black" }}
              aria-current="page"
            >
              FCRA Registration
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Image */}
      <div className="container text-center my-4">
        <img src={img1} alt="FCRA Registration" className="img-fluid" />
      </div>

      {/* Hero Section */}
      <div
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)",
        }}
        className="py-5"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-lg-7 text-white">
              <h1 className="fw-bold display-5 mb-3">FCRA Registration</h1>
              <p>
                &#9654; Obtain FCRA registration to legally accept foreign
                contributions with{" "}
                <span style={{ color: "#ffd08d", fontWeight: 600 }}>
                  JK KANNAKU
                </span>{" "}
                expert guidance
              </p>
              <ul className="list-unstyled fs-6 lh-lg">
                <li>
                  &#9679; Registration of FCRA allows NGOs to receive foreign
                  contributions legally, enhancing their funding potential,
                  increasing credibility and ensuring regulatory compliance
                </li>
                <li>
                  &#9654; We ensure all your documentation meets the necessary
                  legal requirements, minimising the risk of rejections
                </li>
                <li>
                  &#9654; Contact us today and reach out for personalised
                  support!
                </li>
              </ul>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div
                className="bg-white rounded-4 shadow p-4"
                style={{ minHeight: "100%" }}
              >
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
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      className="form-control"
                    />
                  </div>
                  <button className="btn w-100 fw-bold text-white"
                    style={{ backgroundColor: "#c46a2f" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element_2 />

      {/* Documents Section */}
      <div className="container-fluid my-5">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 className="fw-bold" style={{color:"#0a3c66"}}>
              Documents Required for FCRA Registration in India
            </h2>

            <h4 className="fw-bold mt-4">Normal FCRA Registration</h4>
            <ul>
              <li>Registration Certificate of the Association</li>
              <li>Memorandum of Association (MoA) / Trust Deed</li>
              <li>Audited Financial Statements for the Last Three Years</li>
              <li>Activity Reports for the Last Three Years</li>
              <li>NGO Darpan ID (Registered on the NITI Aayog Portal)</li>
              <li>Aadhaar Cards of All Office Bearers</li>
            </ul>

            <h4 className="fw-bold mt-4">
              Prior Permission FCRA Registration
            </h4>
            <ul>
              <li>Registration Certificate of the Association</li>
              <li>Memorandum of Association (MoA) / Trust Deed</li>
              <li>NGO Darpan ID (from the NITI Aayog Portal)</li>
              <li>Aadhaar Cards of All Office Bearers</li>
              <li>Letter of Commitment from the Donor Organisation</li>
              <li>
                Project Report for which Foreign Contribution (FC) will be
                Utilized
              </li>
            </ul>

            {/* Checklist */}
            <h4 className="fw-bold mt-4">Checklist of Documents to be Filed</h4>
            <ul>
              <li>A properly completed Form FC-8 in triplicate.</li>
              <li>The three years' worth of audited financial statements.</li>
              <li>
                An annual report detailing the actions of the previous five
                years.
              </li>
              <li>
                A thorough description of the beneficiaries and the socioeconomic
                characteristics of the area the NGO works in.
              </li>
              <li>The state's list, accompanied by a map of its districts.</li>
              <li>A certified duplicate of the Certificate of Registration.</li>
              <li>
                A certified copy of the Articles of Association, Memorandum, and
                By-laws, if applicable.
              </li>
              <li>
                A copy of the Income Tax Department's certificates of
                registration or exemption under sections 80G and 12A.
              </li>
              <li>A copy of any earlier authorisation given to the company.</li>
              <li>
                A copy of the organisation's governing body's resolution
                approving the FCRA registration.
              </li>
              <li>
                A list of the current office holders and members of the
                organisation's governing body.
              </li>
              <li>A copy of the organisation's journal or other publication.</li>
              <li>
                The Ministry of Home Affairs file number and registration number
                of any related organisations registered under FCRA.
              </li>
              <li>
                The reference number for any prior applications the association
                may have submitted.
              </li>
              <li>
                The association should provide details if it has received any
                foreign contributions, with or without prior approval.
              </li>
            </ul>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Name *"
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email *"
                  />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number *"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold text-white"
                    style={{ background: "#b85423", borderRadius: "1.5rem" }}
                  >
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Signature Section */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Digital Signature (DSC) Registration Process in India</h2>
<p><span style={{ color: "#8f5d13", fontWeight: "600" }}>To register under FCRA, the organisation must have a DARPAN ID. For this ID, the organisation is required to register itself on the DARPAN portal as provided by the NITI Ayog.</span></p>
<p><b>Step 1 :</b> Visit the official FCRA online portal at https://fcraonline.nic.in.</p>
<p><b>Step 2 :</b> Select the type of application:</p>
<p>Form FC-3A for FCRA Registration</p>
<p>Form FC-3B for FCRA Prior Permission</p>
<p><b>Step 3 :</b> Click on "Apply Online" and create a username and password for your account.</p>
<p><b>Step 4 :</b> Log in using your credentials. After logging in, a screen will appear with the message "I am applying for"—select FCRA Registration from the options.</p>
<p><b>Step 5 :</b> Choose the appropriate FC-3 Form, complete all required fields, and upload the necessary documents.</p>
<p><b>Step 6 :</b> Complete the Executive Committee section by selecting it from the menu. Fill in the details of the committee members. You can add, edit, or delete information by using the "Add details of Key Functionary" option.</p>
<p><b>Step 7 :</b> Provide complete bank account details, including the bank name, account number, IFSC code, and branch address.</p>
<p><b>Step 8 :</b> Upload all supporting documents in PDF format. Make sure to enter the location and date of final submission.</p>
<p><b>Step 9 :</b> Proceed to make the online payment. Please note that no changes can be made to the application after the payment is completed.</p>

<h3 style={{ fontWeight: "bold" }}>DSC Compliance</h3>
<p><b>1. Maintaining Proper Records</b></p>
<p>Maintaining accurate and up-to-date financial records is critical for ensuring transparency and accountability. NGOs must meticulously document all foreign contributions received and disbursed. These records should be maintained in a prescribed format and made readily available for government inspection when required.</p>

<p><b>2. Submitting Annual Reports</b></p>
<p>All NGOs registered under the Foreign Contribution (Regulation) Act (FCRA) are required to submit annual returns to the Ministry of Home Affairs (MHA). These reports must detail the total foreign contributions received and how they were utilized. The submission must be in the prescribed format and certified by a Chartered Accountant (CA).</p>

<p><b>3. Utilization of Foreign Contributions</b></p>
<p>Foreign contributions must be utilized strictly for the purposes for which they were received. Any diversion of funds for unintended activities constitutes a violation of the FCRA and may result in penalties or cancellation of registration.</p>

<p><b>4. Compliance with FCRA Provisions</b></p>
<p>FCRA compliance is strictly monitored by the MHA. NGOs must ensure adherence to all provisions of the Act to avoid penalties or cancellation of their registration. Non-compliance often results from a lack of awareness or professional guidance, which can have serious legal and operational consequences.</p>

<p><b>5. Effective Use and Renewal of FCRA Registration</b></p>
<p>Possessing FCRA registration alone is not sufficient; its active use is equally important. As per Section 14(1)(e) of the FCRA, 2010, if an NGO fails to receive any foreign contribution for two consecutive years, the chances of successful renewal are significantly reduced. Inactivity may lead to rejection of renewal applications by the MHA.</p>

      </div>

      {/* Bottom Image */}
      <div className="container text-center my-4">
        <img src={img3} alt="" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default FCRA_registrationn;
