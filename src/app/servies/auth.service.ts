import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://test-api.storexweb.com/"

  constructor( private http:HttpClient) { }

  register(data:any){
    return this.http.post(this.url+ "api/register" , data)
  }

  logIn(data:any){
    return this.http.post(this.url + "api/login",data)
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
