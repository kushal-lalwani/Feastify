import ReactDOM from 'react-dom/client';
import {Header} from './components/Header.jsx';
import {Body} from './components/Body.jsx';
import About from './components/About.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Error from './components/Error.jsx';
import Footer from './components/Footer.jsx';




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
          path: '/restaurant/:id',
          element: <RestaurantMenu /> 
        },
        
      ],
      },
    ])
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);



