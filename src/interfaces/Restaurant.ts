interface Restaurant {
  name: string;
  description: string;
  tel: string;
  email: string;
  website: string;
  hours: string;
  rating: number;
  priceClassification: string;
  address: string;
  categories: Array<string>;
  isOpen: string;
}

export default Restaurant;