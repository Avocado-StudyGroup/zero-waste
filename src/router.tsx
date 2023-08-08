import { createBrowserRouter } from "react-router-dom";

import Board from "@pages/Board";
import Main from "@pages/Main";
import Map from "@pages/Map";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Mypage from "@pages/Mypage";
import Shop from "@pages/Shop";
import Layout from "@components/Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/map", element: <Map /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/shop", element: <Shop /> },
      { path: "/board", element: <Board /> },
    ],
  },
]);

export default router;
