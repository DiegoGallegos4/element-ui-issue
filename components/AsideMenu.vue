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
      <div v-for="(item, index) in menu" :key="index">
        <hr v-if="item.separator" />
        <el-menu-item index="index" v-if="item.type !== 'submenu'">
          <nuxt-link
            class="nuxt-link"
            slot="title"
            :to="item.link"
            style="text-decoration: none"
            exact
          >
            <i :class="item.icon" />
            <span>
              {{ item.name }}
            </span>
          </nuxt-link>
        </el-menu-item>
        <el-submenu index="index" v-else>
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item-group index="index">
            <el-menu-item
              v-for="(subitem, subindex) in item.items"
              :key="subindex"
              index="subindex * 100"
            >
              <nuxt-link
                class="nuxt-link"
                :to="subitem.link"
                style="text-decoration: none"
                exact
              >
                <span>{{ subitem.name }}</span>
              </nuxt-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: 'Tiendas', icon: 'el-icon-star-off', link: '/' },
        { name: 'Lista de Compras', icon: 'el-icon-tickets', link: '/' },
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
