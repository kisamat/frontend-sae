import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URL_API} from '../app.constants';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';
import {Usuario} from '../interfaces/usuario.interface';


@Injectable()
export class UserService {
    public url=`${URL_API}ldap/ldap/users`;
    constructor(
        private http: Http, private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<Usuario[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get(this.url, options)
            .map((response: Response) => response.json());
    }
}
