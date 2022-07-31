import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/servies/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movies:any ={}

  constructor( private moviesService:MoviesService , private route:ActivatedRoute , private router:Router ) { }

  id:string = this.route.snapshot.params['id']

  getDataMovie(){
    this.moviesService.showDataMovie(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.movies= res.message
      }, error:(err:any)=>{
        console.log(err)
      }
    })
  }

  editMovie(data:any){
    this.moviesService.updateMovie(this.id ,data).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/movies')
      }
    })
  }

  ngOnInit(): void {
    this.getDataMovie()
  }

}
