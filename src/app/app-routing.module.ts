import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { AdminRestaurantOperationComponent } from './admin-restaurant-operation/admin-restaurant-operation.component';
import { CustomerRestaurantOperationComponent } from './customer-restaurant-operation/customer-restaurant-operation.component';
import { CustomerMenuOperationComponent } from './customer-menu-operation/customer-menu-operation.component';
import { HomeComponent } from './home/home.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { authGuard } from './auth.guard';
import { PaymentComponent } from './payment/payment.component';
import { OrderTrackComponent } from './order-track/order-track.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { adminGuard } from './admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminMenuOperationComponent } from './admin-menu-operation/admin-menu-operation.component';
import { MenuEditPageComponent } from './menu-edit-page/menu-edit-page.component';
import { AdminUsersPageComponent } from './admin-users-page/admin-users-page.component';
import { AdminUsersEditPageComponent } from './admin-users-edit-page/admin-users-edit-page.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  // redirectTo:"",pathMatch:"full",
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
 // {path:"admin",component:AdmindashboardComponent,canActivate:[authGuard]},
 // {path:"customer",component:HomeComponent, redirectTo:"",pathMatch:"full"},
  {path:"restaurant",component:CustomerRestaurantOperationComponent},
  {path:"menu",component:CustomerMenuOperationComponent},
  {path:"search/:searchTerm",component:HomeComponent},
  {path:"menudetails/:id",component:MenudetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent, canActivate: [authGuard]},
  {path:"payment/:orderId",component:PaymentComponent,canActivate: [authGuard]},
  {path:"track/:orderId",component:OrderTrackComponent,canActivate: [authGuard]},
  {path:"orders",component:OrdersComponent,canActivate:[authGuard]},
  {path:"profile",component:ProfileComponent,canActivate:[authGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[authGuard]},
  { path: 'admin/foods', component: AdminMenuOperationComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin/foods/:searchTerm', component: AdminMenuOperationComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin/addFood', component: MenuEditPageComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin/editFood/:id', component: MenuEditPageComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin/users', component: AdminUsersPageComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin/users/:searchTerm', component: AdminUsersPageComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin/editUser/:userId', component: AdminUsersEditPageComponent, canActivate: [authGuard, adminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
