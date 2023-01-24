import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {MatAutocompleteModule} from '@angular/material/autocomplete';

=======
>>>>>>> 0859086c4f6094899df8668d70c8ec8ddda3bad0
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent
=======
    
>>>>>>> 0859086c4f6094899df8668d70c8ec8ddda3bad0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
