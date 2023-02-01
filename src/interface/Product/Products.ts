export interface Product {
  id: string;
  title: string;
  price: number;
  totalPrice: number;
  description: string;
  category: string;
  image: string;
  stock?: number;
  quantity: number;
}
