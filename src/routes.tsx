import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Insurance, { FormView, FaraBimaView } from "./pages/Insurance";
import Broker from "./pages/Broker";
import Club from "./pages/Club";
import Prizes from "./pages/Prizes";
import PointsReport from "./pages/PointsReport";
import IssuancePage from "./pages/IssuancePage";

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
        path: "dashboard",
        element: <Home />

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
        path: "club/points-report",
        element: <PointsReport />,
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
        path: "insurance",
        element: <Insurance />,
        children: [
          {
            index: true,
            element: <FaraBimaView />,
          },
          {
            path: "create",
            element: <FormView />,
          }
        ]
      },
      {
        path: "broker",
        element: <Broker />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
