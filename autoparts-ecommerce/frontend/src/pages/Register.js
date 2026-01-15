import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful. Please login.");
    navigate("/login");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          style={input}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={input}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={register} style={button}>
          Register
        </button>

        <p style={text}>
          Already have an account?{" "}
          <Link to="/login" style={link}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  background: "#131921",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  width: 350,
  padding: 25,
  background: "#fff",
  borderRadius: 6,
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  textAlign: "center"
};

const title = {
  marginBottom: 20
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 15,
  border: "1px solid #ccc",
  borderRadius: 4,
  fontSize: 14
};

const button = {
  width: "100%",
  padding: 10,
  background: "#f0c14b",
  border: "1px solid #a88734",
  cursor: "pointer",
  fontSize: 15,
  fontWeight: "bold"
};

const text = {
  marginTop: 15,
  fontSize: 13
};

const link = {
  color: "#0066c0",
  textDecoration: "none"
};
