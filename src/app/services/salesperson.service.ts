import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salesperson } from '../models/Salesperson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {
  salespersons: Observable<Salesperson[]>
  constructor(private http: HttpClient) { }
  AddCustomer() { }
  getSalespersons(id): Observable<Salesperson[]> {
    let url='http://localhost:5000/salesperson'+id;
    return;
    // return this.http.get<Salesperson[]>(url);
  }
}
