import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  showMenu = false;

  changeMenuView() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  onActivate() {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }
}
