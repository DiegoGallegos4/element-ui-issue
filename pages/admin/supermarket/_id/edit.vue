<template>
  <supermarket-form-page />
</template>

<script>
import SupermarketFormPage from '@/components/Pages/supermarket_form'
export default {
  components: {
    SupermarketFormPage
  },
  async fetch({ store, params }) {
    await store.dispatch('supermarket/fetchRecord', params.id)
  }
}
</script>
