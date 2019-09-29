const { ApolloServer, gql } = require('apollo-server');
const database = require ('./database');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "tasks" type defines the queryable fields for every book in our data source.
  type tasks {
    id: Int!
    task_name: String!
    is_complete: Boolean!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    tasks : [tasks]
  }
`;

const toDo = [
  {
    id: 1,
    task_name: 'write code',
    is_complete: false
  },
  {
    id: 2,
    task_name: 'write more code',
    is_complete: false
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    tasks: () => toDo,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Apollo Server ready at ${url}`);
});
