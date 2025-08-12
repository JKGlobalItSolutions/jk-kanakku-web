import React from 'react'
import img1 from '../assets/Home/img1.png'
import img2 from '../assets/Home/img2.png'
import img3 from '../assets/Home/img3.png'
import img4 from '../assets/Home/img4.png'
import img5 from '../assets/Home/img5.png'
import img6 from '../assets/Home/img6.png'
import img7 from '../assets/Home/img7.png'
import img8 from '../assets/Home/img8.png'
import img9 from '../assets/Home/img9.png'
import img10 from '../assets/Home/img10.png'
import img11 from '../assets/Home/img11.png'
import img12 from '../assets/Home/img12.png'
import img13 from '../assets/Home/img13.png'
import img14 from '../assets/Home/img14.png'

const Home = () => {
  return (
    <>
     <div>
      {/* Hero Section */}
      <section className="py-5 bg-light text-center position-relative">
        <div className="container">
          <div className="row align-items-center">
            {/* Text content */}
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h1 className="fw-bold" style={{ color: "#EB6724" }}>
                Smart Financial Management Made Easy
              </h1>
              <p className="lead fw-semibold mt-3">
                "Track, Manage, and Automate Business Finances with{" "}
                <strong>JK Kanakku</strong>."
              </p>
              {/* Input with button */}
              <div className="d-flex justify-content-center mt-4">
                <div className="input-group w-75 shadow rounded-pill">
                  <input
                    type="text"
                    className="form-control rounded-start-pill border-0 ps-4"
                    placeholder="Enter Your Name"
                  />
                  <button
                    className="btn rounded-end-pill text-white px-4"
                    style={{ backgroundColor: "#EB6724" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/* Illustration */}
            <div className="col-lg-5">
              <img
                src={img1} // replace with actual path
                alt="Tax Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* About text */}
            <div className="col-md-7">
              <p className="text-uppercase fw-bold small mb-1">About Us</p>
              <h2 className="fw-bold mb-3">
                Welcome to <span style={{ color: "#EB6724" }}>JK </span>
                <span style={{ color: "#004AAD" }}>KANAKKU</span>
              </h2>
              <p className="text-muted">
                JK Kanakku is an all-in-one financial platform designed to
                simplify the complexities of business management. Offering
                services such as Start-Up Business Registration, Taxation, GST
                Compliance, Trademark Registration, and Legal Compliances, we
                ensure that businesses of all sizes remain compliant and operate
                efficiently. From the initial setup to ongoing regulatory
                requirements, our solutions are crafted to minimize effort,
                reduce risks, and promote sustainable growth—allowing
                entrepreneurs to focus on what matters most: building and
                expanding their business.
              </p>
            </div>
            {/* About image */}
            <div className="col-md-5 text-center mt-4 mt-md-0">
              <img
                src={img2} // replace with actual path
                alt="Smiling Man Pointing"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
      <div className="text-center py-4">
        <h2>Our Service Modules</h2>
      </div>

      <div className="container py-4" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="row g-4">
          <div className="col-md-4">
            <div
              className="card h-100 text-center shadow-sm border-0"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <img
                  src={img3}
                  alt="Pvt Ltd Company Registration"
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="card-title">
                  Pvt Ltd Company Registration
                </h5>
              </div>
              <div
                className="card-footer"
                style={{
                  backgroundColor: "#ff6600",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  height: "8px",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 text-center shadow-sm border-0"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <img
                  src={img4}
                  alt="GST Registration Office"
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="card-title">GST Registration Office</h5>
              </div>
              <div
                className="card-footer"
                style={{
                  backgroundColor: "#ff6600",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  height: "8px",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 text-center shadow-sm border-0"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <img
                  src={img5}
                  alt="One Person Company Registration"
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="card-title">
                  One Person Company Registration
                </h5>
              </div>
              <div
                className="card-footer"
                style={{
                  backgroundColor: "#ff6600",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  height: "8px",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 text-center shadow-sm border-0"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <img
                  src={img6}
                  alt="LLP Registration Online"
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="card-title">LLP Registration Online</h5>
              </div>
              <div
                className="card-footer"
                style={{
                  backgroundColor: "#ff6600",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  height: "8px",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 text-center shadow-sm border-0"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <img
                  src={img7}
                  alt="Udyam MSME Registration"
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="card-title">Udyam MSME Registration</h5>
              </div>
              <div
                className="card-footer"
                style={{
                  backgroundColor: "#ff6600",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  height: "8px",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 text-center shadow-sm border-0"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body">
                <img
                  src={img8}
                  alt="FSSAI Registration"
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="card-title">FSSAI Registration</h5>
              </div>
              <div
                className="card-footer"
                style={{
                  backgroundColor: "#ff6600",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  height: "8px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

     
        
       <div className="container my-5">
  <div
    className="d-flex align-items-center justify-content-between p-5 rounded"
    style={{ background: "#f97316" }}
  >
    <div className="me-4">
      <h2 className="fw-bold mb-3">
        <span
          className="px-3 py-2 rounded"
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            display: "inline-block",
          }}
        >
          Start Your Business with{" "}
          <span className="text-primary"><span style={{color:"#f97316"}}>JK</span> Kanakku</span>
        </span>
      </h2>
      <p className="mb-4">
        At JK Kanakku, we manage everything from accounting and business
        registrations to compliance and end-to-end solutions. Let us handle
        the paperwork and processes, so you can focus on growing your
        business stress-free.
      </p>
      <a href="#get-start" className="btn btn-primary fw-semibold">
        Get Start
      </a>
    </div>
    <div>
      <img
        src={img10}
        alt="Tax Filing Illustration"
        className="img-fluid"
        style={{ maxHeight: "400px",  position: "relative"}}
      />
    </div>
  </div>
</div>

 <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">
        Delivering Excellence through Our Services
      </h2>
      <div className="row">
        {/* Service 1 */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">Start-Up Business Registration</h5>
          <p>
            We offer fast-track company formation and business incorporation,
            along with expert assistance for private limited, LLP, partnership,
            and proprietorship registrations, ensuring a smooth and hassle-free
            setup process.
          </p>
        </div>
        {/* Service 2 */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">Business Registrations</h5>
          <p>
            We provide PAN, TAN, and other essential business registrations,
            along with digital signature certificates (DSC) and company name
            approvals to streamline your business setup.
          </p>
        </div>
        {/* Service 3 */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">GST Registration & Filing</h5>
          <p>
            We offer seamless GST registration and renewal services, along with
            automated GST filing and compliance tracking, to ensure that your
            firm remains compliant without difficulty.
          </p>
        </div>
        {/* Service 4 */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">Taxation Services</h5>
          <p>
            We provide comprehensive direct and indirect tax advisory services,
            along with income tax return (ITR) filing for both businesses and
            individuals, ensuring you stay compliant while optimizing your tax
            obligations.
          </p>
        </div>
        {/* Service 5 */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">Trademark Registration</h5>
          <p>
            Protect your brand through our prompt trademark application and
            renewal services, complemented by legal support to navigate any
            objections or disputes effectively.
          </p>
        </div>
        {/* Service 6 */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">Regulatory Compliance & Audits</h5>
          <p>
            Remain compliant with ROC filings, annual returns, and audits,
            backed by expert consultation that helps you avoid penalties and
            guarantees the smooth operation of your business.
          </p>
        </div>
      </div>
    </div>
     <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img11}
            alt="Why Choose Us Illustration"
            className="img-fluid"
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-4">Why Choose Us?</h3>
          <ul className="list-unstyled">
            <li className="mb-3">
              <span className="fw-bold">• Comprehensive Services</span><br />
              <small className="text-muted">
                End-to-end financial, legal & compliance solutions.
              </small>
            </li>
            <li className="mb-3">
              <span className="fw-bold">• Experienced Experts</span><br />
              <small className="text-muted">
                Access to professional accountants, tax consultants & legal
                advisors.
              </small>
            </li>
            <li className="mb-3">
              <span className="fw-bold">• Affordable Pricing</span><br />
              <small className="text-muted">
                Cost-effective solutions tailored to your business needs.
              </small>
            </li>
            <li>
              <span className="fw-bold">• Seamless Online Process</span><br />
              <small className="text-muted">
                Easy-to-use platform with minimal paperwork.
              </small>
            </li>
          </ul>
        </div>
      </div>
    </div>
        <div
      className="container my-5 py-5 rounded"
      style={{ backgroundColor: "#f97316" }}
    >
      <div className="row">
        {/* Testimonial 1 */}
        <div className="col-md-4 mb-4">
          <div className="bg-white rounded p-4 text-center h-100">
            <p className="fw-semibold text-primary">
              “Efficient and Reliable Service!”
            </p>
            <p className="text-muted">
              JK Kanakku simplified the entire process of registering my start-up. Their team was incredibly responsive, and the platform was easy to navigate. I couldn’t have asked for a better experience. Highly recommended for any new business!
            </p>
            <div className="mt-3">
              <img
                src={img12}
                alt="Priya M."
                className="rounded-circle mb-2"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <p className="fw-bold mb-0">— Priya M., Entrepreneur</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="col-md-4 mb-4">
          <div className="bg-white rounded p-4 text-center h-100">
            <p className="fw-semibold text-primary">
              “Outstanding Support and Expertise”
            </p>
            <p className="text-muted">
              From GST registration to managing my tax compliance, JK Kanakku has been a game-changer for my business. The platform is user-friendly, and their team of experts provided excellent guidance every step of the way.
            </p>
            <div className="mt-3">
              <img
                src={img13}
                alt="Rahul K."
                className="rounded-circle mb-2"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <p className="fw-bold mb-0">— Rahul K., Small Business Owner</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="col-md-4 mb-4">
          <div className="bg-white rounded p-4 text-center h-100">
            <p className="fw-semibold text-primary">
              “Hassle-Free and Affordable”
            </p>
            <p className="text-muted">
              I was worried about handling all the legal and compliance work for my business, but JK Kanakku made it completely stress-free. Their affordable services and seamless online process saved me so much time and effort!
            </p>
            <div className="mt-3">
              <img
                src={img14}
                alt="Meera S."
                className="rounded-circle mb-2"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <p className="fw-bold mb-0">— Meera S., Freelancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

</>
)
}

export default Home
