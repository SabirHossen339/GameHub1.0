import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import About from "../Pages/About";
import AllGames from "../Pages/AllGames";
import Categories from "../Components/Categories";

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
      path: "/category/:id",
      element: <AllGames></AllGames>
    },
    {
      path: "/auth",
      element: <h2>Authentication Layout</h2>
    },
    {
      path: "/game",
      element: <AllGames></AllGames>
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
