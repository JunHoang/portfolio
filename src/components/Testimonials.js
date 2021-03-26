import React from "react";
import TestimonialCarousel from "./TestimonialsCarousel";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
      <h1>my hobbies</h1>
      <div className="container">
        <div className="testimonials-content d-block mx-auto">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
