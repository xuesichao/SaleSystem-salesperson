import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Salesperson } from '../models/region';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  salespersons: Observable<Salesperson[]>
  url: string;
  constructor(private http: HttpClient) {
  }
  login(account) {
    let url = 'https://localhost:5000/salesperson/login'
    return this.http.post<Salesperson>(url, account, httpOptions);
  }
}
