<template>
  <el-container>
    <login-modal />
    <el-header id="main-header">
      <page-header />
    </el-header>
    <el-container>
      <sidebar />
      <main-container>
        <nuxt />
      </main-container>
    </el-container>
  </el-container>
</template>

<script>
// import AsideMenu from '~/components/AsideMenu.vue'
import Sidebar from '~/components/Layout/Sidebar'
import MainContainer from '~/components/MainContainer.vue'
import PageHeader from '~/components/PageHeader.vue'
import LoginModal from '~/components/LoginModal.vue'

export default {
  components: {
    // AsideMenu,
    Sidebar,
    MainContainer,
    PageHeader,
    LoginModal
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.form-container h3 {
  font-weight: 400;
  color: #1f2f3d;
}
.form-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  margin: 10px 0px;
}

.form-wrapper .form-elements {
  padding: 24px;
}

.form-title {
  margin: 10px 0px;
}

.nuxt-link,
.nuxt-link:visited {
  color: #1f2f3d;
  text-decoration: none;
}
</style>
