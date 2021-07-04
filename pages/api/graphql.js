import { getSession } from '@auth0/nextjs-auth0'
import axios from 'axios'

export default async (req, res) => {
  const url = process.env.GRAPHQL_SERVER
  const session = await getSession(req, res)

  await axios
    .post(url, req.body, { headers: { Authorization: `Bearer ${session.accessToken}` } })
    .then(({ data }) => {
      res.status(200).json({ ...data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
