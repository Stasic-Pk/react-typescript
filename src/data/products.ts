import { IProduct } from "../modules";

export const products: IProduct[] = [  
  {
    id: 1,
    title: 'test product',
    price: 13.536487,
    description: 'lorem ipsum set',
    image: 'not found',
    category: 'electronic',
    rating: {"rate": 3.1, "count": 35},
  },
  {
    id : 2,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.9555,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {"rate": 3.9, "count": 120}}
]