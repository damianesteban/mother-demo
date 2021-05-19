import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import * as fs from 'fs';

const supergraphSchema = fs.readFileSync('../supergraph-config.yaml').toString();

const gateway = new ApolloGateway({
  supergraphSdl: supergraphSchema
});

const server = new ApolloServer({
  gateway,
  // Subscriptions are not currently supported in Apollo Federation
  subscriptions: false
});

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});
