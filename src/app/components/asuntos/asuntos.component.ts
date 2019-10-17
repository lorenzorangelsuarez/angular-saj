import { Component, OnInit, ViewChild } from '@angular/core';
import { Asunto } from '../../core/classes/Asunto';
import { AsuntosService } from '../../services/asuntos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


import { ID_SERVIDOR_PUBLICO } from '../../core/constantes/id-constantes';


@Component({
  selector: 'app-asuntos',
  templateUrl: './asuntos.component.html',
  styleUrls: ['./asuntos.component.css']
})
export class AsuntosComponent implements OnInit {

  arrayAsuntos: Asunto[];
  displayedColumns: string[] = ['idAsunto', 'Folio', 'anio', 'Consecutivo', 'Descripción'];
  dataSource: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private asuntosService: AsuntosService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getAsuntos();
  }

  getAsuntos(){
    this.asuntosService.getAsuntosByIdDestinatario(Number(localStorage.getItem(ID_SERVIDOR_PUBLICO)))
    .subscribe(response => {
      this.dataSource = new MatTableDataSource<Asunto>(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.log("Error", error);
    });
    
    
  }

  
 
  
}
