<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(route, index) in routes" :key="index">
      <nuxt-link :to="route.path" class="nuxt-link" exact>
        {{ $t(route.name) }}
      </nuxt-link>
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      {{ $t(currentPage) }}
    </el-breadcrumb-item>
  </el-breadcrumb>  
</template>

<script>
export default {
  name: 'FormBreadcrumb',
  props: {
    currentPage: {
      type: String,
      default: ''
    },
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>
