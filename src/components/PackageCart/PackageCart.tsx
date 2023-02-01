import React, { useState, useEffect } from "react";

import {
  TitleStyle,
  box_item,
  box_item_father,
  TitleStyle2,
  quentity,
  valueTotal,
  quentityNumber,
} from "./PackageStyle";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useContexto } from "../../context/Context";
import ArrowIcon from "../../assets/icons/Arrow.svg";
import { Product } from "../../interface/Product/Products";

function PackageCart() {
  const { cart } = useContexto();
  const [total, setTotal] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalPrices, setTotalPrices] = useState<number>(0)

  useEffect(() => {
    setTotal(cart.reduce((sum, element) => sum + Number(element.price), 0));

    setTotalQuantity(
      cart.reduce((sum, element) => sum + Number(element.quantity), 0)
    );

    setTotalPrices(
      cart.reduce((sum, element) => sum + Number(element.totalPrice), 0)
    );
  }, [cart]);

  return (
    <Box sx={box_item}>
      <Box sx={box_item_father}>
        <div className="w-32 h-36 border bg-slate-200 grid grid-cols-3">
          {cart.map((element: Product) => {
            return (
              <img
                src={element.image}
                alt=""
                width="20"
                height="20"
                className="max-w-full max-h-full m-auto"
              />
            );
          })}
        </div>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            paddingX: "20px",
          }}
        >
          <div className="flex justify-between w-full">
            <Typography variant="h5" sx={TitleStyle}>
              All Cart
            </Typography>
            <Typography variant="h5" sx={TitleStyle2}>
              {total.toFixed(2)}$
            </Typography>
          </div>

          <div className="flex justify-between w-full mt-2">
            <Typography variant="h5" sx={quentity}>
              Quantity:
              <Typography
                variant="body2"
                className="pl-2 flex text-general text-general-bold "
                sx={quentity}
              >
                {totalQuantity}
                <img src={ArrowIcon} alt="" className="ml-1" />
              </Typography>
            </Typography>
            <Typography variant="h5" sx={valueTotal}>
              Total: ${totalPrices.toFixed(2)}$
            </Typography>
          </div>

          <ul className="mt-2 space-y-1">
            {cart.map((element: Product) => {
              return (
                <li className="list-style text-general color-blue">
                  {element.title}
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>

      <hr className="mt-10" />
    </Box>
  );
}

export default PackageCart;
