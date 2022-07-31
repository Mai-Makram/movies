import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "https://test-api.storexweb.com/"

  constructor( private http:HttpClient ) { }

  getAllCategory(){
    return this.http.get(this.url + "api/category")
  }
}
