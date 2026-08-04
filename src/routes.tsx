import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import IssuancePage from "./pages/IssuancePage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "issuance",
        element: <IssuancePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);