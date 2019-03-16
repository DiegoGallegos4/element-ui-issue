<template>
  <div class="form-container">
    <form-breadcrumb current-page="categories" :routes="routes" />
    <h3 class="form-title">
      {{ state.frm.id ? $t('edit') : $t('new') }} {{ $t('category') }}
    </h3>

    <category-form
      ref="categoryForm"
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
import CategoryForm from '@/components/Forms/category'
import { mapState } from 'vuex'
export default {
  components: {
    FormBreadcrumb,
    CategoryForm
  },
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') }
      },
      fileList: [],
      routes: [{ path: '/admin/category', name: 'list' }]
    }
  },
  computed: {
    ...mapState({
      state: state => state.category
    })
  },
  beforeDestroy() {
    this.$store.dispatch('category/resetState')
  },
  methods: {
    onSubmit() {
      this.$refs.categoryForm.validate(valid => {
        if (valid) return this.$store.dispatch('category/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('category/update', { field, value })
    },
    handleImage(file, fileList) {
      this.fileList = [file]
      this.$store.commit('category/update', {
        field: 'image',
        value: file.raw
      })
    }
  }
}
</script>
