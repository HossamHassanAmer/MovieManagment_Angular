import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { LoginComponent } from './Core/Components/Registeration/login/login.component';
import { SignUpComponent } from './Core/Components/Registeration/sign-up/sign-up.component';
import { UserProfileComponent } from './Core/Components/user-profile/user-profile.component';
import { HomeComponent } from './MovieModule/Components/home/home.component';
import { ErrorComponent } from './error/error.component';
import { MovieDetailsComponent } from './MovieModule/Components/movie-details/movie-details.component';
import { MoviesDashboardComponent } from './Admin/Pages/movies-dashboard/movies-dashboard.component';
import { UsersDashboardComponent } from './Admin/Pages/users-dashboard/users-dashboard.component';
import { AddNewAdminComponent } from './Admin/Pages/add-new-admin/add-new-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    UserProfileComponent,
    HomeComponent,
    ErrorComponent,
    MovieDetailsComponent,
    MoviesDashboardComponent,
    UsersDashboardComponent,
    AddNewAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
