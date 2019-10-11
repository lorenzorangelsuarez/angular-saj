import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

// CLASSES
import { ServidorPublico } from '../../../core/classes/ServidorPublico';

// SERVICES
import { LoginService } from '../../../services/login.service';
import { ServidorPublicoService } from '../../../services/servidor-publico.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;
  servidorPublico: ServidorPublico   

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private servidorPublicoService: ServidorPublicoService,
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

      // Se obtiene la información de un Servidor Público a travéz del servicio correspondiente
      this.servidorPublicoService.obtenerServidorPublicoByEMail(userData).subscribe(response =>{
      // Se asigna la respuesta a la propiedad local (Servidor Público)  
      this.servidorPublico = response;   
      localStorage.setItem('idServidorPublico', this.servidorPublico.idServidorPublico.toString()); 
        /*
        if(this.servidorPublico == null){
            this.openSnackBar(`El usuario y/o la contraseña son incorrectos`, 'cerrar');
            this.submitted = false;
            return;
         }
         else if (this.servidorPublico.passwordUsuario == ""){
            this.openSnackBar(`El usuario ingresado no se encuentra registrado`, 'cerrar');
            this.submitted = false;
            return;
         }
          sessionStorage.setItem('authToken', this.servidorPublico.passwordUsuario);
          */
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
    /*
    * Se asignan los valores de la propiedad Servidor Público local a la variable de la misma propiedad 
    * que se encuentra en el servicio ServidorPublicoService para dejarlo disponible en la navegación
    * que se efectua hacía el componente del  menu principal
    */
    this.servidorPublicoService.servidorPublico = this.servidorPublico;
    this.router.navigate(['menu_bienvenida']),{
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
