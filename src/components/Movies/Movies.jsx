import { useEffect, useState } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";

export default function Movies() {
  const { movies, totalPages, page, search } = useLoaderData();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState(search || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const value = searchValue.trim();

      if (value === search) return;

      if (value) {
        navigate(`/movies?search=${encodeURIComponent(value)}&page=1`);
      } else {
        navigate("/movies?page=1");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, search, navigate]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>{search ? `🔎 Search: ${search}` : "🎬 Popular Movies"}</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Search movie..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ width: "300px" }}
        />
      </div>

      {movies.length === 0 ? (
        <div className="alert alert-warning text-center">
          No movies found
        </div>
      ) : (
        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-md-3" key={movie.id}>
              <Link
                to={`/movie/${movie.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm movie-card">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    className="card-img-top"
                    alt={movie.title}
                  />

                  <div className="card-body">
                    <h5 className="card-title text-center">{movie.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
        <button
          className="btn btn-dark"
          disabled={page === 1}
          onClick={() =>
            navigate(
              search
                ? `/movies?search=${encodeURIComponent(search)}&page=${page - 1}`
                : `/movies?page=${page - 1}`
            )
          }
        >
          Previous
        </button>

        <span className="fw-bold">
          Page {page} of {totalPages || 1}
        </span>

        <button
          className="btn btn-dark"
          disabled={page >= totalPages}
          onClick={() =>
            navigate(
              search
                ? `/movies?search=${encodeURIComponent(search)}&page=${page + 1}`
                : `/movies?page=${page + 1}`
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}