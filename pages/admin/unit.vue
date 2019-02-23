<template>
  <div class="form-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">
        Admin
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        Units
      </el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="form-title">
      Create a new unit
    </h3>
    <div class="form-wrapper">
      <el-form ref="form" class="form-elements">
        <el-form-item label="Nombre">
          <el-input :value="state.name" @input="update('name', $event)" />
        </el-form-item>
        <el-form-item label="Abreviatura">
          <el-input :value="state.abbr" @input="update('abbr', $event)" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="state.loading" @click="onSubmit">
            Submit
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      state: state => state.unit
    })
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('unit/submit')
    },
    update(field, value) {
      this.$store.commit('unit/update', { field, value })
    }
  }
}
</script>
