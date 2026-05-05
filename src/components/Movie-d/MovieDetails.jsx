import { Link, useLoaderData } from "react-router-dom";

export default function MovieDetails() {
  const movie = useLoaderData();

  return (
    <div className="container py-5">
      <Link to="/movies" className="btn btn-dark mb-4">
        ← Back
      </Link>

      <div className="card shadow-lg border-0 movie-details-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              className="img-fluid rounded-start h-100"
              alt={movie.title}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body p-4">
              <h2 className="card-title mb-3">{movie.title}</h2>

              <p className="card-text text-muted">
                {movie.overview || "No overview available."}
              </p>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <span className="badge bg-warning text-dark fs-6">
                  ⭐ {movie.vote_average?.toFixed(1)}
                </span>

                <span className="badge bg-info text-dark fs-6">
                  📅 {movie.release_date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}