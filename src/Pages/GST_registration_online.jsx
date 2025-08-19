import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/GST_registration_online/img1.png";
import img3 from "../assets/GST_registration_online/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_registration_online = () => {
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
                        <li className="breadcrumb-item fw-bold text-dark">GST</li>
                        <li
                            className="breadcrumb-item active fw-bold text-dark"
                            aria-current="page"
                        >
                            GST Registration Online
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Top Banner Image */}
            <div className="container d-flex justify-content-center my-3">
                <img src={img1} alt="" className="img-fluid" />
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
                        {/* Left content */}
                        <div className="col-lg-7 text-white">
                            <h1 className="fw-bold mb-4" style={{ fontSize: "2.2rem" }}>
                                GST Registration Online
                            </h1>
                            <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                                <p>Streamline your GST journey with JK Kannaku—your trusted partner for fast, secure, and compliant GST services.</p>
                                <p><b>Why Choose Us?</b></p>
                                <ul style={{ listStyleType: "none" }}>
                                    <li>✅ Quick & Hassle-Free Registration</li>
                                    <li>Simplified online process with real-time status tracking. Get your GST number in just 2 business days.</li>
                                    <li>🔒 Data Privacy & Security Guaranteed</li>
                                    <li>Your information is safeguarded with the highest standards of data protection.</li>
                                    <li>🏢 Tailored Solutions for All</li>
                                    <li>Customized services for private companies, government entities, and inliiduals.</li>
                                    <li>📑 Comprehensive GST Support</li>
                                    <li>Expert help with GST filings, e-invoicing, and invoice management.</li>
                                    <li>⏰ Never Miss a Deadline</li>
                                    <li>Automated alerts and timely reminders keep you on top of your GST compliance.</li>
                                    <li>📞 Dedicated Support Team</li>
                                    <li>Friendly professionals ready to assist with all your GST-related needs.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right form */}
                        <div className="col-lg-5">
                            <div className="bg-white rounded-4 shadow p-4">
                                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                                <form>
                                    <input type="text" className="form-control mb-3" placeholder="Name *" />
                                    <input type="email" className="form-control mb-3" placeholder="Email *" />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" className="form-control" placeholder="Mobile Number *" />
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

            <Element_2 />

            {/* Main Content */}
            <div className="container-fluid my-5">
                <div className="row g-4">
                    {/* Left Content */}
                    <div className="col-lg-8">
                        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Required Documents for GST Registration in India </h2>
                        <p>📌 1. PAN Card (Permanent Account Number)</p>
                        <p>Mandatory for all applicants.</p>
                        <p>Serves as a primary tax identification number.</p>
                        <p>📌 2. Aadhaar Card</p>
                        <p>Acts as identity and address proof for the applicant.</p>
                        <p>Required for Aadhaar authentication, which streamlines the registration process.</p>
                        <p>📌 3. Proof of Business Registration</p>
                        <p>Valid for all types of business entities:</p>
                        <p>Sole Proprietorship</p>
                        <p>Partnership Firm</p>
                        <p>LLP</p>
                        <p>Private/Public Limited Company</p>
                        <p>Documents may include: Certificate of Incorporation, Partnership Deed, or Business License.</p>
                        <p>📌 4. Bank Account Details</p>
                        <p>A copy of a cancelled cheque, bank statement, or passbook showing:</p>
                        <p>Account holder’s name</p>
                        <p>Account number</p>
                        <p>IFSC code</p>
                        <p>📌 5. Proof of Business Address</p>
                        <p>Acceptable documents include:</p>
                        <p>Electricity bill</p>
                        <p>Property tax receipt</p>
                        <p>Rent/lease agreement</p>
                        <p>Ownership documents</p>
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-lg-4">
                        <div className="card shadow rounded-4">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                                <form>
                                    <input type="text" className="form-control mb-3" placeholder="Name *" />
                                    <input type="email" className="form-control mb-3" placeholder="Email *" />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" className="form-control" placeholder="Mobile Number *" />
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
                <div className=''>
                    <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Online Process of GST Registration in India </h2>
                    <p><b>Access the GST Website:</b></p>
                    <p>Go to the "Services" section of the official GST website, then click " GST Registration" and then "New GST Registration."</p>
                    <p><b>Create a TRN (Temporary Reference Number):</b></p>
                    <p>Enter your Permanent Account Number, email address, cell phone number, and registration location on Form GST REG-01. Validate PAN, cell phone number, and email through OTP to create a TRN.</p>
                    <p><b>Submit Application with Documents:</b></p>
                    <p>Using the TRN, finish Part B of Form GST REG-01 by adding the necessary documents for example proof of business registration, address proof, bank account details, and other  papers on the GST wesite.</p>
                    <p><b>Receive Acknowledgement:</b></p>
                    <p>Upon submission of the application, an acknowledgement in Form GST REG-02 will be automatically generated.</p>
                    <p><b>Verification and Approval:</b></p>
                    <p>The GST authority will study the application and papers within three days. If everything is in order, the registration will be accepted. The processing result is usually ready within 7-10 working days.</p>
                    <p><b>Respond to Deficiencies:</b></p>
                    <p>In case of deficiencies or explanations needed, the officer may issue a warning in FORM GST REG-03. Respond with necessary information and papers in FORM GST REG-04 within 7 working days.</p>
                    <p><b>Receive GST Registration Certificate:</b></p>
                    <p>Upon approval, a certificate of registration in Form GST REG-06 having the unique GSTIN will be given online on the site. The certificate is digitally signed or verified by the officer.</p>
                    <p><b>GSTIN Generation:</b></p>
                    <p>The GSTIN is a 15-digit number containing a state code, PAN, business code, and a checksum character. This unique identity is important for making GST-compliant deals.</p>
                </div>



            </div>

            {/* Bottom Image */}
            <div className="container d-flex justify-content-center my-4">
                <img src={img3} alt="" className="img-fluid" />
            </div>

            <Element_3 />
        </>
    )
}

export default GST_registration_online
