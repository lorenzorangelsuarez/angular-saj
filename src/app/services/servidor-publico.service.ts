import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { getServidorPublico, getNombreServidorPublicoByID } from '../core/queries/obtenerServidorPublico';
import { ServidorPublico } from '../core/classes/ServidorPublico';

@Injectable({
  providedIn: 'root'
})
export class ServidorPublicoService {

  servidorPublico: ServidorPublico;

  constructor(private apolloService: Apollo) { }

  obtenerServidorPublicoByEMail(usuario: any): Observable<any> {
    return this.apolloService.query<any>({ query: getServidorPublico, variables: { correoElectronico:usuario.username + "@funcionpublica.gob.mx"} })
      .pipe(map(result => result.data['getServidorPublico'][0]));
  }

  obtenerNombreServidorPublicoByID(idServidorPublico: number): Observable<ServidorPublico> {
    return this.apolloService.query<ServidorPublico>({ query: getNombreServidorPublicoByID, variables: {idServidorPublico: idServidorPublico} })
      .pipe(map(result => result.data['getServidorPublico'][0]));
  }

}
