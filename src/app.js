import React, {lazy, Suspense} from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";

const About = lazy (() => import("./components/About"))

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Define routes using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: 
            <Suspense fallback={<h1>loading..</h1>}>
              <About />
            </Suspense>,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/restaurantmenu/:resId",
            element: <RestaurantMenu />,
          }
    ],
    errorElement: <Error />, 
  }
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
