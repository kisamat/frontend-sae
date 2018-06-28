import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AsignaturasService} from '../../services/asignaturas.service';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['../../app.component.css']
})
export class AsignaturasComponent implements OnInit {
  asignaturas:any=[];
  id:number;
  cod_uniprograma:number;
  loading:boolean=true;
  programa_actual:any=localStorage.getItem('programaactual');
  nombre_ruta:any;

  constructor(private _asignaturas:AsignaturasService,private router:Router,  private activatedRoute:ActivatedRoute) {
    //console.log("prueba="+this.programa_actual.nombre_programa);
    //console.log("prueba2="+JSON.stringify(this.programa_actual));

    this.activatedRoute.params.subscribe(parametros=>{
        //console.log(parametros);
        this.id=parametros['id'];
        this.obtenerRuta(this.id)
        console.log("prueba"+this.nombre_ruta);
        this.cod_uniprograma=parametros['cod_uniprograma'];
        localStorage.setItem('cod_uniprograma',this.cod_uniprograma.toString());

        if(this.id){
              this._asignaturas.getAsignaturas(this.id, this.cod_uniprograma)
                  .subscribe(data=>{
                        setTimeout(()=> {
                            this.loading=false
                            this.asignaturas= data;
                        }, 1000)
                  })
        }

    })
  }

  ngOnInit() {
  }


  obtenerRuta(cod_ruta){
      this._asignaturas.getRuta(cod_ruta)
          .subscribe(data=>{
                  //localStorage.setItem('programaactual',data.programa);
                  console.log(data.nombre_ruta);
                  //this.nombre_ruta=data.nombre_ruta;
                  //return data.nombre_ruta;
                  this.nombre_ruta=data.nombre_ruta;
          });
  }

}
