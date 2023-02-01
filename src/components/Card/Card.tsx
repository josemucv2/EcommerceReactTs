import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContexto } from "../../context/Context";
import { Product } from "../../interface/Product/Products";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  title: string;
  image: string;
  description: string;
  price: number;
  element: Product;
}

const MultiActionAreaCard: React.FC<Props> = ({
  title,
  image,
  description,
  price,
  element,
}) => {
  const { cart, setCart } = useContexto();

  const addToCart = (value: Product, quantity: number) => {
    const totalPrice: number = value.price * quantity;
    const newCartElement: Product = { ...value, quantity, totalPrice };

    setCart([...cart, newCartElement]);
  };
  const [count, setCount] = useState<number>(1);

  const incrementCount = () => {
    if (count === 5) {
      return;
    }
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <Card
      sx={{
        maxWidth: 250,
        margin: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="50px"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: 150,
            display: "flex",
            alignItems: "center",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => addToCart(element, count)}
        >
          Add Card
        </Button>

        <Link to={`/product/${element.id}`}>
          <span className="text-general">View Details</span>
        </Link>
      </CardActions>
      <div>
        <Button size="small" color="primary" onClick={decrementCount}>
          -
        </Button>
        <span>{count}</span>

        <Button size="small" color="primary" onClick={incrementCount}>
          +
        </Button>
      </div>
    </Card>
  );
};

export default MultiActionAreaCard;
