import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/movies">
            🎬 Movies App
          </Link>

          <div className="d-flex align-items-center gap-3">
            <Link className="nav-link text-white" to="/movies">
              Movies
            </Link>

            <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}