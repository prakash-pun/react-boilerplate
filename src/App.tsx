import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";
import ErrorPage from "./pages/error-page";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/home", element: <Home />, errorElement: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
