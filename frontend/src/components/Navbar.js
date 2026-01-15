import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const isLoggedIn = localStorage.getItem("user");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
  };

  return (
    <header style={header}>
      {/* Left: Brand */}
      <div style={left}>
        <Link to="/" style={logo}>
          AutoParts
        </Link>
      </div>

      {/* Middle: Search */}
      <form onSubmit={handleSearch} style={searchBox}>
        <input
          type="text"
          placeholder="Search for automotive parts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />
        <button style={searchBtn}>Search</button>
      </form>

      {/* Right: Navigation */}
      <div style={right}>
        <Link to="/" style={navLink}>Home</Link>
        <Link to="/orders" style={navLink}>Orders</Link>

        <Link to="/cart" style={cartLink}>
          Cart
          <span style={cartBadge}>{cart.length}</span>
        </Link>

        {isLoggedIn && (
        <button
            onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
            }}
            style={logoutBtn}
            >
        Logout
        </button>

        )}
      </div>
    </header>
  );
}

/* ================= STYLES ================= */

const header = {
  display: "flex",
  alignItems: "center",
  padding: "12px 20px",
  background: "#131921",
  color: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 1000
};

const left = {
  flex: "0 0 auto"
};

const logo = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#f0c14b",
  textDecoration: "none"
};

const searchBox = {
  flex: 1,
  display: "flex",
  margin: "0 20px"
};

const searchInput = {
  flex: 1,
  padding: "8px",
  fontSize: "14px",
  border: "none",
  outline: "none"
};

const searchBtn = {
  padding: "8px 15px",
  background: "#f0c14b",
  border: "none",
  cursor: "pointer"
};

const right = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const navLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px"
};

const cartLink = {
  position: "relative",
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px"
};

const cartBadge = {
  position: "absolute",
  top: "-6px",
  right: "-10px",
  background: "orange",
  color: "#000",
  borderRadius: "50%",
  padding: "2px 6px",
  fontSize: "12px",
  fontWeight: "bold"
};

const logoutBtn = {
  background: "#f0c14b",
  border: "none",
  padding: "6px 10px",
  cursor: "pointer",
  fontSize: "13px"
};
