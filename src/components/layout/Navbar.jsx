import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-badge">B</div>
        <div>
          <div className="brand-title">BookCircle</div>
          <div className="brand-subtitle">Social reading platform</div>
        </div>
      </div>

      <div className="topbar-actions">
        <Link className="button button-secondary" to="/login">
          Login
        </Link>
        <Link className="button" to="/register">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Navbar;