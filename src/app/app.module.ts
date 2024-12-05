import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdminRestaurantOperationComponent } from './admin-restaurant-operation/admin-restaurant-operation.component';
import { CustomerRestaurantOperationComponent } from './customer-restaurant-operation/customer-restaurant-operation.component';
import { CustomerMenuOperationComponent } from './customer-menu-operation/customer-menu-operation.component';
import { AdminMenuOperationComponent } from './admin-menu-operation/admin-menu-operation.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TextInputComponent } from './partials/text-input/text-input.component';
import { OrderItemListComponent } from './partials/order-item-list/order-item-list.component';
import { InputValidationComponent } from './partials/input-validation/input-validation.component';
import { InputContainerComponent } from './partials/input-container/input-container.component';
import { TitleComponent } from './partials/title/title.component';
import { PaymentComponent } from './payment/payment.component';
import { MapComponent } from './partials/map/map.component';
import { PaypalButtonComponent } from './partials/paypal-button/paypal-button.component';
import { OrderTrackComponent } from './order-track/order-track.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    AdminRestaurantOperationComponent,
    CustomerRestaurantOperationComponent,
    CustomerMenuOperationComponent,
    AdminMenuOperationComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    MenudetailsComponent,
    CartComponent,
    NotFoundComponent,      
    InputValidationComponent,
    InputContainerComponent,
    TextInputComponent, 
    CheckoutComponent,
    OrderItemListComponent,
    TitleComponent,
    PaymentComponent,
    MapComponent,
    PaypalButtonComponent,
    OrderTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    BrowserAnimationsModule,  // Add this module to enable animations
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    })     // Add ToastrModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
