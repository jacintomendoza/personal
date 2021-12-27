import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  showMenu:boolean = true;
  showInfo:boolean = true;

  toggle_menu():void{
    this.showMenu=!this.showMenu;
  }

  disable_info():void{
    this.showInfo=false;
  }

  enable_info():void{
    this.showInfo=true;
  }
}
