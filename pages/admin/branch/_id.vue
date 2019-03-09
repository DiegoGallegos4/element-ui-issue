<template>
  <div class="form-container">
    <form-breadcrumb current-page="branches" />
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('branch') }}
    </h3>
    <branch-form 
      ref="branchForm"
      :frm="state.frm"
      :loading="state.loading"
      :supermarkets="supermarkets"
      :handle-map-click="handleMapClick"
      :on-submit="onSubmit"
      :rules="rules"
      :update="update"
    />
  </div>
</template>

<script>
import FormBreadcrumb from '@/components/Forms/breadcrumb'
import BranchForm from '@/components/Forms/branch'
import { mapState } from 'vuex'
export default {
  components: {
    FormBreadcrumb,
    BranchForm
  },
  async asyncData({ store, params }) {
    await store.dispatch('branch/fetchRecord', params.id)
    await store.dispatch('supermarket/fetch')
    return { supermarkets: store.state.supermarket.collection }
  },
  data() {
    return {
      rules: {
        supermarket: { required: true, message: this.$t('required') }
      }
    }
  },
  computed: {
    ...mapState({ state: state => state.branch })
  },
  beforeDestroy() {
    this.$store.commit('branch/setForm', {
      supermarket: '',
      address: null,
      city: null,
      location: {
        type: 'Point',
        coordinates: [15.520638660195933, -88.02657544612886]
      },
      phone_number: null,
      opening: null,
      closing: null
    })
  },
  methods: {
    async handleMapClick(e) {
      const geocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${
        e.latlng.lat
      }&lon=${e.latlng.lng}&zoom=18&addressdetails=1`
      const { data } = await this.$axios.get(geocodingUrl)
      this.$store.commit('branch/update', {
        field: 'city',
        value: data.address.city
      })
      this.$store.commit('branch/update', {
        field: 'address',
        value: data.display_name
      })
      this.$store.commit('branch/update', {
        field: 'location',
        value: {
          type: 'Point',
          coordinates: [e.latlng.lat, e.latlng.lng]
        }
      })
    },
    onSubmit() {
      this.$refs.branchForm.validate(valid => {
        if (valid) return this.$store.dispatch('branch/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('branch/update', { field, value })
    }
  }
}
</script>
