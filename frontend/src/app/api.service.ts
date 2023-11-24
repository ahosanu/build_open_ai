import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiUrl = environment.apiUrl;
  show: boolean = false;
  homeData: any = {
    city: '',
    state: '',
    zip: '',
    select_rebate: []
  };
  homeText: string = "";

  constructor(private http: HttpClient) { }

  /*{
        "role": "user",
        "content": "Ask me  question one by one and help me to fill this form: * First Name: \n" +
          "* Last Name\n" +
          "* Address\n" +
          "* ZIP / Postal Code\n" +
          "* City\n" +
          "* State\n" +
          "* Country\n" +
          "* Email Address"
      }*/

  getAPIChat(messages: any): Observable<any> {

    return this.http.post(this.ApiUrl + '/chat_api', {messages: [
        {
          "role": "user",
          "content": this.homeText
        },
      ...messages
      ]}).pipe(map(
      data => {

        return data;
      },
      () => {
        return null;
      }
    ));
  }
}
