<template>
  <brand-form-page />
</template>

<script>
import BrandFormPage from '@/components/Pages/brand_form'
export default {
  components: {
    BrandFormPage
  },
  async fetch({ store, params }) {
    await store.dispatch('brand/fetchRecord', params.id)
  }
}
</script>
