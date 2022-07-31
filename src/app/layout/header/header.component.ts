import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servies/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authService:AuthService ) { }

  /*--this fun. to disappear movies page if user not log in --*/
  get isLogIn(){
    let token = this.authService.getToken()
    if(token){
      return true
    }
    return false
  }
  /*----*/ 

  ngOnInit(): void {
  }

}
