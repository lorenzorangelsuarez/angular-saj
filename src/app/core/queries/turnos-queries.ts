import gql from 'graphql-tag';

/*
* Obtiene los Turnos de un Usuario
*/
export const obtenerTurnosServidorPublico = gql `
    query TurnosServidorPublico ($idAtiende: Int, $idEstatusTurno: Int){
        getAllTurnos 
        (filter:{idAtiende: $idAtiende, 
        idEstatusTurno: $idEstatusTurno})
        {
        idAsunto
        idTurno
        numeroTurno
        idAreaTurna
        areaTurna
        idPuestoTurna
        puestoTurna
        idTurna
        nombreTurna
        idAreaAtiende
        areaAtiende
        idPuestoAtiende
        puestoAtiende
        idAtiende
        nombreAtiende
        instruccion
        fechaCompromiso
        observaciones
        fechaResolucion
        idCaptura
        nombreCaptura
        fechaCaptura
        idEstatus
        estatusTurno
        
        }
    }`;