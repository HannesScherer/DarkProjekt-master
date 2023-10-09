import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-anzeige',
  templateUrl: './anzeige.component.html',
  styleUrls: ['./anzeige.component.scss']
})
export class AnzeigeComponent implements OnInit {

  

  eingabe: string = '';
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const eingabeParam = params.get('eingabe');
      if (eingabeParam !== null) {
        this.eingabe = eingabeParam;
        console.warn("hatGeklappt");
      }
      
    });
    
    
  }

  

}
