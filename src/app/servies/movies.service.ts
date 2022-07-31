import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = "https://test-api.storexweb.com/"

  constructor( private http:HttpClient) { }

  getAllMovies(){
    return this.http.get(this.url + "api/movies")
  }

  addMovies(data:any){
    return this.http.post(this.url + "api/movies" , data)
  }

  deleteMovies(id:number){
    return this.http.delete(this.url + "api/movies/" + id)
  }

  getMoviesByCategory(keyWord:any){
    return this.http.get(this.url + "api/moviesByCategory/" + keyWord)
  }

  showDataMovie(id:any){
    return this.http.get(this.url + "api/movies/" + id)
  }

  updateMovie(id:any , data:any ){
    return this.http.put(this.url + "api/movies/" + id , data )
  }


}
