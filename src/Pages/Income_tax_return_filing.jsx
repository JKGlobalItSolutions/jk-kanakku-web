import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/Income_tax_return_filing/img1.png";
import img3 from "../assets/Income_tax_return_filing/img2.png"; // added since you used img3
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const Income_tax_return_filing = () => {
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
            <li className="breadcrumb-item fw-bold text-dark">Taxation</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              Income Tax Return Filing
            </li>
          </ol>
        </div>
      </nav>

      {/* Top Banner */}
      <div className="container text-center my-3">
        <img src={img1} alt="Income Tax Filing" className="img-fluid" />
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
              <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
                Income Tax Return Filing
              </h1>
              <p>
                Take the stress out of tax season. File your ITR on time with help from our experienced
                professionals and unlock maximum refunds with zero hassle.
              </p>
              <p>
                Our team of tax experts gathers all the required information to prepare precise and optimized
                returns tailored to your financial profile.
              </p>
              <p>
                Thousands of individuals and businesses trust JK Kanakku for their income tax filing—because we
                make compliance simple and efficient.
              </p>
              <p>Racing against the deadline? Reach out now for the fastest ITR filing service in the country.</p>
              <p>Stay fully compliant with India’s tax laws—without the overwhelm. Our experts handle everything for you.</p>
              <p>Get expert guidance, reduce your tax liability, and file with confidence. Start your ITR filing today!</p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email *" className="form-control mb-3" />
                  <div className="d-flex mb-3">
                    <span className="px-3 d-flex align-items-center bg-light border rounded-start">
                      +91
                    </span>
                    <input type="tel" placeholder="Mobile Number *" className="form-control" />
                  </div>
                  <button
                    type="submit"
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

      {/* Element 2 */}
      <Element_2 />

      {/* Documents Section */}
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required to Amend Your GST Registration </h2>
<p><b>🔄 Change in Business Name</b></p>
<p>Board resolution or affidavit confirming the new business name</p>
<p><b>Updated Certificate of Incorporation (if applicable)</b></p>
<p><b>🏢 Change in Business Address</b></p>
<p>Any one of the following as proof of new address:</p>
<p>Latest property tax receipt</p>
<p>Municipal khata copy</p>
<p>Electricity bill</p>
<p><b>If rented:</b></p>
<p>Valid rent/lease agreement</p>
<p>Proof of ownership from the landlord (e.g., electricity bill or property document)</p>
<p>Consent letter from the owner (if applicable)</p>
<p><b>👥 Change in Key Personnel (e.g., Partners or Directors)</b></p>
<p>Board resolution or revised partnership deed showing the change</p>
<p>Identity and address proof of the person being added/removed:</p>
<p>PAN card, Aadhaar card, or passport-sized photograph</p>
<p>Appointment letter for new authorized signatory</p>
<p><b>🏦 Update of Bank Account Details</b></p>
<p><b>Any one of the following documents showing correct bank details and IFSC code:</b></p>
<p>Canceled cheque</p>
<p>Recent bank statement</p>
<p>Passbook copy</p>
          </div>

          {/* Side Card */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card shadow rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email *" />
                  <div className="d-flex mb-3">
                    <input type="text" value="+91" className="form-control" style={{ maxWidth: "70px", background: "#eee" }} readOnly />
                    <input type="tel" className="form-control" placeholder="Mobile Number *" />
                  </div>
                  <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#b85423" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GST Process */}
      <div className="container-fluid my-5">
         <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>GST Registration Process for Foreigners in India </h2>
<p><b>Form 26AS</b></p>
<p>A consolidated tax statement that summarizes all TDS (Tax Deducted at Source) entries linked to your PAN. It reflects the tax credits available to you and should be reviewed carefully before filing your return.</p>
<p><b>Form 16</b></p>
<p>Provided by your employer, this certificate outlines your total salary and the TDS deducted during the financial year.</p>
<p><b>Bank Statements</b></p>
<p>Detailed bank statements help track income from savings, fixed deposits, and other sources. They also support the reporting of interest income and financial transactions during the year.</p>
<p><b>Investment and Capital Gain Documents</b></p>
<p>If you’ve invested in mutual funds, stocks, or fixed deposits, gather documents like dividend statements, capital gains reports, and interest certificates. For instance, dividends exceeding ₹10 lakh must be reported in your ITR.</p>
<p><b>Proof of Other Income</b></p>
<p>Include documentation for income beyond salary—such as freelance payments, rental earnings, or bonuses. This may involve rent agreements, freelance invoices, or interest income certificates.</p>
<p><b>Tax-Saving Investment and Deduction Proofs</b></p>
<p>To claim deductions under sections like 80C, 80D, or 80G, you’ll need relevant evidence—such as insurance premium receipts, donation certificates, or statements of PPF/EPF contributions.</p>
<p><b>Form 10E (If Applicable)</b></p>
<p>If you’ve received arrears or special payments like bonuses, Form 10E helps you claim tax relief under Section 89(1) by distributing the tax liability over the years it pertains to.</p>
<p><b>TDS Certificates (Non-Salary Income)</b></p>
<p>If tax has been deducted from non-salary sources such as interest, rent, or consultancy fees, collect TDS certificates from the respective payers to ensure accurate credit is claimed.</p>
<p><b>Aadhaar and PAN Card</b></p>
<p>Both Aadhaar and PAN are essential for e-verification and tax filing. Ensure they are up to date and correctly linked for a smooth filing process.</p>
<p><b>Foreign Income and Asset Details (If Applicable)</b></p>
<p>If you have income from overseas or own foreign assets, disclose it accurately using documents like foreign bank statements, income certificates, or investment records, as required under Indian tax laws.</p>
      </div>

      {/* Bottom Banner */}
      <div className="container text-center my-4">
        <img src={img3} alt="Tax Filing" className="img-fluid" />
      </div>

<Element_3/>

    </>
  );
};

export default Income_tax_return_filing;
