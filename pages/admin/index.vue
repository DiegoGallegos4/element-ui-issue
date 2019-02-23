<template>
  <div>
    <div class="tab-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in items" :key="item.name" :label="$t(item.name)" :name="item.name">
          <div :key="item.name">
            <el-row style="display:flex;margin: 5px 0px;">
              <span style="flex-grow:1" />
              <nuxt-link class="nuxt-link" :to="item.link">
                <el-button type="primary" plain>
                  + {{ $t(item.name) }}
                </el-button>
              </nuxt-link>
            </el-row>
            <el-table :data="$data[item.data]" border>
              <el-table-column v-for="column in item.columns" :key="column.name" :prop="column.name" :label="$t(column.label)" />
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, store }) {
    await store.dispatch('brand/fetch')
    await store.dispatch('category/fetch')
    await store.dispatch('supermarket/fetch')
    await store.dispatch('unit/fetch')

    return {
      units: store.state.unit.collection,
      categories: store.state.category.collection,
      brands: store.state.brand.collection,
      supermarkets: store.state.supermarket.collection
    }
  },
  data() {
    return {
      activeName: 'units',
      items: [
        {
          name: 'units',
          link: '/admin/unit',
          data: 'units',
          columns: [
            { label: 'unit', name: 'name' },
            { label: 'abbreviation', name: 'abbr' }
          ]
        },
        {
          name: 'categories',
          link: '/admin/category',
          data: 'categories',
          columns: [{ label: 'category', name: 'name' }]
        },
        {
          name: 'brands',
          link: '/admin/brand',
          data: 'brands',
          columns: [{ label: 'brand', name: 'name' }]
        },
        {
          name: 'supermarkets',
          link: '/admin/supermarket',
          data: 'supermarkets',
          columns: [{ label: 'supermarket', name: 'name' }]
        },
        { name: 'branches', link: '/admin/branch', data: 'units', columns: [] },
        { name: 'products', link: '/admin/product', data: 'units', columns: [] }
      ],
      units: []
    }
  },
  methods: {
    handleClick(tab, event) {}
  }
}
</script>
<style>
.tab-container {
  padding: 24px;
}
</style>
