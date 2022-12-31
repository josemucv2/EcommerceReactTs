import { Outlet } from "react-router-dom";

function Core() {
  return (
    <div>
      core
      <Outlet />
    </div>
  );
}

export default Core;
