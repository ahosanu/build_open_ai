import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiCooperVisionDataService {

  constructor(private http: HttpClient) { }


  getLocation(dealerName: any): Observable<any> {
    return this.http.get(environment.apiUrl+'?name='+dealerName).pipe(map(
      data => {

        return data;
      },
      () => {
        return null;
      }
    ));
  }
  getModels(): Observable<any> {
    return this.http.get(environment.apiUrl+'/models').pipe(map(
      data => {

        return data;
      },
      () => {
        return null;
      }
    ));
  }

  getPrograms(): Observable<any> {
    return this.http.get(environment.apiUrl+'/programs').pipe(map(
      data => {

        return data;
      },
      () => {
        return null;
      }
    ));
  }
}
