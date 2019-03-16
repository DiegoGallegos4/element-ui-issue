<template>
  <div class="form-wrapper">
    <el-form ref="form" class="form-elements" :rules="rules" :model="frm">
      <el-form-item label="Nombre" prop="name">
        <el-input :value="frm.name" @input="update('name', $event)" />
      </el-form-item>
      <el-form-item label="Pais" prop="country">
        <el-select
          :value="countryCodes[frm.country]"
          style="display:block"
          @change="update('country', $event)"
        >
          <el-option
            v-for="iso2Code in Object.keys(countryCodes)"
            :key="iso2Code"
            :value="iso2Code"
          >
            {{ countryCodes[iso2Code] }}
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload
          ref="upload"
          accept="image/*"
          action="/"
          list-type="picture"
          :on-change="handleImage"
          :on-exceed="handleImage"
          :multiple="false"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button size="small" type="primary">
            Upload Logo
          </el-button>
          <div slot="tip" class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </el-upload>
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
import countryCodes from '~/common/countryCodes'
export default {
  name: 'SupermarketForm',
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
    fileList: {
      type: Array,
      default: () => []
    },
    handleImage: {
      type: Function,
      default: () => false
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
  data() {
    return {
      countryCodes
    }
  },
  methods: {
    validate(cb) {
      return this.$refs.form.validate(cb)
    }
  }
}
</script>
