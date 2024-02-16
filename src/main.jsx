import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Showcase from './pages/Showcase';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import Documentation from './pages/Documentation';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/showcase',
    element: <Showcase></Showcase>
  },
  {
    path: '/donation',
    element: <Donation></Donation>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
  {
    path: '/documentation',
    element: <Documentation></Documentation>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
