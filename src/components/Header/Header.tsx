import { useNavigate } from "react-router-dom";
import SingInIcon from "../../assets/icons/SignIn.svg";
import iconCart from "../../assets/icons/IconCart.svg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputComponent from "../Input/InputText";
import LogoComponent from "../LogoComponent/LogoComponent";
import { useState } from "react";
import { styleContainer, firtsBox, secondBox } from "./styles";
import Navigation from "../Navigation/Navigation";

function Sidenav(): JSX.Element {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const handlerChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Container sx={styleContainer} maxWidth={false}>
        <Box sx={firtsBox} className="space-x-16">
          <LogoComponent />
          <InputComponent action={handlerChangeText} value={text} />
        </Box>
        <div className="flex space-x-5 mr-16">
          <Box
            className="flex space-x-2 items-center"
            onClick={() => navigate("login")}
          >
            <img src={SingInIcon} />
            <p className="text-white text-general">Sing In</p>
          </Box>

          <Box
            className="flex space-x-2 items-center "
            onClick={() => navigate("cart")}
          >
            <img src={iconCart} />
            <p className="text-white text-general mt-1">Cart</p>
          </Box>
        </div>
      </Container>
      <Navigation />
    </>
  );
}

export default Sidenav;
