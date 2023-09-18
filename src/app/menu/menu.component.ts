import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showMenu: boolean = false;
  menuOptions: Map<string, string> = new Map<string, string>();

  constructor() {
    this.setMenuOptions();
  }

  setMenuOptions() {
    this.menuOptions.set('#mail', 'Home');
    this.menuOptions.set('#about-me', 'About Me');
    this.menuOptions.set('#technology-stack', 'Technology Stack');
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  originalOrder = () => 0;
}