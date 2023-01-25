import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent},
  {path: 'ourteam', component: OurteamComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
