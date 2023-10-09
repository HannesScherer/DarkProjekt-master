import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NavComponent } from './nav/nav.component';
import { AnzeigeComponent } from './anzeige/anzeige.component';
import { SuchleisteComponent } from './suchleiste/suchleiste.component';

//import { AlertModule } from '@coreui/angular';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    CreateAccountComponent,
    ImpressumComponent,
    NavComponent,
    AnzeigeComponent,
    SuchleisteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
    //AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
