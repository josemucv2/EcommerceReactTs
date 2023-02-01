import React from "react";
import { Product } from "../../interface/Product/Products";
import { Typography } from "@mui/material";
import {
  TitleStyle,
  box_cart,
  textTitle,
  numberStyleItem,
} from "./YouMightAlsoLikeStyle";
import { Box } from "@mui/system";

interface Props {
  product: Product[];
}

const YouMightAlsoLike: React.FC<Props> = ({ product }): JSX.Element => {
  return (
    <Box sx={box_cart}>
      <Typography variant="body2" className="pl-2" sx={TitleStyle}>
        You might also like
      </Typography>

      <div className="flex space-x-20 justify-between">
        {product.map((element: Product) => {
          return (
            <div className="mt-5 space-y-2" key={element.id}>
              <img src={element.image} className="box-image" />

              <Typography sx={textTitle}>{element.title}</Typography>
              <div className="flex justify-between items-center">
                <Typography sx={textTitle}>$10-$24</Typography>
                <Typography sx={numberStyleItem}>
                  minimun: {element.stock}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default YouMightAlsoLike;
