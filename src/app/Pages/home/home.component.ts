import { UtilService } from './../../Services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private utilService:UtilService ) { }

  sideNav:boolean = false;

  ngOnInit(): void {
     this.utilService.sideNavToggle.asObservable().subscribe(
       ()=>{
            this.toggleSideNav();
       },(error)=>{ console.log(error) }
     )
  }

  toggleSideNav(){
    this.sideNav=!this.sideNav;
  }

}
