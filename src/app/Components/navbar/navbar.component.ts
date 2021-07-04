import { UtilService } from './../../Services/util.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router, private utilService:UtilService ) { }

  ngOnInit(): void {
  }

  routeSignupPage(){
     this.router.navigate(['/sign-up']);
  }

  routeSigninPage(){
    this.router.navigate(['/login']);
  }

  toggle(){
     this.utilService.sideNavToggle.next();
  }


}
