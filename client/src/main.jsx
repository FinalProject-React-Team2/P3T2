import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
// import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Dashboard from "./pages/Dashboard";
import ActiveDebatePage from "./pages/ActiveDebatePage";
import About from "./pages/About/Aboutus.jsx";
import CreateDebate from "./pages/CreateDebate.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      { 
        path: "dashboard",
        element: <Dashboard />,
      },
      { 
        path: "CreateDebate",
        element: <CreateDebate  />,
      },
      {
        path: "ActiveDebatePage",
        element: <ActiveDebatePage />,
      },
      { path: "Aboutus",
        element: <About />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
