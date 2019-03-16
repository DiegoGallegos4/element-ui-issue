<template>
  <collection-table
    name="brand"
    link="/admin/brand"
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
      columns: [{ label: 'brand', name: 'name' }]
    }
  },
  computed: {
    ...mapState({
      state: state => state.brand
    })
  },
  async fetch({ store }) {
    await store.dispatch('brand/fetch')
  }
}
</script>
