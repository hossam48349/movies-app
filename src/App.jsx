import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Register from "../src/components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/Movie-d/MovieDetails";
import { moviesLoader, movieDetailsLoader } from "./loaders/movieLoaders";

const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    element: <Navbar />,
    children: [
      {
        path: "/movies",
        element: <Movies />,
        loader: moviesLoader,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}