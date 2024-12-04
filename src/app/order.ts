import { LatLng } from "leaflet";
import { Cartitem } from "./cartitem";
import { Payment } from "./payment";

export class Order {
    id!: number;
    items!: Cartitem[];
    totalPrice!: number;
    name!: string;
    address!: string;
    addressLatLng?: LatLng;
    paymentId!: number;
    createdAt!: string;
    status!: string;
}
