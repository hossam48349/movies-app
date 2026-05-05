import axios from "axios";

const API_KEY ="ca9045f61d5e8f3464c7a15a236c66b3"

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default movieApi;