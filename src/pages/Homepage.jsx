import React from "react";
import { FaCode, FaUniversity, FaMapMarkerAlt, FaRocket } from "react-icons/fa";


import { useNavigate } from "react-router-dom";

const infoStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "18px",
  marginBottom: "15px",
  color: "#374151",
};

const textStyle = {
  fontSize: "20px",
  lineHeight: "1.7",
  marginTop: "25px",
  color: "#4b5563",
};

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

 
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "#f9fafb",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          backgroundColor: "white",
          padding: "60px",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "40px",
            color: "#111827",
          }}
        >
          About Me
        </h2>

        {/* Info Icons */}
        <div style={infoStyle}>
          <FaCode /> Full-Stack Developer
        </div>

        <div style={infoStyle}>
          <FaUniversity /> Chungbuk National University
        </div>

        <div style={infoStyle}>
          <FaMapMarkerAlt /> South Korea 🇰🇷
        </div>

        <div style={infoStyle}>
          <FaRocket /> Zero → CTO Journey
        </div>

        {/* Description */}
        <p style={textStyle}>
          I am a passionate Full-Stack Developer with strong foundations in
          HTML, CSS, JavaScript, React, and Node.js. I build modern,
          responsive, and scalable web applications with a focus on clean UI
          and great user experience.
        </p>

        <p style={textStyle}>
          I enjoy turning ideas into real digital products and constantly
          improving my technical and problem-solving skills. My long-term goal
          is to grow into a technology leader and build impactful systems.
        </p>
      </div>
    </section>

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