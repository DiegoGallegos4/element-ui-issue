<template>
  <collection-table
    name="product"
    link="/admin/product"
    :collection="collection"
    :columns="columns"
  />
</template>

<script>
import CollectionTable from '@/components/Pages/collection_table'
export default {
  components: {
    CollectionTable
  },
  data() {
    return {
      columns: [{ label: 'product', name: 'name' }]
    }
  },
  async asyncData({ store }) {
    await store.dispatch('product/fetch')
    return {
      collection: store.state.product.collection
    }
  }
}
</script>
