import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
<<<<<<< HEAD

=======
>>>>>>> 630c54debff879017e34cb0b851814198fd87bf6
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LogInComponent } from './log-in/log-in.component';
=======
import { LogComponent } from './log/log.component';

>>>>>>> 630c54debff879017e34cb0b851814198fd87bf6



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
