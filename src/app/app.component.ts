import { Component } from '@angular/core';
import { ImpressumComponent } from './impressum/impressum.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent {
  
  

  title = 'DarkProjekt';
  
  lightNav = './assets/BurgernavV4.svg';
  lightLogo = './assets/LogoAntrazit.svg';;
  lightKreuz = '';
  gitHubLight = './assets/github-mark-kleiner.svg';
  linkedInLight = './assets/linkedin.svg';;
  discordLight = './assets/discord-mark-black-kleiner.svg';


  
  
  
  darkmode = false;
  modetoggle(): boolean {
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute('dark-theme', this.darkmode ? "dark": "light");
    this.updateAssetPaths();
    return this.darkmode;

  }
  updateAssetPaths() {
    if (!this.darkmode) {
        this.lightNav = './assets/BurgernavV4.svg';
        this.lightLogo = './assets/LogoAntrazit.svg';
        this.lightKreuz = './assets/closeBlack.svg';
        this.gitHubLight = './assets/github-mark-kleiner.svg';
        this.linkedInLight = './assets/linkedin.svg';
        this.discordLight = './assets/discord-mark-black-kleiner.svg';
    } else {
        this.lightNav = './assets/BurgernavV4Dark.svg';
        this.lightLogo = './assets/LogoGelb.svg';
        this.lightKreuz = './assets/closeGelb.svg';
        this.gitHubLight = './assets/github-mark-white.svg';
        this.linkedInLight = './assets/linkedin-white.svg'; 
        this.discordLight = './assets/discord-mark-white.svg';
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

