<template>
  <div class="form-container">
    <form-breadcrumb current-page="supermarkets" :routes="routes" />
    <h3 class="form-title">
      {{ $t('new_m') }} {{ $t('supermarket') }}
    </h3>
    <supermarket-form 
      ref="categoryForm"
      :frm="state.frm"
      :loading="state.loading"
      :rules="rules"
      :file-list="fileList"
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
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') },
        country: { required: true, message: this.$t('required') }
      },
      fileList: [],
      routes: [{ path: '/admin/supermarket', name: 'list' }]
    }
  },
  computed: {
    ...mapState({
      state: state => state.supermarket
    })
  },
  beforeDestroy() {
    this.$store.dispatch('supermarket/resetState')
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
    handleImage(file, fileList) {
      this.fileList = [file]
      this.$store.commit('supermarket/update', {
        field: 'logo',
        value: file.raw
      })
    }
  }
}
</script>
