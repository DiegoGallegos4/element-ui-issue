<template>
  <el-container>
    <login-modal />
    <el-header id="main-header">
      <page-header />
    </el-header>
    <el-container>
      <aside-menu />
      <main-container />
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from '~/components/AsideMenu.vue'
import MainContainer from '~/components/MainContainer.vue'
import PageHeader from '~/components/PageHeader.vue'
import LoginModal from '~/components/LoginModal.vue'

export default {
  components: {
    AsideMenu,
    MainContainer,
    PageHeader,
    LoginModal
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
</style>
