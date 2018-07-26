import { Component, OnInit } from '@angular/core';
import { ProgramasService } from '../../services/programas.service';
import { AfinidadesService } from '../../services/afinidades.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../../app.component';
import { RmenuComponent }  from '../rmenu/rmenu.component';

@Component({
  selector: 'app-afinidades',
  templateUrl: './afinidades.component.html'
})
export class AfinidadesComponent implements OnInit {

  idsede:string;
  idfacultad:string;
  idprograma:number;
  sedes:any=[];
  facultades:any=[];
  programas:any=[];
  programa_actual:String="";

  programasDestino:any=[];
  afinidades:any=[];
  loading:boolean=true;


  constructor(private _programas:ProgramasService, private _afinidades:AfinidadesService) {
    if(localStorage.getItem('cod_uniprograma')!=null){
       this.idprograma=parseInt(localStorage.getItem('cod_uniprograma'));
       this.idsede=localStorage.getItem('idsede');
       this.idfacultad=localStorage.getItem('idfacultad');
       this.listarFacultades();
       this.listarProgramas();
       this.listarAfinidades();
       //this.obtenerPrograma(this.idprograma);
    }

    this.listarSedes();
  }

  ngOnInit() {}


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


  listarAfinidades(){
    // console.log(this.idprograma1);
    // console.log(this.idprograma2);
     this._afinidades.getAfinidades(this.idprograma)
         .subscribe(data=>{
             setTimeout(()=> {
                 this.loading=false
                 this.afinidades= data;
                 //console.log(data);
             }, 1000)
         })
  }

}
