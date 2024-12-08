import { environment } from "src/environments/environment";
const BASE_URL = environment.production? '' : 'http://localhost:9090';

export const USER_LOGIN_URL = BASE_URL + '/login/signin';
export const USER_REGISTER_URL = BASE_URL + '/login/signup';
export const USER_CHANGE_PASSWORD_URL=BASE_URL+'';
export const GET_ALL_USERS = BASE_URL + '/login/users/allUser';
export const GET_ALL_USERS_SEARCH = BASE_URL + '/login/users/allUser?searchText=';
export const USER_BLOCK_URL = BASE_URL + '/login/users/toggleBlock?emailid=';
export const USER_BY_ID_URL = BASE_URL + '/login/users/getById?emailid=';
export const UPDATE_USER_URL = BASE_URL + '/login/users/update?emailid=';
export const USER_UPDATE_PROFILE_URL = BASE_URL+'/login/users/update?emailid=';


export const ADD_MENU = BASE_URL + '/addMenu';
export const MENU_URL_ALL = BASE_URL + '/menu/allMenu';
export const MENU_BY_SEARCH_URL = BASE_URL + '/menu/search?searchText=';
export const MENU_BY_RESTAURANTID = BASE_URL + '/menu/menus/';
export const MENU_DETAILS_URL = BASE_URL + '/menu/menuDetails/';
export const ORDER_CREATE_URL = BASE_URL + '/orders/createOrder/';
export const ORDER_NEW_FOR_CURRENT_USER_URL = BASE_URL + '/orders/getOrder/';
export const ORDER_PAY_URL = BASE_URL + '/payments/';
export const ORDER_TRACK_URL = BASE_URL + '/orders/track/';
export const ORDER_STATUSES_URL = BASE_URL + '/orders/allstatus/';
export const ORDERS_URL = BASE_URL + '/orders/active';

export const FOODS_URL = BASE_URL + '/menu/addMenu';
export const UPDATE_FOODS_URL = BASE_URL + '/menu/updateMenu?menuId=';
export const FOODS_BY_ID_URL = BASE_URL + '/menu/deleteMenu/';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';

export const UPLOAD_URL = BASE_URL + '/api/menu/images/upload';