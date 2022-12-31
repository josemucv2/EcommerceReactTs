import { BASE_ROUTES } from "./BaseModelRoute";

export interface ROUTES extends BASE_ROUTES {
  children: Array<CHILDREN>;
  component: () => JSX.Element;
}

export interface CHILDREN extends BASE_ROUTES {
  children?: Array<ROUTES>;
  element: () => JSX.Element;
}
