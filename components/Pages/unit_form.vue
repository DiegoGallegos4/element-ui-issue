<template>
  <div class="form-container">
    <form-breadcrumb current-page="units" :routes="routes" />
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
      },
      routes: [{ path: '/admin/unit', name: 'list' }]
    }
  },
  computed: {
    ...mapState({
      state: state => state.unit
    })
  },
  beforeDestroy() {
    this.$store.dispatch('unit/resetState')
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
