import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlideComponent } from './slide/slide.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ourteam', component: OurteamComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'slide', component: SlideComponent},
  {path: 'modal', component: ModalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
