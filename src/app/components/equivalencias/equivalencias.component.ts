import { Component, OnInit } from '@angular/core';
import { ProgramasService } from '../../services/programas.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../../app.component';
import { RmenuComponent }  from '../rmenu/rmenu.component';

@Component({
  selector: 'app-equivalencias',
  templateUrl: './equivalencias.component.html'
})
export class EquivalenciasComponent implements OnInit {

  programasOrigen:any=[];
  programasDestino:any=[];
  equivalencias:any=[];
  idprograma1:number;
  idprograma2:number;
  loading:boolean=true;

  constructor(private _programas:ProgramasService) {
      this.listarProgramas();
  }

  ngOnInit() {}

  listarProgramas(){
      this._programas.getProgramasEquivalencias()
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.programasOrigen= data;
              }, 1000)
          })

  }
  listarProgramasDestino(){

      this._programas.getProgramasEquivalencias(this.idprograma1)
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.programasDestino= data;
              }, 1000)
          })

  }
  listarEquivalencias(){
    // console.log(this.idprograma1);
    // console.log(this.idprograma2);
     this._programas.getEquivalencias(this.idprograma1,this.idprograma2)
         .subscribe(data=>{
             setTimeout(()=> {
                 this.loading=false
                 this.equivalencias= data;
             }, 1000)
         })
  }

}
