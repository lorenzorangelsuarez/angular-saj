import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: Usuario;

  constructor() { }


  validarUsuario(usuario: any): Observable<Usuario>{
    this.usuario = usuario;
    console.log("Desde el service: ", usuario);
    return of(this.usuario);
  }
}
