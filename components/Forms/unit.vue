<template>
  <div class="form-wrapper">
    <el-form ref="form" class="form-elements" :rules="rules" :model="frm">
      <el-form-item label="Nombre" prop="name">
        <el-input :value="frm.name" @input="update('name', $event)" />
      </el-form-item>
      <el-form-item label="Abreviatura" prop="abbr">
        <el-input :value="frm.abbr" @input="update('abbr', $event)" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="onSubmit">
          {{ $t('submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UnitForm',
  props: {
    frm: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    onSubmit: {
      type: Function,
      default: () => false
    },
    update: {
      type: Function,
      default: () => false
    }
  },
  methods: {
    validate(cb) {
      return this.$refs.form.validate(cb)
    }
  }
}
</script>
