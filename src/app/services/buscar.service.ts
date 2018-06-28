import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {URL_API} from '../app.constants';
import 'rxjs/add/operator/map';



@Injectable()
export class BuscarService {
  rutas:any=[];

  //urlBusqueda:string=`${URL_API}asignaturas/asignaturas/asigusuariosajax/`;
  urlBusqueda:string='http://localhost/rutas/backend/asignaturas/asignaturas/asigusuariosajax/';

  constructor(private http:Http) { }

  search_word(term){
        return this.http.get(this.urlBusqueda + term).map(res => {
            //console.log(res.json().data)
            return res.json().data.map(item=>{
              //console.log(item.asignatura)
              return item.asignatura;
            })
          /*  return res.json().map(item => {
                console.log(item)
                //return item.word
            });*/
        });
  }


}
