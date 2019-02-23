<template>
  <div>
    <div class="tab-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in items" :key="item.name" :label="item.name" :name="item.name">
          <div :key="item.name">
            <el-row style="display:flex;margin: 5px 0px;">
              <span style="flex-grow:1" />
              <nuxt-link class="nuxt-link" :to="item.link">
                <el-button type="primary" plain>
                  + {{ item.name }}
                </el-button>
              </nuxt-link>
            </el-row>
            <el-table :data="$data[item.data]" border>
              <el-table-column v-for="column in item.columns" :key="column.name" :prop="column.name" :label="column.label" />
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app }) {
    const units = await app.$axios.get('/units')
    console.log(units.data.result)
    return { units: units.data.result }
  },
  data() {
    return {
      activeName: 'Units',
      items: [
        {
          name: 'Units',
          link: '/admin/unit',
          data: 'units',
          columns: [
            { label: 'Unit', name: 'name' },
            { label: 'Short Name', name: 'abbr' }
          ]
        },
        { name: 'Branches', link: '/admin/branch', data: 'units', columns: [] },
        { name: 'Brands', link: '/admin/brand', data: 'units', columns: [] },
        {
          name: 'Supermarkets',
          link: '/admin/supermarket',
          data: 'units',
          columns: []
        },
        {
          name: 'Categories',
          link: '/admin/category',
          data: 'units',
          columns: []
        },
        { name: 'Products', link: '/admin/product', data: 'units', columns: [] }
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
