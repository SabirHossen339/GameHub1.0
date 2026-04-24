import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import About from "../Pages/About";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
          path:"",
          element: <Home></Home>,
          loader: ()=> fetch("/game.json")
        }
      ]
    },
    {
      path: "/auth",
      element: <h2>Authentication Layout</h2>
    },
    {
      path: "/game",
      element: <h2>Game Layout</h2>
    },
    {
      path: "/about",
      element: <About></About>
    },
    {
      path: "/*",
      element: <Error></Error>
    },
  ]
);

export default router
