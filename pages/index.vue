<template>
  <product-scrollbar />
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
/**:not(path):not(g) {
  color: hsla(210, 100%, 100%, 0.9) !important;
  background: hsla(210, 100%, 50%, 0.5) !important;
  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

  box-shadow: none !important;
}*/

#main-header {
  border-bottom: solid 1px #e6e6e6;
}


.nuxt-link.nuxt-link-exact-active.nuxt-link-active {
  color: #409eff;
}

</style>
