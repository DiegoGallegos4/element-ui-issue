export default async function({ app }) {
  if (!app.$auth.loggedIn) return

  const auth = app.$auth
  const strategy = auth.strategy.name
  const user = await auth.fetchUser()

  if (strategy === 'facebook') {
    try {
      const { token } = await app.$axios.$post('auth/facebook', {
        access_token: auth.getToken(strategy).substr(7),
        device_id: user ? user.device_id : null
      })
      auth.setToken('local', 'Bearer ' + token)
      auth.setStrategy('local')
      setTimeout(async () => {
        await auth.fetchUser()
      })
    } catch (e) {
      console.log(e)
    }
  }
}
