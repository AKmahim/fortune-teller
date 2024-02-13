import React from 'react'
import App from './App.jsx'

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Fortune from './components/Fortune/Fortune.jsx';
import Register from './Page/Register/Register.jsx';
import FortuneView from './Page/FortuneView/FortuneView.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>,

      },
      {
        path:"/fortune",
        element:<Fortune></Fortune>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"fortune-view",
        element:<FortuneView></FortuneView>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
