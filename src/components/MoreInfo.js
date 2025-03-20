import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInfoCircle } from "react-icons/fa";

const MoreInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container text-center mt-5">
      <div data-aos="fade-up">
        <h2 className="fw-bold mb-4">
          <FaInfoCircle className="me-2" />
          More Information
        </h2>
        <p className="text-muted mb-4">
          This page contains detailed information about our application, its features, and benefits. Explore the sections below to learn more.
        </p>
        <img
          src="C:\Users\pavan\inotebook\public\image.avif"
          alt="Application Overview"
          className="img-fluid mb-4 rounded shadow"
          data-aos="zoom-in"
        />
        <div className="text-start">
          <h4 className="fw-bold mt-4">Key Features:</h4>
          <ul className="list-unstyled">
            <li className="mb-2" data-aos="fade-right">
              <strong>Feature One:</strong> Description of feature one.
            </li>
            <li className="mb-2" data-aos="fade-right" data-aos-delay="100">
              <strong>Feature Two:</strong> Description of feature two.
            </li>
            <li className="mb-2" data-aos="fade-right" data-aos-delay="200">
              <strong>Feature Three:</strong> Description of feature three.
            </li>
          </ul>
        </div>
        <button
          className="btn btn-secondary mt-4"
          onClick={() => navigate("/")}
          data-aos="fade-up"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default MoreInfo;
