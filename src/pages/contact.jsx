import React from "react";

function Contact() {
  return (
    <div style={{ padding: "80px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "40px" }}>Contact Me</h1>

      <p style={{ border: "1px solid #ccc", padding: "10px", fontSize: "20px", marginTop: "20px", opacity: "0.8" , marginBottom: "10px", hover: { backgroundColor: "#f3f4f6" }, cursor: "pointer" }}>
        Email: adi.corei.2000@gmail.com
      </p>

      <p style={{ border: "1px solid #ccc", padding: "10px", fontSize: "20px", marginTop: "10px", opacity: "0.8", marginBottom: "10px", hover: { backgroundColor: "#f3f4f6" }, cursor: "pointer" }}>
        Telegram: @marksman_adii
      </p>
      <p style={{ border: "1px solid #ccc", padding: "10px", fontSize: "20px", marginTop: "10px", opacity: "0.8", marginBottom: "10px", hover: { backgroundColor: "#f3f4f6" }, cursor: "pointer" }}>
        LinkedIn: <a href="https://www.linkedin.com/in/abdurahmon-abdullayev-21102b3a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none" }}>
          linkedin.com/in/abdurahmon-adiyev-9b1a4b1b3/
        </a>    
      </p>
      <p style={{ border: "1px solid #ccc", padding: "10px", fontSize: "20px", marginTop: "10px", opacity: "0.8", marginBottom: "10px", hover: { backgroundColor: "#f3f4f6" }, cursor: "pointer" }}>
        Number: +82 010-6880-9752
      </p>
    </div>
  );
}

export default Contact;