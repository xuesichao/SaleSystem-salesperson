import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Product } from '../models/Product';
import { Transaction } from '../models/Transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {
  customers: Observable<Customer[]>
  product: Observable<Product[]>
  transaction: Observable<Transaction[]>


  constructor(private http: HttpClient) { }
  AddCustomer() { }

  getCustomers(): Observable<Customer[]> {
    let url = 'http://localhost:5000/salesperson/customers';
    return this.http.get<Customer[]>(url);
  }
  getProducts(): Observable<Product[]> {
    let url = 'http://localhost:5000/salesperson/products';
    return this.http.get<Product[]>(url);
  }
  getTransactions(): Observable<Transaction[]> {
    let url = 'http://localhost:5000/salesperson/transactions';
    return this.http.get<Transaction[]>(url);
  }
}
