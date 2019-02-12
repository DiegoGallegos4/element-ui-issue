<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="6">
      <hamburger :toggle-click="toggle" :is-active="!isCollapse" class="hamburger-container" />
      <div class="hamburger-container">
        Kartz
      </div>
    </el-col>
    <el-col :span="12" align="middle">
      <el-autocomplete
        v-model="query"
        class="inline-input"
        :fetch-suggestions="querySearch"
        placeholder="Busca productos"
      >
        <i slot="suffix" class="el-icon-search el-input__icon" />
      </el-autocomplete>
    </el-col>
    <el-col :span="6" align="end">
      <div>
        <el-button v-if="!isAuthenticated" type="text" @click="toggleLogin()">
          Inicia Sesion
        </el-button>
        <el-button v-else type="text" @click="logout()">
          Salir
        </el-button>
        </span>
        <i class="el-icon-goods el-input__icon" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Hamburger from '@/components/MenuIcon'

export default {
  components: {
    Hamburger
  },
  data() {
    return {
      query: ''
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    },
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    ...mapMutations({
      toggle: 'toggle',
      toggleLogin: 'toggleLogin'
    }),
    querySearch() {},
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style>
.hamburger-container {
  line-height: 58px;
  height: 50px;
  float: left;
  padding: 0 10px;
}

.inline-input {
  width: 300px;
}
</style>
