import { Notification } from 'element-ui'

export const mutations = {
  update(state, payload) {
    state.frm = {
      ...state.frm,
      [payload.field]: payload.value
    }
  },
  loading(state, loading) {
    state.loading = loading
  },
  error(state, error) {
    state.error = error
  }
}

const errorResponse = err => ({
  title: `${err.statusText}: ${err.status}`,
  message: err.data.message
})

export const actions = {
  async submit({ commit, state }) {
    commit('loading', true)
    try {
      await this.$axios.post('/units', state.frm)
      commit('loading', false)
      this.$router.push('/admin')
    } catch (err) {
      commit('loading', false)
      commit('error', err.response.data.message)
      Notification.error(errorResponse(err.response))
    }

    return Promise.resolve()
  }
}

export const state = () => ({
  frm: {
    name: null,
    abbr: null
  },
  loading: false,
  error: null
})
