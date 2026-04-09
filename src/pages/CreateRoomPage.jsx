function CreateRoomPage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Create Reading Room</h1>
          <p className="page-description">
            Define a room, link it to a book, and configure the geographic zone
            that groups nearby readers together.
          </p>
        </div>
      </div>

      <div className="grid grid-2">
        <section className="card">
          <h2 className="section-title">Room Details</h2>

          <form className="form">
            <label className="label">
              Room Name
              <input
                className="input"
                type="text"
                placeholder="Enter room name"
              />
            </label>

            <label className="label">
              Select Book
              <select className="select">
                <option>Choose a book</option>
                <option>Clean Code</option>
                <option>Clean Architecture</option>
                <option>The Pragmatic Programmer</option>
                <option>Atomic Habits</option>
              </select>
            </label>

            <div className="form-row">
              <label className="label">
                Latitude
                <input
                  className="input"
                  type="number"
                  placeholder="43.238949"
                />
              </label>

              <label className="label">
                Longitude
                <input
                  className="input"
                  type="number"
                  placeholder="76.889709"
                />
              </label>
            </div>

            <label className="label">
              Resolution
              <input className="input" type="number" placeholder="9" />
            </label>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="button" type="button">
                Create Room
              </button>
              <button className="button button-secondary" type="button">
                Use My Location
              </button>
            </div>
          </form>
        </section>

        <section className="card">
          <h2 className="section-title">What this form prepares</h2>
          <div className="grid">
            <div className="comment-item">
              <strong>Room Identity</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                The room name becomes the visible reading space for users who want
                to join the discussion.
              </p>
            </div>

            <div className="comment-item">
              <strong>Book Link</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Each room is tied to one selected book, so progress and comments
                remain context-specific.
              </p>
            </div>

            <div className="comment-item">
              <strong>Geographic H3 Area</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Latitude, longitude, and resolution are prepared for integration
                with future location-based room grouping.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreateRoomPage;