import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Http,Response,Headers,URLSearchParams,RequestOptions} from '@angular/http';
import {URL_API} from '../app.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AsignaturasService {
  rutas:any=[];

  urlBusqueda:string=`${URL_API}asignaturas/asignaturas/asignaturas`;
  url_ruta:string=`${URL_API}asignaturas/asignaturas/rutas`;
  urlAsginaturaUsuario:string=`${URL_API}asignaturas/asignaturas/asignaturasusuario`;
  //urlAsginaturaUsuario:string='http://localhost/rutas/backend/asignaturas/asignaturas/asignaturausuario';
  urlAsignaturasUsuario:string='http://localhost/rutas/backend/asignaturas/asignaturas/agregarasig';
  constructor(private http:Http) { }


  getAsignaturas(termino:number,cod_uniprograma:number){


      let query= `/${termino}/${cod_uniprograma}`;
      let url=this.urlBusqueda + query;

      return this.http.get(url)
        .map(res=>{
              console.log(res.json().data);
              return res.json().data;
        })

  }

  getRuta(cod_ruta:number){
      let query= `/${cod_ruta}`;
      let url=this.url_ruta + query;
      //console.log(url);
      return this.http.get(url)
        .map(res=>{
              //console.log(res.json().data);
              return res.json().data;
        })

  }

  getAsignaturasUsuario(termino:number,cod_uniprograma:number){



      let url=`${this.urlAsginaturaUsuario}/${termino}/${cod_uniprograma}`


      return this.http.get(url)
        .map(res=>{
              //console.log(res.json().data);
              return res.json().data;
        })

  }
  listarAsigUsuarios(codruta:number){
      let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

      let url=`${this.urlAsignaturasUsuario}/${codruta}`;

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
  agregarAsigUsuario(info:any,codruta:string){
      //console.log(info);

      let url=`${this.urlAsignaturasUsuario}`;


      let data=JSON.stringify(info);
      console.log(data);
      console.log(codruta);
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('codruta',codruta);
      urlSearchParams.append('data',data);

      //let body = urlSearchParams.toString()


      return this.http.post(url,urlSearchParams)
          .map((response) => {
              //console.log(response.json().data);
              return true;
          })
          .catch(e => {
              if (e.status === 400) {
                  return ('Bad Request');
              }

          // do any other checking for statuses here
          });

  }
  eliminarAsigUsuario(id:number,codruta:any){

      let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

      let url=`${this.urlAsignaturasUsuario}/${ id }/${ codruta }`;

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
