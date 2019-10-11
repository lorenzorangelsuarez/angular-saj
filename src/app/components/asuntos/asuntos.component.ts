import { Component, OnInit } from '@angular/core';
import { Asunto } from '../../core/classes/Asunto';
import { AsuntosService } from '../../services/asuntos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-asuntos',
  templateUrl: './asuntos.component.html',
  styleUrls: ['./asuntos.component.css']
})
export class AsuntosComponent implements OnInit {

  asuntos: Asunto[];
  
  constructor(
    private asuntosService: AsuntosService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getAsuntos();
  }

  getAsuntos(): void {
    const id = + this.route.snapshot.paramMap.get('idDestinatario');
    console.log("id desde component: ", id);
    this.asuntosService.getAsuntosByIdDestinatario(id)
    .subscribe(response => {
      this.asuntos = response;
    });
    
    
  }
 
}
