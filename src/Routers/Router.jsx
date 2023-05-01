import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);

export default router;
