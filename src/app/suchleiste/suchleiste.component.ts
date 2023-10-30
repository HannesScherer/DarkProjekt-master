import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suchleiste',
  templateUrl: './suchleiste.component.html',
  styleUrls: ['./suchleiste.component.scss']
})
export class SuchleisteComponent {

  eingabeWert:string ='';

  constructor(private router: Router){}

 
  istNummer: boolean = false;

  pruefeNummer(): boolean{
    var i: number = 0;
    while(i < this.eingabeWert.length || isNaN(parseInt(this.eingabeWert.charAt(i)))) {
    this.istNummer = true;
    i++;
    }
    return this.istNummer;
  }

  pruefeEingabe() {
    // try {

    // if(this.eingabeWert.length >= 6 && this.pruefeNummer()){
      this.router.navigate(['/anzeige', this.eingabeWert]);
    // } else {
      // console.log('Falsche Eingabe');
    // }

//   } catch(error){
//   console.error('Fehler bei der Überprüfung',error);
  
// }
    }

}
