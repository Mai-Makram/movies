import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './views/movies/movies.component';
import { RegisterComponent } from './views/register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { MoviesService } from './servies/movies.service';
import { AuthService } from './servies/auth.service';
import { TokenInterceptorService } from './servies/token-interceptor.service';
import { AddMovieComponent } from './views/add-movie/add-movie.component';
import { EditMovieComponent } from './views/edit-movie/edit-movie.component';
import { AuthGuardService } from './servies/auth-guard.service';
//import { AddMovieComponent } from './views/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    RegisterComponent,
    HeaderComponent,
    LogInComponent,
    AddMovieComponent,
    EditMovieComponent,
    //AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MoviesService,
    AuthService,
    AuthGuardService,
    {
      provide:HTTP_INTERCEPTORS ,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
