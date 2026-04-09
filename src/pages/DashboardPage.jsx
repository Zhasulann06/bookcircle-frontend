import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <section className="hero-card">
        <h1 className="hero-title">
          Read together, track progress, and discuss books without spoilers.
        </h1>

        <p className="hero-text">
          BookCircle is designed as a collaborative reading experience where
          users can join location-aware rooms, follow chapter progress, and keep
          discussions aligned with what they have actually read.
        </p>

        <div className="hero-actions">
          <Link className="button" to="/rooms/create">
            Create New Room
          </Link>
          <Link className="button button-secondary" to="/books">
            Explore Books
          </Link>
        </div>

        <div className="hero-note">
          Front-end shell prepared for later backend integration.
        </div>
      </section>

      <div className="grid grid-3" style={{ marginTop: 20 }}>
        <div className="stat-card">
          <div className="stat-label">Active Reading Rooms</div>
          <div className="stat-value">24</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Available Books</div>
          <div className="stat-value">128</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Community Comments</div>
          <div className="stat-value">1.3K</div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 20 }}>
        <section className="card">
          <h2 className="section-title">Platform Overview</h2>
          <p className="card-text">
            BookCircle combines book discovery, social room participation,
            progress tracking, and spoiler-safe discussion mechanics in one
            product flow.
          </p>

          <div className="grid" style={{ marginTop: 18 }}>
            <div className="comment-item">
              <strong>Discover Books</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Browse reading options and connect a selected book to a room.
              </p>
            </div>

            <div className="comment-item">
              <strong>Create or Join Rooms</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Build small reading communities around one book and one location
                segment.
              </p>
            </div>

            <div className="comment-item">
              <strong>Follow Reading Progress</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Update chapter progress and unlock only relevant discussion
                content.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Quick Actions</h2>

          <div className="grid">
            <Link className="comment-item" to="/books">
              <strong>Browse Books</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Open the catalog and inspect books prepared for room-based
                reading.
              </p>
            </Link>

            <Link className="comment-item" to="/rooms/create">
              <strong>Create a Room</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Set a room name, choose a book, and define future H3 parameters.
              </p>
            </Link>

            <Link className="comment-item" to="/admin">
              <strong>Open Admin Panel</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Preview the management interface for books, stats, and audit
                visibility.
              </p>
            </Link>
          </div>
        </section>
      </div>

      <div className="footer">
        BookCircle UI prototype — ready for backend integration.
      </div>
    </div>
  );
}

export default DashboardPage;