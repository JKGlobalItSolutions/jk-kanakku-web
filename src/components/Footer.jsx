import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import img1 from "../assets/Footer/jk_logo.png"
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-6 col-md-3 mb-4">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-3 mb-4">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Refund Policy</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Data Protection</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-6 col-md-3 mb-4">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Startup</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Registration</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Taxation</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">GST</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Trademark</a></li>
              <li><a href="#" className="text-white text-decoration-none">Compliance</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-3 mb-4 text-md-end">
            <img src={img1} alt="JK Kanakku Logo" className="mb-3" style={{ width: "180px" }} />
            <div className="mb-3">
              <button className="btn btn-warning text-white">Download Brochure</button>
            </div>
            <p className="mb-1"><i className="bi bi-envelope"></i> support@jkkanakku.com</p>
            <p className="mb-3"><i className="bi bi-telephone"></i> 8438438413, 8807880764</p>
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#"><FaFacebookF className="text-warning fs-4" /></a>
              <a href="#"><FaYoutube className="text-warning fs-4" /></a>
              <a href="#"><FaXTwitter className="text-warning fs-4" /></a>
              <a href="#"><FaLinkedinIn className="text-warning fs-4" /></a>
              <a href="#"><FaInstagram className="text-warning fs-4" /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>© 2024 <strong>JK Kanakku</strong>. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
