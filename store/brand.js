import routes from '~/common/routes'
import { errorResponse } from '~/common/utils.js'
import { Notification } from 'element-ui'

export const mutations = {
  loading(state, loading) {
    state.loading = loading
  },
  setForm(state, frm) {
    state.frm = frm
  },
  update(state, payload) {
    state.frm = {
      ...state.frm,
      [payload.field]: payload.value
    }
  },
  updateCollection(state, collection) {
    state.collection = collection
  },
  reset(state) {
    Object.assign(state, getDefaultState())
  }
}

export const actions = {
  async fetch({ commit }) {
    try {
      const resp = await this.$axios.get(routes.brands)
      commit('updateCollection', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Brands', err.response))
    }
  },
  async fetchRecord({ commit }, id) {
    commit('loading', true)
    try {
      const resp = await this.$axios.get(`${routes.brands}/${id}`)
      commit('setForm', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Edit Brand', err.response))
    }
    commit('loading', false)
  },
  async submit({ commit, state }) {
    const form = new FormData()
    const headers = { 'Content-Type': 'multipart/form-data' }
    Object.keys(state.frm).map(key => form.append(key, state.frm[key]))

    commit('loading', true)
    try {
      if (state.frm.id) {
        await this.$axios.put(`${routes.brands}/${state.frm.id}`, form, {
          headers
        })
      } else {
        await this.$axios.post(routes.brands, form, { headers })
      }
      this.$router.push('/admin')
    } catch (err) {
      Notification.error(errorResponse('Brands', err.response))
    }
    commit('loading', false)
  },
  resetState({ commit }) {
    commit('reset')
  }
}

const getDefaultState = () => ({
  collection: [],
  frm: {
    name: null,
    image: null
  },
  loading: false
})

export const state = getDefaultState()
