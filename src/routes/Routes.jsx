import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../layouts/main/Main";

// import Home from "../pages/home/Home";
import AllToy from "../pages/allToy/AllToy";
import MyToy from "../pages/myToy/MyToy";
import AddToy from "../pages/addToy/AddToy";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import SingleToyDetails from "../pages/allToy/toyDetails/SingleToyDetails";
import UpdatedToy from "../pages/myToy/updateToy/UpdatedToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Error/ErrorPage";

const LazyHome = React.lazy(() => import("../pages/home/Home"));

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback="Loading...">
            <LazyHome></LazyHome>
          </React.Suspense>
        ),
      },
      {
        path: "allToy",
        element: <AllToy></AllToy>,
      },
      {
        path: "allToy/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails></SingleToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/usertoy/${params.id}`),
      },
      {
        path: "myToy",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "userToyUpdate/:id",
        element: (
          <PrivateRoute>
            <UpdatedToy></UpdatedToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/usertoy/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <SignUp></SignUp>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default route;
