import { Link, useNavigate, useLoaderData } from "react-router-dom";

export default function Movies() {
  const { movies, totalPages, page } = useLoaderData();
  const navigate = useNavigate();
  const handlePrev = () => {
    if (page > 1) {
      navigate(`/movies?page=${page - 1}`);
      window.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      navigate(`/movies?page=${page + 1}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">🎬 Popular Movies</h1>

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

      <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
        <button
          className="btn btn-dark"
          onClick={handlePrev}
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="fw-bold">
          Page {page} of {totalPages}
        </span>

        <button
          className="btn btn-dark"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}