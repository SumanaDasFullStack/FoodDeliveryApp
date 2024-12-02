import { Menu } from "./menu";

export class Cartitem {
    constructor(public food: Menu) { }
    quantity: number = 1;
    price: number = this.food.price;
}
