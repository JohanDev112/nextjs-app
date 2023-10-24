export interface Products {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
  rating: number;
  quantity: number;
}

export interface ItemProps{
  item: Products;
}