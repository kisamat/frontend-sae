import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SimpleModalModule } from 'ngx-simple-modal';

import { RutasService } from './services/rutas.service';
import { AfinidadesService } from './services/afinidades.service';
import { ProgramasService } from './services/programas.service';
import { AsignaturasService } from './services/asignaturas.service';
import { RutasusuariosService } from './services/rutasusuarios.service';

//validación de usuarios
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { BuscarService } from './services/buscar.service';



import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { LoginComponent } from './components/login/login.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { RmenuComponent } from './components/rmenu/rmenu.component';
import { EquivalenciasComponent } from './components/equivalencias/equivalencias.component';
import { AfinidadesComponent } from './components/afinidades/afinidades.component';
import { RutasusuariosComponent } from './components/rutasusuarios/rutasusuarios.component';
import { AsignaturasusuariosComponent } from './components/asignaturasusuarios/asignaturasusuarios.component';
import { MisLikesComponent } from './components/rutasusuarios/mis-likes.component';
import { ComunidadComponent } from './components/rutasusuarios/comunidad.component';
import { MisrutasComponent } from './components/misrutas/misrutas.component';
import { CrearComponent } from './components/misrutas/crear.component';
import { AsignaturasrutaComponent } from './components/misrutas/asignaturasruta.component';
import { ConfirmComponent } from './components/confirm/confirm.component';


import { APP_ROUTING } from './app.routes';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RutasComponent,
    LoginComponent,
    PoliticasComponent,
    AsignaturasComponent,
    RmenuComponent,
    EquivalenciasComponent,
    AfinidadesComponent,
    RutasusuariosComponent,
    AsignaturasusuariosComponent,
    MisLikesComponent,
    ComunidadComponent,
    MisrutasComponent,
    CrearComponent,
    AsignaturasrutaComponent,
    ConfirmComponent,

  ],
  imports: [
    BrowserModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    SimpleModalModule.forRoot({container: "modal-container"}),
    APP_ROUTING

  ],

  providers: [
    AfinidadesService,
    RutasService,
    RutasusuariosService,
    ProgramasService,
    BuscarService,
    AsignaturasService,
    AuthGuard,
    AuthenticationService,
    UserService/*,
    { provide: Constants, useValue: Constants }*/
  ],
  entryComponents: [
    ConfirmComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
