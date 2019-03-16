<template>
  <collection-table
    name="branch"
    link="/admin/branch"
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
      columns: [
        { label: 'supermarket', name: 'supermarket.name' },
        { label: 'city', name: 'city' }
      ]
    }
  },
  computed: {
    ...mapState({
      state: state => state.branch
    })
  },
  async fetch({ store }) {
    await store.dispatch('branch/fetch')
  }
}
</script>
