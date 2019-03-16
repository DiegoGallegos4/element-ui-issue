<template>
  <collection-table
    name="category"
    link="/admin/category"
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
      columns: [{ label: 'category', name: 'name' }]
    }
  },
  computed: {
    ...mapState({
      state: state => state.category
    })
  },
  async fetch({ store }) {
    await store.dispatch('category/fetch')
  }
}
</script>
