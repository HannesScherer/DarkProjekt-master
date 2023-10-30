import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-anzeige',
  templateUrl: './anzeige.component.html',
  styleUrls: ['./anzeige.component.scss']
})
export class AnzeigeComponent implements OnInit {

  suchergebnis:any;
  url: string = '/assets/suchergebniss.json';
  

  eingabe: string = '';
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {

    fetch(this.url).then(res => res.json())
    .then(json => {
      this.suchergebnis = json;
    });



    this.route.paramMap.subscribe(params => {
      const eingabeParam = params.get('eingabe');
      if (eingabeParam !== null) {
        this.eingabe = eingabeParam;
        console.warn("hatGeklappt");
      }
      
    });
    
    
  }

  

}
