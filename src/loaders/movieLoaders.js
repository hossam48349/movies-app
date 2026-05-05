import movieApi from "../api/movieApi";

export async function moviesLoader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  const res = await movieApi.get("/movie/popular", {
    params: { page },
  });

  return {
    movies: res.data.results,
    totalPages: res.data.total_pages,
    page: Number(page),
  };
}

export async function movieDetailsLoader({ params }) {
  const res = await movieApi.get(`/movie/${params.id}`);

  return res.data;
}