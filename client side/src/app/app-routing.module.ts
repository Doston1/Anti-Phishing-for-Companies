import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { SendComponent } from './send/send.component';
import { ContactComponent } from './contact/contact.component';
import { StaticisComponent } from './staticis/staticis.component';
import { TemplateComponent } from './template/template.component';
import { RegisterComponent } from './register/register.component';
import {CreateExperimentComponent} from './create-experiment/create-experiment.component';
import {AllExperimentComponent} from './all-experiment/all-experiment.component';
import {ProfileComponent}from './profile/profile.component'
import {LogoutComponent  } from "./logout/logout.component";
import { from } from 'rxjs';


const routes: Routes = [
  { path: "", component:LogComponent},
  { path: "logout", component:LogoutComponent},
  { path: "profile", component:ProfileComponent},
  { path: "login", component:LogComponent},
  { path: "create", component:CreateExperimentComponent},
  { path: "allexperiment", component:AllExperimentComponent},
  { path: "home", component:HomeComponent},
  { path: "contact", component:ContactComponent},
  { path: "about", component:AboutComponent},
  { path: "info", component:InfoComponent},
  { path: "send", component:SendComponent},
  { path: "staticis", component:StaticisComponent},
  { path: "template", component:TemplateComponent},
  { path: "register", component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
