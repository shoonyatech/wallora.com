import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

// Setup your client
function GetApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new RestLink({ endpoints: { feedback: `${process.env.WALLORA_BACKEND_SUBMIT_FEEDBACK}` } }),
  })
}

export default GetApolloClient
