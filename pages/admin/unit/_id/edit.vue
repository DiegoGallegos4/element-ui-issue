<template>
  <unit-form-page />
</template>

<script>
import UnitFormPage from '@/components/Pages/unit_form'
export default {
  components: {
    UnitFormPage
  },
  async fetch({ store, params }) {
    await store.dispatch('unit/fetchRecord', params.id)
  }
}
</script>
