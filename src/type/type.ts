export type Product = {
  id: number;
  documentId: number;
  isFeatured: boolean;
  active: boolean;
  price: number;
  slug: string;
  description: string;
  title: string;
  images: Array<string>;
  url: string;
  categories: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  creationAt: string;
  updatedAt: string;
};

export type Filter = {
  maxPrice: number;
  category: string;
};

export type ProductCart = {
  id: number;
  price: number;
  slug: string;
  description: string;
  title: string;
  images: Array<string>;
  url: string;
  categories: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  creationAt: string;
  updatedAt: string;
  quantity: number;
};
