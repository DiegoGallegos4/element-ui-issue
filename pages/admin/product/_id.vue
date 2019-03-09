<template>
  <div class="form-container">
    <form-breadcrumb current-page="product" />
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('product') }}
    </h3>

    <product-form
      ref="productForm"
      :brands="brands"
      :categories="categories"
      :frm="state.frm"
      :loading="state.loading"
      :rules="rules"
      :handle-image="handleImage"
      :on-submit="onSubmit"
      :units="units"
      :update="update"
    />
  </div>
</template>

<script>
import FormBreadcrumb from '@/components/Forms/breadcrumb'
import ProductForm from '@/components/Forms/product'
import { mapState } from 'vuex'
export default {
  components: {
    FormBreadcrumb,
    ProductForm
  },
  async asyncData({ store, params }) {
    await store.dispatch('product/fetchRecord', params.id)
    await store.dispatch('brand/fetch')
    await store.dispatch('category/fetch')
    await store.dispatch('unit/fetch')

    return {
      brands: store.state.brand.collection,
      categories: store.state.category.collection,
      units: store.state.unit.collection
    }
  },
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') }
      }
    }
  },
  computed: {
    ...mapState({
      state: state => state.product
    })
  },
  methods: {
    onSubmit() {
      this.$refs.productForm.validate(valid => {
        if (valid) return this.$store.dispatch('product/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('product/update', { field, value })
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
