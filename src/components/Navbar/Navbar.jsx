import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <FaRobot />
        AI Resume Assistant
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          fontWeight: "600",
        }}
      >
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Dashboard</a>
        <a href="#">Contact</a>
      </div>

      <button
        style={{
          padding: "10px 18px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;