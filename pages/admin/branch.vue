<template>
  <div class="form-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">
        {{ $t('admin') }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        {{ $t('branches') }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('branch') }}
    </h3>
    <div class="form-wrapper">
      <el-form ref="form" class="form-elements" :rules="rules" :model="state.frm">
        <el-form-item label="Supermercados" prop="supermaket">
          <el-select filterable :value="state.frm.supermarket" style="display:block" @change="update('supermarket', $event)">
            <el-option 
              v-for="supermarket in supermarkets"
              :key="supermarket.id"
              :label="supermarket.name"
              :value="supermarket" 
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Direccion" prop="address">
          <el-input :value="state.frm.address" @input="update('address', $event)" />
        </el-form-item>
        <el-form-item>
          <el-time-select
            :value="state.frm.opening"
            :picker-options="{
              start: '00:00',
              step: '00:30',
              end: '24:00'
            }"
            placeholder="Apertura"
            @input="update('opening', $event)"
          />
          <el-time-select
            :value="state.frm.closing"
            :picker-options="{
              start: '00:00',
              step: '00:30',
              end: '24:00'
            }"
            placeholder="Cierre"
            @input="update('closing', $event)"
          />
        </el-form-item>
        <el-form-item label="Numero de telefono" prop="phone_number">
          <el-input :value="state.frm.phone_number" @input="update('phone_number', $event)" />
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
export default {
  async asyncData({ app, store }) {
    await store.dispatch('supermarket/fetch')

    return { supermarkets: store.state.supermarket.collection }
  },
  data() {
    return {
      rules: {
        supermarket: { required: true, message: this.$t('required') }
      }
    }
  },
  computed: {
    ...mapState({ state: state => state.branch })
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) return this.$store.dispatch('branch/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('branch/update', { field, value })
    }
  }
}
</script>
