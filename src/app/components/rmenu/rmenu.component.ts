import { Component } from '@angular/core';

@Component({
  selector: 'app-rmenu',
  templateUrl: './rmenu.component.html',
  styles: []
})
export class RmenuComponent {
  mostrar_menu:any="";
  constructor() {
    //this.mostrar_menu=localStorage.getItem('mostrar_menu');
    //console.log(this.mostrar_menu);
  }

  verMenu(ver:boolean=false){
    console.log(ver);
    //this.mostrar_menu=ver;
  }
}
