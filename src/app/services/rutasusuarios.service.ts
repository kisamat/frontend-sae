import { Injectable } from '@angular/core';
import {Http,Response,Headers,URLSearchParams,RequestOptions} from '@angular/http';
import {URL_API} from '../app.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RutasusuariosService {

  urlRutasUsuarios:string='http://localhost/rutas/backend/rutas/rutasusuarios/rutasusuarios';
  urlListaRutasUsuarios:string='http://localhost/rutas/backend/rutas/rutasusuarios/listarrutasusuarios';
  constructor(private http:Http) { }

  getRutasUsuarios(termino?:any){

    let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

    let url=`${this.urlListaRutasUsuarios}/${ termino }`


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
  getRutaUsuario(cod_ruta:number){

    let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

    let url=`${this.urlRutasUsuarios}/${ cod_ruta }`

    //console.log(url);
    return this.http.get(url,headers)
      .map(res=>{
            //console.log(res.json().data);
            return res.json().data;
      })
      .catch(e => {
          if (e.status === 400) {
              return ('Bad Request');
          }
        // do any other checking for statuses here
      });

  }
  crearRutaUsuario(info:any,username:string){

      let data=JSON.stringify(info)
      let url=`${this.urlRutasUsuarios}`;
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('username', username);
      urlSearchParams.append('data', data);

      //let body = urlSearchParams.toString()


      return this.http.post(url,urlSearchParams)
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
  editarRutaUsuario(id:number,info:any){

      let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});
      let url=`${this.urlRutasUsuarios}/${ id }`
      let data=JSON.stringify(info)


      return this.http.put(url,info,headers)
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
  eliminarRutaUsuario(id:any){

      let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

      let url=`${this.urlRutasUsuarios}/${ id }`;

      return this.http.delete(url,headers)
          .map(
              success => success.status
          )
          .catch(e => {
              if (e.status === 400) {
                  return ('Bad Request');
              }
          // do any other checking for statuses here
          });
  }

}
