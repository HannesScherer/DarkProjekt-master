import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  lightNav = './assets/BurgernavV4.svg';
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
   /*
    if(this.menuOpen = true){
      this.lightNav = '.assets/closeBlack.svg';
    } else {
      this.lightNav = './assets/BurgernavV4.svg';
    }
  
  */
  }
}
