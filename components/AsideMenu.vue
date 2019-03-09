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
      <div v-for="(item, index) in menu" :key="index">
        <hr v-if="item.separator" />
        <el-menu-item index="index">
          <nuxt-link
            class="nuxt-link"
            :to="item.link"
            style="text-decoration: none"
          >
            <i :class="item.icon" />
            <span slot="title">
              {{ item.name }}
            </span>
          </nuxt-link>
        </el-menu-item>
      </div>
    </el-menu>
  </el-scrollbar>
</template>

<script>
const menu = [
  { name: 'Restaurantes', icon: 'el-icon-goods', link: '/' },
  { name: 'Tiendas', icon: 'el-icon-star-off', link: '/' },
  { name: 'Lista de Compras', icon: 'el-icon-tickets', link: '/' },
  { name: 'Admin', icon: 'el-icon-setting', link: '/admin', separator: true }
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

hr {
  border-bottom: none;
  border-top: 1px solid #e5edef;
}
</style>
