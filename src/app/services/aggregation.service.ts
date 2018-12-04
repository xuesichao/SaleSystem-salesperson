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
  salespersons: Observable<Salesperson[]>
  constructor(private http: HttpClient) { }
  addSalesperson() {

  }
}
