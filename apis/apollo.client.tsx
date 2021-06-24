import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/api/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  // link: new RestLink({
  //   endpoints: {
  //     feedback: `${process.env.WALLORA_BACKEND_SUBMIT_FEEDBACK}`,
  //     majorPlannedExpensesWorkItemwise: `${process.env.WALLORA_BACKEND_TOTAL_PLANNED_AMOUNT_WORKITEMWISE}`,
  //     majorPlannedExpensesMonthwise: `${process.env.WALLORA_BACKEND_TOTAL_PLANNED_EXPENSES_MONTHWISE}`,
  //   },
  // }),
})

// NOTE: Both graphql server and mocking rest with graphql doesn't work simultaneously.
// Setup your client.
function GetApolloClient() {
  return client
}

export default GetApolloClient
