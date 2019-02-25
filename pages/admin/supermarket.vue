<template>
  <div class="form-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">
        {{ $t('admin') }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        {{ $t('supermarkets') }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="form-title">
      {{ $t('new_m') }} {{ $t('supermarket') }}
    </h3>
    <div class="form-wrapper">
      <el-form ref="form" class="form-elements" :rules="rules" :model="state.frm">
        <el-form-item label="Nombre" prop="name">
          <el-input :value="state.frm.name" @input="update('name', $event)" />
        </el-form-item>
        <el-form-item label="Pais" prop="country">
          <el-select :value="state.frm.country" style="display:block" @change="update('country', $event)">
            <el-option v-for="iso2Code in Object.keys(countryCodes)" :key="iso2Code" :value="countryCodes[iso2Code]">
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
            :on-success="handleImage" 
            :limit="1"
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
          <el-button type="primary" :loading="state.loading" @click="onSubmit">
            {{ $t('submit') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import countryCodes from '~/common/countryCodes'

export default {
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') },
        country: { required: true, message: this.$t('required') }
      },
      countryCodes
    }
  },
  computed: {
    ...mapState({
      state: state => state.supermarket
    })
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) return this.$store.dispatch('supermarket/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('supermarket/update', { field, value })
    },
    handleImage(response, file, fileList) {
      this.$store.commit('supermarket/update', {
        field: 'logo',
        value: file.raw
      })
    }
  }
}
</script>
