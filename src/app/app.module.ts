import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { SalespersonComponent } from './components/salesperson/salesperson.component';
import { StoreComponent } from './components/store/store.component';
import { LoginComponent } from './components/login/login.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddSalespersonComponent } from './components/add-salesperson/add-salesperson.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginService } from './services/login.service'
import { FormsModule } from '@angular/Forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InventoryComponent } from './components/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    TransactionComponent,
    ProductComponent,
    SalespersonComponent,
    StoreComponent,
    LoginComponent,
    AddCustomerComponent,
    AddStoreComponent,
    AddProductComponent,
    AddSalespersonComponent,
    DashboardComponent,
    SidebarComponent,
    InventoryComponent,
  ],
  imports: [
    FlashMessagesModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FlashMessagesService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
