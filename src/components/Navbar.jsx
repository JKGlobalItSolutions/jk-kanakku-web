import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white py-1 px-3 d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="small">
            <i className="bi bi-envelope me-1"></i>
            support@jkkanakku.com
          </span>
          <span className="small">
            <i className="bi bi-whatsapp me-1"></i>
            8807880764
          </span>
        </div>
        <div className="d-flex flex-wrap align-items-center gap-2 mt-1 mt-md-0">
          <button className="btn btn-sm text-white" style={{ backgroundColor: "#f05a28" }}>
            Consultation &gt;
          </button>
          <button className="btn btn-sm text-white" style={{ backgroundColor: "#f6a623" }}>
            Login &gt;
          </button>
          <i className="bi bi-person-circle fs-5 ms-2"></i>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://dummyimage.com/40x40/ff6600/fff.png&text=JK"
              alt="JK Kanakku Logo"
              height="40"
              className="me-2"
            />
            <div>
              <span className="fw-bold" style={{ color: "#235789" }}>
                JK KANAKKU
              </span>
              <div className="small" style={{ color: "#f05a28" }}>
                VIRTUAL ACCOUNT
              </div>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Startup Dropdown */}
              <li className="nav-item dropdown mx-2">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="startupDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Startup
                </Link>
                <ul className="dropdown-menu" aria-labelledby="startupDropdown">
                  {[
                    { name: "Pvt Ltd Company Registration", path: "startup/Company_registration" },
                    { name: "LLP Registration Online", path: "startup/Registration_online" },
                    { name: "One Person Company Registration", path: "startup/One_person_company_registration" },
                    { name: "Partnership Firm Registration", path: "startup/Patnership_firm_registration" },
                    { name: "Sole Proprietorship Registration", path: "startup/Sole_proprietorship_registration" },
                    { name: "Indian Subsidiary Company", path: "startup/Indian_subsidiary_company" },
                    { name: "Startup India Registration", path: "startup/Startup_india_registration" },
                    { name: "Section 8 Company Registration", path: "startup/Registration_of_section8company" },
                    { name: "NGO Registration Online", path: "startup/NGO_registration_online" },
                    { name: "Trust Registration", path: "startup/Trust_registration" },
                    { name: "Society Registration", path: "startup/Society_registration" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Registration Dropdown */}
              <li className="nav-item dropdown mx-2">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="registrationDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Registration
                </Link>
                <ul className="dropdown-menu" aria-labelledby="registrationDropdown">
                  {[
                    { name: "Udyam MSME Registration", path: "registration/Udyam_msme_registrtion" },
                    { name: "IEF Registration", path: "registration/Iec_registration" },
                    { name: "FSSAI Registration", path: "registration/FSSAI_registration" },
                    { name: "Shop & Establishment License", path: "registration/Shop_establishment_license" },
                    { name: "ISO Registration Online", path: "registration/ISO_registration_online" },
                    { name: "Professional Tax Registration", path: "registration/Professional_tax_registration" },
                    { name: "Digital Signature Certificate", path: "registration/Digital_signature_certificate" },
                    { name: "FCRA Registration", path: "registration/FCRA_registrationn" },
                    { name: "80G And 12A Registration", path: "registration/EightyG_12A_registration" },
                    { name: "12AA Registration", path: "registration/TwelveAA_registration" },
                    { name: "ICEGATE Registration", path: "registration/ICEGATE_registration" },
                    { name: "Darpan Registration", path: "registration/Darpan_registration" },
                    { name: "LEI Code Registration", path: "registration/LEI_code_registration" },
                    { name: "APEDA Registration Online", path: "registration/APEDA_Registration_online" },
                    { name: "Apply FSSAI License Online", path: "registration/Apply_FSSAI_license_online" },
                    { name: "Digital Signature - DGFT Version", path: "registration/Digital_signature_DGFT_version" },
                    { name: "RCMC Registration", path: "registration/RCMC_registration" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown mx-2">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="gstDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GST
                </Link>
                <ul className="dropdown-menu" aria-labelledby="gstDropdown">
                  {[
                    { name: "GST Registration Online", path: "gst/GST_registration_online" },
                    { name: "GST LUT Filing", path: "gst/GST_LUT_filing" },
                    { name: "GST Registration Cancellation", path: "gst/GST_registration_cancellation" },
                    { name: "GST Advisory Services", path: "gst/GST_Advisory_services" },
                    { name: "GST Revocation Online", path: "gst/GST_revocation_online" },
                    { name: "GST Return Filing", path: "gst/GST_return_filing" },
                    { name: "GST Annual Return Filing", path: "gst/GST_annual_return_filing" },
                    { name: "GST Invoicing And Filing Software", path: "gst/GST_invoicing_and_filing_software" },
                    { name: "GST Notice Reply", path: "gst/GST_notice_reply" },
                    { name: "GST Registration For Foreigners", path: "gst/GST_registration_foreigners" },
                    { name: "GST Registration Amendment", path: "gst/GST_registration_amendment" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown mx-2">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="taxationDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Taxation
                </Link>
                <ul className="dropdown-menu" aria-labelledby="taxationDropdown">
                  {[
                    { name: "Income Tax Return Filing", path: "taxation/Income_tax_return_filing" },
                    { name: "TDS Return Filing", path: "taxation/TDS_return_filing" },
                    { name: "PF Return Filing", path: "taxation/PF_return_filing" },
                    { name: "ESI Return Filing", path: "taxation/ESI_return_filing" },
                    { name: "PT Return Filing", path: "taxation/PT_return_filing" },
                    { name: "Income Tax Notice Reply", path: "taxation/Income_tax_notice_reply" },
                    { name: "TAN Registration Online", path: "taxation/Tan_registration_online" },
                    { name: "TAN Registration Online", path: "taxation/Business_tax_filing" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>



              {/* Other Nav Items */}
              {[

                { name: "Trademark", path: "/trademark" },
                { name: "Compliance", path: "/compliance" },
                { name: "Regulatory", path: "/regulatory" },
              ].map((item, index) => (
                <li className="nav-item mx-2" key={index}>
                  <Link to={item.path} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
