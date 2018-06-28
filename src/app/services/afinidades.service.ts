import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {URL_API} from '../app.constants';
import 'rxjs/add/operator/map';



@Injectable()
export class AfinidadesService {
  rutas:any=[];

  //urlBusqueda:string='http://www.pregrado.unal.edu.co/pruebas/rutas/afinidades/afinidades/afinidades';
  urlBusqueda:string=`${URL_API}afinidades/afinidades/afinidades`;


  constructor(private http:Http) { }


  getAfinidades(termino:number){
      let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

      let url=`${this.urlBusqueda}/${ termino }`

      return this.http.get(url,headers)
        .map((response) => {
            //console.log(response.json().data);
            return response.json().data;
        })
        .catch(e => {
            if (e.status === 400) {
                return ('Bad Request');
            }
          // do any other checking for statuses here
        });

  }

}
