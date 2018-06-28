import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';
import { ProgramasService } from '../../services/programas.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styles: []
})
export class ComunidadComponent implements OnInit {
  idsede:string;
  idfacultad:string;
  idprograma:number;
  sedes:any=[];
  facultades:any=[];
  rutasPrograma:any[];
  loading:boolean=true;

  constructor(private _rutas:RutasService, private _programas:ProgramasService){
    this.verRutas();
  }

  ngOnInit() {
  }
  listarSedes(){
      this._programas.getSedes()
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.sedes= data;
              }, 1000)
          })

  }
  listarFacultades(){
      //console.log(this.idsede);
      localStorage.setItem('idsede',this.idsede.toString());
      this._programas.getFacultades(parseInt(this.idsede))
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.facultades= data;
              }, 1000)
          });

  }
  verRutas(){
    //console.log(this.idprograma);
      this._rutas.getRutasUsuarios()
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.rutasPrograma= data;
              }, 1000)
          });
    }

}
