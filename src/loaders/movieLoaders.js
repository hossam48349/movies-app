import movieApi from "../api/movieApi";

export async function moviesLoader({ request }) {
  const url = new URL(request.url);

  const page = Number(url.searchParams.get("page")) || 1;
  const search = url.searchParams.get("search") || "";

  console.log("LOADER SEARCH:", search);

  const res = await movieApi.get(search ? "/search/movie" : "/movie/popular", {
    params: {
      page,
      query: search || undefined,
    },
  });

  return {
    movies: res.data.results,
    totalPages: res.data.total_pages,
    page,
    search,
  };
}
export async function movieDetailsLoader({ params }) {
  const res = await movieApi.get(`/movie/${params.id}`);
  return res.data;
}