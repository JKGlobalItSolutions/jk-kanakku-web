import React from 'react'
import img2 from "../assets/Company_registration/img2.png"

const Element_2 = () => {
  return (
    <>
         <div
        className="d-flex align-items-center justify-content-between px-4 py-3"
        style={{
          background: "linear-gradient(90deg, #ffffff 0%, #bbbbbb 100%)",
          borderRadius: "5px",
          boxShadow: "0 2px 6px 0 rgba(0,0,0,0.10)",
          margin: "24px 0"
        }}
      >
        {/* Left Side */}
        <span className="fw-bold" style={{ fontSize: "1.8rem" }}>
          Required Document
        </span>
      
        {/* Replace SVG arrows with your image */}
        <span>
          <img src={img2} alt="Arrows" style={{ height: "42px", width: "54px" }} />
        </span>
      
        {/* Right Side */}
        <span className="fw-bold" style={{ fontSize: "1.8rem" }}>
          Registration Procedure
        </span>
      </div>
    </>
  )
}

export default Element_2
