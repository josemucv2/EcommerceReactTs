import { BrowserRouter } from "react-router-dom";
import RouterView from "./router/routes";
import Sidenav from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Sidenav />
        <RouterView />
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
