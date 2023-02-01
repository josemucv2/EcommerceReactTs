import { ROUTES_NAV_SIDE } from "../../interface/SideNav/inte_bar";

const ROUTES_NAV: Array<ROUTES_NAV_SIDE> = [
  { _id: 0, path: "/", name: "All products", view: true },
  { _id: 1, path: "/packaging", name: "Packaging", view: true },
  { _id: 2, path: "/drinkware", name: "Drinkware", view: true },
  { _id: 3, path: "/apparel", name: "Apparel", view: true },
  { _id: 4, path: "/notebooks", name: "Notebooks", view: true },
  { _id: 5, path: "/backpacks", name: "Backpacks", view: true },
];

export default ROUTES_NAV;
