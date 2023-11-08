export default interface ProductType
 {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    inventory: {
      id: number;
      quantity: number;
    };
    category: string;
    sub_category: string;
    rating: number;
    img: string;
  }