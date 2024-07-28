import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){

  }
  gotoAbout(){
this.router.navigate(['/about'])
  }
  home(){
    this.router.navigate(['/home'])
  }
  about(){
    this.router.navigate(['/about'])
  }
}
