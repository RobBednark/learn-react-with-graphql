// From: https://www.apollographql.com/docs/react/get-started/
import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

// Q: Where is this App() function getting called?
function App() {
    return (
      <div>
        <h2>Rob Bednark: my Apollo &lt;App&gt; component</h2>
      </div>
    );
}

/*
"You connect Apollo Client to React with the ApolloProvider component. Similar to React's Context.Provider, ApolloProvider wraps your React app and places Apollo Client on the context, which enables you to access it from anywhere in your component tree."
*/

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
