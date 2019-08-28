import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesService } from './movies.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialComponent } from './material/material.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MovieSearchComponent,
    EmployeeComponent,
    LoginComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  providers: [
    MoviesService,
    MessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
