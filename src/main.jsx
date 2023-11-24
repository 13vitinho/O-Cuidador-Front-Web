import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routers/Home.jsx'
import Login from './routers/Login.jsx'
import  './style.scss'


const router = createBrowserRouter([
  {
    path: '/', element: <App />,

    children: [
      { path: '/home', element: <Home /> },
      { path: '/', element: <Login /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
