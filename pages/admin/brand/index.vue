<template>
  <collection-table
    name="brand"
    link="/admin/brand"
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
      columns: [{ label: 'brand', name: 'name' }]
    }
  },
  async asyncData({ store }) {
    await store.dispatch('brand/fetch')
    return {
      collection: store.state.brand.collection
    }
  }
}
</script>
