import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ProgramasService } from '../../services/programas.service';
import { FormsModule, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { RutasusuariosService } from '../../services/rutasusuarios.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./misrutas.component.css']
})
export class CrearComponent implements OnInit {
  model: any = {};
  programas:any=[];
  loading:boolean=true;
  idruta:number;
  id:number;
  usuario = JSON.parse(localStorage.getItem('currentUser'));
  constructor(private _programas:ProgramasService,private _rutas:RutasusuariosService,private router: Router,  private activatedRoute:ActivatedRoute) {
    this.listarProgramas();
    this.activatedRoute.params.subscribe(parametros=>{
          //console.log(parametros);
          this.id=parametros['id'];
          if(this.id != null){
              console.log(this.id);
              this._rutas.getRutaUsuario(this.id)
                  .subscribe(data=>this.model = data)
          }

      })
  }

  ngOnInit() {
  }
  listarProgramas(){

    //console.log(this.idfacultad);
    this._programas.getTodosProgramas()
        .subscribe(data=>{
            setTimeout(()=> {
                this.loading=false
                this.programas= data;
            }, 1000)
        });
}
guardarData(){
  if (this.id!=null){
    this.editarRuta()
  }else{
    this.crearRuta();
  }
    //console.log(this.model);

    /*if(this.idruta !=0){
        this.router.navigate(['/rutasusuarios/asignaturasruta', this.idruta]);

    }*/
}
crearRuta(){
  this._rutas.crearRutaUsuario(this.model,this.usuario.username)
             .subscribe(data=>{
                setTimeout(()=> {
                    //consoile.log(data)
                    this.loading=false
                    this.idruta= data;

                },1000)
      if(this.idruta !=0){
          this.router.navigate(['/rutasusuarios/asignaturasruta',this.idruta]);
      }
  });
}
editarRuta(){
    console.log(this.id);
    this._rutas.editarRutaUsuario(this.id,this.model)
              .subscribe(data=>{
                          setTimeout(()=> {
                              //console.log(data)
                              this.loading=false
                          },1000)

              });
    this.router.navigate(['/rutasusuarios/asignaturasruta',this.id]);


}

}
