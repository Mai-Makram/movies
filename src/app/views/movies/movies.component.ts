import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/servies/category.service';
import { MoviesService } from 'src/app/servies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  categories:any[] = []

  movies:any[] = []

  constructor( private moviesService:MoviesService , private categoryService:CategoryService) { }

  /*---categories---*/
  allCategory(){
    this.categoryService.getAllCategory().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.categories =res.message
      }, error:(err:any)=>{
        console.log(err)
      }
    })
  }

  filterCategory(event:any){
    let value = event.target.value
    if(value === "All"){
      this.listOfMovies()
    }else{
      this.getMoviesByCatecory(value)
    }
    //console.log(event.target.value)
  }
/*------*/

/*---Movies---*/
  getMoviesByCatecory(keyWord:any){
    this.moviesService.getMoviesByCategory(keyWord).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.movies =res.message
      }
    })
  }

  listOfMovies(){
    this.moviesService.getAllMovies().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.movies = res.message
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

  deleteMovie(id:number){
    this.moviesService.deleteMovies(id).subscribe({
      next:(res:any)=>{
        console.log(res)
      }, error:(err:any)=>{
        console.log(err)
      }
    })
  }
  /*---*/

  ngOnInit(): void {
    this.listOfMovies()
    this.allCategory()
  }

}
