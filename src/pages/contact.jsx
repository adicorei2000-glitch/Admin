import { FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "60px",
          borderRadius: "20px",
          width: "600px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "40px",
            color: "#111827",
          }}
        >
          Let’s Connect
        </h1>

        {/* Email */}
        <a
          href="mailto:adi.corei.2000@gmail.com"
          style={linkStyle}
        >
          <FaEnvelope size={22} />
          <span>adi.corei.2000@gmail.com</span>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/marksman_adli"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaTelegram size={22} />
          <span>@marksman_adli</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abdurahmon-adiyev-9b1a4b1b3/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaLinkedin size={22} />
          <span>LinkedIn Profile</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+821068809752"
          style={linkStyle}
        >
          📱 <span>+82 010-6880-9752</span>
        </a>

      </div>
    </div>
  );
}

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  fontSize: "20px",
  marginBottom: "25px",
  color: "#374151",
  textDecoration: "none",
};

export default Contact;