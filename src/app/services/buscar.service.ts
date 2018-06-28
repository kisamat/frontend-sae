import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {URL_API} from '../app.constants';
import 'rxjs/add/operator/map';



@Injectable()
export class BuscarService {
  rutas:any=[];

  //urlBusqueda:string=`${URL_API}asignaturas/asignaturas/asigusuariosajax/`;
  urlBusqueda:string=`${URL_API}asignaturas/asignaturas/asigusuariosajax/`;

  constructor(private http:Http) { }

  search_word(term,usuario:string){

        let url= `${this.urlBusqueda}${ usuario }/`;
        return this.http.get(url + term).map(res => {
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
