import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Products from './sections/Products';
import Cart from './sections/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children:[
      {
        path: '/about',
        element: <div>About</div>
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/cart',
        element:<Cart />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
