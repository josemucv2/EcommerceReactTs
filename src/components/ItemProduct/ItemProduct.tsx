import React, { useState } from "react";
import {
  TitleStyle,
  box_item,
  box_item_father,
  TitleStyle2,
  quentity,
  valueTotal,
} from "./itemProductStyle";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import ArrowIcon from "../../assets/icons/Arrow.svg";
import Wastebasket from "../../assets/icons/Wastebasket.svg";
import { Product } from "../../interface/Product/Products";
interface Props {
  product: Product;
}

const ItemProduct: React.FC<Props> = ({ product }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const [basicQuentity, setBasicQuentity] = useState<number>(1);
  const [quentityNumber, setQuentityNumber] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);
  const selecQuantity = () => {
    setOpen(!open);
  };

  const valueQuentity = (value: number) => {
    setBasicQuentity(value);
  };

  return (
    <Box sx={box_item}>
      <Box sx={box_item_father}>
        <img
          src={product.image}
          alt=""
          width="50"
          height="50"
          className="w-32 h-36 rounded-lg"
        />

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
              {product.title}
            </Typography>
            <Typography variant="h5" sx={TitleStyle2}>
              ${product.price}
            </Typography>
          </div>

          <div
            className="flex justify-between w-full mt-2"
            onClick={selecQuantity}
          >
            <Typography variant="h5" sx={quentity}>
              Quantity:
              <Typography
                variant="body2"
                className="pl-2 flex text-general text-general-bold "
                sx={quentity}
              >
                {product.quantity}

                <img src={ArrowIcon} alt="" className="ml-1 cursor-pointer" />
              </Typography>
              {open ? (
                <span className="space-x-1 bg-slate-200 cursor-pointer ml-2">
                  {quentityNumber.map((element: number) => {
                    return (
                      <span
                        onClick={() => valueQuentity(element)}
                        className="z-20 hover:bg-sky-700 hover:text-white"
                      >
                        {element}
                      </span>
                    );
                  })}
                </span>
              ) : (
                ""
              )}
            </Typography>
            <Typography variant="h5" sx={valueTotal}>
              Total: ${product.totalPrice}
            </Typography>
          </div>

          <div className="flex space-x-3 mt-7">
            <img src={Wastebasket} width="20" />
            <p>Remove</p>
          </div>
        </Box>
      </Box>

      <hr className="my-10" />
    </Box>
  );
};

export default ItemProduct;
