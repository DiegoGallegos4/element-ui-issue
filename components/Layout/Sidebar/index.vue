<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" style="min-width: 200px;">
    <el-menu
      class="el-menu-vertical"
      mode="vertical"
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="$route.path"
      :show-timeout="1000"
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
            { name: 'Brands', link: '/admin/brand' },
            { name: 'Branches', link: '/admin/branch' },
            { name: 'Categories', link: '/admin/category' },
            { name: 'Supermarkets', link: '/admin/supermarket' },
            { name: 'Products', link: '/admin/product' },
            { name: 'Units', link: '/admin/unit' }
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
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100vh !important;
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
