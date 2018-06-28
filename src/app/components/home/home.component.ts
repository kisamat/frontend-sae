import { Component, OnInit,ViewChild } from '@angular/core';
import { RmenuComponent }  from '../rmenu/rmenu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css'],

})



export class HomeComponent implements OnInit {

  @ViewChild(RmenuComponent) rmenucomponent: RmenuComponent

  constructor() {
    //this.rmenucomponent.verMenu(true);
    localStorage.removeItem('cod_uniprograma');
    localStorage.removeItem('idsede');
    localStorage.removeItem('idfacultad');

  }

  ngOnInit() {
  }



}
