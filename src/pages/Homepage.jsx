import React from "react";

import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();   
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Hi, I'm Abdurahmon
      </h1>

      <p style={{ fontSize: "18px",  opacity: "0.8", marginBottom: "20px", }}>
        Frontend Developer | React Developer
      </p>


      <div style={{ marginTop: "30px" }}>
        <button onClick={() => navigate("/table")} style={{ 
          padding: "10px 20px",
          marginRight: "10px",
          backgroundColor: "#6366f1",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          View Projects
        </button>

        <button onClick={() => navigate("/contact")} style={{
          padding: "10px 20px",
          backgroundColor: "transparent",
          border: "1px solid white",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Contact Me
        </button>
      </div>

    </div>
  );
};

export default Homepage;