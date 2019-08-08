# Express, GraphQL, Apollo Server, Mongo DB

An easy way to get started with GraphQL using Apollo Server, Express and Mongo DB Atlas.
https://www.robinwieruch.de/graphql-apollo-server-tutorial/

# Installing

- Replace mongodb user and password in \src\models\index.js

```
var mongoDB = 'mongodb+srv://username:password@cluster0-vxs1e.gcp.mongodb.net/test?retryWrites=true';
```

- Replace "me" in \src\index.js

For example:
```
me: await models.UserModel.findOne({'email' : 'username@mail.com'}).populate('messages')
```

- npm install

- npm start

## Queries and Mutations
Notice the relationship of Messages and Users and the way they are returned.

Default endpoint:
```
http://localhost:8000/graphql
```

Queries

- users
- user
- me
- message
- messages

Mutations
- createUser
- deleteUser
- createMessage
- deleteMessage
- updateMessage

Query example

```
{
  users {
    id
    username
    email
    messages {
      id
      text
    }
  }
}
```

Mutations examples

```
mutation {
  createUser(user : {username : "newuser", email: "newusermail@mail.com", messages: []}) {
    id
    	username
	email
  }
}
```

```
mutation {
  createUser(user : {username : "newuser", email: "newusermail@mail.com", messages: []}) {
    id
    	username
	email
  }
}
```