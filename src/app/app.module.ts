import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavigateurComponent} from './navigateur/navigateur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { ReclamationComponent } from './reclamation/reclamation.component';;
import { UserService } from './services/user.service';
import { ConsutlationComponent } from './consutlation/consutlation.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigateurComponent,
    ProfileComponent,
    ReclamationComponent,
    ConsutlationComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    IonicModule.forRoot(),
    
   
  ],
  providers: [UserService,],
  bootstrap: [AppComponent]
})
export class AppModule {
}
