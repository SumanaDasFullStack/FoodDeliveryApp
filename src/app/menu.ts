import { IRestaurant } from "./partials/IRestaurant";

export class Menu {
    constructor(
        public menuId:number,
        public name:string,
        public category:string,
        public description:string,
        public image:string,
        public isAvailable:boolean,
        public price:number,
     //   public restaurantId:number,
        public restaurant: {
            restaurantId: number;
          },
        public createdAt:string
    ){}
}
