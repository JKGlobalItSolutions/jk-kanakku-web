import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/GST_invoicing_and_filing_software/img1.png";
import img12 from "../assets/Company_registration/img2.png";
import img3 from "../assets/GST_invoicing_and_filing_software/img3.png";
import Element_3 from "../components/Element_3";

const GST_invoicing_and_filing_software = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none fw-bold text-dark">Home</Link>
            </li>
            <li className="breadcrumb-item fw-bold text-dark">GST</li>
            <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
              GST Invoicing and Filing Software
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="container text-center my-3">
        <img src={img1} alt="GST invoicing software" className="img-fluid rounded" />
      </div>

      {/* Hero Section with Gradient + Form */}
      <div className="w-100" style={{ background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">
              <h1 className="fw-bold display-5">GST Invoicing and Filing Software</h1>
              <p className="mt-3" style={{ lineHeight: "1.8" }}>
                GBooks.io is an advanced GST invoicing and filing solution built to streamline
                your compliance process. Effortlessly create accurate GST invoices, manage returns,
                and file without errors. Our intelligent automation handles complex tasks, saving
                you time and minimizing manual work. Stay compliant and stress-free—start using
                GBooks.io today!
              </p>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow p-4">
                <h4 className="fw-bold mb-3">Expert Consultation</h4>
                <form>
                  <input type="text" placeholder="Name *" className="form-control mb-3" />
                  <input type="email" placeholder="Email *" className="form-control mb-3" />
                  <div className="d-flex mb-3">
                    <span className="px-3 d-flex align-items-center bg-light border rounded-start">+91</span>
                    <input type="text" placeholder="Mobile Number *" className="form-control rounded-end" />
                  </div>
                  <button className="btn w-100 fw-bold text-white" style={{ background: "#c46a2f" }}>
                    Get Start Now &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works + Pricing Banner */}
      <div className="container-fluid my-4">
        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 rounded shadow-sm"
          style={{ background: "linear-gradient(90deg, #ffffff 0%, #bbbbbb 100%)" }}
        >
          <span className="fw-bold fs-3">How it works</span>
          <img src={img12} alt="arrow" className="my-3 my-md-0" style={{ height: "42px", width: "54px" }} />
          <span className="fw-bold fs-3">Pricing</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid my-4">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>What Can Gbooks.io Software Do? </h2>

<p><b>1. Automated GST Invoicing</b></p>
<p>Simplify your billing process with GBooks' intelligent invoicing system designed to eliminate manual errors and save time.</p>
<p>Automated Calculations: Taxes and deductions are applied automatically to every invoice.</p>
<p>Cloud Storage: Access all your invoices securely from the cloud—no paper clutter.</p>
<p>Customizable Templates: Add your logo and branding for a professional, personalized look.</p>
<p><b>2. Revenue Management</b></p>
<p>Track, analyze, and forecast revenue with powerful real-time tools.</p>
<p>Live Revenue Tracking: Monitor income as it happens, month by month.</p>
<p>In-Depth Analytics: Identify your top-performing products or services.</p>
<p>Data-Driven Planning: Use historical data to forecast revenue and plan smarter budgets.</p>
<p><b>3. Expense Management</b></p>
<p>Gain control over your expenses with automated tracking and categorization.</p>
<p>Auto Expense Capture: Eliminate manual data entry errors with smart recording.</p>
<p>Categorized Reporting: Quickly see where your money goes and discover areas for cost-cutting.</p>
<p><b>4. Smart Bookkeeping</b></p>
<p>Stay organized with automated bookkeeping tools that simplify your financial records.</p>
<p>Automated Entries: All transactions are recorded in real time, saving effort and time.</p>
<p>Reconciliation Tools: Detect and resolve mismatches before they become problems.</p>
<p><b>Intuitive Interface: Navigate your ledger easily with a user-friendly design.</b></p>
<p><b>5. Custom Chart of Accounts</b></p>
<p>Maintain a structured financial framework with a detailed and flexible chart of accounts.</p>
<p>Accurate Categorization: Classify transactions by type—assets, liabilities, expenses, income, and more.</p>
<p>Custom Structure: Tailor account categories to match your business structure.</p>
<p>Clear Financial Overview: Improve audit readiness and enable strategic decision-making.</p>
<p><b>6. Inventory Management</b></p>
<p>Efficiently manage physical stock and reduce waste with real-time tracking and insights.</p>
<p>Stock Monitoring: Get alerts for low stock and keep inventory levels in check.</p>
<p>Insightful Reports: Analyze trends to make smarter purchasing and sales decisions.</p>
<p>Easy Interface: Manage inventory, even complex ones, with a simple, intuitive layout.</p>
<p><b>7. Financial Reporting</b></p>
<p>Turn raw data into actionable insights with dynamic reports and dashboards.</p>
<p>Custom Dashboards: Visualize the KPIs that matter most to your business.</p>
<p>Charts & Graphs: Easily interpret complex data using visual analytics.</p>
<p><b>8. Cloud-Based Access</b></p>
<p>Operate from anywhere, on any device, with GBooks' flexible cloud infrastructure.</p>
<p>Cross-Device Compatibility: Use GBooks on desktops, tablets, and smartphones.</p>
<p>Automatic Backups: Your data is continuously saved and protected from loss.</p>
<p><b>9. Robust Cyber Security</b></p>
<p>Keep your data safe with enterprise-grade security standards.</p>
<p>Advanced Encryption: Your data is fully protected—both at rest and in transit.</p>
<p>Routine Security Audits: Regular checks ensure your data environment stays secure.</p>
<p>Role-Based Access Control: Only authorized users can access sensitive information.</p>
          </div>

          {/* Right Form */}
          <div className="col-lg-4">
            <div className="card shadow border-0" style={{maxWidth:"auto"}}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3 text-center">Expert Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name *" />
                  <input type="email" className="form-control mb-3" placeholder="Email *" />
                  <div className="d-flex mb-3">
                    <input type="text" value="+91" className="form-control me-2 bg-light" readOnly />
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

        {/* Pricing Section */}
        <div className="mt-5">
          <h2 style={{ color: "#0a3c66", fontWeight: "bold" }}>Pricing Plans Tailored for Every Business </h2>
{/* heading 2 */}
<p><b>Starter Plan</b></p>
<p>The Starter Plan is perfect for small businesses and freelancers. It includes essential features like automated invoicing, basic reporting, and standard </p>support.
<p>Affordable Pricing</p>
<p>Easy Setup</p>
<p>Access all the fundamental functionalities needed for smooth GST management.</p>
<p><b>Professional Plan</b></p>
<p>Designed for growing businesses, the Professional Plan provides advanced features, enhanced reporting, and priority customer support.</p>
<p>Advanced Analytics for more profound insights with detailed financial reports.</p>
<p>Priority Support and personalized assistance.</p>
<p>Enhanced Customization to match your business’s evolving needs.</p>
<p><b>Enterprise Plan</b></p>
<p>The Enterprise Plan is for large organizations with high transaction volumes and complex requirements. It offers full-scale integration, dedicated account management, and premium support services.</p>
<p><b>Custom Integration</b></p>
<p>Dedicated Support from an account manager who understands your unique challenges.</p>
<p>Manage high volumes of transactions with ease.</p>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="container text-center my-3">
        <img src={img3} alt="Pricing illustration" className="img-fluid rounded" />
      </div>

      <Element_3 />
    </>
  )
}

export default GST_invoicing_and_filing_software;
