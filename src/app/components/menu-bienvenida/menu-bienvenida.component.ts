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
    
  }
}
