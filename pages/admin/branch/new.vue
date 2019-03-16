<template>
  <branch-form-page />
</template>

<script>
import BranchFormPage from '@/components/Pages/branch_form'
export default {
  components: {
    BranchFormPage
  },
  async asyncData({ store, params }) {
    await store.dispatch('supermarket/fetch')
    return { supermarkets: store.state.supermarket.collection }
  }
}
</script>
