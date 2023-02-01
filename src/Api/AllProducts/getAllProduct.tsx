import axios from "axios";
import { AxiosResponse } from "axios";
import { Product } from "../../interface/Product/Products";
export let allProducts: Array<Product> = [];

export const getProducts = axios
  .get("https://fakestoreapi.com/products")
  .then((data: AxiosResponse) => {
    return data.data;
  })
  .catch((err) => {
    console.log(err);
  });
