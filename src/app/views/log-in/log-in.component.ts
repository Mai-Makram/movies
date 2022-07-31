import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servies/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  /*--to handling error message--*/
  invalidLogin:boolean =false
  change(){
    this.invalidLogin = false
  }
  /*--*/ 
  constructor( private authService:AuthService , private router:Router ) { }

  logIn(data:any){
    this.authService.logIn(data).subscribe({
      next:(res:any)=>{
        console.log(res)
        localStorage.setItem("token",res.authorisation.token)
        this.router.navigateByUrl('/movies')
      },error:(err:any)=>{
        console.log(err.error.message)
        if(err.error.message){
          this.invalidLogin =true
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
