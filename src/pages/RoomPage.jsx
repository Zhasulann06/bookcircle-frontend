import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();
  const progress = 63;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Room #{roomId}</h1>
          <p className="page-description">
            This page is prepared for room participation, progress tracking, and
            spoiler-safe comment interaction.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <span className="badge">Spoiler Safe</span>
          <button className="button" type="button">
            Join Room
          </button>
        </div>
      </div>

      <div className="grid grid-2">
        <section className="card">
          <h2 className="section-title">Room Information</h2>

          <div className="grid">
            <div className="comment-item">
              <strong>Room Name</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Clean Code — Evening Discussion Group
              </p>
            </div>

            <div className="comment-item">
              <strong>Linked Book</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                Clean Code by Robert C. Martin
              </p>
            </div>

            <div className="comment-item">
              <strong>Participants</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                18 active readers in this room
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Your Progress</h2>

          <div className="comment-item" style={{ marginBottom: 16 }}>
            <strong>Current Progress</strong>
            <p className="card-text" style={{ marginTop: 6 }}>
              Chapter 12 of 19 completed
            </p>

            <div className="progress-shell">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <p className="helper-text" style={{ marginTop: 10 }}>
              {progress}% completed
            </p>
          </div>

          <form className="form">
            <label className="label">
              Current Chapter Number
              <input
                className="input"
                type="number"
                placeholder="Enter chapter number"
              />
            </label>

            <button className="button" type="button">
              Save Progress
            </button>
          </form>
        </section>
      </div>

      <div className="grid grid-2" style={{ marginTop: 20 }}>
        <section className="card">
          <h2 className="section-title">Add Comment</h2>

          <form className="form">
            <label className="label">
              Chapter Number
              <input
                className="input"
                type="number"
                placeholder="Enter chapter number"
              />
            </label>

            <label className="label">
              Comment
              <textarea
                className="textarea"
                placeholder="Write your room comment here"
              />
            </label>

            <button className="button" type="button">
              Publish Comment
            </button>
          </form>
        </section>

        <section className="card">
          <h2 className="section-title">Visible Comments</h2>

          <div className="grid">
            <div className="comment-item">
              <strong>Chapter 2</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                The explanation about meaningful naming is very practical and easy
                to apply in real projects.
              </p>
            </div>

            <div className="comment-item">
              <strong>Chapter 3</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                I like how the chapter connects readability with long-term team
                productivity.
              </p>
            </div>

            <div className="comment-item">
              <strong>Chapter 4</strong>
              <p className="card-text" style={{ marginTop: 6 }}>
                This discussion area is designed to later support spoiler-safe
                visibility rules from the backend.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RoomPage;