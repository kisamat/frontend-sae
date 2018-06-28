import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AsignaturasService} from '../../services/asignaturas.service';
import {RutasService} from '../../services/rutas.service';


@Component({
  selector: 'app-asignaturasusuarios',
  templateUrl: './asignaturasusuarios.component.html'
})
export class AsignaturasusuariosComponent implements OnInit {
  asignaturas:any=[];
  id:number;
  like:any;
  info_ruta:any='';
  cod_uniprograma:number;
  loading:boolean=true;
  programa_actual:any=localStorage.getItem('programaactual');
  usuario = JSON.parse(localStorage.getItem('currentUser'));
  

  constructor(private _asignaturas:AsignaturasService,private _rutas:RutasService,private router:Router,  private activatedRoute:ActivatedRoute) {
    //console.log("prueba="+this.programa_actual.nombre_programa);
    //console.log("prueba2="+JSON.stringify(this.programa_actual));

    this.activatedRoute.params.subscribe(parametros=>{
        //console.log(parametros);
        this.id=parametros['id'];
        

        this.cod_uniprograma=parametros['cod_uniprograma'];

        localStorage.setItem('cod_uniprograma',this.cod_uniprograma.toString());

        
        this.obtenerAsignaturas(this.id,this.cod_uniprograma);
        this.obtenerLikeRuta(this.id);
        this.obtenerRuta(this.id);
    })
  }

  ngOnInit() {
  }
  obtenerRuta(id){
    this._rutas.getRutaUsuario(id)
        .subscribe(data=>{
                setTimeout(()=> {
                  this.loading=false
                  //console.log(data);
                  this.info_ruta=data;

                }, 1000)
        });
  }
  obtenerAsignaturas(id,cod_uniprograma){
    this._asignaturas.getAsignaturasUsuario(id,cod_uniprograma)
          .subscribe(data=>{
                setTimeout(()=> {
                    this.loading=false
                    this.asignaturas= data;
                }, 1000)
          })    
  }
  obtenerLikeRuta(id){
    
    console.log(this.usuario.username); //true
    //usuario.username="fafafafa";
    this._rutas.getLikeRutaUsuario(id,this.usuario.username)
          .subscribe(data=>{
              setTimeout(()=> {
                this.loading=false
                if(data.cod_ruta!=""){
                  this.like= data.cod_ruta;
                }else{
                  this.like=0;
                }
                
              }, 1000)
          }) 
  }
  meGusta(val){
    console.log(val);
    console.log(this.id);
    if(val==1){
      this._rutas.likeRutaUsuario(this.id,this.usuario.username)
                .subscribe(data=>{
                    setTimeout(()=> {
                      this.loading=false
                      console.log(data);
                      this.like = 1;  
                    }, 1000)
                }); 
      
    }else{
      this._rutas.unlikeRutaUsuario(this.id,this.usuario.username)
                 .subscribe(data=>{
                    setTimeout(()=>{
                      this.loading=false
                      console.log(data);
                      this.like = 0;  
                    })  
                 }) 
      
    }
    //

  }

}
