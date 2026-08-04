import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Insurance, { FormView, FaraBimaView } from "./pages/Insurance";
import Broker from "./pages/Broker";

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