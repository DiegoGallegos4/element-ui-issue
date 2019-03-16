<template>
  <collection-table
    name="category"
    link="/admin/category"
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
      columns: [{ label: 'category', name: 'name' }]
    }
  },
  async asyncData({ store }) {
    await store.dispatch('category/fetch')
    return {
      collection: store.state.category.collection
    }
  }
}
</script>
