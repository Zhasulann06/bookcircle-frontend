function ProfilePage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Profile</h1>
          <p className="page-description">
            Personal account overview prepared for role, identity, and activity
            integration.
          </p>
        </div>

        <span className="badge">Reader Account</span>
      </div>

      <div className="grid grid-2">
        <section className="card">
          <h2 className="section-title">Account Information</h2>

          <div className="grid">
            <div className="comment-item">
              <strong>Email</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                user@mail.com
              </p>
            </div>

            <div className="comment-item">
              <strong>Role</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                USER
              </p>
            </div>

            <div className="comment-item">
              <strong>User ID</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                1
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Reading Summary</h2>

          <div className="grid">
            <div className="stat-card">
              <div className="stat-label">Rooms Joined</div>
              <div className="stat-value">6</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Books in Progress</div>
              <div className="stat-value">3</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Comments Written</div>
              <div className="stat-value">42</div>
            </div>
          </div>
        </section>
      </div>

      <section className="card" style={{ marginTop: 20 }}>
        <h2 className="section-title">Settings</h2>

        <form className="form">
          <div className="form-row">
            <label className="label">
              Display Name
              <input className="input" type="text" placeholder="Enter display name" />
            </label>

            <label className="label">
              Contact Email
              <input className="input" type="email" placeholder="Enter email" />
            </label>
          </div>

          <label className="label">
            Bio
            <textarea
              className="textarea"
              placeholder="Write a short reading bio"
            />
          </label>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="button" type="button">
              Save Changes
            </button>
            <button className="button button-secondary" type="button">
              Logout
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProfilePage;