import { FaFileAlt, FaRobot, FaUserTie } from "react-icons/fa";

function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "90px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#1e3a8a",
        }}
      >
        AI Resume & Interview Assistant
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "22px",
          color: "#666",
        }}
      >
        Upload your resume, improve your ATS score and prepare for interviews
        with AI.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          style={{
            padding: "15px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          Get Started
        </button>

        <button
          style={{
            padding: "15px 30px",
            border: "2px solid #2563eb",
            background: "white",
            color: "#2563eb",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          Learn More
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          marginTop: "80px",
        }}
      >
        <div>
          <FaFileAlt size={40} color="#2563eb" />
          <h3>Resume Analysis</h3>
        </div>

        <div>
          <FaRobot size={40} color="#2563eb" />
          <h3>AI Suggestions</h3>
        </div>

        <div>
          <FaUserTie size={40} color="#2563eb" />
          <h3>Interview Practice</h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;