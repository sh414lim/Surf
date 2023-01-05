import * as React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import FilmList from './film/FilmList';
import { BrowserRouter, Route } from 'react-router-dom';

//GraphQl 요청과 캐시관리
const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" component={FilmList} />
      </BrowserRouter>
    </ChakraProvider>
  </ApolloProvider>
);
