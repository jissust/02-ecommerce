export type Product = {
  id: number;
  name: string;
  price: number;
  title: string;
  images: Array<string>;
  category: {
    name: string;
  };
};

export type Filter = {
  maxPrice: number;
  category: string;
};
