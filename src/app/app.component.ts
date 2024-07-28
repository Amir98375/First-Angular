import { Component } from '@angular/core';
import {  NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector:'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule,NavbarComponent,CommonModule]

})
export class AppComponent {

    title = 'angular-routing-example';
  showNavbar = true;

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event,"event")
        this.showNavbar = !(event.url === '/login'||event.urlAfterRedirects==='/login');
      }
    });
  }
}



