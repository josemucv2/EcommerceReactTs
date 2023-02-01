import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
} from "react";
import { Product } from "../interface/Product/Products";

interface ContextProps {
  cart: Product[];
  setCart: React.Dispatch<SetStateAction<Product[]>>;
}
export const contexto = createContext<ContextProps>({
  cart: [],
  setCart: () => {},
});
export const { Provider } = contexto;

export const useContexto = (): ContextProps => {
  const context = useContext(contexto);
  // if (context == null) throw "Undefined context";
  return context;
};

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<Array<Product>>([]);

  const valueContext = {
    cart,
    setCart,
  };
  return <Provider value={{ ...valueContext }}>{children}</Provider>;
};

export default ContextProvider;
