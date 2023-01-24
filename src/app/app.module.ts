import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {MatAutocompleteModule} from '@angular/material/autocomplete';

=======
>>>>>>> 0859086c4f6094899df8668d70c8ec8ddda3bad0
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { LogInComponent } from './log-in/log-in.component';
>>>>>>> 0c1f73806ebf89f3c1d868463f6f67461a5c6905


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent
=======
=======
    LogInComponent,
>>>>>>> 0c1f73806ebf89f3c1d868463f6f67461a5c6905
    
>>>>>>> 0859086c4f6094899df8668d70c8ec8ddda3bad0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
=======
    NgModule
>>>>>>> 0c1f73806ebf89f3c1d868463f6f67461a5c6905
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
