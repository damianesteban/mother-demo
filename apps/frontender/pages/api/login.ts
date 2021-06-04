import { magic } from '@mother-demo/auth'
import { setLoginSession } from '@mother-demo/auth'

export default async function login(req, res) {
  try {
    const didToken = req.headers.authorization.substr(7)
    const metadata = await magic.users.getMetadataByToken(didToken)
    const session = { ...metadata }

    await setLoginSession(res, session)

    res.status(200).send({ done: true })
  } catch (error) {
    res.status(error.status || 500).end(error.message)
  }
}
