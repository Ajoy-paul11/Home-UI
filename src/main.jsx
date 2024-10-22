import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Contact from "./components/Contact.jsx";
import Project from "./components/Project.jsx";
import Home from "./components/Home.jsx";
import Album from "./components/Album.jsx";
import Board from "./components/Board.jsx";
import Task from "./components/Task.jsx";
import PersonalProgress from "./components/PersonalProgress.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/album",
        element: <Album />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/progress",
        element: <PersonalProgress />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
