import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'DarkProjekt';
  
  lightNav ='./assets/BurgernavV4.svg';
  lightLogo ='./assets/LogoAntrazit.svg';
  lightKreuz ='./assets/closeBlack.svg';
  darkmode = false;
  modetoggle() {
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute('dark-theme', this.darkmode ? "dark": "light");
    if(this.darkmode != true) {
      this.lightNav='./assets/BurgernavV4.svg';
      this.lightLogo ='./assets/LogoAntrazit.svg';
      this.lightKreuz ='./assets/closeBlack.svg';

    } else {
      this.lightNav='./assets/BurgernavV4Dark.svg';
      this.lightLogo ='/assets/LogoGelb.svg';
      this.lightKreuz='/assets/closeGelb.svg';
    }

  }
  tvalue:string ='';
  getValue(val:string){
    this.tvalue = val;
    console.warn(val);
  }
  handleClick(event: Event) {
    event.preventDefault();
    
  }
  
  
  
  
 


}

