<template>
  <div>
    <div class="tab-container">
      <h3 class="form-title">{{ $t(name) }}</h3>
      <el-row style="display:flex;margin: 5px 0px;">
        <span style="flex-grow:1" />
        <nuxt-link class="nuxt-link" :to="link + '/new'">
          <el-button type="primary" plain> + {{ $t(name) }} </el-button>
        </nuxt-link>
      </el-row>
      <el-table :data="collection" border>
        <el-table-column
          v-for="column in columns"
          :key="column.name"
          :prop="column.name"
          :label="$t(column.label)"
        />
        <el-table-column fixed="right" width="120">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.row, link)"
            >
              Edit
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: () => ''
    },
    collection: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    handleEdit(row, link) {
      this.$router.push(`${link}/${row._id}/edit`)
    }
  }
}
</script>
<style>
.tab-container {
  padding: 24px;
}
</style>
