<template>
  <div class="form-container">
    <form-breadcrumb current-page="brands" />
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('brand') }}
    </h3>
    <brand-form 
      ref="brandForm"
      :frm="state.frm"
      :loading="state.loading"
      :rules="rules"
      :handle-image="handleImage"
      :file-list="fileList"
      :on-submit="onSubmit"
      :update="update"
    />
  </div>
</template>

<script>
import FormBreadcrumb from '@/components/Forms/breadcrumb'
import BrandForm from '@/components/Forms/brand'
import { mapState } from 'vuex'
export default {
  components: {
    FormBreadcrumb,
    BrandForm
  },
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') }
      },
      fileList: []
    }
  },
  computed: {
    ...mapState({
      state: state => state.brand
    })
  },
  beforeDestroy() {
    this.$store.dispatch('brand/resetState')
  },
  methods: {
    onSubmit() {
      this.$refs.brandForm.validate(valid => {
        if (valid) return this.$store.dispatch('brand/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('brand/update', { field, value })
    },
    handleImage(file, fileList) {
      this.fileList = [file]
      this.$store.commit('brand/update', {
        field: 'image',
        value: file.raw
      })
    }
  }
}
</script>
