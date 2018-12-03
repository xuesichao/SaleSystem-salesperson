import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {

  constructor(private http: HttpClient) { }
  AddCustomer(){}
}
