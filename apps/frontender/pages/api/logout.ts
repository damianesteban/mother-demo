import { magic } from '@mother-demo/auth'
import { removeTokenCookie } from '@mother-demo/auth'
import { getLoginSession } from '@mother-demo/auth'

export default async function logout(req, res) {
  try {
    const session = await getLoginSession(req)

    if (session) {
      await magic.users.logoutByIssuer(session.issuer)
      removeTokenCookie(res)
    }
  } catch (error) {
    console.error(error)
  }

  res.writeHead(302, { Location: '/' })
  res.end()
}
