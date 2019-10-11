import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsuntosComponent } from './components/asuntos/asuntos.component';
import { LoginComponent } from './components/login-components/login/login.component';
import { MenuBienvenidaComponent } from './components/menu-bienvenida/menu-bienvenida.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'asuntos/:idDestinatario', component: AsuntosComponent },
  { path: 'menu_bienvenida', component: MenuBienvenidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
