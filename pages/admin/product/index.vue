<template>
  <div class="form-container">
    <form-breadcrumb current-page="product" />
    <h3 class="form-title">
      {{ $t('new_m') }} {{ $t('product') }}
    </h3>

    <product-form
      ref="productForm"
      :add-price="addPrice"
      :collections="collections"
      :frm="state.frm"
      :frm-price="state.frmPrice"
      :loading="state.loading"
      :rules="rules"
      :handle-image="handleImage"
      :on-submit="onSubmit"
      :update="update"
      :update-price="updatePrice"
    />
  </div>
</template>

<script>
import FormBreadcrumb from '@/components/Forms/breadcrumb'
import ProductForm from '@/components/Forms/product'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    FormBreadcrumb,
    ProductForm
  },
  async fetch({ store }) {
    await store.dispatch('brand/fetch')
    await store.dispatch('category/fetch')
    await store.dispatch('supermarket/fetch')
    await store.dispatch('unit/fetch')
  },
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') }
      },
      collections: {
        brands: this.$store.state.brand.collection,
        categories: this.$store.state.category.collection,
        supermarkets: this.$store.state.supermarket.collection,
        units: this.$store.state.unit.collection
      }
    }
  },
  computed: {
    ...mapState({
      state: state => state.product
    })
  },
  methods: {
    ...mapActions({
      addPrice: 'product/addPrice'
    }),
    onSubmit() {
      this.$refs.productForm.validate(valid => {
        if (valid) return this.$store.dispatch('product/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('product/update', { field, value })
    },
    updatePrice(field, value) {
      this.$store.commit('product/updatePrice', { field, value })
    },
    handleImage(response, file, fileList) {
      this.$store.commit('product/update', {
        field: 'images',
        value: [file.raw]
      })
    }
  }
}
</script>
