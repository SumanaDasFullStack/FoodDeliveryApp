import { IRestaurant } from "./IRestaurant";

// Define the data structure for the Mutton Bhuna
export interface IMenuUpdate {
    name: string;
    category: string;
    image: string;
    description: string;
    price: string;
    isAvailable: boolean;
    createdAt: string;
    restaurant: {
      restaurantId: string;
    };
  }