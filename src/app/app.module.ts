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
import { NotFoundComponent } from './not-found/not-found.component';
import { DesignPaketComponent } from './design-paket/design-paket.component';
import { HttpClientModule } from '@angular/common/http';
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
    SuchleisteComponent,
    NotFoundComponent,
    DesignPaketComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
    //AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
