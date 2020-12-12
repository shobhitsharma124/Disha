import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewAppComponent } from './view-app/view-app.component';
import { PlaceAppComponent } from './place-app/place-app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "place_app", component: PlaceAppComponent },
  { path: "view_app",component: ViewAppComponent },
  { path: "contact_us",component: ContactUsComponent },
  { path: "search",component: SearchComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }