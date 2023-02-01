import Drinkware from "../Views/Core/Drinkware/Drinkware";
import Home from "../layouts/Home/Home";
import Register from "../Views/Auth/Register/Register";
import home_view from "../Views/Core/Home/HomeView";
import Catalogue from "../Views/Core/Catalogue/Catalogue";
import Information from "../Views/Core/AboutUs/AboutUs";
import Login from "../Views/Auth/Login/Login";
import Cart from "../Views/Core/Cart/Cart";
import Apparel from "../Views/Core/Apparel/Apparel";
import Notebooks from "../Views/Core/Notebooks/Notebooks";
import Backpacks from "../Views/Core/Backpacks/Backpacks";
import Packaging from "../Views/Core/Packaging/Packaging";
import Product from "../Views/Core/Product/Product";

import { ROUTES } from "../interface/Routes/Routes";

const routes: Array<ROUTES> = [
  {
    _id: 0,
    path: "/",
    component: Home,
    children: [
      {
        _id: 0,
        name: "Home",
        path: "/",
        element: home_view,
      },

      {
        _id: 1,
        path: "/register",
        name: "Register",
        element: Register,
      },

      {
        _id: 2,
        path: "/drinkware",
        name: "Drinkware",
        element: Drinkware,
      },
      {
        _id: 3,
        path: "/catalogue",
        name: "Catalogue",
        element: Catalogue,
      },
      {
        _id: 4,
        path: "/information",
        name: "Information",
        element: Information,
      },

      {
        _id: 5,
        path: "/login",
        name: "Login",
        element: Login,
      },
      {
        _id: 6,
        path: "/cart",
        name: "Cart",
        element: Cart,
      },

      {
        _id: 7,
        path: "/apparel",
        name: "Apparel",
        element: Apparel,
      },
      {
        _id: 8,
        path: "/notebooks",
        name: "Notebooks",
        element: Notebooks,
      },
      {
        _id: 9,
        path: "/backpacks",
        name: "Notebooks",
        element: Backpacks,
      },
      {
        _id: 10,
        path: "/packaging",
        name: "Packaging",
        element: Packaging,
      },

      {
        _id: 11,
        path: "/product/:id",
        name: "product",
        element: Product,
      },
    ],
  },
];

export default routes;
