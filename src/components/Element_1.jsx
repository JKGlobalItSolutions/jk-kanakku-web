import React from 'react'
import img12 from '../assets/Home/img12.png'
import img13 from '../assets/Home/img13.png'
import img14 from '../assets/Home/img14.png'
function Element_1() {
  return (
    <>
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

export default Element_1
