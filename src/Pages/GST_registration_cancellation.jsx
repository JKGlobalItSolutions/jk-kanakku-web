import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/GST_registration_cancellation/img1.png";
import img3 from "../assets/GST_registration_cancellation/img3.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const GST_registration_cancellation = () => {
    return (
        <>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="bg-white py-2">
                <div className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
                        </li>
                        <li className="breadcrumb-item fw-bold text-dark">
                            Registration
                        </li>
                        <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
                            GST Registration Cancellation
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Banner */}
            <div className="container d-flex justify-content-center my-4">
                <img src={img1} alt="GST Registration Cancellation" className="img-fluid" />
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
                            <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                                GST Registration Cancellation
                            </h1>
                            <p>&#9654; Easily Cancel Your GST Registration with JK Kanakku</p>
                            <p>&#9654; Let our experts take the stress out of the process. We ensure a smooth, hassle-free GST cancellation experience by handling all the paperwork for you.</p>
                            <p>&#9654; Enjoy a free consultation and stay up to date with the latest GST rules and compliance requirements.</p>
                        </div>

                        {/* Right Form */}
                        <div className="col-lg-5">
                            <div className="bg-white rounded-3 shadow p-4">
                                <h5 className="fw-bold mb-3">Expert Consultation</h5>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Name *" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email*" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" className="form-control" placeholder="Mobile Number*" />
                                    </div>
                                    <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#c46a2f" }}>
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
                <div className="row">
                    {/* Left Content */}
                    <div className="col-lg-8">
                        <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Documents Required for Cancellation of GST Registration </h2>
                        <p><b>GST Registration Certificate</b> – A copy of your existing certificate.</p>
                        <p><b>Form GST REG-16</b> – This form must be submitted to begin the cancellation process.</p>
                        <p><b>Final Return (GSTR-10)</b> – Required after closing your GST registration.</p>
                        <p><b>Proof of Business Closure</b> – Any document showing your business has shut down operations.</p>
                        <p><b>Business PAN Card</b> – A copy of your company’s PAN card.</p>
                        <p><b>Bank Statement</b> – A recent statement showing that the business account is no longer in use.</p>
                        <p><b>Unused Input Tax Credit (ITC)</b> – Details of any unclaimed ITC balances.</p>
                        <p><b>Deregistration Proof (if registered with other bodies)</b> – Show that you’ve deregistered from EPFO, ESIC, or other authorities.</p>
                        <p><b>Tax Dues Payment Proof</b> – Evidence that you’ve cleared all GST taxes, interest, or penalties.</p>
                        <p><b>e-Way Bill Closure Proof</b> – Confirm that all active e-way bills have been cancelled.</p>



                        <h2 style={{ color: "#8f5d13", fontWeight: "bold" }}>Checklist for Cancellation of GST Registration </h2>
                        <p><b>Cease Business Operations</b></p>
                        <p>Confirm that your business has fully stopped operations or no longer meets the criteria for GST registration.</p>
                        <p><b>Clear Outstanding Dues</b></p>
                        <p>Settle all pending GST liabilities, including taxes, interest, and penalties, before initiating the cancellation.</p>
                        <p><b>File Final Return (GSTR-10)</b></p>
                        <p>Submit the final GST return as a mandatory step in the cancellation process.</p>
                        <p><b>Close Active E-Way Bills</b></p>
                        <p>Ensure that all open or ongoing e-way bills linked to your GSTIN are properly closed or cancelled.</p>
                        <p><b>Deregister from Other Regulatory Bodies</b></p>
                        <p>If applicable, provide proof of deregistration from other authorities like EPFO or ESIC.</p>
                        <p><b>Prepare Required Documentation</b></p>
                        <p>Collect all the necessary documents to support your cancellation application and ensure a smooth process.</p>
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="card shadow border-0 rounded-4">
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
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" className="form-control" placeholder="Mobile Number*" />
                                    </div>
                                    <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#b85423" }}>
                                        Get Start Now &gt;
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mt-5">
                    <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Online Process of GST Registration Cancellation </h2>

                    <p><b>Step 1: Submit the Application</b></p>
                    <p>To initiate the cancellation process, file Form GST REG-16 on the GST portal within 30 days from the intended date of cancellation. This form includes details such as the reason for cancellation, business closure date, and supporting documents.</p>
                    <p><b>Step 2: Verification by GST Authorities</b></p>
                    <p>Once the application is submitted, the GST officer will review the form and attached documents. If everything is in order, the officer will proceed with cancellation. You may be asked to provide additional information during this stage.</p>
                    <p><b>Step 3: Clear All Dues</b></p>
                    <p>Before your registration can be cancelled, ensure that all pending GST returns are filed and any outstanding taxes, interest, or penalties are paid in full.</p>
                    <p><b>Step 4: Close All Active E-Way Bills</b></p>
                    <p>Make sure any active or open e-way bills linked to your GST number are properly closed or cancelled.</p>
                    <p><b>Step 5: Deregister from Other Authorities</b></p>
                    <p>If your business is also registered with other regulatory bodies such as EPFO or ESIC, provide proof of deregistration from those authorities as part of the GST cancellation process.</p>
                    <p><b>Step 6: Final Order of Cancellation</b></p>
                    <p>If all requirements are met, the GST officer will issue a formal cancellation order (usually within 30 days of application submission), officially terminating your GST registration.</p>
                </div>
            </div>

            {/* Bottom Image */}
            <div className="container d-flex justify-content-center my-4">
                <img src={img3} alt="GST Cancellation Process" className="img-fluid" />
            </div>

            <Element_3 />
        </>
    );
};

export default GST_registration_cancellation;
