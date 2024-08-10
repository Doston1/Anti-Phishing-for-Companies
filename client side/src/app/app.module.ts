import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { LogComponent } from './log/log.component';
import { HomeComponent } from './home/home.component';
import { SendComponent } from './send/send.component';
import { InfoComponent } from './info/info.component';
import { TemplateComponent } from './template/template.component';
import { StaticisComponent } from './staticis/staticis.component';
import { ContactComponent } from './contact/contact.component';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateExperimentComponent } from './create-experiment/create-experiment.component';
import { AllExperimentComponent } from './all-experiment/all-experiment.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LogComponent,
    HomeComponent,
    SendComponent,
    InfoComponent,
    TemplateComponent,
    StaticisComponent,
    ContactComponent,
    RegisterComponent,
    CreateExperimentComponent,
    AllExperimentComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
