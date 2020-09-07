import { ApolloProvider } from '@apollo/client';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { useApollo } from '../lib/apolloClient';
import 'style/index.scss';

type AppProps = AppPropsType & {
  pageProps: {
    initialApolloState: unknown;
  };
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
