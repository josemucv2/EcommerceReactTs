import Login from "../Views/Auth/Login/Login";
import Home from "../Views/Core/Home/Home";
import Register from "../Views/Auth/Register/Register";
import Auth from "../layouts/Auth/Auth";
import Core from "../layouts/Core/Core";
import { ROUTES } from "../interface/Routes/Routes";

const routes: Array<ROUTES> = [
  {
    _id: 0,
    path: "/",
    component: Auth,
    children: [
      {
        _id: 0,
        name: "Login",
        path: "/",
        element: Login,
      },

      {
        _id: 1,
        path: "/register",
        element: Register,
      },
    ],
  },

  {
    _id: 1,
    path: "/app",
    name: "App",
    component: Core,
    children: [
      {
        _id: 0,
        name: "Home",
        path: "",
        element: Home,
      },
    ],
  },
];

export default routes;
