import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browsing from "./Browsing";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browsing",
      element: <Browsing />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
