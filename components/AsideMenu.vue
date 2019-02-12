<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" style="min-width: 200px;">
    <el-menu 
      class="el-menu-vertical"
      :show-timeout="1000"
      default-active="2"
      :collapse="isCollapse"
      mode="vertical"
      :collapse-transition="true"
    >
      <el-menu-item v-for="(item, index) in menu" :key="index" index="index">
        <i :class="item.icon" />
        <span slot="title">
          {{ item.name }}
        </span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
const menu = [
  { name: 'Restaurantes', icon: 'el-icon-goods' },
  { name: 'Tiendas', icon: 'el-icon-star-off' },
  { name: 'Lista de Compras', icon: 'el-icon-tickets' }
]

export default {
  data() {
    return {
      menu
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      return null
    },
    handleClose(key, keyPath) {
      return null
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

.el-menu-vertical.el-menu--collapse {
  /*width: 10px !important;*/
}

.el-menu-vertical {
  height: 100vh !important;
}
</style>
