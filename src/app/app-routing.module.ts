import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuchleisteComponent } from './suchleiste/suchleiste.component';
import { AnzeigeComponent } from './anzeige/anzeige.component';
const routes: Routes = [

  {path: '', redirectTo: '/eingabe', pathMatch: 'full'},
  {path: 'eingabe', component: SuchleisteComponent},
  {path: 'ergebnis/:eingabe', component: AnzeigeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
