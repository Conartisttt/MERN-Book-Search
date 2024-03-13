const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
  }

  input BookData {
    authors: [String]
    description: String
    bookId: String,
    image: String,
    link: String
    title: String
  }

type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookData): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;