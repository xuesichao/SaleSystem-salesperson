import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { SalespersonComponent } from './components/salesperson/salesperson.component';
import { StoreComponent } from './components/store/store.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'salesperson', component: SalespersonComponent },
  { path: 'store', component: StoreComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
