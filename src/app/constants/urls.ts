import { environment } from "src/environments/environment";
const BASE_URL = environment.production? '' : 'http://localhost:9090';

export const USER_LOGIN_URL = BASE_URL + '/login/signin';
export const USER_REGISTER_URL = BASE_URL + '/login/signup';


export const ADD_MENU = BASE_URL + '/addMenu';
export const MENU_URL_ALL = BASE_URL + '/menu/allMenu';
export const MENU_BY_SEARCH_URL = BASE_URL + '/menu/search?searchText=';
export const MENU_BY_RESTAURANTID = BASE_URL + '/menu/menus/';
export const MENU_DETAILS_URL = BASE_URL + '/menu/menuDetails/';
export const ORDER_CREATE_URL = BASE_URL + '/orders/createOrder';
export const ORDER_NEW_FOR_CURRENT_USER_URL = BASE_URL + '/orders/getOrder/';
export const ORDER_PAY_URL = BASE_URL + '';