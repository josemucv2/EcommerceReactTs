import { Outlet } from "react-router-dom";

function Home(): JSX.Element {
  console.log("render");

  return <Outlet />;
}

export default Home;
