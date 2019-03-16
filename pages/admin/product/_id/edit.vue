<template>
  <product-form-page />
</template>

<script>
import ProductFormPage from '@/components/Pages/product_form'
export default {
  components: {
    ProductFormPage
  },
  async fetch({ store, params }) {
    await store.dispatch('product/fetchRecord', params.id)
    await store.dispatch('brand/fetch')
    await store.dispatch('category/fetch')
    await store.dispatch('supermarket/fetch')
    await store.dispatch('unit/fetch')
  }
}
</script>
