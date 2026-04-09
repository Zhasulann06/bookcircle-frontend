import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand" style={{ marginBottom: 20 }}>
          <div className="brand-badge">B</div>
          <div>
            <div className="brand-title">BookCircle</div>
            <div className="brand-subtitle">Social reading platform</div>
          </div>
        </div>

        <h1 className="auth-title">Sign in</h1>
        <p className="auth-text">
          Access your reading rooms, progress history, and spoiler-safe
          discussions.
        </p>

        <form className="form">
          <label className="label">
            Email
            <input className="input" type="email" placeholder="Enter your email" />
          </label>

          <label className="label">
            Password
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
            />
          </label>

          <button className="button" type="button">
            Sign In
          </button>
        </form>

        <p className="helper-text" style={{ marginTop: 18 }}>
          Don’t have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;