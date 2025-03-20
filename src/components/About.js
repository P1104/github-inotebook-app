import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInfoCircle } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 text-center border-0" data-aos="fade-up">
        <div className="text-primary display-4 mb-3">
          <FaInfoCircle />
        </div>
        <h2 className="fw-bold">About Our Application</h2>
        <p className="text-muted">
          This application is built to provide an interactive and seamless experience with modern UI/UX and store your Notes.
        </p>
        <button 
          className="btn btn-primary mt-3" 
          onClick={() => navigate("/more-info")}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
