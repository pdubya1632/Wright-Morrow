import {
  ApolloClient,
  InMemoryCache,
  from,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || '',
    },
  };
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError)
    console.error(
      `[Network error]: ${JSON.stringify(networkError, null, 2)})`
    );
});

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
