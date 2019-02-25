export const mutations = {
  toggle(state) {
    state.isCollapse = !state.isCollapse
  },
  toggleLogin(state) {
    state.isLoginOpen = !state.isLoginOpen
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth && state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth && state.auth.user
  }
}

export const state = () => ({
  isCollapse: false,
  isLoginOpen: false
})

export const strict = false
