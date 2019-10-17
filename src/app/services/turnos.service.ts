import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Turno } from '../core/classes/Turno';
import { obtenerTurnosServidorPublico } from '../core/queries/turnos-queries';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  listaTurnos: Turno[];

  constructor(
    private apolloService: Apollo
  ) { }


  /* 
  *  Obtiene una lista de los Turnos de un Servidor Público
  *  Parámetros:  idAtiende: El id del Servidor Público que deberá atender o atendió el Turno
  *               idEstatusTurno: El id del Estatus del Turno que se desee filtrar (1=pendientes, 3=atendidos)
  *  Retorno:     La lista de los Turnos que se desee obtener
  */
  obtenerListadoTurnos(idAtiende: number, idEstatusTurno: number): Observable<Turno[]>{
    return this.apolloService
      .query<Turno>({query: obtenerTurnosServidorPublico, variables: {idAtiende: idAtiende, idEstatusTurno: idEstatusTurno}})
      .pipe(map(result=> result.data['getAllTurnos']));
  } 

} // Class
