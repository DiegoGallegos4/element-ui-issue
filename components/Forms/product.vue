<template>
  <div class="form-wrapper">
    <el-form
      ref="form"
      class="form-elements"
      :rules="rules"
      :model="frm"
      label-width="80px"
      size="small"
    >
      <el-row>
        <el-col :span="12" style="padding:1rem">
          <h4 style="margin:1rem 0rem">
            General Info
          </h4>
          <el-form-item label="Nombre" prop="name">
            <el-input :value="frm.name" @input="update('name', $event)" />
          </el-form-item>
          <el-form-item label="Descripcion" prop="description">
            <el-input
              :value="frm.description"
              @input="update('description', $event)"
            />
          </el-form-item>
          <el-form-item label="Unidades" prop="unit">
            <el-select
              filterable
              style="width:100%"
              :value="currentUnit"
              prop="unit"
              @change="update('unit', $event)"
            >
              <el-option
                v-for="unit in collections.units"
                :key="unit._id"
                :value="unit._id"
              >
                {{ unit.name }}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Categoria" prop="category">
            <el-select
              filterable
              style="width:100%"
              :value="currentCategory"
              prop="category"
              @change="update('category', $event)"
            >
              <el-option
                v-for="category in collections.categories"
                :key="category._id"
                :value="category._id"
              >
                {{ category.name }}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Marca" prop="brand">
            <el-select
              filterable
              style="width:100%"
              :value="currentBrand"
              prop="brand"
              @change="update('brand', $event)"
            >
              <el-option
                v-for="brand in collections.brands"
                :key="brand._id"
                :value="brand._id"
              >
                {{ brand.name }}
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
                Upload Image
              </el-button>
              <div slot="tip" class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12" style="padding:1rem">
          <h4 style="margin:1rem 0rem">
            Price Info
          </h4>
          <el-form-item prop="supermaket" label-width="0">
            <el-select
              filterable
              :value="currentSupermarket"
              prop="supermarket"
              placeholder="Supermercado"
              style="display:block"
              @change="updatePrice('supermarket', $event)"
            >
              <el-option
                v-for="supermarket in collections.supermarkets"
                :key="supermarket.id"
                :value="supermarket.id"
              >
                {{ supermarket.name }}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label-width="0">
            <el-col :span="10">
              <el-select
                :value="currencyCodes[frmPrice.currency]"
                style="display:block"
                placeholder="Moneda"
                @change="updatePrice('currency', $event)"
              >
                <el-option
                  v-for="currency in Object.keys(currencyCodes)"
                  :key="currency"
                  :value="currency"
                >
                  {{ currencyCodes[currency] }}
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="10" style="padding-left:1rem">
              <el-input-number
                size="small"
                :precision="2"
                :step="0.1"
                :max="1000000"
                :value="frmPrice.price"
                @change="updatePrice('price', $event)"
              />
            </el-col>
            <el-col :span="4">
              <el-button
                type="success"
                icon="el-icon-plus"
                size="mini"
                @click="addPrice"
              />
            </el-col>
          </el-form-item>
          <h4 style="margin:1rem 0rem">
            Prices
          </h4>
          <el-table :data="prices" style="width: 100%">
            <el-table-column prop="supermarket" label="Supermaket" />
            <el-table-column prop="currency" label="Currency" />
            <el-table-column prop="price" label="Price" />
          </el-table>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="onSubmit">
          {{ $t('submit') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import currencyCodes from '~/common/currencyCodes'
export default {
  name: 'ProductForm',
  props: {
    addPrice: {
      type: Function,
      default: () => false
    },
    collections: {
      type: Object,
      default: () => ({})
    },
    frm: {
      type: Object,
      default: () => ({})
    },
    frmPrice: {
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
    },
    updatePrice: {
      type: Function,
      default: () => false
    }
  },
  data() {
    return {
      currencyCodes
    }
  },
  computed: {
    prices: {
      get() {
        return this.frm.prices.map(price => ({
          ...price,
          supermarket: this.collections.supermarkets.filter(
            sm => sm._id === price.supermarket
          )[0].name
        }))
      }
    },
    currentSupermarket: {
      get() {
        if (this.collections.supermarkets.length && this.frmPrice.supermarket) {
          return this.collections.supermarkets.filter(
            s => s.id === this.frmPrice.supermarket
          )[0].name
        }
        return this.frmPrice.supermarket
      },
      set() {}
    },
    currentUnit: {
      get() {
        console.log(this.collections.units, this.frm.unit)
        if (this.collections.units.length && this.frm.unit) {
          return this.collections.units.filter(s => s.id === this.frm.unit)[0]
            .name
        }
        return this.frm.unit
      },
      set() {}
    },
    currentCategory: {
      get() {
        if (this.collections.categories.length && this.frm.category) {
          return this.collections.categories.filter(
            s => s.id === this.frm.category
          )[0].name
        }
        return this.frm.category
      },
      set() {}
    },
    currentBrand: {
      get() {
        if (this.collections.brands.length && this.frm.brand) {
          return this.collections.brands.filter(s => s.id === this.frm.brand)[0]
            .name
        }
        return this.frm.brand
      },
      set() {}
    }
  },
  methods: {
    validate(cb) {
      return this.$refs.form.validate(cb)
    }
  }
}
</script>
