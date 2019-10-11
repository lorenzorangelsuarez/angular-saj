import { Component, OnInit } from '@angular/core';
import { ServidorPublicoService } from '../../services/servidor-publico.service';
import { ServidorPublico } from '../../core/classes/ServidorPublico';
@Component({
  selector: 'app-menu-bienvenida',
  templateUrl: './menu-bienvenida.component.html',
  styleUrls: ['./menu-bienvenida.component.css']
})
export class MenuBienvenidaComponent implements OnInit {

  servidorPublico: ServidorPublico;
  
  constructor(private servidorPublicoService: ServidorPublicoService) { }

  ngOnInit() {
    
    //localStorage.setItem('idServidorPublico', this.servidorPublicoService.servidorPublico.idServidorPublico.toString());

    /* Se toman los valores que se encuentran disponibles en la variable Servidor Público del
     * ServidorPublicoService y se asignan a la variable local del tipo ServidorPublico
    */
    //this.servidorPublico = this.servidorPublicoService.servidorPublico;
    //history.pushState('idServidorPublico', this.servidorPublico.idServidorPublico.toString());
  }
}
