import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Store } from 'src/app/models/Store';
import { Inventory } from 'src/app/models/Inventory';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class RegionManagerService {
  store: Observable<Store[]>
  Inventory: Observable<Inventory[]>
  constructor(private http: HttpClient) { }
  addStore(store): Observable<Store[]> {
    let url = 'http://localhost:5000/regionManager/stores';
    return this.http.post<Store[]>(url, store, httpOptions);
  }
  getStores(){
    let url = 'http://localhost:5000/regionManager/stores';
    return this.http.get<Store[]>(url);
  }
  getStore(id){
    let url = 'http://localhost:5000/regionManager/stores/'+id;
    return this.http.get<Store[]>(url);
  }
  deleteStore(id){
    let url ='http://localhost:5000/regionManager/stores/'+ id;
    return this.http.delete<Store[]>(url, httpOptions);
  }
  getInventories(){
    let url = 'http://localhost:5000/regionManager/inventories';
    return this.http.get<Inventory[]>(url);
  }
  updateStore(id,store){
    let url ='http://localhost:5000/regionManager/stores/'+ id;
    return this.http.patch<Store[]>(url,store, httpOptions);
  }
}
