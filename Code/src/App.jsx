import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Body} from "./components/Body.jsx";
import {Header} from "./components/Header.jsx";
import About from "./components/About.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery.jsx"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    errorElement: <Error />,
    children : [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/grocery',
        element: (<Suspense fallback={<h1>Loading....</h1>}>
        <Grocery />
        </Suspense>)
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu /> 
      },
      
    ],
    },
  ])
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
