import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RutasService } from '../../services/rutas.service';
import { ProgramasService } from '../../services/programas.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AppComponent }  from '../../app.component';
import { RmenuComponent }  from '../rmenu/rmenu.component';


@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html'
})

export class RutasComponent implements OnInit {
  idsede:string;
  idfacultad:string;
  idprograma:number;
  sedes:any=[];
  facultades:any=[];
  programas:any=[];
  rutasPrograma:any[];
  loading:boolean=true;
  programa_actual:String="";


  constructor(private _rutas:RutasService, private _programas:ProgramasService) {

    if(localStorage.getItem('cod_uniprograma')!=null){
       this.idprograma=parseInt(localStorage.getItem('cod_uniprograma'));
       this.idsede=localStorage.getItem('idsede');
       this.idfacultad=localStorage.getItem('idfacultad');
       this.listarFacultades();
       this.listarProgramas();
       this.verRutasPrograma();
       //this.obtenerPrograma(this.idprograma);
    }

    this.listarSedes();
  }
  ngOnInit() {
  }
/*
  public enviar(formPrograma: NgForm) {
      this.idprograma=formPrograma.controls['listaProgramas'].value;
      localStorage.removeItem("cod_uniprograma");
      this.verRutasPrograma();

  }
*/
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
  listarProgramas(){

      //console.log(this.idfacultad);
      localStorage.setItem('idfacultad',this.idfacultad.toString());
      this._programas.getProgramas(parseInt(this.idfacultad))
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.programas= data;
              }, 1000)
          });
  }

  verRutasPrograma(){
    this.obtenerPrograma(this.idprograma);
    //console.log(this.idprograma);
    if(this.idprograma){
      this._rutas.getRutas(this.idprograma)
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.rutasPrograma= data;
              }, 1000)
          });
    }
  }

  obtenerPrograma(idprograma){
      this._programas.getPrograma(idprograma)
          .subscribe(data=>{
                  localStorage.setItem('programaactual',data.programa);
          });
  }

}
