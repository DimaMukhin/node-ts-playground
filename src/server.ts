import * as Koa from 'koa';
import * as Router from 'koa-router';
import { ApolloServer, gql } from 'apollo-server-koa';

const app = new Koa();
const router = new Router();

const schema = gql`
  type Query {
    me: User
    user: User
  }

  type User {
    username: String!
  }
`;

const resolvers = [{
    Query: {
        me: () => {
            return {
                username: 'Robin Wieruch',
            };
        },
        user: () => {
            return {
                username: 'Dave Davids',
            };
        },
    },
}];

// @ts-ignore
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

// api routes
require('./routes')(router);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log('Server running on port 3000');