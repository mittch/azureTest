import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'azureTest';
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
