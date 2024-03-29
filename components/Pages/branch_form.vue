<template>
  <div class="form-container">
    <form-breadcrumb current-page="branches" :routes="routes" />
    <h3 class="form-title">{{ $t('new') }} {{ $t('branch') }}</h3>
    <branch-form
      ref="branchForm"
      :frm="state.frm"
      :loading="state.loading"
      :handle-map-click="handleMapClick"
      :supermarkets="supermarkets"
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
  data() {
    return {
      rules: {
        supermarket: { required: true, message: this.$t('required') }
      },
      routes: [{ path: '/admin/branch', name: 'list' }]
    }
  },
  computed: {
    ...mapState({ state: state => state.branch }),
    ...mapState({ supermarkets: state => state.supermarket.collection })
  },
  beforeDestroy() {
    this.$store.dispatch('branch/resetState')
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
