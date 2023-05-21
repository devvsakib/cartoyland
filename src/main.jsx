import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home';
import AllToys from './pages/AllToys';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';
import Main from './pages/Main';
import ToyDetails from './pages/ToyDetails';
import Notfound from './pages/Notfound';
import Private from './routes/Private';
import API from './lib/API';
import AddToy from './pages/AddToy';
import Blogs from './pages/Blogs';
import MyToys from './pages/MyToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "alltoys",
        element: <AllToys />,
        loader: () => fetch('https://toymarketplaceapi.onrender.com/totaltoys')
      },
      {
        path: "addtoy",
        element: <Private><AddToy /></Private>,
      },
      {
        path: "mytoys",
        element: <Private><MyToys /></Private>,
      },
      {
        path: "toy/:id",
        element: <Private><ToyDetails /></Private>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      }
    ]
  },
  {
    path: "*",
    element: <Notfound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
