<template>
  <el-main id="main-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <product-scrollbar />
    </el-scrollbar>
  </el-main>
</template>

<script>
import ProductScrollbar from '~/components/ProductScrollbar.vue'

export default {
  components: {
    ProductScrollbar
  }
}
</script>
<style>
/*#main-container {
  background-color: #f7f7f9;
}*/
</style>
