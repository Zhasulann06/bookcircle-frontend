import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand" style={{ marginBottom: 20 }}>
          <div className="brand-badge">B</div>
          <div>
            <div className="brand-title">BookCircle</div>
            <div className="brand-subtitle">Create your reading identity</div>
          </div>
        </div>

        <h1 className="auth-title">Create account</h1>
        <p className="auth-text">
          Join the reading community, create rooms, and participate in structured
          book discussions.
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
              placeholder="Create a password"
            />
          </label>

          <button className="button" type="button">
            Register
          </button>
        </form>

        <p className="helper-text" style={{ marginTop: 18 }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;