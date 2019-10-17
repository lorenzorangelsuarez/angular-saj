import gql from 'graphql-tag';

/*
* Query que sirve para obtener todos los datos de un Servidor Público
*/

export const getServidorPublico = gql `
query servidores ($correoElectronico: String){
    getServidorPublico 
    (filter:{correoElectronico: $correoElectronico})
    {
      idServidorPublico
      credencial
      nombreServidorPublico
      apellidoPaterno
      apellidoMaterno
      #RFC
      #correoElectronico
      #fechaIngreso
      #fechaBaja
      #activo
      #clave
      #quincenaIngreso
      #quincenaBaja
      #quincenaUltimoMovimiento
      #idPosicion
      #puestoServidorPublico
      #areaServidorPublico
    }
  }  `;

  export const getNombreServidorPublicoByID = gql `
  query servidorPublicoByID ($idServidorPublico: Int){
    getServidorPublico 
    (filter:{idServidorPublico: $idServidorPublico})
    {
      idServidorPublico
      nombreServidorPublico
      apellidoPaterno
      apellidoMaterno
      correoElectronico
      
    }
  }`;
  