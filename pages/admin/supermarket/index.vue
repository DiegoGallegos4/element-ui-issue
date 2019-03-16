<template>
  <collection-table
    name="supermarket"
    link="/admin/supermarket"
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
      columns: [{ label: 'supermarket', name: 'name' }]
    }
  },
  async asyncData({ store }) {
    await store.dispatch('supermarket/fetch')
    return {
      collection: store.state.supermarket.collection
    }
  }
}
</script>
