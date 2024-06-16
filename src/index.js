import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import ApartmentPage from './pages/ApartmentPage';
import About from './pages/About';
import ErrorPageNotFound from './pages/ErrorPageNotFound';

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/flat/:id",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Error",
        element: <ErrorPageNotFound />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

