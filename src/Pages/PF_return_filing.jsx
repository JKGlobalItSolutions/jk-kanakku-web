import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/PF_return_filing/img1.png";
import img2 from "../assets/PF_return_filing/img2.png";
import img3 from "../assets/PF_return_filing/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const PF_return_filing = () => {
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
              Taxation
            </li>
            <li
              className="breadcrumb-item active fw-bold"
              style={{ color: "black" }}
              aria-current="page"
            >
              PF Return Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Image */}
      <div className="container d-flex justify-content-center">
        <img src={img1} alt="PF Filing" className="img-fluid" />
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
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-5 mb-3">PF Return Filing</h1>
              <p>
                File your PF returns easily and accurately with expert support
                from JK Kanakku.
              </p>
              <p>
                Our team manages the entire PF return filing process while
                ensuring full compliance with EPFO norms.
              </p>
              <p>
                We assist in collecting key documents such as Form 16, KYC
                details, and salary structure breakdowns.
              </p>
              <p>
                Your financial information is treated with strict
                confidentiality and protected at every step.
              </p>
              <p>
                We guarantee on-time submission to help you avoid penalties and
                ensure a hassle-free experience.
              </p>
              <p>
                Trust Kanakkupillai for secure, timely, and reliable PF return
                filing services.
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4">
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
                    <span className="input-group-text fw-bold">+91</span>
                    <input
                      type="text"
                      placeholder="Mobile Number *"
                      className="form-control"
                    />
                  </div>
                  <button className="btn w-100 fw-bold text-white" style={{ backgroundColor: "#c46a2f" }}>
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
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for PF Return Filing </h2>
<p><b>PF Registration Certificate</b></p>
<p>This certificate serves as official proof that the business is registered with the Employees' Provident Fund Organisation (EPFO) and is eligible to file PF returns.</p>
<p><b>Universal Account Number (UAN) Details</b></p>
<p>The UAN is a unique 12-digit number assigned to each employee under the EPF scheme. It allows tracking of Provident Fund contributions across different employers throughout an employee’s career.</p>
<p><b>Electronic Challan Receipt Copies</b></p>
<p>Employers must retain copies of EPF payment challans submitted during the financial year. These act as proof of timely contributions to the Provident Fund.</p>
<p><b>Salary Registers or Payslips</b></p>
<p>Detailed records of employees’ salaries help determine the accurate amount to be contributed toward their PF accounts. These include all wage components used in the calculation.</p>
<p><b>Employee PF Account Statements</b></p>
<p>These statements provide a breakdown of the monthly contributions and accrued interest for each employee’s PF account. Reviewing them ensures there are no errors or mismatches in the reported figures.</p>
            <img src={img2} alt="Documents" className="img-fluid rounded" />
          </div>

          {/* Side Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4 " style={{height:"300px"}}>
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
                    style={{ background: "#b85423" }}
                  >
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
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Process of PF Return Filing</h2>
<p><b>Step 1: Access the EPFO Portal</b></p>
<p>Begin by logging into the EPFO Member Home Portal. Use your Employer Login credentials to proceed.</p>
<p><b>Step 2: Prepare Contribution Details</b></p>
<p>Before filing, gather the monthly contribution data:</p>
<p>Employee’s Share</p>
<p>Employer’s Share</p>
<p>Other Charges such as administrative and EDLI (insurance) contributions, if applicable.</p>
<p><b>Step 3: Fill Out ECR (Electronic Challan-cum-Return)</b></p>
<p>Navigate to the ‘Returns’ section on the portal.</p>
<p>Select ‘ECR Upload’.</p>
<p>Enter employee-wise details: Name, UAN, wages, PF contributions, etc.</p>
<p>Once completed, the system will auto-calculate the total payable amount.</p>
<p>Generate the challan based on this data.</p>
<p><b>Step 4: Make the PF Payment</b></p>
<p>Proceed to the payment gateway using Net Banking or other supported online methods.</p>
<p>Ensure the challan number matches the uploaded return data.</p>
<p>Complete the payment and retain the transaction confirmation.</p>
<p><b>Step 5: Upload the Return File</b></p>
<p>Upload the finalized ECR file containing payment and employee details.</p>
<p>Once submitted, this constitutes your official monthly PF return filing.</p>
<p><b>Step 6: Confirmation and Acknowledgement</b></p>
<p>The portal will confirm successful submission.</p>
<p>Download and print the acknowledgement receipt for your records.</p>
<p><b>Step 7: Maintain Compliance Records</b></p>
<p>Keep copies of the return, payment receipts, and supporting documents safely stored.</p>
<p>These will be useful for audits, compliance checks, or internal reviews.</p>
      </div>

      {/* Bottom Image */}
      <div className="container d-flex justify-content-center my-4">
        <img src={img3} alt="PF Process" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default PF_return_filing;
