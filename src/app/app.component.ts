import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mark-daquis-portfolio';
  isNavToggled: boolean = false;

  constructor(public router: Router) {}

  toggleDrawer() {
    this.isNavToggled = !this.isNavToggled;
  }
}
