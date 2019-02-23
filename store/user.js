export const mutations = {
  updateUser(state, payload) {
    state.user = payload
  },
  updateForm(state, payload) {
    state.frm = {
      ...state.frm,
      [payload.field]: payload.value
    }
  }
}

export const actions = {
  async login({ commit, state }) {
    await this.$auth.loginWith('local', state.frm)
    return Promise.resolve()
  },
  async loginFacebook() {
    await this.$auth.loginWith('facebook')
    return Promise.resolve()
  }
}

export const state = () => ({
  frm: {
    full_name: null,
    email: null,
    password: null
  }
})
