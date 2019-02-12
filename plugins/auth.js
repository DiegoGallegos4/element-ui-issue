export default async function({ app }) {
  if (!app.$auth.loggedIn) return

  const auth = app.$auth
  const strategy = auth.strategy.name
  if (strategy === 'facebook') {
    try {
      const { token } = await app.$axios.$post('auth/facebook', {
        access_token: auth.getToken(strategy).substr(7)
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
