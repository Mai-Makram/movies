import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/servies/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  name:string = ''
  description:string = ''
  category_id:string = ''
  image!:File
  
  constructor( private movieService:MoviesService , private router:Router ) { }

  uploadFile(event:any){
    this.image = event.target.files[0]
    //console.log(event.target.files[0])
  }

  addMovie(){
    const formdata = new FormData();
    formdata.append('name', this.name);
    formdata.append('description', this.description);
    formdata.append('image',this.image);
    formdata.append('category_id', this.category_id);
    this.movieService.addMovies(formdata).subscribe({
      next:(res:any)=>{
        console.log(res)
        //alert("add movie is done")
        this.router.navigateByUrl('/movies')
      }, error:(err:any)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
  }

}
