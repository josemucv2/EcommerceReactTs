import { Routes, Route } from "react-router-dom";
import { CHILDREN } from "../interface/Routes/Routes";
import routeing from "./index";

function Router() {
  let a = false;

  const ROUTES = a ? routeing[1] : routeing[0];

  return (
    <Routes>
      <Route path={ROUTES.path} element={<ROUTES.component />}>
        {ROUTES.children.map((element: CHILDREN) => {
          return (
            <Route
              key={element._id}
              path={element.path}
              element={<element.element />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default Router;
