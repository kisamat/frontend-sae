import { Injectable } from '@angular/core';
import {Http,Response,Headers,URLSearchParams,RequestOptions} from '@angular/http';
import {URL_API} from '../app.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RutasService {
  rutas:any=[];

  //urlBusqueda:string='http://www.pregrado.unal.edu.co/pruebas/rutas/rutas/rutas/rutas';
  urlBusqueda:string=`${URL_API}rutas/rutas/rutas`;
  urlUsuarios:string=`${URL_API}rutas/rutas/rutasusuarios`;
  urlUsuarioLike:string=`${URL_API}rutas/rutas/likeusuario`;
  urlUsuarioUnlike:string=`${URL_API}rutas/rutas/unlikeusuario`;
  urlRutaUsuario:string=`${URL_API}rutas/rutas/rutausuario`;
  urlRutasUsuarios:string=`${URL_API}rutas/rutasusuarios/rutasusuarios`;

  constructor(private http:Http) { }


  getRutas(termino:number){
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
  getRutasUsuarios(termino?:any,nivel?:number){

    let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

    if(termino){
        var url=`${this.urlUsuarios}/${ termino }/${ nivel }`
    }else{
        var url=`${this.urlUsuarios}`
    }


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

    let url=`${this.urlRutaUsuario}/${ cod_ruta }`

    //console.log(url);
    return this.http.get(url,headers)
      .map(res=>{
            //console.log(res);
            return res.json().data;
      })
      .catch(e => {
          if (e.status === 400) {
              return ('Bad Request');
          }
        // do any other checking for statuses here
      });

  }
  getLikeRutaUsuario(id:number,username:string){

    let headers: RequestOptions = new RequestOptions({ headers: new Headers({'Content-Type':'application/json' })});

    let url=`${this.urlUsuarioLike}/${ id }/${ username }`;



   return this.http.get(url,headers)
     .map((response) => {
         //console.log(response.json().data);
         if(response.json().data){
            return response.json().data;
         }else{
            return 0;
         }

     })
     .catch(e => {
         if (e.status === 400) {
             return ('Bad Request');
         }
       // do any other checking for statuses here
     });
  }
  likeRutaUsuario(id:number,username:string){


        let url=`${this.urlUsuarioLike}`;
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('ruta', id.toString());

        //let body = urlSearchParams.toString()


        return this.http.post(url,urlSearchParams)
            .map((response) => {
                console.log(response.json().data);
                return response.json().data;
            })
            .catch(e => {
                if (e.status === 400) {
                    return ('Bad Request');
                }
            // do any other checking for statuses here
            });

    }
    unlikeRutaUsuario(id:number,username:string){


       let url=`${this.urlUsuarioUnlike}/${ id }/${ username }`;


       return this.http.get(url)
         .map((response) => {
             //console.log(response.json().data);
            // console.log(response.json().data);
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
