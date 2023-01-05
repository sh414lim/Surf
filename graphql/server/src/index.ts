import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import http from 'http';
import { buildSchema } from 'type-graphql';
import { FilmResolver } from './resolvers/Film';

async function main() {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [FilmResolver],
    }),

    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  });

  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV != 'production') {
      console.log(`
            server started on => http://localhost:4000
            graphql playground => http://localhost:4000/graphql
            `);
    } else {
      console.log(`
        Production server Started...
        `);
    }
  });
}

main().catch(err => console.log(err));
