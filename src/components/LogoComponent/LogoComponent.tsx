import Box from "@mui/material/Box";
import { firtsBox } from "./LogoStyle";
import { useNavigate } from "react-router-dom";

function LogoComponent() {
  const navigate = useNavigate();

  return (
    <Box sx={firtsBox} onClick={() => navigate("/")}>
      LOGO
    </Box>
  );
}

export default LogoComponent;
