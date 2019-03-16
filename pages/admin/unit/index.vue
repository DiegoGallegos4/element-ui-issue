<template>
  <collection-table
    name="unit"
    link="/admin/unit"
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
        { label: 'unit', name: 'name' },
        { label: 'abbreviation', name: 'abbr' }
      ]
    }
  },
  async asyncData({ store }) {
    await store.dispatch('unit/fetch')
    return {
      collection: store.state.unit.collection
    }
  }
}
</script>
