import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounteryService {

  webApiUrl: string = "http://localhost:8080/rest/v2";

  constructor(private http: HttpClient) { }
  
  public getAllCountries() {
    return this.http.get(this.webApiUrl+'/country');
  }

  public getOne(id:number):Observable<any> {
    return this.http.get(`${ this.webApiUrl }/country/${id}`);
  }

  public delOne(id:number):Observable<any>  {
    return this.http.delete(`${ this.webApiUrl }/deletecountry/${id}`);
  }
  

  public createCountry(employee: Object): Observable<Object> {
    return this.http.post(`${ this.webApiUrl }/addcountry/`,employee);
  }
  
}
