import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';

import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  password:string;

  constructor(private router: Router, private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this._authenticationService.logout();
  }
  login() {
      this.loading = true;
      let temp= CryptoJS.enc.Utf8.parse(this.model.password)
      this.password = CryptoJS.enc.Base64.stringify(temp);

      this._authenticationService.login(this.model.username, this.password)
          .subscribe(result => {

              if (result === true) {
                  // login successful
                  this.router.navigate(['/home']);
              } else {
                  console.log("pailas");
                  // login failed
                  this.error = 'Usuario o contraseña incorrecta';
                  this.loading = false;
              }
          });
    }

}
