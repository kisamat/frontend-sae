import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';
import { ProgramasService } from '../../services/programas.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-rutasusuarios',
  templateUrl: './mis-likes.component.html',
  styles: []
})
export class MisLikesComponent implements OnInit {
  rutasPrograma:any[];
  loading:boolean=true;
  usuario = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private _rutas:RutasService, private _programas:ProgramasService){
    this.verRutas();
  }

  ngOnInit() {
  }
  verRutas(){
    //console.log(this.idprograma);
    //this.usuario.username
      this._rutas.getRutasUsuarios(this.usuario.username,4)
          .subscribe(data=>{
              setTimeout(()=> {
                  //console.log(data)

                  this.loading=false
                  this.rutasPrograma= data;
              }, 1000)
          });
  }

}
