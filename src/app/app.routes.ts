import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RutasComponent} from './components/rutas/rutas.component';
import {RmenuComponent} from './components/rmenu/rmenu.component';
import {AsignaturasComponent} from './components/asignaturas/asignaturas.component';
import {EquivalenciasComponent} from './components/equivalencias/equivalencias.component';
import {AfinidadesComponent} from './components/afinidades/afinidades.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { RutasusuariosComponent } from './components/rutasusuarios/rutasusuarios.component';
import { MisLikesComponent } from './components/rutasusuarios/mis-likes.component';
import { AsignaturasusuariosComponent } from './components/asignaturasusuarios/asignaturasusuarios.component';
import { ComunidadComponent } from './components/rutasusuarios/comunidad.component';
import { MisrutasComponent } from './components/misrutas/misrutas.component';
import { CrearComponent } from './components/misrutas/crear.component';
import { AsignaturasrutaComponent } from './components/misrutas/asignaturasruta.component';
import {AuthGuard} from './guards/auth.guard';


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'rutas', component: RutasComponent,canActivate: [AuthGuard] },
  { path: 'rmenu', component: RmenuComponent , canActivate: [AuthGuard]},
  { path: 'asignaturas/:id/:cod_uniprograma', component: AsignaturasComponent, canActivate: [AuthGuard]  },
  { path: 'equivalencias', component: EquivalenciasComponent, canActivate: [AuthGuard]},
  { path: 'afinidades', component: AfinidadesComponent,canActivate: [AuthGuard]},
  { path: 'politicas', component: PoliticasComponent},
  {
    path: 'rutasusuarios', component: RutasusuariosComponent,
    children: [
        {path: 'comunidad', component: ComunidadComponent},
        {path: 'mislikes', component: MisLikesComponent},
        {
          path: 'misrutas', component: MisrutasComponent,
          children: [
            {path: 'crearruta', component: CrearComponent}
          ]
        },
        {path: 'crearruta', component: CrearComponent},
        {path: 'asignaturasruta/:id', component: AsignaturasrutaComponent},
        {path: 'editarruta/:id', component: CrearComponent},
        { path: '**', pathMatch: 'full', redirectTo: 'comunidad' }
    ]
  },
  { path: 'asignaturasusuarios/:id/:cod_uniprograma', component: AsignaturasusuariosComponent  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
