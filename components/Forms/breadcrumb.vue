<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin' }">
      {{ $t('admin') }}
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
    }
  }
}
</script>
