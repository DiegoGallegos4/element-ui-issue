<template>
  <category-form-page />
</template>

<script>
import CategoryFormPage from '@/components/Pages/category_form'
export default {
  components: {
    CategoryFormPage
  },
  async fetch({ store, params }) {
    await store.dispatch('category/fetchRecord', params.id)
  }
}
</script>
