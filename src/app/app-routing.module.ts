import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MovieModule/Components/home/home.component';
import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from './Core/Components/user-profile/user-profile.component';
import { MovieDetailsComponent } from './MovieModule/Components/movie-details/movie-details.component';
import { UsersDashboardComponent } from './Admin/Pages/users-dashboard/users-dashboard.component';
import { MoviesDashboardComponent } from './Admin/Pages/movies-dashboard/movies-dashboard.component';
import { AddNewAdminComponent } from './Admin/Pages/add-new-admin/add-new-admin.component';
import { LoginComponent } from './Core/Components/Registeration/login/login.component';
import { SignUpComponent } from './Core/Components/Registeration/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'movieDetails', component: MovieDetailsComponent },
  { path: 'moviesDashboard', component: MoviesDashboardComponent },
  { path: 'usersDashboard', component: UsersDashboardComponent },
  { path: 'addNewAdmin', component: AddNewAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUP', component: SignUpComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
