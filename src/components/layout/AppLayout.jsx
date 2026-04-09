import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="page">
          <Outlet />
          <div className="footer">
            BookCircle • Front-end prototype for backend handoff
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;