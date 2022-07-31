import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servies/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService:AuthService,private router:Router) { }

  register(data:any){
    this.authService.register(data).subscribe({
      next:(res:any)=>{
        console.log(res)
        localStorage.setItem("token",res.authorisation.token)
        this.router.navigateByUrl('/login')
      },error:(err:any)=>{
        console.log(err)
    }
    })
  }

  ngOnInit(): void {
  }

}
