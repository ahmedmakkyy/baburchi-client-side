import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AllContents from './components/home/contents/allContents.jsx';
import Layout from './components/fixedContent/Layout.jsx';
import Blog from './components/blog/Blog.jsx';
import Details from './components/details/Details.jsx';
import Login from './components/auth/login.jsx';
import Registration from './components/auth/Registration.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRout from './components/routes/PrivateRout.jsx';
import ErrorPage from './components/error/ErrorPage.jsx';
import PdfFile from './components/blog/pdfFile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <AllContents></AllContents>,



      },
      {
        path: "blog",
        element: <Blog></Blog>,

      },
      {
        path: "blogpdf",
        element: <PdfFile></PdfFile>,

      },
      {
        path: "details/:id",
        element: <PrivateRout><Details></Details></PrivateRout>,
        loader: ({ params }) => fetch(`https://baburchi-server-ahmedmakkyy.vercel.app/chefData/${params.id}`)

      },
    ],



  },

  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "registration",
    element: <Registration></Registration>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
