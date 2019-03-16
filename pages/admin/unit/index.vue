<template>
  <collection-table
    name="unit"
    link="/admin/unit"
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
        { label: 'unit', name: 'name' },
        { label: 'abbreviation', name: 'abbr' }
      ]
    }
  },
  computed: {
    ...mapState({
      state: state => state.unit
    })
  },
  async fetch({ store }) {
    await store.dispatch('unit/fetch')
  }
}
</script>
