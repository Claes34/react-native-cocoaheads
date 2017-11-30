import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// const NETWORK_INTERFACE_URL = 'https://ghibligraphql.herokuapp.com/graphql';
const NETWORK_INTERFACE_URL = 'http://ghibligraphql.herokuapp.com/graphql';

const client = new ApolloClient({
  link: createHttpLink({ uri: NETWORK_INTERFACE_URL }),
  cache: new InMemoryCache()
});


export default client;
