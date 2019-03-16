<template>
  <div class="submenu-wrapper">
    <hr v-if="item.separator" />

    <template v-if="item.type !== 'submenu'">
      <app-link :to="item.link">
        <el-menu-item index="index">
          <item :icon="item.icon" :title="item.name" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu index="index" v-else>
      <template slot="title">
        <item :icon="item.icon" :title="item.name" />
      </template>
      <app-link v-for="(subitem, subindex) in item.items" :to="subitem.link" :key="subindex">
        <el-menu-item index="subindex * 100">
            <span> {{ subitem.name }} </span>
        </el-menu-item>
      </app-link>
    </el-submenu>
  </div>
</template>

<script>
import AppLink from '@/components/Layout/Sidebar/Link'
import Item from '@/components/Layout/Sidebar/Item'
export default {
  name: 'SidebarItem',
  components: { AppLink, Item },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
