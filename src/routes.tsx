import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import IssuancePage from "./pages/IssuancePage.tsx";
import Club from "./pages/Club";
import Prizes from "./pages/Prizes";

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
        path: "club",
        element: <Club />,
      },
      {
        path: "club/prizes",
        element: <Prizes />,
      },
      {
        path: "club/earn-points",
        element: <Profile />,
      },
      {
        path: "club/account",
        element: <Profile />,
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
