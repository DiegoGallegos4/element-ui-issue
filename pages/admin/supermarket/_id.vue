<template>
  <div class="form-container">
    <form-breadcrumb current-page="supermarkets" />
    <h3 class="form-title">
      {{ $t('new_m') }} {{ $t('supermarket') }}
    </h3>
    <supermarket-form 
      ref="categoryForm"
      :frm="state.frm"
      :loading="state.loading"
      :rules="rules"
      :handle-image="handleImage"
      :on-submit="onSubmit"
      :update="update"
    />
  </div>
</template>
<script>
import FormBreadcrumb from '@/components/Forms/breadcrumb'
import SupermarketForm from '@/components/Forms/supermarket'
import { mapState } from 'vuex'

export default {
  components: {
    FormBreadcrumb,
    SupermarketForm
  },
  async fetch({ store, params }) {
    await store.dispatch('supermarket/fetchRecord', params.id)
  },
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') },
        country: { required: true, message: this.$t('required') }
      }
    }
  },
  computed: {
    ...mapState({
      state: state => state.supermarket
    })
  },
  methods: {
    onSubmit() {
      this.$refs.categoryForm.validate(valid => {
        if (valid) return this.$store.dispatch('supermarket/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('supermarket/update', { field, value })
    },
    handleImage(response, file, fileList) {
      this.$store.commit('supermarket/update', {
        field: 'logo',
        value: file.raw
      })
    }
  }
}
</script>
