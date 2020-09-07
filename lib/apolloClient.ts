import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import fetch from 'cross-fetch';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:3000/api/graphql',
      credentials: 'same-origin',
      fetch,
    }),
    cache: new InMemoryCache({}),
  });
}

export function initializeApollo(initialState: unknown = null): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient || createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _apolloClient.cache.restore({ ...existingCache, ...(initialState as any) });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: unknown): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
