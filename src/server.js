import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// GraphQL Schema
const typeDefs = `#graphql
  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, age: Int!): User
  }

  type User {
    id: ID!
    name: String!
    age: Int!
  }
`;

// "База даних" в пам'яті
let users = [
  { id: "1", name: "Vlad", age: 21 },
  { id: "2", name: "Anastasia", age: 19 },
];

// Resolvers
const resolvers = {
  Query: {
    getUsers: () => users,
    getUserById: (_, { id }) => users.find((user) => user.id === id),
  },

  Mutation: {
    createUser: (_, { name, age }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        age,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

// Створюємо сервер
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
 

async function startServer(){
// Запускаємо сервер
const { url } = await startStandaloneServer(server, {
  listen: { port: 3005 },
});

console.log(`🚀 Server ready at ${url}`); 
} 
startServer();