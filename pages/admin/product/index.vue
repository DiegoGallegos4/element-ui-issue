<template>
  <collection-table
    name="product"
    link="/admin/product"
    :collection="state.collection"
    :columns="columns"
  />
</template>

<script>
import CollectionTable from '@/components/Pages/collection_table'
import { mapState } from 'vuex'
export default {
  components: {
    CollectionTable
  },
  data() {
    return {
      columns: [{ label: 'product', name: 'name' }]
    }
  },
  computed: {
    ...mapState({
      state: state => state.product
    })
  },
  async fetch({ store }) {
    await store.dispatch('product/fetch')
  }
}
</script>
