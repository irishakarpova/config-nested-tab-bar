import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import {serverUrl} from './config'
import App from './App';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route} from "react-router-dom"


const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache(),
  resolvers: {}
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider  theme={theme}>
      <Router>
        <Route path="/" render={()=>{return <App/>}}/>
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
