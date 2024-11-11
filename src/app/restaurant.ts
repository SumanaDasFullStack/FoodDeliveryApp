export class Restaurant {
    constructor(
        public restaurantId:number,
        public name:string,
        public description:string,
        public address:string,
        public emailId:string,
        public phoneNumber:string,
        public openTime:string,
        public closeTime:string,
        public rating:number,
        public createdAt:string
    ){

    }
}
