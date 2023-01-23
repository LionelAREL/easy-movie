import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import CreateVideo from "./pages/CreateVideo";
import DisplayVideo from "./pages/DisplayVideo";
import Error404 from "./pages/Error404";
import Main from "./pages/Main";
import MovieProject from "./pages/MovieProject";
import ModifyVideo from "./pages/UpdateVideo";
import Root from "./pages/wrapper/Root";

const router = createBrowserRouter([
  {
    path: "videos",
    element: <Root/>,
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: <DisplayVideo/>,
      },
      {
        path: "create",
        element: <CreateVideo/>,
      },
      {
        path: "update/:movieProjectId",
        element: <ModifyVideo/>,
      },
      {
        path: ":movieProjectId",
        element: <MovieProject/>,
      },
    ],
  },
  {
    path: "/",
    element: <Main/>,
    errorElement: <Error404 />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

