import { Component, OnInit } from '@angular/core';
import { NOMBRE_APLICACION } from '../../../core/constantes/id-constantes';

@Component({
  selector: 'app-login-toolbar',
  templateUrl: './login-toolbar.component.html',
  styleUrls: ['./login-toolbar.component.css']
})
export class LoginToolbarComponent implements OnInit {

  appTitle = NOMBRE_APLICACION;
  constructor() { }

  ngOnInit() {
  }

}
