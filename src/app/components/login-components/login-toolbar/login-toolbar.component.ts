import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-toolbar',
  templateUrl: './login-toolbar.component.html',
  styleUrls: ['./login-toolbar.component.css']
})
export class LoginToolbarComponent implements OnInit {

  appTitle = 'Sistema de Asuntos Jurídicos';
  constructor() { }

  ngOnInit() {
  }

}
