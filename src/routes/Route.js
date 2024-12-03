import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/HomePage";
import PostDetails from "../features/posts/PostDetails";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, 
        children: [
            { index: true, element: <Home /> }, 
            { path: "posts/:id", element: <PostDetails /> },
        ],
    },
    { path: "*", element: <NotFound /> }, 
]);

export default routes;
