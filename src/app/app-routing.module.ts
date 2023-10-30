import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuchleisteComponent } from './suchleiste/suchleiste.component';
import { AnzeigeComponent } from './anzeige/anzeige.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
const routes: Routes = [

  {path: 'app', component: AppComponent},
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: 'eingabe', component: SuchleisteComponent},
  {path: 'anzeige', component: AnzeigeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
