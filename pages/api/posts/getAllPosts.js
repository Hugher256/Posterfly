import { getAllPostForUser } from '../../../utility/db/dbService'

export default async function handler (req, res) {
  const queryParams = req.query
  const posts = await getAllPostForUser(queryParams.username)
  res.status(200).json(posts)
}
