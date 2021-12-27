import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  showMenu:boolean = false;

  toggle_menu():void{
    this.showMenu=!this.showMenu;
  }
}
