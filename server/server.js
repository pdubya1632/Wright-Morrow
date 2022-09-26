const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 5000;
require("dotenv").config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.get('*', (req, res) => {
//   res.send('Wrong route!');
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
