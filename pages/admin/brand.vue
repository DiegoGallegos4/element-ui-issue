<template>
  <div class="form-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">
        {{ $t('admin') }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        {{ $t('brands') }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('brand') }}
    </h3>
    <div class="form-wrapper">
      <el-form ref="form" class="form-elements" :rules="rules" :model="state.frm">
        <el-form-item label="Nombre" prop="name">
          <el-input v-validate="'required'" :value="state.name" @input="update('name', $event)" />
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
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') }
      }
    }
  },
  computed: {
    ...mapState({
      state: state => state.brand
    })
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) return this.$store.dispatch('brand/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('brand/update', { field, value })
    }
  }
}
</script>
