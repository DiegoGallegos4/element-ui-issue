<template>
  <el-scrollbar class="sidebar-menu" wrap-class="scrollbar-wrapper">
    <el-menu
      class="el-menu-vertical"
      mode="vertical"
      :collapse="isCollapse"
      :collapse-transition="true"
      :default-active="$route.path"
    >
      <sidebar-item v-for="(item, index) in menu" :key="index" :item="item" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from '@/components/Layout/Sidebar/SidebarItem'

export default {
  components: { SidebarItem },
  data() {
    return {
      menu: [
        { name: 'Tiendas', icon: 'el-icon-star-off', link: '/' },
        { name: 'Lista de Compras', icon: 'el-icon-tickets', link: '/x' },
        {
          name: 'Admin',
          icon: 'el-icon-setting',
          type: 'submenu',
          separator: true,
          items: [
            { name: 'brands', link: '/admin/brand' },
            { name: 'branches', link: '/admin/branch' },
            { name: 'categories', link: '/admin/category' },
            { name: 'supermarkets', link: '/admin/supermarket' },
            { name: 'products', link: '/admin/product' },
            { name: 'units', link: '/admin/unit' }
          ]
        }
      ]
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style>
.sidebar-menu {
  position: absolute;
  z-index: 1000 !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100vh !important;
}

.el-menu-vertical.el-menu--collapse {
  visibility: hidden;
}

.el-menu--collapse > .submenu-wrapper .el-submenu__icon-arrow,
.el-menu--collapse > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
.el-menu--collapse > .submenu-wrapper span,
.el-menu--collapse > .el-submenu > .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

.nuxt-link-exact-active .el-menu-item {
  color: #409eff;
}

:not(.nuxt-link-exact-active) > li.el-menu-item {
  color: black;
}

.el-menu--collapse > .submenu-wrapper .is-active {
  color: black !important;
}

.el-menu--collapse > .submenu-wrapper [class^='el-icon-'],
.el-menu--collapse > .el-submenu > .el-submenu__title [class^='el-icon-'] {
  margin: 0;
  vertical-align: middle;
  width: 24px;
  text-align: center;
}

.el-menu-vertical {
  height: 100vh !important;
}

hr {
  border-bottom: none;
  border-top: 1px solid #e5edef;
}
</style>
