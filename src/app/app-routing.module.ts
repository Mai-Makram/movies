import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './servies/auth-guard.service';
import { AddMovieComponent } from './views/add-movie/add-movie.component';
import { EditMovieComponent } from './views/edit-movie/edit-movie.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { MoviesComponent } from './views/movies/movies.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path:'', component:RegisterComponent},
  { path:'login', component:LogInComponent },
  { path: 'movies', component:MoviesComponent, canActivate:[AuthGuardService]},
  { path:'addMovie', component:AddMovieComponent, canActivate:[AuthGuardService]},
  { path: 'movie/:id', component:EditMovieComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
