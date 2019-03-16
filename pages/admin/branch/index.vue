<template>
  <collection-table
    name="branch"
    link="/admin/branch"
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
      columns: [
        { label: 'supermarket', name: 'supermarket.name' },
        { label: 'city', name: 'city' }
      ]
    }
  },
  async asyncData({ store }) {
    await store.dispatch('branch/fetch')
    return {
      collection: store.state.branch.collection
    }
  }
}
</script>
