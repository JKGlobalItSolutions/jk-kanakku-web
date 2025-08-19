import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/Business_tax_filing/img1.png";

import img3 from "../assets/Business_tax_filing/img2.png";
import Element_2 from "../components/Element_2";
import Element_3 from "../components/Element_3";

const Business_tax_filing = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="bg-white py-2">
<div className="container">
<ol className="breadcrumb mb-0" >
<li className="breadcrumb-item">
<Link to="/" className="text-decoration-none fw-bold" style={{color:"black"}}>Home</Link>
</li>
<li className="breadcrumb-item fw-bold" style={{color:"black"}}>
{/* <Link to="/registration" className="text-decoration-none fw-bold" style={{color:"black"}}> */}
Taxation
{/* </Link> */}
</li>
<li className="breadcrumb-item active fw-bold" style={{color:"black"}} aria-current="page">
Business Tax Filing
</li>
</ol>
</div>
</nav>


<div className="container d-flex justify-content-center">
<img src={img1} alt="" style={{ maxWidth: "100%" }} />
</div>

<div style={{ fontFamily: "Montserrat, Arial, sans-serif", background: "linear-gradient(to bottom, #c46a2f 0%, #e68741 100%)", padding: 0, }}> 

<div style={{ maxWidth: 1050, height: "500px", margin: "40px auto", display: "flex", alignItems: "center", justifyContent: "center", padding: "0",}}>

{/* Left content */} 

<div style={{ flex: 2, color: "white", paddingRight: 50 }}> 
<h1 style={{ fontWeight: 700, fontSize: 40, marginBottom: 25 }}>Business Tax Filing</h1> 



<div style={{ fontSize: 16, lineHeight: "2" }}> 
Ensure hassle-free business tax filing in India with our expert support. We manage your GST, ITR, and TDS filings, helping you stay fully compliant with all tax laws. Avoid penalties by filing your returns accurately and on time. Whether you run a small business or a large corporation, our services make tax compliance simple and stress-free. Partner with us for seamless, professional tax filing assistance!
</div> </div> 



{/* Right form card */} 

<div style={{ flex: 1, background: "#fff", borderRadius: 12, boxShadow: "0 4px 18px 0 rgba(0,0,0,0.07)", padding: "32px 30px 26px 30px", display: "flex", flexDirection: "column" }}> 

<div style={{ fontWeight: 700, fontSize: 22, marginBottom: 22, textAlign: "left" }}> Expert Consultation </div> <input type="text" placeholder="Name *" style={{ width: "100%", marginBottom: 12, padding: "12px 9px", fontSize: 16, borderRadius: 7, border: "1.2px solid #e5e8ee" }} /> <input type="email" placeholder="Email*" style={{ width: "100%", marginBottom: 12, padding: "12px 9px", fontSize: 16, borderRadius: 7, border: "1.2px solid #e5e8ee" }} /> 

<div style={{ display: "flex", marginBottom: 17 }}> <span style={{ padding: "12px 10px", background: "#ece5e0", border: "1px solid #e5e8ee", borderRadius: "7px 0 0 7px", fontSize: 16, minWidth: 54, fontWeight: 600, textAlign: "center", color: "#222" }}>+91</span> <input type="text" placeholder="Mobile Number*" style={{ flex: 1, padding: "12px 9px", fontSize: 16, borderRadius: "0 7px 7px 0", border: "1.2px solid #e5e8ee", borderLeft: "none" }} /> </div> <button style={{ backgroundColor: "#c46a2f", color: "white", border: "none", padding: "13px 0", width: "100%", borderRadius: 7, cursor: "pointer", fontWeight: "bold", fontSize: 16, transition: "background 0.2s" }}> Get Start Now &gt; </button> </div> </div> </div>

<Element_2/>





    </>
  )
}

export default Business_tax_filing
