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
const routes: Routes = [
  {path:"",component:HomeComponent},
  // redirectTo:"",pathMatch:"full",
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdmindashboardComponent,children:[
    {path:"restaurant",component:AdminRestaurantOperationComponent},
    
  ]},
  {path:"customer",component:HomeComponent, redirectTo:"",pathMatch:"full"},
  {path:"restaurant",component:CustomerRestaurantOperationComponent},
  {path:"menu",component:CustomerMenuOperationComponent},
  {path:"search/:searchTerm",component:HomeComponent},
  {path:"menudetails/:id",component:MenudetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent, canActivate: [authGuard]},
  {path:"payment/:orderId",component:PaymentComponent,canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
