import React from 'react'
import img2 from "../assets/Company_registration/img2.png"

const Element_2 = () => {
  return (
    <>
      <div
        className="d-flex flex-wrap align-items-center justify-content-between px-4 py-3"
        style={{
          background: "linear-gradient(90deg, #ffffff 0%, #bbbbbb 100%)",
          borderRadius: "5px",
          boxShadow: "0 2px 6px 0 rgba(0,0,0,0.10)",
          margin: "24px 0",
          textAlign: "center"
        }}
      >
        {/* Left Side */}
        <span className="fw-bold flex-grow-1 mb-2 mb-md-0" style={{ fontSize: "1.4rem" }}>
          Required Document
        </span>

        {/* Middle Image */}
        <span className="mx-3 mb-2 mb-md-0">
          <img
            src={img2}
            alt="Arrows"
            style={{ height: "42px", width: "54px", maxWidth: "100%" }}
            className="img-fluid"
          />
        </span>

        {/* Right Side */}
        <span className="fw-bold flex-grow-1" style={{ fontSize: "1.4rem" }}>
          Registration Procedure
        </span>
      </div>
    </>
  )
}

export default Element_2
