import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Salesperson } from 'src/app/models/Salesperson';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class StoreManagerService {
  url: string;
  salespersons: Observable<Salesperson[]>;
  salesperson_id:string;
  constructor(
    private http: HttpClient
    ) { }

  addSalesperson(salesperson): Observable<Salesperson[]> {
    let url = 'http://localhost:5000/storeManager/salespersons';
    return this.http.post<Salesperson[]>(url, salesperson, httpOptions);
  }
  getSalespersons(): Observable<Salesperson[]> {
    let url = 'http://localhost:5000/storeManager/salespersons';
    return this.http.get<Salesperson[]>(url);
  }
  getSalesperson():Observable<Salesperson[]> {
    this.salesperson_id=window.localStorage.getItem('salesperson_id');
    let url = 'http://localhost:5000/storeManager/salespersons/'+ this.salesperson_id;
    return this.http.get<Salesperson[]>(url);
  }
}
