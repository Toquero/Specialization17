import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LogInComponent } from './log-in/log-in.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    LogInComponent
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
