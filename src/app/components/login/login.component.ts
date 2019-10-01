import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { LoginService } from '../../core/services/login.service';
import { Usuario } from '../../core/classes/usuario'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;
  public usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
    
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      username: '', 
      password: ''
    });
  
  }


  validaUsuario(userData: any){
    console.log(userData);

    if (userData.username == "" || userData.password == ""){
        this.openSnackBar(`Debe ingresar todos los campos`, 'cerrar');
        this.submitted = false;
        return;
    }else{
      this.loginService.validarUsuario(userData).subscribe(usuarioResponse =>{
        this.usuario = usuarioResponse;
        
         if(this.usuario == null){
            this.openSnackBar(`El usuario y/o la contraseña son incorrectos`, 'cerrar');
            this.submitted = false;
            return;
         }
         else if (this.usuario.passwordUsuario == ""){
            this.openSnackBar(`El usuario ingresado no se encuentra registrado`, 'cerrar');
            this.submitted = false;
            return;
         }
         sessionStorage.setItem('authToken', this.usuario.passwordUsuario);
            this.redirect();
        }, error => {
            this.openSnackBar(`Error al ingresar al sistema: ${error}`, 'cerrar');
            this.submitted = false;
        });
    }
    
   }

    /**
   * redirecciona al menú principal si el usuario es válido.
   */
  private redirect() {
    console.log('redirect');
    this.router.navigate(['menu']),{
      skipLocationChange: false
    }
    /*
    if (this.passport.idUsuario) {
      this.router.navigate(['acuerdos'], {
        skipLocationChange: false
      });
    } else {
      this.openSnackBar(`El usuario no tiene permisos para acceder al sistema`, 'cerrar');
    }
    */
  }
  

   /**
   * Mensaje emergente para cuando se ingresan datos incorrectos de autenticación
   * @param message
   * @param action
   */
  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
