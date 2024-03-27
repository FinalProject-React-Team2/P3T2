import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/404";
import Home from "./pages/Home";
import About from "./pages/About/Aboutus.jsx";
// import Donations from "./pages/Donations.jsx";
import Notfound from "./pages/404";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard";
import Debates from "./pages/Debates/Debates.jsx";
import ActiveDebatePage from "./pages/Debates/ActiveDebatePage.jsx";
// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "open&activedebates",
        element: <Debates />,
      },
      {
        path: "debate/:id",
        element: <ActiveDebatePage />,
      },

      { path: "*",
        element: <Notfound></Notfound>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
