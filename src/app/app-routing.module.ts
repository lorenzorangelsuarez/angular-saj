import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsuntosComponent } from './components/asuntos/asuntos.component';
import { LoginComponent } from './components/login-components/login/login.component';
import { MenuBienvenidaComponent } from './components/menu-bienvenida/menu-bienvenida.component';
import { TurnosComponent } from '../app/components/turnos/turnos.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { DetalleTurnoComponent } from './components/detalle-turno/detalle-turno.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'asuntos', component: AsuntosComponent },
  { path: 'menu_bienvenida', component: MenuBienvenidaComponent },
  { path: 'turnos/:idEstatusTurno', component: TurnosComponent },
  { path: 'respuesta', component: RespuestaComponent},
  { path: 'detalle_turno', component: DetalleTurnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
