import ROUTES_NAV from "../../store/Platform/SideNav";
import { ROUTES_NAV_SIDE } from "../../interface/SideNav/inte_bar";
import { Box } from "@mui/system";
import { box_father } from "./NavigationStyle";
import { useNavigate } from "react-router-dom";

function Navigation(): JSX.Element {
  const navigation = useNavigate();
  return (
    <Box sx={box_father}>
      <ul className="flex items-center space-x-5 ml-28 cursor-pointer">
        {ROUTES_NAV.map((element: ROUTES_NAV_SIDE) => {
          return (
            <li
              key={element._id}
              onClick={() => navigation(element.path)}
              className="text-general color-text-primary"
            >
              {element.name}
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default Navigation;
