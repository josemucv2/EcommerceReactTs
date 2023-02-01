import React, { useEffect, useState } from "react";
import { useContexto } from "../../context/Context";
import BasicButtons from "../Button/ButtonComponent";
import Typography from "@mui/material/Typography";
import { TitleStyle, numberStyleItem } from "./OrderSummaryStyle";
import { Product } from "../../interface/Product/Products";

function OrderSummary(): JSX.Element {
  const { cart } = useContexto();

  const [totalPrices, setTotalPrices] = useState<number>(0);

  useEffect(() => {
    setTotalPrices(
      cart.reduce(
        (sum: number, element: Product) => sum + Number(element.totalPrice),
        0
      )
    );
  }, [cart]);

  return (
    <div className="mt-5 space-y-5 h-full px-5">
      <Typography variant="h4" sx={TitleStyle}>
        Order Summary
      </Typography>

      <Typography sx={numberStyleItem}>
        Number of items <span>({cart.length})</span>
      </Typography>

      <hr className="mt-5" />
      <div className="flex justify-between">
        <Typography sx={TitleStyle}>Total:</Typography>
        <Typography sx={TitleStyle}>$ {totalPrices.toFixed(2)}</Typography>
      </div>
      <div className="space-y-2">
        <BasicButtons color={true} label="Proceed to Checkout" />
        <BasicButtons color={false} label="Continue shopping" />
      </div>
    </div>
  );
}

export default OrderSummary;
