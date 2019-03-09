<template>
  <div class="form-container">
    <form-breadcrumb current-page="categories" />
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('category') }}
    </h3>

    <category-form 
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
      }
    }
  },
  computed: {
    ...mapState({
      state: state => state.category
    })
  },
  async fetch({ store, params }) {
    await store.dispatch('category/fetchRecord', params.id)
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
    handleImage(response, file, fileList) {
      this.$store.commit('category/update', {
        field: 'image',
        value: file.raw
      })
    }
  }
}
</script>
