<template>
  <div class="form-container">
    <form-breadcrumb current-page="units" />
    <h3 class="form-title">
      {{ $t('new') }} {{ $t('unit') }}
    </h3>
    <unit-form 
      ref="unitForm"
      :frm="state.frm"
      :loading="state.loading"
      :rules="rules"
      :on-submit="onSubmit"
      :update="update"
    /> 
  </div>
</template>

<script>
import FormBreadcrumb from '@/components/Forms/breadcrumb'
import UnitForm from '@/components/Forms/unit'
import { mapState } from 'vuex'
export default {
  components: {
    FormBreadcrumb,
    UnitForm
  },
  data() {
    return {
      rules: {
        name: { required: true, message: this.$t('required') },
        abbr: { required: true, message: this.$t('required') }
      }
    }
  },
  computed: {
    ...mapState({
      state: state => state.unit
    })
  },
  async fetch({ store, params }) {
    await store.dispatch('unit/fetchRecord', params.id)
  },
  methods: {
    onSubmit() {
      this.$refs.unitForm.validate(valid => {
        if (valid) return this.$store.dispatch('unit/submit')
        return false
      })
    },
    update(field, value) {
      this.$store.commit('unit/update', { field, value })
    }
  }
}
</script>
