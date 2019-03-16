<template>
  <collection-table
    name="supermarket"
    link="/admin/supermarket"
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
      columns: [{ label: 'supermarket', name: 'name' }]
    }
  },
  computed: {
    ...mapState({
      state: state => state.supermarket
    })
  },
  async fetch({ store }) {
    await store.dispatch('supermarket/fetch')
  }
}
</script>
