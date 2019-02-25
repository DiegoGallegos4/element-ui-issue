import { Notification } from 'element-ui'

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
  async register({ commit, state }) {
    try {
      await this.$axios.post('/auth/signup', state.frm)
      await this.$auth.loginWith('local', {
        data: {
          email: state.frm.email,
          password: state.frm.password
        }
      })
      this.$router.push('/')
    } catch (err) {
      Notification.error({
        title: 'Register',
        message: err.message
      })
    }
  },
  async login({ commit, state }) {
    try {
      await this.$auth.loginWith('local', {
        data: {
          email: state.frm.email,
          password: state.frm.password
        }
      })
      this.$router.push('/')
    } catch (err) {
      Notification.error({
        title: 'Login',
        message: err.message
      })
    }
  },
  async loginFacebook() {
    try {
      await this.$auth.loginWith('facebook')
    } catch (err) {
      Notification.error({
        title: 'Login',
        message: err.message
      })
    }
  }
}

export const state = () => ({
  frm: {
    full_name: null,
    email: null,
    password: null
  }
})
