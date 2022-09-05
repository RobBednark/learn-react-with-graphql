// From: https://www.apollographql.com/docs/react/get-started/
// Original source: https://codesandbox.io/s/get-started-coinbase-client-73r10?file=/src/index.js
import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD" {
        currency
        rate
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
  }
function RobBednarkApp() {
    return (
      <div>
        <p>This is in the RobBednarkApp component</p>
        <ExchangeRates />
      </div>
    );
}

/*
"You connect Apollo Client to React with the ApolloProvider component. Similar to React's Context.Provider, ApolloProvider wraps your React app and places Apollo Client on the context, which enables you to access it from anywhere in your component tree."
*/

render(
  <ApolloProvider client={client}>
    <RobBednarkApp />
    This is text directly within the render() function.
  </ApolloProvider>,
  document.getElementById('root')
);
