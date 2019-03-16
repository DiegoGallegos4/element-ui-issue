import routes from '~/common/routes'
import { errorResponse } from '~/common/utils'
import { Notification } from 'element-ui'

export const mutations = {
  addPrice(state) {
    state.frm.prices.push(state.frmPrice)
  },
  deletePrice(state, index) {
    state.frm.splice(index, 1)
  },
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
  updatePrice(state, payload) {
    state.frmPrice = {
      ...state.frmPrice,
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
      const resp = await this.$axios.get(routes.products)
      commit('updateCollection', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Products', err.response))
    }
  },
  async fetchRecord({ commit }, id) {
    commit('loading', true)
    try {
      const resp = await this.$axios.get(`${routes.products}/${id}`)
      commit('setForm', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Edit Product', err.response))
    }
    commit('loading', false)
  },
  async submit({ commit, state }) {
    const form = new FormData()
    const headers = { 'Content-Type': 'multipart/form-data' }
    Object.keys(state.frm).forEach(key => {
      if (key === 'prices') {
        state.frm.prices.forEach((price, index) => {
          Object.keys(price).forEach(keyPrice => {
            form.append(`prices[${index}][${keyPrice}]`, price[keyPrice])
          })
        })
      } else if (key === 'images') {
        state.frm.images.forEach(image => {
          form.append(`images`, image)
        })
      } else {
        form.append(key, state.frm[key])
      }
    })
    commit('loading', true)
    try {
      if (state.frm.id) {
        await this.$axios.put(`${routes.products}/${state.frm.id}`, form, {
          headers
        })
      } else {
        await this.$axios.post(routes.products, form, { headers })
      }
      this.$router.push('/admin')
    } catch (err) {
      Notification.error(errorResponse('Products', err.response))
    }
    commit('loading', false)
  },
  addPrice({ commit }) {
    commit('addPrice')
  },
  resetState({ commit }) {
    commit('reset')
  }
}

const getDefaultState = () => ({
  collection: [],
  frm: {
    name: null,
    images: [],
    unit: null,
    description: null,
    prices: [],
    category: null,
    brand: null
  },
  frmPrice: {
    currency: 'HNL',
    price: 0,
    supermarket: null
  },
  loading: false
})

export const state = getDefaultState()
