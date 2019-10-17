import gql from 'graphql-tag';

/*
Query de GraphQL que obtiene a todos los Asuntos del SCG
*/
export const getAsuntos = gql`
 query Auntos{
  getAllAsuntos
  {
    idAsunto
    descripcionAsunto
  }
}`;


export const getAsuntosByIdDestinatario = gql`
query asuntos($idDestinatario: Int) {
  getAllAsuntos 
  (filter:{idDestinatario: $idDestinatario})
  {
    idAsunto
    descripcionAsunto
    folioUniversal
    anio
    consecutivo
  }
}
`;

