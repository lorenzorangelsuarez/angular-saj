import { Component, OnInit, ViewChild } from '@angular/core';
import { Asunto } from '../../core/classes/Asunto';
import { Turno } from '../../core/classes/Turno';
import { TurnosService } from '../../services/turnos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// IMPORTS PARA LA TABLA Y SUS COMPONENTES
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

// IMPORT PARA LAS CONSTANTES
import { ID_SERVIDOR_PUBLICO, ID_ESTATUS_TURNO } from '../../core/constantes/id-constantes';
import { estatusTurnoEnum } from '../../core/enums/EstatusTurnoEnum';
import { displayedColumns, titulos } from '../../core/constantes/mock-constantes';
import { URL_LOGIN, URL_RESPUESTA, URL_DETALLE_TURNO } from '../../core/constantes/url-constantes';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  /* CONSTANTES PARA LAS URL */
  readonly estatusTurnoEnum : typeof estatusTurnoEnum = estatusTurnoEnum ;   
  readonly URL_RESPUESTA: typeof URL_RESPUESTA = URL_RESPUESTA;
  readonly URL_DETALLE_TURNO: typeof URL_DETALLE_TURNO = URL_DETALLE_TURNO;

  arrayAsuntos: Asunto[]; // LISTADO DE LOS ASUNTOS YA SEAN PENDIENTES O ATENDIDOS
  displayedColumns: any;  // COLUMNAS QUE DEBERÁ TENER LA TABLA DE LOS TURNOS PENDIENTES O ATENDIDOS
  titulos: any;           // TÍTULOS DE LAS COLUMNAS DE LA TABLA 
  turnosDataSource: any;  // DATASOURCE QUE SE PASA AL DATA TABLE
  idEstatusTurno: number; // EL ID DEL ESTATUS DEL TURNO QUE VIENE COMO VARIABLE DEL ROUTING
  /**
   * SE UTILIZA PARA EL FILTRO EN LA PLANTILLA HTML
   * @param filterValue 
   */
  applyFilter(filterValue: string) {
    this.turnosDataSource.filter = filterValue.trim().toLowerCase();
  }
  /**
   * SE UTILIZA PARA EL PAGINADOR QUE SE ENCUENTRA AL PÍE DE LA TABLA
   */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  /**
   * SE UTILIZA PARA EL ORDENAMIENTO EN LOS ENCABEZADOS DE LA TABLA
   */
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private turnosService: TurnosService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.displayedColumns = displayedColumns;
    this.titulos = titulos;
    this.obtenerListaTurnos();
  }

  /*
  * Obtiene una lista de los Turnos mediante el Servicio de los Turnos. Toma los parámetros
  * de idServidorPublico del Local Storage y el idEstatusTurno del RouterLink 
  */
  obtenerListaTurnos(){
    this.route.paramMap.subscribe(params => {
      this.idEstatusTurno = Number(params.get(ID_ESTATUS_TURNO));
      var idServidorPublico = Number(localStorage.getItem(ID_SERVIDOR_PUBLICO));
      if (idServidorPublico > 0){
        this.turnosService.obtenerListadoTurnos(idServidorPublico, this.idEstatusTurno)
          .subscribe(response =>{
            this.turnosDataSource = new MatTableDataSource<Turno>(response);
              this.turnosDataSource.paginator = this.paginator;
              this.turnosDataSource.sort = this.sort;
          }, error =>{
            console.log("error: ", error)
            this.redireccionar(URL_LOGIN);    
          })
      }
      else{
        this.redireccionar(URL_LOGIN);
      }
    })
  }

 /**
  * Redirecciona a la URL que se pase como parámetro
  * @param ruta  LA RUTA A LA QUE SE DEBERÁ REDIRECCIONAR
  */
  redireccionar(ruta: String){
    console.log(ruta);
    this.router.navigate([ruta]),{
      skipLocationChange: false
    }
  }

  
}
