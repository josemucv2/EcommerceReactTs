import { useContexto } from "../../../context/Context";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { TitleStyle, box_cart } from "./TitleStyle";
import PackageCart from "../../../components/PackageCart/PackageCart";
import ItemProduct from "../../../components/ItemProduct/ItemProduct";
import { Product } from "../../../interface/Product/Products";
import OrderSummary from "../../../components/OrderSummary/OrderSummary";
import YouMightAlsoLike from "../../../components/YouMightAlsoLike/YouMightAlsoLike";
import { db } from "../../../Firebase";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";

function Cart(): JSX.Element {
  const { cart, setCart } = useContexto();

  const [category, setCategoty] = useState<Product[]>([]);

  useEffect(() => {
    const product_cateogory = collection(db, "productos");
    const filter_category = query(
      product_cateogory,
      where("category", "==", "men's clothing")
    );

    getDocs(filter_category)
      .then(({ docs }) => {
        return setCategoty(
          docs.map((doc: DocumentData) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => {
        return err;
      });
  }, []);

  const eliminatedItems = (value: number) => {
    const newCart = [...cart];
    newCart.splice(value, 1);
    setCart(newCart);
  };

  return (
    <div className="w-full">
      <div className="flex w-full">
        <Box sx={box_cart}>
          <Typography variant="h4" sx={TitleStyle}>
            You Cart
            <Typography variant="body2" className="pl-2">
              ({cart.length})
            </Typography>
          </Typography>

          <PackageCart />

          {cart.map((element: Product, index: number) => {
            return (
              <div key={element.id}>
                <ItemProduct
                  product={element}
                  index={index}
                  eliminatedItems={() => eliminatedItems(index)}
                />
              </div>
            );
          })}
        </Box>
        <OrderSummary />
      </div>
      <YouMightAlsoLike product={category} />
    </div>
  );
}

export default Cart;
