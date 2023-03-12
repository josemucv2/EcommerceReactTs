import { Product } from "../../interface/Product/Products";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContexto } from "../../context/Context";

interface Props {
  product: Product | any;
}

const DetailsProduct: React.FC<Props> = ({ product }) => {
  const { cart, setCart } = useContexto();

  const addToCart = (value: Product) => {
    setCart([...cart, value]);
  };

  console.log(product, "lkansdlnsald");
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        alt={product.title}
        image={product.image}
        sx={{
          width: "100%",
          height: 300,
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Price:{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => addToCart(product)}>
          Add Card
        </Button>
      </CardActions>
    </Card>
  );
};

export default DetailsProduct;
