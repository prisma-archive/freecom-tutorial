# Freecom Full-Stack Tutorial Series

In this repository, you find the code for each chapter of the [Freecom](https://www.graph.cool/freecom/) tutorial series. With every new chapter, we're adding _two_ new folders to the repository that will generally be named as follows:
 
- `freecom-0X`:  Contains the starter code for chapter `X`
- `freecom-0X-final`: Contains the final code for chapter `X` and serves as a reference solution if you get lost along the way 

Note that you'll have to [add your own GraphQL endpoint](https://www.youtube.com/watch?v=ZItsQWNPw1U&feature=youtu.be&t=8m8s) in `src/index.js`.

## Previous Chapters

The chapters provide a high-level overview on the concepts being used. If you want to code along, watch our videos to get step-by-step instructions for implementing the next features.

- Building Intercom with GraphQL, Apollo & React (Overview) | [Chapter](https://www.graph.cool/docs/tutorials/freecom-overview-intercom-tutorial-e8a6ajt8ax/) | [Video](https://www.youtube.com/watch?v=VEPAoDDv6dg)
- Designing the Schema & GraphQL Server (1/6) | [Chapter](https://www.graph.cool/docs/tutorials/freecom-1-schema-graphql-server-xuakjj68lp/) | [Video](https://www.youtube.com/watch?v=4q0fFEypacA)
- Apollo Setup & GraphQL Queries/Mutations in React (2/6) | [Chapter](https://www.graph.cool/docs/tutorials/freecom-2-apollo-queries-mutations-oe8ahyo2ei) | [Video](https://www.youtube.com/watch?v=ZItsQWNPw1U)
- Realtime Updates with GraphQL Subscriptions (3/6) | [Chapter](https://www.graph.cool/docs/tutorials/freecom-3-subscriptions-die6mewitu/) | [Video](https://www.youtube.com/watch?v=mJMYyniCJe4)

## Getting the GraphQL Endpoint

This is what the [data model](http://graphqlbin.com/freecom.graphql) for Freecom looks like:

```graphql
type Message {
  agent: Agent @relation(name: "MessagesFromAgents")
  conversation: Conversation @relation(name: "MessagesInConversation")
  createdAt: DateTime!
  id: ID!
  text: String!
  updatedAt: DateTime!
}

type Conversation {
  agent: Agent @relation(name: "ConversationsFromAgent")
  createdAt: DateTime!
  customer: Customer @relation(name: "ConversationsFromCustomer")
  id: ID!
  messages: [Message!]! @relation(name: "MessagesInConversation")
  slackChannelIndex: Int!
  updatedAt: DateTime!
}

type Agent {
  conversations: [Conversation!]! @relation(name: "ConversationsFromAgent")
  createdAt: DateTime!
  id: ID!
  imageUrl: String!
  messages: [Message!]! @relation(name: "MessagesFromAgents")
  slackUserId: String!
  slackUserName: String!
  updatedAt: DateTime!
}

type Customer {
  conversations: [Conversation!]! @relation(name: "ConversationsFromCustomer")
  createdAt: DateTime!
  id: ID!
  name: String!
  updatedAt: DateTime!
}
```

You can generate your own GraphQL API from this schema by using the [Graphcool CLI](https://www.npmjs.com/package/graphcool):

```
# Install the Graphcool CLI
npm install -g graphcool

# Get the GraphQL Endpoint
graphcool create http://graphqlbin.com/freecom.graphql -n Freecom
```
