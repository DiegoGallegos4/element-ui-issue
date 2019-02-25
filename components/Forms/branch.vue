<template>
  <div class="form-wrapper">
    <el-form ref="form" class="form-elements" :rules="rules" :model="frm">
      <el-form-item label="Supermercados" prop="supermaket">
        <el-select
          filterable
          :value="frm.supermarket && supermarkets.filter(s => s.id == frm.supermarket)[0].name"
          prop="supermarket"
          style="display:block"
          @change="update('supermarket', $event)"
        >
          <el-option v-for="supermarket in supermarkets" :key="supermarket.id" :value="supermarket.id">
            {{ supermarket.name }}
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-time-select
          :value="frm.opening"
          :picker-options="{
            start: '00:00',
            step: '00:30',
            end: '24:00'
          }"
          placeholder="Apertura"
          @input="update('opening', $event)"
        />
        <el-time-select
          :value="frm.closing"
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
        <el-input :value="frm.phone_number" @input="update('phone_number', $event)" />
      </el-form-item>
      <el-form-item>
        <div style="height: 400px">
          <no-ssr>
            <l-map
              style="height: 100%"
              :center="frm.location.coordinates"
              :zoom="8"
              @click="handleMapClick"
            >
              <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
              <l-marker :lat-lng.sync="latlng" />
            </l-map>
          </no-ssr>
        </div>
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
  name: 'BrandForm',
  props: {
    frm: {
      type: Object,
      default: () => ({
        location: {
          coordinates: [15.520638660195933, -88.02657544612886]
        }
      })
    },
    loading: {
      type: Boolean,
      default: false
    },
    handleMapClick: {
      type: Function,
      default: () => false
    },
    onSubmit: {
      type: Function,
      default: () => false
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    supermarkets: {
      type: Array,
      default: () => []
    },
    update: {
      type: Function,
      default: () => false
    }
  },
  computed: {
    latlng: function() {
      return {
        lat: this.frm.location.coordinates[0],
        lng: this.frm.location.coordinates[1]
      }
    }
  },
  methods: {
    validate(cb) {
      return this.$refs.form.validate(cb)
    }
  }
}
</script>
