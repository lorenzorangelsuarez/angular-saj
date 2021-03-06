import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const uri = 'http://dgti-eafl-asuntos-sgc-graphql-staging.200.34.175.120.nip.io/';
//const uri = 'http://localhost:5000/'; // <-- add the URL of the GraphQL server here
//const uri = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'; // <-- add the URL of the GraphQL server here
//const uri = 'http://localhost:5000/asuntos/'; // <-- add the URL of the GraphQL server here 
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache({
      addTypename: false
    }),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
