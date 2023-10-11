import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, ErrorPage } from "./pages";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
