import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import * as fs from 'fs';

const supergraphSchema = fs.readFileSync(__dirname + '/assets/schema.graphql').toString();
console.log('GRAPH: ', supergraphSchema)

const gateway = new ApolloGateway({
  supergraphSdl: supergraphSchema,
  __exposeQueryPlanExperimental: true
});

const server = new ApolloServer({
  gateway,
  // Subscriptions are not currently supported in Apollo Federation
  subscriptions: false
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});
