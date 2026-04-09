function AdminPage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Admin Panel</h1>
          <p className="page-description">
            Management interface for books, room analytics, and audit visibility.
          </p>
        </div>
      </div>

      <div className="grid grid-2">
        <section className="card">
          <h2 className="section-title">Create Book</h2>
          <form className="form">
            <label className="label">
              Title
              <input className="input" type="text" placeholder="Enter book title" />
            </label>

            <label className="label">
              Author
              <input className="input" type="text" placeholder="Enter author name" />
            </label>

            <label className="label">
              ISBN
              <input className="input" type="text" placeholder="Enter ISBN" />
            </label>

            <label className="label">
              Total Chapters
              <input className="input" type="number" placeholder="Enter total chapters" />
            </label>

            <button className="button" type="button">
              Save Book
            </button>
          </form>
        </section>

        <section className="card">
          <h2 className="section-title">Room Stats Preview</h2>
          <p className="helper-text">
            This block is prepared for future integration with admin statistics endpoint.
          </p>

          <div className="grid" style={{ marginTop: 18 }}>
            <div className="stat-card">
              <div className="stat-label">Active Rooms</div>
              <div className="stat-value">24</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Average Progress</div>
              <div className="stat-value">63%</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Visible Comments</div>
              <div className="stat-value">186</div>
            </div>
          </div>
        </section>
      </div>

      <section className="card" style={{ marginTop: 20 }}>
        <h2 className="section-title">Audit Log Preview</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>User</th>
              <th>Entity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-04-08 10:21</td>
              <td>CREATE_BOOK</td>
              <td>admin@mail.com</td>
              <td>Book #14</td>
            </tr>
            <tr>
              <td>2026-04-08 11:07</td>
              <td>DELETE_COMMENT</td>
              <td>moderator@mail.com</td>
              <td>Comment #77</td>
            </tr>
            <tr>
              <td>2026-04-08 11:44</td>
              <td>VIEW_STATS</td>
              <td>admin@mail.com</td>
              <td>Room #9</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminPage;