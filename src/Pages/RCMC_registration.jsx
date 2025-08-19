import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/RCMC_registration/img1.png";
import img3 from "../assets/RCMC_registration/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const RCMC_registration = () => {
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
                        <li className="breadcrumb-item fw-bold text-dark">
                            Registration
                        </li>
                        <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
                            RCMC Registration
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Hero Image */}
            <div className="container text-center my-3">
                <img src={img1} alt="RCMC Hero" className="img-fluid" />
            </div>

            {/* Intro Section */}
            <div className="w-100 py-5" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
                <div className="container">
                    <div className="row align-items-center g-4">

                        {/* Left Content */}
                        <div className="col-lg-7 text-white">
                            <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>RCMC Registration</h1>
                            <p>&#9654; Planning to export from India? An RCMC (Registration-Cum-Membership Certificate) is mandatory for exporters to access benefits under various Foreign Trade Policies.</p>
                            <p>&#9654; We help you obtain your RCMC from the appropriate Export Promotion Council (EPC)...</p>
                            <p>&#9654; Start your global trade journey with confidence—we make RCMC registration hassle-free.</p>
                        </div>

                        {/* Right Form */}
                        <div className="col-lg-5">
                            <div className="bg-white rounded-4 shadow p-4">
                                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                                <form>
                                    <input type="text" className="form-control mb-3" placeholder="Name *" />
                                    <input type="email" className="form-control mb-3" placeholder="Email *" />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text fw-bold">+91</span>
                                        <input type="tel" className="form-control" placeholder="Mobile Number *" />
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

                    {/* Left */}
                    <div className="col-lg-8">
                        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for RCMC Registration </h2>
                        <p>PAN Card of the applicant entity</p>
                        <p>Aadhaar Card or other identity proof</p>
                        <p>Certificate of Incorporation in case of a company</p>
                        <p>Memorandum and Articles of Association (for companies)</p>
                        <p>Partnership Agreement for a firm</p>
                        <p>LLP Agreement</p>
                        <p>Address proof of the business</p>
                        <p>Product List or Product Category</p>
                        <p>IEC Certificate</p>
                        <p>GSTIN Certificate</p>
                        <p>Bank Statement/Cancelled Cheque for remittances</p>
                        <p>SSI Certificate / Industrial Licenses (if applicable)</p>
                        <p>Proof of Business Address (utility bill, rent agreement)</p>
                        <p>Past Three Years’ Export Turnover Statement, duly certified by a Chartered Accountant.</p>
                    </div>

                    {/* Right Form Card */}
                    <div className="col-lg-4">
                        <div className="card shadow rounded-4" style={{ height: "300px" }}>
                            <div className="card-body">
                                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                                <form>
                                    <input type="text" className="form-control mb-3" placeholder="Name *" />
                                    <input type="email" className="form-control mb-3" placeholder="Email*" />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text fw-bold">+91</span>
                                        <input type="tel" className="form-control" placeholder="Mobile Number*" />
                                    </div>
                                    <button type="submit" className="btn fw-bold w-100 text-white" style={{ background: "#b85423" }}>
                                        Get Start Now &gt;
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Post Registration */}
            <div className="container-fluid my-5">
                <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Post-Registration Compliance </h2>
                <p>To ensure continued eligibility for export benefits, exporters must adhere to the following RCMC-related compliance requirements:</p>
                <p><b>Validity and Renewal</b></p>
                <p>An RCMC is valid for 5 years. Exporters must renew it before expiry through the DGFT’s e-RCMC portal to avoid disruption in benefits.</p>
                <p><b>Update of Business Details</b></p>
                <p>Any changes in your business—such as address, directors, product categories, or ownership—must be promptly updated on the DGFT portal.</p>
                <p><b>EPC/Commodity Board Compliance</b></p>
                <p>Exporters must comply with the guidelines and norms prescribed by the respective Export Promotion Council (EPC) or Commodity Board under which the RCMC is registered.</p>
                <p><b>Adherence to Foreign Trade Policy (FTP) 2023</b></p>
                <p>Ensure that your business operations align with the provisions and updates outlined in the current Foreign Trade Policy 2023.</p>
                <p><b>Record Keeping and Documentation</b></p>
                <p>Maintain accurate records and supporting documents for audits, inspections, or verification by the DGFT or EPC authorities.</p>

                <h2 style={{ color: "#8f5d13", fontWeight: "bold" }}>Validity and Renewal of RCMC </h2>
                <p><b>Validity Period</b></p>
                <p>An RCMC is deemed valid from April 1 of the licensing year in which it is issued and remains valid for five years. It expires on March 31 of the fifth year.</p>
                <p>Renewal Guidelines</p>
                <p>Renewal can only be done after expiry—not before.</p>
                <p>You may apply for renewal in the same financial year in which your RCMC expires.</p>
                <p>Active or unexpired RCMCs cannot be renewed until they have officially expired.</p>
            </div>

            {/* Image */}
            <div className="container text-center my-3">
                <img src={img3} alt="RCMC Footer" className="img-fluid" />
            </div>

            <Element_3 />
        </>
    );
};

export default RCMC_registration;
