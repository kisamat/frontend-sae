import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URL_API} from '../app.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';




@Injectable()
export class AuthenticationService {

  public token: string;
  public url=`${URL_API}ldap/ldap/login`;

  constructor(private http: Http) {
      // set token if saved in local storage
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({
            'Content-Type':'application/x-www-form-urlencoded'
    });
    let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString()


      return this.http.post(this.url, body, {headers})
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
              //console.log(response);
              let token = response.json() && response.json().token;
              if (token) {
                  // set token property
                  this.token = token;

                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                  // return true to indicate successful login
                  return true;
              } else {
                  // return false to indicate failed login
                  return false;
              }

          });
  }
  logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('cod_uniprograma');
      localStorage.removeItem('idsede');
      localStorage.removeItem('idfacultad');
  }

}
