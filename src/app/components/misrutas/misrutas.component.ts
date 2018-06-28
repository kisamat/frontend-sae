import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { ConfirmComponent } from '../confirm/confirm.component';
import { RutasusuariosService } from '../../services/rutasusuarios.service';

@Component({
  selector: 'app-misrutas',
  templateUrl: './misrutas.component.html',
  styleUrls: ['./misrutas.component.css']
})
export class MisrutasComponent implements OnInit {
  rutasPrograma:any[];
  loading:boolean=true;
  usuario = JSON.parse(localStorage.getItem('currentUser'));
  confirmResult = null;

  constructor(private _rutas:RutasusuariosService,private SimpleModalService: SimpleModalService) {
      this.verRutas();
  }

  ngOnInit() {
  }
  verRutas(){
    //console.log(this.idprograma);
    //this.usuario.username
      this._rutas.getRutasUsuarios(this.usuario.username)
          .subscribe(data=>{
              setTimeout(()=> {
                  //console.log(data)
                  this.loading=false
                  this.rutasPrograma= data;
              }, 1000)
          });
  }
  eliminarRuta(idruta){

    this.SimpleModalService.addModal(ConfirmComponent, {
      title: 'Confirmación',
      message: '¿Desea eliminar este item?'})
      .subscribe((isConfirmed) => {
        console.log(idruta);
        if(isConfirmed){
          this._rutas.eliminarRutaUsuario(idruta)
              .subscribe(data=>{
                  setTimeout(()=>{
                    this.loading=false
                    console.log(data);
                    //this.like = 0;
                  })
              })
        }
    });


  }

}
