import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/ESI_return_filing/img1.png";
import img2 from "../assets/ESI_return_filing/img2.png";
import img3 from "../assets/ESI_return_filing/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const ESI_return_filing = () => {
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
            <li className="breadcrumb-item fw-bold" style={{ color: "black" }}>
              Taxation
            </li>
            <li
              className="breadcrumb-item active fw-bold"
              style={{ color: "black" }}
              aria-current="page"
            >
              ESI Return Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Image */}
      <div className="container d-flex justify-content-center">
        <img src={img1} alt="ESI Filing" className="img-fluid" />
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
              <h1 className="fw-bold display-5 mb-3">ESI Return Filing</h1>
              <p>Seamless ESI Return Filing with JK Kanakku.</p>
              <p>
                Let our experts take care of your ESI return filing—accurately
                and on time.
              </p>
              <p>
                We assist you in collecting all necessary documents, from wage
                records to challan proofs, ensuring full compliance with ESI
                Corporation norms.
              </p>
              <p>
                Stay penalty-free and maintain uninterrupted employee benefits
                with our reliable service.
              </p>
              <p>
                File your ESI returns confidently and effortlessly with JK
                Kanakku.
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
                  <button
                    className="btn w-100 fw-bold text-white"
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
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for ESI Return Filing in India </h2>
<p><b>1. PF Registration Certificate</b></p>
<p>This certificate confirms that your business is officially registered with the Employees' Provident Fund Organisation (EPFO), making it eligible to submit Provident Fund returns.</p>
<p><b>2. Universal Account Number (UAN) Details</b></p>
<p>The UAN is a unique 12-digit identifier allotted to employees enrolled in the EPF scheme. It helps track Provident Fund contributions across different employers throughout an employee’s tenure.</p>
<p><b>3. Electronic Challan Receipt Copies</b></p>
<p>Retaining challan receipts of PF payments made during the financial year is crucial. These documents act as proof of contributions and help verify compliance with EPF obligations.</p>
<p><b>4. Salary Registers or Payslips</b></p>
<p>Comprehensive salary records—including all wage components—are required to accurately calculate monthly PF contributions for each employee.</p>
<p><b>5. Employee PF Account Statements</b></p>
<p>These statements detail the monthly deposits and interest earned in each employee's PF account. Regular review helps identify and rectify any discrepancies in reported figures.</p>

            <img src={img2} alt="Documents" className="img-fluid rounded" />
          </div>

          {/* Side Form */}
          <div className="col-lg-4">
            <div className="card shadow rounded-4" style={{height:"300px"}}>
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

      {/* Step-by-step Guide */}
      <div className="container-fluid my-5">
        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Step-by-Step Guide to Filing ESI Returns Online in India</h2>
<p><b>1. Log in to the ESIC Portal</b></p>
<p>Visit the official ESIC website: https://www.esic.gov.in</p>
<p>Log in using your credentials and navigate to the "File Return" section.</p>
<p><b>2. Update Employee Details</b></p>
<p>Ensure all employee records (names, wages, insurance numbers) are accurate and up to date.</p>
<p>Add new employees who joined during the return period.</p>
<p>Remove details of employees who have exited the organization.</p>
<p><b>3. Upload Required Documents</b></p>
<p>Prepare and upload the following documents for verification:</p>
<p>Employee employment details</p>
<p>Attendance records</p>
<p>Wage registers</p>
<p>Previous ESI contribution challans</p>
<p><b>4. Calculate Contributions</b></p>
<p>Verify the contribution amounts based on current wages:</p>
<p>Employer’s Contribution: 3.25% of gross wages</p>
<p>Employee’s Contribution: 0.75% of gross wages</p>
<p>(Note: Your original message said 25% and 75%, which appears to be incorrect. The standard ESIC rates are 3.25% employer and 0.75% employee.)</p>
<p><b>5. Generate Challan and Make Payment</b></p>
<p>Click on “Generate Challan” to create a payment slip.</p>
<p>Make the payment via net banking, NEFT, RTGS, or UPI.</p>
<p>Save a copy of the challan receipt as proof of payment.</p>
<p><b>6. Submit the ESI Return</b></p>
<p>Go to the return submission section after payment.</p>
<p>Review all entries for accuracy and submit the half-yearly ESI return online.</p>
<p>Download and retain the acknowledgement receipt for future reference.</p>
      </div>

      {/* Bottom Image */}
      <div className="container d-flex justify-content-center my-4">
        <img src={img3} alt="ESI Filing" className="img-fluid" />
      </div>

      <Element_3 />
    </>
  );
};

export default ESI_return_filing;
