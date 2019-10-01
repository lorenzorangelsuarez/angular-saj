import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Asunto }  from '../classes/asunto';
import { getAsuntos, getAsuntosByIdDestinatario } from '../queries/obtener-asuntos';

@Injectable({
  providedIn: 'root'
})
export class AsuntosService {
  
  asuntos: Asunto[];
  
  constructor(private apolloService: Apollo) { 
    this.asuntos = [];
  }
  
 /*
  Obtiene una lista de todos los Asuntos en el SCG
 */
  getAsuntos(): Observable<Asunto[]>{
  this.apolloService
    .watchQuery({
      query: getAsuntos,
    }).valueChanges.subscribe(result =>{
      for (var i in result.data['getAllAsuntos']){
        this.asuntos.push(result.data['getAllAsuntos'][i]);
      }
    });
    return of (this.asuntos);
  }

  /*
  Obtiene una lista de  los Asuntos en el SCG por Destinatario
 */
  getAsuntosByIdDestinatario(id: number): Observable<Asunto[]>{
    this.apolloService
      .watchQuery({
        query: getAsuntosByIdDestinatario, variables: { idDestinatario: id } 
      }).valueChanges.subscribe(result =>{
        for (var i in result.data['getAllAsuntos']){
          this.asuntos.push(result.data['getAllAsuntos'][i]);
        }
      });
      return of (this.asuntos);
    }
    
}
